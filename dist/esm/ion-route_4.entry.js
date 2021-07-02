import { r as registerInstance, e as createEvent, i as getElement, h, H as Host } from './index-7a8b7a1c.js';
import { c as componentOnReady, n as debounce } from './helpers-6b411283.js';
import { b as getIonMode } from './ionic-global-366f1c10.js';
import { o as openURL, c as createColorClasses } from './theme-0269729a.js';

const Route = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionRouteDataChanged = createEvent(this, "ionRouteDataChanged", 7);
    /**
     * Relative path that needs to match in order for this route to apply.
     *
     * Accepts paths similar to expressjs so that you can define parameters
     * in the url /foo/:bar where bar would be available in incoming props.
     */
    this.url = '';
  }
  onUpdate(newValue) {
    this.ionRouteDataChanged.emit(newValue);
  }
  onComponentProps(newValue, oldValue) {
    if (newValue === oldValue) {
      return;
    }
    const keys1 = newValue ? Object.keys(newValue) : [];
    const keys2 = oldValue ? Object.keys(oldValue) : [];
    if (keys1.length !== keys2.length) {
      this.onUpdate(newValue);
      return;
    }
    for (const key of keys1) {
      if (newValue[key] !== oldValue[key]) {
        this.onUpdate(newValue);
        return;
      }
    }
  }
  connectedCallback() {
    this.ionRouteDataChanged.emit();
  }
  static get watchers() { return {
    "url": ["onUpdate"],
    "component": ["onUpdate"],
    "componentProps": ["onComponentProps"]
  }; }
};

const RouteRedirect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionRouteRedirectChanged = createEvent(this, "ionRouteRedirectChanged", 7);
  }
  propDidChange() {
    this.ionRouteRedirectChanged.emit();
  }
  connectedCallback() {
    this.ionRouteRedirectChanged.emit();
  }
  static get watchers() { return {
    "from": ["propDidChange"],
    "to": ["propDidChange"]
  }; }
};

const ROUTER_INTENT_NONE = 'root';
const ROUTER_INTENT_FORWARD = 'forward';
const ROUTER_INTENT_BACK = 'back';

const generatePath = (segments) => {
  const path = segments
    .filter(s => s.length > 0)
    .join('/');
  return '/' + path;
};
const chainToPath = (chain) => {
  const path = [];
  for (const route of chain) {
    for (const segment of route.path) {
      if (segment[0] === ':') {
        const param = route.params && route.params[segment.slice(1)];
        if (!param) {
          return null;
        }
        path.push(param);
      }
      else if (segment !== '') {
        path.push(segment);
      }
    }
  }
  return path;
};
const writePath = (history, root, useHash, path, direction, state, queryString) => {
  let url = generatePath([
    ...parsePath(root),
    ...path
  ]);
  if (useHash) {
    url = '#' + url;
  }
  if (queryString !== undefined) {
    url = url + '?' + queryString;
  }
  if (direction === ROUTER_INTENT_FORWARD) {
    history.pushState(state, '', url);
  }
  else {
    history.replaceState(state, '', url);
  }
};
const removePrefix = (prefix, path) => {
  if (prefix.length > path.length) {
    return null;
  }
  if (prefix.length <= 1 && prefix[0] === '') {
    return path;
  }
  for (let i = 0; i < prefix.length; i++) {
    if (prefix[i].length > 0 && prefix[i] !== path[i]) {
      return null;
    }
  }
  if (path.length === prefix.length) {
    return [''];
  }
  return path.slice(prefix.length);
};
const readPath = (loc, root, useHash) => {
  let pathname = loc.pathname;
  if (useHash) {
    const hash = loc.hash;
    pathname = (hash[0] === '#')
      ? hash.slice(1)
      : '';
  }
  const prefix = parsePath(root);
  const path = parsePath(pathname);
  return removePrefix(prefix, path);
};
const parsePath = (path) => {
  if (path == null) {
    return [''];
  }
  const removeQueryString = path.split('?')[0];
  const segments = removeQueryString.split('/')
    .map(s => s.trim())
    .filter(s => s.length > 0);
  if (segments.length === 0) {
    return [''];
  }
  else {
    return segments;
  }
};

