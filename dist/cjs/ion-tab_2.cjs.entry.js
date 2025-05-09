/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const frameworkDelegate = require('./framework-delegate-742b6da2.js');
require('./helpers-a2cc981d.js');

const tabCss = ":host(.tab-hidden){display:none !important}";

const Tab = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.loaded = false;
    this.active = false;
    this.delegate = undefined;
    this.tab = undefined;
    this.component = undefined;
  }
  async componentWillLoad() {
    if (this.active) {
      await this.setActive();
    }
  }
  /** Set the active component for the tab */
  async setActive() {
    await this.prepareLazyLoaded();
    this.active = true;
  }
  changeActive(isActive) {
    if (isActive) {
      this.prepareLazyLoaded();
    }
  }
  prepareLazyLoaded() {
    if (!this.loaded && this.component != null) {
      this.loaded = true;
      try {
        return frameworkDelegate.attachComponent(this.delegate, this.el, this.component, ['ion-page']);
      }
      catch (e) {
        console.error(e);
      }
    }
    return Promise.resolve(undefined);
  }
  render() {
    const { tab, active, component } = this;
    return (index.h(index.Host, { role: "tabpanel", "aria-hidden": !active ? 'true' : null, "aria-labelledby": `tab-button-${tab}`, class: {
        'ion-page': component === undefined,
        'tab-hidden': !active
      } }, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "active": ["changeActive"]
  }; }
};
Tab.style = tabCss;

const tabsCss = ":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}";

const Tabs = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionNavWillLoad = index.createEvent(this, "ionNavWillLoad", 7);
    this.ionTabsWillChange = index.createEvent(this, "ionTabsWillChange", 3);
    this.ionTabsDidChange = index.createEvent(this, "ionTabsDidChange", 3);
    this.transitioning = false;
    this.onTabClicked = (ev) => {
      const { href, tab } = ev.detail;
      if (this.useRouter && href !== undefined) {
        const router = document.querySelector('ion-router');
        if (router) {
          router.push(href);
        }
      }
      else {
        this.select(tab);
      }
    };
    this.selectedTab = undefined;
    this.useRouter = false;
  }
  async componentWillLoad() {
    if (!this.useRouter) {
      this.useRouter = !!document.querySelector('ion-router') && !this.el.closest('[no-router]');
    }
    if (!this.useRouter) {
      const tabs = this.tabs;
      if (tabs.length > 0) {
        await this.select(tabs[0]);
      }
    }
    this.ionNavWillLoad.emit();
  }
  componentWillRender() {
    const tabBar = this.el.querySelector('ion-tab-bar');
    if (tabBar) {
      const tab = this.selectedTab ? this.selectedTab.tab : undefined;
      tabBar.selectedTab = tab;
    }
  }
  /**
   * Select a tab by the value of its `tab` property or an element reference.
   *
   * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
   */
  async select(tab) {
    const selectedTab = getTab(this.tabs, tab);
    if (!this.shouldSwitch(selectedTab)) {
      return false;
    }
    await this.setActive(selectedTab);
    await this.notifyRouter();
    this.tabSwitch();
    return true;
  }
  /**
   * Get a specific tab by the value of its `tab` property or an element reference.
   *
   * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
   */
  async getTab(tab) {
    return getTab(this.tabs, tab);
  }
  /**
   * Get the currently selected tab.
   */
  getSelected() {
    return Promise.resolve(this.selectedTab ? this.selectedTab.tab : undefined);
  }
  /** @internal */
  async setRouteId(id) {
    const selectedTab = getTab(this.tabs, id);
    if (!this.shouldSwitch(selectedTab)) {
      return { changed: false, element: this.selectedTab };
    }
    await this.setActive(selectedTab);
    return {
      changed: true,
      element: this.selectedTab,
      markVisible: () => this.tabSwitch(),
    };
  }
  /** @internal */
  async getRouteId() {
    const tabId = this.selectedTab && this.selectedTab.tab;
    return tabId !== undefined ? { id: tabId, element: this.selectedTab } : undefined;
  }
  setActive(selectedTab) {
    if (this.transitioning) {
      return Promise.reject('transitioning already happening');
    }
    this.transitioning = true;
    this.leavingTab = this.selectedTab;
    this.selectedTab = selectedTab;
    this.ionTabsWillChange.emit({ tab: selectedTab.tab });
    selectedTab.active = true;
    return Promise.resolve();
  }
  tabSwitch() {
    const selectedTab = this.selectedTab;
    const leavingTab = this.leavingTab;
    this.leavingTab = undefined;
    this.transitioning = false;
    if (!selectedTab) {
      return;
    }
    if (leavingTab !== selectedTab) {
      if (leavingTab) {
        leavingTab.active = false;
      }
      this.ionTabsDidChange.emit({ tab: selectedTab.tab });
    }
  }
  notifyRouter() {
    if (this.useRouter) {
      const router = document.querySelector('ion-router');
      if (router) {
        return router.navChanged('forward');
      }
    }
    return Promise.resolve(false);
  }
  shouldSwitch(selectedTab) {
    const leavingTab = this.selectedTab;
    return selectedTab !== undefined && selectedTab !== leavingTab && !this.transitioning;
  }
  get tabs() {
    return Array.from(this.el.querySelectorAll('ion-tab'));
  }
  render() {
    return (index.h(index.Host, { onIonTabButtonClick: this.onTabClicked }, index.h("slot", { name: "top" }), index.h("div", { class: "tabs-inner" }, index.h("slot", null)), index.h("slot", { name: "bottom" })));
  }
  get el() { return index.getElement(this); }
};
const getTab = (tabs, tab) => {
  const tabEl = (typeof tab === 'string')
    ? tabs.find(t => t.tab === tab)
    : tab;
  if (!tabEl) {
    console.error(`tab with id: "${tabEl}" does not exist`);
  }
  return tabEl;
};
Tabs.style = tabsCss;

exports.ion_tab = Tab;
exports.ion_tabs = Tabs;