const printRoutes = (routes) => {
  console.group(`[ion-core] ROUTES[${routes.length}]`);
  for (const chain of routes) {
    const path = [];
    chain.forEach(r => path.push(...r.path));
    const ids = chain.map(r => r.id);
    console.debug(`%c ${generatePath(path)}`, 'font-weight: bold; padding-left: 20px', '=>\t', `(${ids.join(', ')})`);
  }
  console.groupEnd();
};
const printRedirects = (redirects) => {
  console.group(`[ion-core] REDIRECTS[${redirects.length}]`);
  for (const redirect of redirects) {
    if (redirect.to) {
      console.debug('FROM: ', `$c ${generatePath(redirect.from)}`, 'font-weight: bold', ' TO: ', `$c ${generatePath(redirect.to)}`, 'font-weight: bold');
    }
  }
  console.groupEnd();
};

const writeNavState = async (root, chain, direction, index, changed = false, animation) => {
  try {
    // find next navigation outlet in the DOM
    const outlet = searchNavNode(root);
    // make sure we can continue interacting the DOM, otherwise abort
    if (index >= chain.length || !outlet) {
      return changed;
    }
    await new Promise(resolve => componentOnReady(outlet, resolve));
    const route = chain[index];
    const result = await outlet.setRouteId(route.id, route.params, direction, animation);
    // if the outlet changed the page, reset navigation to neutral (no direction)
    // this means nested outlets will not animate
    if (result.changed) {
      direction = ROUTER_INTENT_NONE;
      changed = true;
    }
    // recursively set nested outlets
    changed = await writeNavState(result.element, chain, direction, index + 1, changed, animation);
    // once all nested outlets are visible let's make the parent visible too,
    // using markVisible prevents flickering
    if (result.markVisible) {
      await result.markVisible();
    }
    return changed;
  }
  catch (e) {
    console.error(e);
    return false;
  }
};
const readNavState = async (root) => {
  const ids = [];
  let outlet;
  let node = root;
  // tslint:disable-next-line:no-constant-condition
  while (true) {
    outlet = searchNavNode(node);
    if (outlet) {
      const id = await outlet.getRouteId();
      if (id) {
        node = id.element;
        id.element = undefined;
        ids.push(id);
      }
      else {
        break;
      }
    }
    else {
      break;
    }
  }
  return { ids, outlet };
};
const waitUntilNavNode = () => {
  if (searchNavNode(document.body)) {
    return Promise.resolve();
  }
  return new Promise(resolve => {
    window.addEventListener('ionNavWillLoad', resolve, { once: true });
  });
};
const QUERY = ':not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet';
const searchNavNode = (root) => {
  if (!root) {
    return undefined;
  }
  if (root.matches(QUERY)) {
    return root;
  }
  const outlet = root.querySelector(QUERY);
  return outlet ? outlet : undefined;
};

const matchesRedirect = (input, route) => {
  const { from, to } = route;
  if (to === undefined) {
    return false;
  }
  if (from.length > input.length) {
    return false;
  }
  for (let i = 0; i < from.length; i++) {
    const expected = from[i];
    if (expected === '*') {
      return true;
    }
    if (expected !== input[i]) {
      return false;
    }
  }
  return from.length === input.length;
};
const routeRedirect = (path, routes) => {
  return routes.find(route => matchesRedirect(path, route));
};
const matchesIDs = (ids, chain) => {
  const len = Math.min(ids.length, chain.length);
  let i = 0;
  for (; i < len; i++) {
    if (ids[i].toLowerCase() !== chain[i].id) {
      break;
    }
  }
  return i;
};
const matchesPath = (inputPath, chain) => {
  const segments = new RouterSegments(inputPath);
  let matchesDefault = false;
  let allparams;
  for (let i = 0; i < chain.length; i++) {
    const path = chain[i].path;
    if (path[0] === '') {
      matchesDefault = true;
    }
    else {
      for (const segment of path) {
        const data = segments.next();
        // data param
        if (segment[0] === ':') {
          if (data === '') {
            return null;
          }
          allparams = allparams || [];
          const params = allparams[i] || (allparams[i] = {});
          params[segment.slice(1)] = data;
        }
        else if (data !== segment) {
          return null;
        }
      }
      matchesDefault = false;
    }
  }
  const matches = (matchesDefault)
    ? matchesDefault === (segments.next() === '')
    : true;
  if (!matches) {
    return null;
  }
  if (allparams) {
    return chain.map((route, i) => ({
      id: route.id,
      path: route.path,
      params: mergeParams(route.params, allparams[i]),
      beforeEnter: route.beforeEnter,
      beforeLeave: route.beforeLeave
    }));
  }
  return chain;
};
// Merges the route parameter objects.
// Returns undefined when both parameters are undefined.
const mergeParams = (a, b) => {
  return a || b ? Object.assign(Object.assign({}, a), b) : undefined;
};
const routerIDsToChain = (ids, chains) => {
  let match = null;
  let maxMatches = 0;
  const plainIDs = ids.map(i => i.id);
  for (const chain of chains) {
    const score = matchesIDs(plainIDs, chain);
    if (score > maxMatches) {
      match = chain;
      maxMatches = score;
    }
  }
  if (match) {
    return match.map((route, i) => ({
      id: route.id,
      path: route.path,
      params: mergeParams(route.params, ids[i] && ids[i].params)
    }));
  }
  return null;
};
const routerPathToChain = (path, chains) => {
  let match = null;
  let matches = 0;
  for (const chain of chains) {
    const matchedChain = matchesPath(path, chain);
    if (matchedChain !== null) {
      const score = computePriority(matchedChain);
      if (score > matches) {
        matches = score;
        match = matchedChain;
      }
    }
  }
  return match;
};
const computePriority = (chain) => {
  let score = 1;
  let level = 1;
  for (const route of chain) {
    for (const path of route.path) {
      if (path[0] === ':') {
        score += Math.pow(1, level);
      }
      else if (path !== '') {
        score += Math.pow(2, level);
      }
      level++;
    }
  }
  return score;
};
class RouterSegments {
  constructor(path) {
    this.path = path.slice();
  }
  next() {
    if (this.path.length > 0) {
      return this.path.shift();
    }
    return '';
  }
}

const readRedirects = (root) => {
  return Array.from(root.children)
    .filter(el => el.tagName === 'ION-ROUTE-REDIRECT')
    .map(el => {
    const to = readProp(el, 'to');
    return {
      from: parsePath(readProp(el, 'from')),
      to: to == null ? undefined : parsePath(to),
    };
  });
};
const readRoutes = (root) => {
  return flattenRouterTree(readRouteNodes(root));
};
const readRouteNodes = (root, node = root) => {
  return Array.from(node.children)
    .filter(el => el.tagName === 'ION-ROUTE' && el.component)
    .map(el => {
    const component = readProp(el, 'component');
    if (component == null) {
      throw new Error('component missing in ion-route');
    }
    return {
      path: parsePath(readProp(el, 'url')),
      id: component.toLowerCase(),
      params: el.componentProps,
      beforeLeave: el.beforeLeave,
      beforeEnter: el.beforeEnter,
      children: readRouteNodes(root, el)
    };
  });
};
const readProp = (el, prop) => {
  if (prop in el) {
    return el[prop];
  }
  if (el.hasAttribute(prop)) {
    return el.getAttribute(prop);
  }
  return null;
};
const flattenRouterTree = (nodes) => {
  const routes = [];
  for (const node of nodes) {
    flattenNode([], routes, node);
  }
  return routes;
};
const flattenNode = (chain, routes, node) => {
  const s = chain.slice();
  s.push({
    id: node.id,
    path: node.path,
    params: node.params,
    beforeLeave: node.beforeLeave,
    beforeEnter: node.beforeEnter
  });
  if (node.children.length === 0) {
    routes.push(s);
    return;
  }
  for (const sub of node.children) {
    flattenNode(s, routes, sub);
  }
};

const Router = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionRouteWillChange = createEvent(this, "ionRouteWillChange", 7);
    this.ionRouteDidChange = createEvent(this, "ionRouteDidChange", 7);
    this.previousPath = null;
    this.busy = false;
    this.state = 0;
    this.lastState = 0;
    /**
     * By default `ion-router` will match the routes at the root path ("/").
     * That can be changed when
     *
     */
    this.root = '/';
    /**
     * The router can work in two "modes":
     * - With hash: `/index.html#/path/to/page`
     * - Without hash: `/path/to/page`
     *
     * Using one or another might depend in the requirements of your app and/or where it's deployed.
     *
     * Usually "hash-less" navigation works better for SEO and it's more user friendly too, but it might
     * requires additional server-side configuration in order to properly work.
     *
     * On the otherside hash-navigation is much easier to deploy, it even works over the file protocol.
     *
     * By default, this property is `true`, change to `false` to allow hash-less URLs.
     */
    this.useHash = true;
  }
  async componentWillLoad() {
    console.debug('[ion-router] router will load');
    await waitUntilNavNode();
    console.debug('[ion-router] found nav');
    await this.onRoutesChanged();
  }
  componentDidLoad() {
    window.addEventListener('ionRouteRedirectChanged', debounce(this.onRedirectChanged.bind(this), 10));
    window.addEventListener('ionRouteDataChanged', debounce(this.onRoutesChanged.bind(this), 100));
  }
  async onPopState() {
    const direction = this.historyDirection();
    let path = this.getPath();
    const canProceed = await this.runGuards(path);
    if (canProceed !== true) {
      if (typeof canProceed === 'object') {
        path = parsePath(canProceed.redirect);
      }
      return false;
    }
    console.debug('[ion-router] URL changed -> update nav', path, direction);
    return this.writeNavStateRoot(path, direction);
  }
  onBackButton(ev) {
    ev.detail.register(0, processNextHandler => {
      this.back();
      processNextHandler();
    });
  }
  /** @internal */
  async canTransition() {
    const canProceed = await this.runGuards();
    if (canProceed !== true) {
      if (typeof canProceed === 'object') {
        return canProceed.redirect;
      }
      else {
        return false;
      }
    }
    return true;
  }
  /**
   * Navigate to the specified URL.
   *
   * @param url The url to navigate to.
   * @param direction The direction of the animation. Defaults to `"forward"`.
   */
  async push(url, direction = 'forward', animation) {
    if (url.startsWith('.')) {
      url = (new URL(url, window.location.href)).pathname;
    }
    console.debug('[ion-router] URL pushed -> updating nav', url, direction);
    let path = parsePath(url);
    let queryString = url.split('?')[1];
    const canProceed = await this.runGuards(path);
    if (canProceed !== true) {
      if (typeof canProceed === 'object') {
        path = parsePath(canProceed.redirect);
        queryString = canProceed.redirect.split('?')[1];
      }
      else {
        return false;
      }
    }
    this.setPath(path, direction, queryString);
    return this.writeNavStateRoot(path, direction, animation);
  }
  /**
   * Go back to previous page in the window.history.
   */
  back() {
    window.history.back();
    return Promise.resolve(this.waitPromise);
  }
  /** @internal */
  async printDebug() {
    console.debug('CURRENT PATH', this.getPath());
    console.debug('PREVIOUS PATH', this.previousPath);
    printRoutes(readRoutes(this.el));
    printRedirects(readRedirects(this.el));
  }
  /** @internal */
  async navChanged(direction) {
    if (this.busy) {
      console.warn('[ion-router] router is busy, navChanged was cancelled');
      return false;
    }
    const { ids, outlet } = await readNavState(window.document.body);
    const routes = readRoutes(this.el);
    const chain = routerIDsToChain(ids, routes);
    if (!chain) {
      console.warn('[ion-router] no matching URL for ', ids.map(i => i.id));
      return false;
    }
    const path = chainToPath(chain);
    if (!path) {
      console.warn('[ion-router] router could not match path because some required param is missing');
      return false;
    }
    console.debug('[ion-router] nav changed -> update URL', ids, path);
    this.setPath(path, direction);
    await this.safeWriteNavState(outlet, chain, ROUTER_INTENT_NONE, path, null, ids.length);
    return true;
  }
  onRedirectChanged() {
    const path = this.getPath();
    if (path && routeRedirect(path, readRedirects(this.el))) {
      this.writeNavStateRoot(path, ROUTER_INTENT_NONE);
    }
  }
  onRoutesChanged() {
    return this.writeNavStateRoot(this.getPath(), ROUTER_INTENT_NONE);
  }
  historyDirection() {
    const win = window;
    if (win.history.state === null) {
      this.state++;
      win.history.replaceState(this.state, win.document.title, win.document.location && win.document.location.href);
    }
    const state = win.history.state;
    const lastState = this.lastState;
    this.lastState = state;
    if (state > lastState || (state >= lastState && lastState > 0)) {
      return ROUTER_INTENT_FORWARD;
    }
    else if (state < lastState) {
      return ROUTER_INTENT_BACK;
    }
    else {
      return ROUTER_INTENT_NONE;
    }
  }
  async writeNavStateRoot(path, direction, animation) {
    if (!path) {
      console.error('[ion-router] URL is not part of the routing set');
      return false;
    }
    // lookup redirect rule
    const redirects = readRedirects(this.el);
    const redirect = routeRedirect(path, redirects);
    let redirectFrom = null;
    if (redirect) {
      this.setPath(redirect.to, direction);
      redirectFrom = redirect.from;
      path = redirect.to;
    }
    // lookup route chain
    const routes = readRoutes(this.el);
    const chain = routerPathToChain(path, routes);
    if (!chain) {
      console.error('[ion-router] the path does not match any route');
      return false;
    }
    // write DOM give
    return this.safeWriteNavState(document.body, chain, direction, path, redirectFrom, 0, animation);
  }
  async safeWriteNavState(node, chain, direction, path, redirectFrom, index = 0, animation) {
    const unlock = await this.lock();
    let changed = false;
    try {
      changed = await this.writeNavState(node, chain, direction, path, redirectFrom, index, animation);
    }
    catch (e) {
      console.error(e);
    }
    unlock();
    return changed;
  }
  async lock() {
    const p = this.waitPromise;
    let resolve;
    this.waitPromise = new Promise(r => resolve = r);
    if (p !== undefined) {
      await p;
    }
    return resolve;
  }
  async runGuards(to = this.getPath(), from = parsePath(this.previousPath)) {
    if (!to || !from) {
      return true;
    }
    const routes = readRoutes(this.el);
    const toChain = routerPathToChain(to, routes);
    const fromChain = routerPathToChain(from, routes);
    const beforeEnterHook = toChain && toChain[toChain.length - 1].beforeEnter;
    const beforeLeaveHook = fromChain && fromChain[fromChain.length - 1].beforeLeave;
    const canLeave = beforeLeaveHook ? await beforeLeaveHook() : true;
    if (canLeave === false || typeof canLeave === 'object') {
      return canLeave;
    }
    const canEnter = beforeEnterHook ? await beforeEnterHook() : true;
    if (canEnter === false || typeof canEnter === 'object') {
      return canEnter;
    }
    return true;
  }
  async writeNavState(node, chain, direction, path, redirectFrom, index = 0, animation) {
    if (this.busy) {
      console.warn('[ion-router] router is busy, transition was cancelled');
      return false;
    }
    this.busy = true;
    // generate route event and emit will change
    const routeEvent = this.routeChangeEvent(path, redirectFrom);
    if (routeEvent) {
      this.ionRouteWillChange.emit(routeEvent);
    }
    const changed = await writeNavState(node, chain, direction, index, false, animation);
    this.busy = false;
    if (changed) {
      console.debug('[ion-router] route changed', path);
    }
    // emit did change
    if (routeEvent) {
      this.ionRouteDidChange.emit(routeEvent);
    }
    return changed;
  }
  setPath(path, direction, queryString) {
    this.state++;
    writePath(window.history, this.root, this.useHash, path, direction, this.state, queryString);
  }
  getPath() {
    return readPath(window.location, this.root, this.useHash);
  }
  routeChangeEvent(path, redirectFromPath) {
    const from = this.previousPath;
    const to = generatePath(path);
    this.previousPath = to;
    if (to === from) {
      return null;
    }
    const redirectedFrom = redirectFromPath ? generatePath(redirectFromPath) : null;
    return {
      from,
      redirectedFrom,
      to,
    };
  }
  get el() { return getElement(this); }
};

const routerLinkCss = ":root{--med-color-brand-primary-darkest:#074953;--med-color-brand-primary-darkest-rgb:7, 73, 83;--med-color-brand-primary-dark:#137585;--med-color-brand-primary-dark-rgb:19, 117, 133;--med-color-brand-primary-medium:#3aa8b9;--med-color-brand-primary-medium-rgb:58, 168, 185;--med-color-brand-primary-light:#73d6e5;--med-color-brand-primary-light-rgb:115, 214, 229;--med-color-brand-primary-lightest:#b0ecf5;--med-color-brand-primary-lightest-rgb:176, 236, 245;--med-color-brand-primary-gradient:linear-gradient(to right, #3aa8b9, #137585);--med-color-aula-darkest:#075344;--med-color-aula-darkest-rgb:7, 83, 68;--med-color-aula-dark:#13856e;--med-color-aula-dark-rgb:19, 133, 110;--med-color-aula-medium:#3ab89f;--med-color-aula-medium-rgb:58, 184, 159;--med-color-aula-light:#73e5cf;--med-color-aula-light-rgb:115, 229, 207;--med-color-aula-lightest:#b0f5e7;--med-color-aula-lightest-rgb:176, 245, 231;--med-color-aula-gradient:linear-gradient(to right, #3ab89f, #13856e);--med-color-material-darkest:#552607;--med-color-material-darkest-rgb:85, 38, 7;--med-color-material-dark:#854013;--med-color-material-dark-rgb:133, 64, 19;--med-color-material-medium:#b86d3b;--med-color-material-medium-rgb:184, 109, 59;--med-color-material-light:#e5a173;--med-color-material-light-rgb:229, 161, 115;--med-color-material-lightest:#f5ccb0;--med-color-material-lightest-rgb:245, 204, 176;--med-color-material-gradient:linear-gradient(to right, #b86d3b, #854013);--med-color-questoes-darkest:#073953;--med-color-questoes-darkest-rgb:7, 57, 83;--med-color-questoes-dark:#135f85;--med-color-questoes-dark-rgb:19, 95, 133;--med-color-questoes-medium:#3a8eb8;--med-color-questoes-medium-rgb:58, 142, 184;--med-color-questoes-light:#73bfe5;--med-color-questoes-light-rgb:115, 191, 229;--med-color-questoes-lightest:#b0def5;--med-color-questoes-lightest-rgb:176, 222, 245;--med-color-questoes-gradient:linear-gradient(to right, #3a8eb8, #135f85);--med-color-revalida-darkest:#53071e;--med-color-revalida-darkest-rgb:83, 7, 30;--med-color-revalida-dark:#851335;--med-color-revalida-dark-rgb:133, 19, 53;--med-color-revalida-medium:#b83a60;--med-color-revalida-medium-rgb:184, 58, 96;--med-color-revalida-light:#e57395;--med-color-revalida-light-rgb:229, 115, 149;--med-color-revalida-lightest:#f5b0c5;--med-color-revalida-lightest-rgb:245, 176, 197;--med-color-revalida-gradient:linear-gradient(to right, #b83a60, #851335);--med-color-provaschecklist-darkest:#2b0755;--med-color-provaschecklist-darkest-rgb:43, 7, 85;--med-color-provaschecklist-dark:#481385;--med-color-provaschecklist-dark-rgb:72, 19, 133;--med-color-provaschecklist-medium:#753bb8;--med-color-provaschecklist-medium-rgb:117, 59, 184;--med-color-provaschecklist-light:#a873e5;--med-color-provaschecklist-light-rgb:168, 115, 229;--med-color-provaschecklist-lightest:#d1b2f5;--med-color-provaschecklist-lightest-rgb:209, 178, 245;--med-color-provaschecklist-gradient:linear-gradient(to right, #753bb8, #481385);--med-color-neutral-dark-prime:#141414;--med-color-neutral-dark-prime-rgb:20, 20, 20;--med-color-neutral-dark-40:#292929;--med-color-neutral-dark-40-rgb:41, 41, 41;--med-color-neutral-dark-30:#474747;--med-color-neutral-dark-30-rgb:71, 71, 71;--med-color-neutral-dark-20:#5c5c5c;--med-color-neutral-dark-20-rgb:92, 92, 92;--med-color-neutral-dark-10:#7a7a7a;--med-color-neutral-dark-10-rgb:122, 122, 122;--med-color-neutral-dark-gradient:linear-gradient(to right, #fafafa, #141414);--med-color-neutral-light-prime:#fafafa;--med-color-neutral-light-prime-rgb:250, 250, 250;--med-color-neutral-light-40:#ebebeb;--med-color-neutral-light-40-rgb:235, 235, 235;--med-color-neutral-light-30:#d6d6d6;--med-color-neutral-light-30-rgb:214, 214, 214;--med-color-neutral-light-20:#c2c2c2;--med-color-neutral-light-20-rgb:194, 194, 194;--med-color-neutral-light-10:#adadad;--med-color-neutral-light-10-rgb:173, 173, 173;--med-color-neutral-light-gradient:linear-gradient(to right, #141414, #fafafa);--med-color-feedback-warning-darkest:#504606;--med-color-feedback-warning-darkest-rgb:80, 70, 6;--med-color-feedback-warning-dark:#857513;--med-color-feedback-warning-dark-rgb:133, 117, 19;--med-color-feedback-warning-medium:#b8a73b;--med-color-feedback-warning-medium-rgb:184, 167, 59;--med-color-feedback-warning-light:#e5d673;--med-color-feedback-warning-light-rgb:229, 214, 115;--med-color-feedback-warning-lightest:#f5ecb0;--med-color-feedback-warning-lightest-rgb:245, 236, 176;--med-color-feedback-warning-gradient:linear-gradient(to right, #b8a73b, #857513);--med-color-feedback-error-darkest:#520c07;--med-color-feedback-error-darkest-rgb:82, 12, 7;--med-color-feedback-error-dark:#851a13;--med-color-feedback-error-dark-rgb:133, 26, 19;--med-color-feedback-error-medium:#b8433b;--med-color-feedback-error-medium-rgb:184, 67, 59;--med-color-feedback-error-light:#e57a73;--med-color-feedback-error-light-rgb:229, 122, 115;--med-color-feedback-error-lightest:#f5b5b0;--med-color-feedback-error-lightest-rgb:245, 181, 176;--med-color-feedback-error-gradient:linear-gradient(to right, #b8433b, #851a13);--med-color-feedback-success-darkest:#065010;--med-color-feedback-success-darkest-rgb:6, 80, 16;--med-color-feedback-success-dark:#138522;--med-color-feedback-success-dark-rgb:19, 133, 34;--med-color-feedback-success-medium:#3bb84b;--med-color-feedback-success-medium-rgb:59, 184, 75;--med-color-feedback-success-light:#73e582;--med-color-feedback-success-light-rgb:115, 229, 130;--med-color-feedback-success-lightest:#b0f5b9;--med-color-feedback-success-lightest-rgb:176, 245, 185;--med-color-feedback-success-gradient:linear-gradient(to right, #3bb84b, #138522)}:root{--med-font-family-brand:fsemeric;--med-font-family-base:fsemeric;--med-font-size-nano:10px;--med-font-size-xxxs:12px;--med-font-size-xxs:14px;--med-font-size-xs:16px;--med-font-size-sm:20px;--med-font-size-md:24px;--med-font-size-lg:32px;--med-font-size-xl:40px;--med-font-size-xxl:48px;--med-font-size-xxxl:64px;--med-font-size-huge:96px;--med-font-weight-thin:250;--med-font-weight-light:300;--med-font-weight-regular:400;--med-font-weight-medium:500;--med-font-weight-semibold:600;--med-font-weight-bold:700;--med-font-weight-extrabold:800;--med-font-weight-heavy:900;--med-line-height-compressed:100%;--med-line-height-double:100%}:root{--med-spacing-inset-nano:4px;--med-spacing-inset-xs:8px;--med-spacing-inset-sm:16px;--med-spacing-inset-base:24px;--med-spacing-inset-md:32px;--med-spacing-inset-md:32px;--med-spacing-inset-md:32px;--med-spacing-inset-xxl:64px;--med-spacing-squish-nano:4px 8px;--med-spacing-squish-xs:8px 16px;--med-spacing-squish-sm:8px 24px;--med-spacing-squish-base:8px 32px;--med-spacing-squish-md:16px 24px;--med-spacing-squish-lg:16px 32px;--med-spacing-squish-xl:24px 32px;--med-spacing-squish-xxl:32px 40px;--med-spacing-stretch-nano:8px 4px;--med-spacing-stretch-xs:16px 8px;--med-spacing-stretch-sm:24px 8px;--med-spacing-stretch-base:32px 8px;--med-spacing-stretch-md:24px 16px;--med-spacing-stretch-lg:32px 16px;--med-spacing-stretch-xl:32px 24px;--med-spacing-stretch-xxl:40px 32px;--med-spacing-inline-quark:2px;--med-spacing-inline-nano:4px;--med-spacing-inline-xxxs:8px;--med-spacing-inline-base:16px;--med-spacing-inline-xxs:24px;--med-spacing-inline-xs:32px;--med-spacing-inline-sm:40px;--med-spacing-inline-md:48px;--med-spacing-inline-lg:56px;--med-spacing-inline-xl:64px;--med-spacing-inline-xxl:72px;--med-spacing-inline-xxxl:80px;--med-spacing-inline-huge:120px;--med-spacing-inline-ultra:160px;--med-spacing-stack-quark:2px;--med-spacing-stack-nano:4px;--med-spacing-stack-xxxs:8px;--med-spacing-stack-base:16px;--med-spacing-stack-xxs:24px;--med-spacing-stack-xs:32px;--med-spacing-stack-sm:40px;--med-spacing-stack-md:48px;--med-spacing-stack-lg:56px;--med-spacing-stack-xl:64px;--med-spacing-stack-xxl:72px;--med-spacing-stack-xxxl:80px;--med-spacing-stack-huge:120px;--med-spacing-stack-ultra:160px}:root{--med-border-radius-none:0;--med-border-radius-quark:2px;--med-border-radius-nano:4px;--med-border-radius-sm:8px;--med-border-radius-md:16px;--med-border-radius-lg:24px;--med-border-radius-pill:31.25em;--med-border-radius-full:50%;--med-border-radius-speech-left-down:8px 8px 8px 0;--med-border-radius-speech-right-down:8px 8px 0 8px;--med-border-radius-speech-right-up:8px 0 8px 0px;--med-border-radius-speech-left-up:0 8px 8px 0px;--med-border-radius-table-down-sm:0 0 8px 8px;--med-border-radius-table-up-sm:8px 8px 0 0;--med-border-radius-table-down-md:16px 16px 0 0;--med-border-radius-table-up-md:0 0 16px 16px;--med-border-width-none:0;--med-border-width-quark:0.25px;--med-border-width-nano:0.5px;--med-border-width-hairline:1px;--med-border-width-thin:2px;--med-border-width-thick:4px;--med-border-width-bold:8px;--med-border-width-heavy:16px;--med-opacity-level-semiopaque:0.8;--med-opacity-level-intense:0.64;--med-opacity-level-half:0.5;--med-opacity-level-medium:0.32;--med-opacity-level-light:0.16;--med-opacity-level-semitransparent:0.08;--med-shadow-level-0:none;--med-shadow-level-1:0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 3px rgba(0, 0, 0, 0.2);--med-shadow-level-2:0 2px 4px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-3:0 3px 3px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-4:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-5:0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-6:0 8px 10px rgba(0, 0, 0, 0.14), 0 3px 14px rgba(0, 0, 0, 0.12), 0 4px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-7:0 9px 12px rgba(0, 0, 0, 0.14), 0 3px 16px rgba(0, 0, 0, 0.12), 0 5px 6px rgba(0, 0, 0, 0.2);--med-shadow-level-8:0 12px 17px rgba(0, 0, 0, 0.14), 0 5px 22px rgba(0, 0, 0, 0.12), 0 7px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-9:0 16px 24px rgba(0, 0, 0, 0.14), 0 6px 30px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-10:0 24px 38px rgba(0, 0, 0, 0.14), 0 9px 46px rgba(0, 0, 0, 0.12), 0 11px 15px rgba(0, 0, 0, 0.2)}:host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}";

const RouterLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * When using a router, it specifies the transition direction when navigating to
     * another page using `href`.
     */
    this.routerDirection = 'forward';
    this.onClick = (ev) => {
      openURL(this.href, ev, this.routerDirection, this.routerAnimation);
    };
  }
  render() {
    const mode = getIonMode(this);
    const attrs = {
      href: this.href,
      rel: this.rel,
      target: this.target
    };
    return (h(Host, { onClick: this.onClick, class: createColorClasses(this.color, {
        [mode]: true,
        'ion-activatable': true
      }) }, h("a", Object.assign({}, attrs), h("slot", null))));
  }
};
RouterLink.style = routerLinkCss;

export { Route as ion_route, RouteRedirect as ion_route_redirect, Router as ion_router, RouterLink as ion_router_link };
