'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2a75be79.js');
const ionicGlobal = require('./ionic-global-450feda2.js');
const helpers = require('./helpers-7fea0dcc.js');
const theme = require('./theme-04439550.js');

let CACHED_MAP;
const getIconMap = () => {
  if (typeof window === 'undefined') {
    return new Map();
  }
  else {
    if (!CACHED_MAP) {
      const win = window;
      win.Ionicons = win.Ionicons || {};
      CACHED_MAP = win.Ionicons.map = win.Ionicons.map || new Map();
    }
    return CACHED_MAP;
  }
};
const getUrl = (i) => {
  let url = getSrc(i.src);
  if (url) {
    return url;
  }
  url = getName(i.name, i.icon, i.mode, i.ios, i.md);
  if (url) {
    return getNamedUrl(url);
  }
  if (i.icon) {
    url = getSrc(i.icon);
    if (url) {
      return url;
    }
    url = getSrc(i.icon[i.mode]);
    if (url) {
      return url;
    }
  }
  return null;
};
const getNamedUrl = (iconName) => {
  const url = getIconMap().get(iconName);
  if (url) {
    return url;
  }
  return index.getAssetPath(`svg/${iconName}.svg`);
};
const getName = (iconName, icon, mode, ios, md) => {
  // default to "md" if somehow the mode wasn't set
  mode = (mode && toLower(mode)) === 'ios' ? 'ios' : 'md';
  // if an icon was passed in using the ios or md attributes
  // set the iconName to whatever was passed in
  if (ios && mode === 'ios') {
    iconName = toLower(ios);
  }
  else if (md && mode === 'md') {
    iconName = toLower(md);
  }
  else {
    if (!iconName && icon && !isSrc(icon)) {
      iconName = icon;
    }
    if (isStr(iconName)) {
      iconName = toLower(iconName);
    }
  }
  if (!isStr(iconName) || iconName.trim() === '') {
    return null;
  }
  // only allow alpha characters and dash
  const invalidChars = iconName.replace(/[a-z]|-|\d/gi, '');
  if (invalidChars !== '') {
    return null;
  }
  return iconName;
};
const getSrc = (src) => {
  if (isStr(src)) {
    src = src.trim();
    if (isSrc(src)) {
      return src;
    }
  }
  return null;
};
const isSrc = (str) => str.length > 0 && /(\/|\.)/.test(str);
const isStr = (val) => typeof val === 'string';
const toLower = (val) => val.toLowerCase();

const iosMedButtonCss = ":host{--background:linear-gradient(to right, #3aa8b9, #137585);--background-hover:#3aa8b9;--background-disabled:#c2c2c2;--background-activated:#137585;--background-focused:#3aa8b9;--border-radius:31.25em;--border-width:0;--border-style:none;--border-color:initial;--border-color-hover:initial;--border-color-disabled:initial;--border-color-activated:initial;--border-color-focused:initial;--color:#fafafa;--color-hover:#fafafa;--color-disable:#fafafa;--color-activated:#fafafa;--color-focused:#fafafa;--font-size:14px;--font-weight:600;--line-height:100%;--text-transform:uppercase;--padding:16px 32px;--transition:background 300ms ease-out, color 300ms ease-out, border-color 300ms ease-out;--overflow:hidden;--height:48px;--width:auto;--button-ripple-color:#137585;--button-ripple-opacity:0.16;font-size:var(--font-size);font-weight:var(--font-weight);text-transform:var(--text-transform);color:var(--color);font-family:inherit;display:inline-block;width:auto;text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none;cursor:pointer}:host ion-ripple-effect{--ripple-color:var(--button-ripple-color);--ripple-opacity:var(--button-ripple-opacity)}:host .button-native{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;overflow:hidden;display:block;position:relative;width:100%;outline:none;line-height:1;contain:layout style;z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0;border:0;cursor:pointer;height:var(--height);width:var(--width);padding:var(--padding);color:var(--color);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);border-radius:var(--border-radius);background:var(--background);-webkit-transition:var(--transition);transition:var(--transition)}:host .button-native::-moz-focus-inner{border:0}:host .button-native::before{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0;-webkit-transition:var(--transition);transition:var(--transition);opacity:1}:host .button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host([block]){display:block}:host([block]) .button-native{display:block;width:100%;clear:both;contain:content;margin-left:0;margin-right:0}:host([block]) .button-native::before{clear:both}:host([full]){display:block}:host([full]) .button-native{display:block;width:100%;contain:content;margin-left:0;margin-right:0;border-radius:0}:host([size=sm]){--height:40px}:host([size=xs]){--height:32px}:host([size=xxs]){--height:24px}@media (any-hover: hover){:host(:hover) .button-native{border-color:var(--border-color-hover);color:var(--color-hover)}:host(:hover) .button-native::before{opacity:1;background:var(--background-hover)}:host([disabled]:hover:not([disabled=false]):hover){cursor:default}:host([disabled]:hover:not([disabled=false]):hover) .button-native{border-color:var(--border-color-disabled);color:var(--color-disable)}:host([disabled]:hover:not([disabled=false]):hover) .button-native::before{background:var(--background-disabled);opacity:1}}:host([disabled]:not([disabled=false])),:host([disabled].ion-activated:not([disabled=false].ion-activated)),:host([disabled].ion-focused:not([disabled=false].ion-focused)){cursor:default;pointer-events:none}:host([disabled]:not([disabled=false])) .button-native,:host([disabled].ion-activated:not([disabled=false].ion-activated)) .button-native,:host([disabled].ion-focused:not([disabled=false].ion-focused)) .button-native{border-color:var(--border-color-disabled);color:var(--color-disable)}:host([disabled]:not([disabled=false])) .button-native::before,:host([disabled].ion-activated:not([disabled=false].ion-activated)) .button-native::before,:host([disabled].ion-focused:not([disabled=false].ion-focused)) .button-native::before{background:var(--background-disabled);opacity:1}:host(.disable){cursor:default;pointer-events:none}:host(.disable) .button-native{border-color:var(--border-color-disabled);color:var(--color-disable)}:host(.disable) .button-native::before{background:var(--background-disabled);opacity:1}:host(.ion-activated) .button-native{border-color:var(--border-color-activated);color:var(--color-activated)}:host(.ion-activated) .button-native::before{background:var(--background-activated);opacity:1}:host(.ion-focused) .button-native{border-color:var(--border-color-focused);color:var(--color-focused)}:host(.ion-focused) .button-native::before{background:var(--background-focused);opacity:1}:host([secondary]){--background:transparent;--background-hover:transparent;--background-disabled:transparent;--background-activated:transparent;--background-focused:transparent;--border-width:2px;--border-style:solid;--border-color:#73d6e5;--border-radius:31.25em;--border-color-hover:#3aa8b9;--border-color-disabled:#c2c2c2;--border-color-activated:#137585;--border-color-focused:#3aa8b9;--color:#73d6e5;--color-hover:#3aa8b9;--color-disable:#c2c2c2;--color-activated:#137585;--color-focused:#3aa8b9;--font-size:14px;--font-weight:600;--line-height:100%;--padding:8px 32px;--transition:background 300ms ease-out, color 300ms ease-out, border-color 300ms ease-out;--width:calc(100% - 4px);--button-ripple-color:#3aa8b9;--button-ripple-opacity:0.16}:host([secondary]) ion-ripple-effect{--ripple-color:var(--button-ripple-color);--ripple-opacity:var(--button-ripple-opacity)}:host([tertiary]):host-context(body.light),:host([tertiary]):host-context(data-theme[light]){--border-color-disabled:#adadad;--border-color-focused:#137585;--border-color-activated:#73d6e5;--border-color-hover:#137585;--color:#adadad;--color-disable:#adadad;--color-activated:#73d6e5;--color-hover:#137585;--color-focused:#137585}:host([tertiary]){--background:transparent;--background-hover:58, 168, 185;--background-hover-opacity:0.16;--background-disabled:transparent;--background-activated:transparent;--background-focused:58, 168, 185;--background-focused-opacity:0.16;--border-radius:4px;--color:#fafafa;--color-hover:#fafafa;--color-disable:#adadad;--color-activated:#fafafa;--color-focused:#fafafa;--font-size:14px;--font-weight:600;--line-height:100%;--padding:8px;--transition:background 300ms ease-out, color 300ms ease-out, border-color 300ms ease-out;--height:32px;--button-ripple-color:#3aa8b9;--button-ripple-opacity:0.16}:host([tertiary]) ion-ripple-effect{--ripple-color:var(--button-ripple-color);--ripple-opacity:var(--button-ripple-opacity)}:host([tertiary]) .tertiary-tap{padding:8px}:host([block]) .tertiary-tap{padding:0}:host([full]){--height:48px}:host([full]) .tertiary-tap{padding:0}@media (any-hover: hover){:host([tertiary]:hover) .button-native::before{background:rgba(var(--background-hover), var(--background-hover-opacity))}}:host([tertiary].ion-focused) .button-native::before{background:rgba(var(--background-focused), var(--background-focused-opacity))}:host([tertiary]):host-context(body.light),:host([tertiary]):host-context(data-theme[light]){--background:transparent;--background-hover:58, 168, 185;--background-hover-opacity:0.16;--background-disabled:transparent;--background-activated:transparent;--background-focused:58, 168, 185;--background-focused-opacity:0.16;--color:#7a7a7a;--color-hover:#7a7a7a;--color-disable:#adadad;--color-activated:#7a7a7a;--color-focused:#7a7a7a}:host([icon-only]){--background:transparent;--background-hover:41, 41, 41;--background-hover-opacity:0.5;--background-disabled:transparent;--background-activated:transparent;--background-focused:41, 41, 41;--background-focused-opacity:0.5;--border-radius:31.25em;--border-width:0;--border-color:transparent;--padding:4px;--height:40px;--width:40px;--fill:#fafafa;--button-ripple-color:#292929;--button-ripple-opacity:1}:host([icon-only]) svg{fill:var(--fill)}:host([icon-only]) ion-ripple-effect{--ripple-color:var(--button-ripple-color);--ripple-opacity:var(--button-ripple-opacity)}@media (any-hover: hover){:host([icon-only]:hover) .button-native::before{background:rgba(var(--background-hover), var(--background-hover-opacity))}}:host([icon-only].ion-focused) .button-native::before{background:rgba(var(--background-focused), var(--background-focused-opacity))}";

const mdMedButtonCss = ":host{--background:linear-gradient(to right, #3aa8b9, #137585);--background-hover:#3aa8b9;--background-disabled:#c2c2c2;--background-activated:#137585;--background-focused:#3aa8b9;--border-radius:31.25em;--border-width:0;--border-style:none;--border-color:initial;--border-color-hover:initial;--border-color-disabled:initial;--border-color-activated:initial;--border-color-focused:initial;--color:#fafafa;--color-hover:#fafafa;--color-disable:#fafafa;--color-activated:#fafafa;--color-focused:#fafafa;--font-size:14px;--font-weight:600;--line-height:100%;--text-transform:uppercase;--padding:16px 32px;--transition:background 300ms ease-out, color 300ms ease-out, border-color 300ms ease-out;--overflow:hidden;--height:48px;--width:auto;--button-ripple-color:#137585;--button-ripple-opacity:0.16;font-size:var(--font-size);font-weight:var(--font-weight);text-transform:var(--text-transform);color:var(--color);font-family:inherit;display:inline-block;width:auto;text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none;cursor:pointer}:host ion-ripple-effect{--ripple-color:var(--button-ripple-color);--ripple-opacity:var(--button-ripple-opacity)}:host .button-native{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;overflow:hidden;display:block;position:relative;width:100%;outline:none;line-height:1;contain:layout style;z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0;border:0;cursor:pointer;height:var(--height);width:var(--width);padding:var(--padding);color:var(--color);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);border-radius:var(--border-radius);background:var(--background);-webkit-transition:var(--transition);transition:var(--transition)}:host .button-native::-moz-focus-inner{border:0}:host .button-native::before{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0;-webkit-transition:var(--transition);transition:var(--transition);opacity:1}:host .button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host([block]){display:block}:host([block]) .button-native{display:block;width:100%;clear:both;contain:content;margin-left:0;margin-right:0}:host([block]) .button-native::before{clear:both}:host([full]){display:block}:host([full]) .button-native{display:block;width:100%;contain:content;margin-left:0;margin-right:0;border-radius:0}:host([size=sm]){--height:40px}:host([size=xs]){--height:32px}:host([size=xxs]){--height:24px}@media (any-hover: hover){:host(:hover) .button-native{border-color:var(--border-color-hover);color:var(--color-hover)}:host(:hover) .button-native::before{opacity:1;background:var(--background-hover)}:host([disabled]:hover:not([disabled=false]):hover){cursor:default}:host([disabled]:hover:not([disabled=false]):hover) .button-native{border-color:var(--border-color-disabled);color:var(--color-disable)}:host([disabled]:hover:not([disabled=false]):hover) .button-native::before{background:var(--background-disabled);opacity:1}}:host([disabled]:not([disabled=false])),:host([disabled].ion-activated:not([disabled=false].ion-activated)),:host([disabled].ion-focused:not([disabled=false].ion-focused)){cursor:default;pointer-events:none}:host([disabled]:not([disabled=false])) .button-native,:host([disabled].ion-activated:not([disabled=false].ion-activated)) .button-native,:host([disabled].ion-focused:not([disabled=false].ion-focused)) .button-native{border-color:var(--border-color-disabled);color:var(--color-disable)}:host([disabled]:not([disabled=false])) .button-native::before,:host([disabled].ion-activated:not([disabled=false].ion-activated)) .button-native::before,:host([disabled].ion-focused:not([disabled=false].ion-focused)) .button-native::before{background:var(--background-disabled);opacity:1}:host(.disable){cursor:default;pointer-events:none}:host(.disable) .button-native{border-color:var(--border-color-disabled);color:var(--color-disable)}:host(.disable) .button-native::before{background:var(--background-disabled);opacity:1}:host(.ion-activated) .button-native{border-color:var(--border-color-activated);color:var(--color-activated)}:host(.ion-activated) .button-native::before{background:var(--background-activated);opacity:1}:host(.ion-focused) .button-native{border-color:var(--border-color-focused);color:var(--color-focused)}:host(.ion-focused) .button-native::before{background:var(--background-focused);opacity:1}:host([secondary]){--background:transparent;--background-hover:transparent;--background-disabled:transparent;--background-activated:transparent;--background-focused:transparent;--border-width:2px;--border-style:solid;--border-color:#73d6e5;--border-radius:31.25em;--border-color-hover:#3aa8b9;--border-color-disabled:#c2c2c2;--border-color-activated:#137585;--border-color-focused:#3aa8b9;--color:#73d6e5;--color-hover:#3aa8b9;--color-disable:#c2c2c2;--color-activated:#137585;--color-focused:#3aa8b9;--font-size:14px;--font-weight:600;--line-height:100%;--padding:8px 32px;--transition:background 300ms ease-out, color 300ms ease-out, border-color 300ms ease-out;--width:calc(100% - 4px);--button-ripple-color:#3aa8b9;--button-ripple-opacity:0.16}:host([secondary]) ion-ripple-effect{--ripple-color:var(--button-ripple-color);--ripple-opacity:var(--button-ripple-opacity)}:host([tertiary]):host-context(body.light),:host([tertiary]):host-context(data-theme[light]){--border-color-disabled:#adadad;--border-color-focused:#137585;--border-color-activated:#73d6e5;--border-color-hover:#137585;--color:#adadad;--color-disable:#adadad;--color-activated:#73d6e5;--color-hover:#137585;--color-focused:#137585}:host([tertiary]){--background:transparent;--background-hover:58, 168, 185;--background-hover-opacity:0.16;--background-disabled:transparent;--background-activated:transparent;--background-focused:58, 168, 185;--background-focused-opacity:0.16;--border-radius:4px;--color:#fafafa;--color-hover:#fafafa;--color-disable:#adadad;--color-activated:#fafafa;--color-focused:#fafafa;--font-size:14px;--font-weight:600;--line-height:100%;--padding:8px;--transition:background 300ms ease-out, color 300ms ease-out, border-color 300ms ease-out;--height:32px;--button-ripple-color:#3aa8b9;--button-ripple-opacity:0.16}:host([tertiary]) ion-ripple-effect{--ripple-color:var(--button-ripple-color);--ripple-opacity:var(--button-ripple-opacity)}:host([tertiary]) .tertiary-tap{padding:8px}:host([block]) .tertiary-tap{padding:0}:host([full]){--height:48px}:host([full]) .tertiary-tap{padding:0}@media (any-hover: hover){:host([tertiary]:hover) .button-native::before{background:rgba(var(--background-hover), var(--background-hover-opacity))}}:host([tertiary].ion-focused) .button-native::before{background:rgba(var(--background-focused), var(--background-focused-opacity))}:host([tertiary]):host-context(body.light),:host([tertiary]):host-context(data-theme[light]){--background:transparent;--background-hover:58, 168, 185;--background-hover-opacity:0.16;--background-disabled:transparent;--background-activated:transparent;--background-focused:58, 168, 185;--background-focused-opacity:0.16;--color:#7a7a7a;--color-hover:#7a7a7a;--color-disable:#adadad;--color-activated:#7a7a7a;--color-focused:#7a7a7a}:host([icon-only]){--background:transparent;--background-hover:41, 41, 41;--background-hover-opacity:0.5;--background-disabled:transparent;--background-activated:transparent;--background-focused:41, 41, 41;--background-focused-opacity:0.5;--border-radius:31.25em;--border-width:0;--border-color:transparent;--padding:4px;--height:40px;--width:40px;--fill:#fafafa;--button-ripple-color:#292929;--button-ripple-opacity:1}:host([icon-only]) svg{fill:var(--fill)}:host([icon-only]) ion-ripple-effect{--ripple-color:var(--button-ripple-color);--ripple-opacity:var(--button-ripple-opacity)}@media (any-hover: hover){:host([icon-only]:hover) .button-native::before{background:rgba(var(--background-hover), var(--background-hover-opacity))}}:host([icon-only].ion-focused) .button-native::before{background:rgba(var(--background-focused), var(--background-focused-opacity))}";

const Button = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionFocus = index.createEvent(this, "ionFocus", 7);
    this.ionBlur = index.createEvent(this, "ionBlur", 7);
    this.inItem = false;
    this.inListHeader = false;
    this.inToolbar = false;
    this.inheritedAttributes = {};
    /**
     * The type of button.
     */
    this.buttonType = 'button';
    /**
     * If `true`, the user cannot interact with the button.
     */
    this.disabled = false;
    /**
     * When using a router, it specifies the transition direction when navigating to
     * another page using `href`.
     */
    this.routerDirection = 'forward';
    /**
     * If `true`, activates a button with a heavier font weight.
     */
    this.strong = false;
    /**
     * The type of the button.
     */
    this.type = 'button';
    this.handleClick = (ev) => {
      if (this.type === 'button') {
        theme.openURL(this.href, ev, this.routerDirection, this.routerAnimation);
      }
      else if (helpers.hasShadowDom(this.el)) {
        // this button wants to specifically submit a form
        // climb up the dom to see if we're in a <form>
        // and if so, then use JS to submit it
        const form = this.el.closest('form');
        if (form) {
          ev.preventDefault();
          const fakeButton = document.createElement('button');
          fakeButton.type = this.type;
          fakeButton.style.display = 'none';
          form.appendChild(fakeButton);
          fakeButton.click();
          fakeButton.remove();
        }
      }
    };
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
  }
  componentWillLoad() {
    this.inToolbar = !!this.el.closest('ion-buttons');
    this.inListHeader = !!this.el.closest('ion-list-header');
    this.inItem = !!this.el.closest('ion-item') || !!this.el.closest('ion-item-divider');
    this.inheritedAttributes = helpers.inheritAttributes(this.el, ['aria-label']);
  }
  componentDidLoad() {
    if (this.el.classList.contains('button')) {
      this.el.classList.remove('button');
    }
  }
  get hasIconOnly() {
    return !!this.el.querySelector('[slot="icon-only"]');
  }
  get rippleType() {
    const hasClearFill = this.fill === undefined || this.fill === 'clear';
    // If the button is in a toolbar, has a clear fill (which is the default)
    // and only has an icon we use the unbounded "circular" ripple effect
    if (hasClearFill && this.hasIconOnly && this.inToolbar) {
      return 'unbounded';
    }
    return 'bounded';
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    const { buttonType, type, disabled, rel, target, size, href, color, expand, hasIconOnly, shape, strong, inheritedAttributes } = this;
    const finalSize = size === undefined && this.inItem ? 'small' : size;
    const TagType = href === undefined ? 'button' : 'a';
    const attrs = (TagType === 'button')
      ? { type }
      : {
        download: this.download,
        href,
        rel,
        target
      };
    let fill = this.fill;
    if (fill === undefined) {
      fill = this.inToolbar || this.inListHeader ? 'clear' : 'solid';
    }
    return (index.h(index.Host, { onClick: this.handleClick, "aria-disabled": disabled ? 'true' : null, class: theme.createColorClasses(color, {
        [mode]: true,
        [buttonType]: true,
        [`${buttonType}-${expand}`]: expand !== undefined,
        [`${buttonType}-${finalSize}`]: finalSize !== undefined,
        [`${buttonType}-${shape}`]: shape !== undefined,
        [`${buttonType}-${fill}`]: true,
        [`${buttonType}-strong`]: strong,
        'in-toolbar': theme.hostContext('ion-toolbar', this.el),
        'in-toolbar-color': theme.hostContext('ion-toolbar[color]', this.el),
        'button-has-icon-only': hasIconOnly,
        'ion-activatable': true,
        'ion-focusable': true,
      }) }, index.h("div", { class: "tertiary-tap" }, index.h(TagType, Object.assign({}, attrs, { class: "button-native", part: "native", disabled: disabled, onFocus: this.onFocus, onBlur: this.onBlur }, inheritedAttributes), index.h("span", { class: "button-inner" }, index.h("slot", { name: "icon-only" }), index.h("slot", { name: "start" }), index.h("slot", null), index.h("slot", { name: "end" })), mode === 'md' && index.h("ion-ripple-effect", { type: this.rippleType })))));
  }
  get el() { return index.getElement(this); }
};
Button.style = {
  ios: iosMedButtonCss,
  md: mdMedButtonCss
};

const validateContent = (svgContent) => {
  const div = document.createElement('div');
  div.innerHTML = svgContent;
  // setup this way to ensure it works on our buddy IE
  for (let i = div.childNodes.length - 1; i >= 0; i--) {
    if (div.childNodes[i].nodeName.toLowerCase() !== 'svg') {
      div.removeChild(div.childNodes[i]);
    }
  }
  // must only have 1 root element
  const svgElm = div.firstElementChild;
  if (svgElm && svgElm.nodeName.toLowerCase() === 'svg') {
    const svgClass = svgElm.getAttribute('class') || '';
    svgElm.setAttribute('class', (svgClass + ' s-ion-icon').trim());
    // root element must be an svg
    // lets double check we've got valid elements
    // do not allow scripts
    if (isValid(svgElm)) {
      return div.innerHTML;
    }
  }
  return '';
};
const isValid = (elm) => {
  if (elm.nodeType === 1) {
    if (elm.nodeName.toLowerCase() === 'script') {
      return false;
    }
    for (let i = 0; i < elm.attributes.length; i++) {
      const val = elm.attributes[i].value;
      if (isStr(val) && val.toLowerCase().indexOf('on') === 0) {
        return false;
      }
    }
    for (let i = 0; i < elm.childNodes.length; i++) {
      if (!isValid(elm.childNodes[i])) {
        return false;
      }
    }
  }
  return true;
};

const ioniconContent = new Map();
const requests = new Map();
const getSvgContent = (url, sanitize) => {
  // see if we already have a request for this url
  let req = requests.get(url);
  if (!req) {
    if (typeof fetch !== 'undefined' && typeof document !== 'undefined') {
      // we don't already have a request
      req = fetch(url).then((rsp) => {
        if (rsp.ok) {
          return rsp.text().then((svgContent) => {
            if (svgContent && sanitize !== false) {
              svgContent = validateContent(svgContent);
            }
            ioniconContent.set(url, svgContent || '');
          });
        }
        ioniconContent.set(url, '');
      });
      // cache for the same requests
      requests.set(url, req);
    }
    else {
      // set to empty for ssr scenarios and resolve promise
      ioniconContent.set(url, '');
      return Promise.resolve();
    }
  }
  return req;
};

const iconCss = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";

const Icon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.isVisible = false;
    /**
     * The mode determines which platform styles to use.
     */
    this.mode = getIonMode();
    /**
     * If enabled, ion-icon will be loaded lazily when it's visible in the viewport.
     * Default, `false`.
     */
    this.lazy = false;
    /**
     * When set to `false`, SVG content that is HTTP fetched will not be checked
     * if the response SVG content has any `<script>` elements, or any attributes
     * that start with `on`, such as `onclick`.
     * @default true
     */
    this.sanitize = true;
  }
  connectedCallback() {
    // purposely do not return the promise here because loading
    // the svg file should not hold up loading the app
    // only load the svg if it's visible
    this.waitUntilVisible(this.el, '50px', () => {
      this.isVisible = true;
      this.loadIcon();
    });
  }
  disconnectedCallback() {
    if (this.io) {
      this.io.disconnect();
      this.io = undefined;
    }
  }
  waitUntilVisible(el, rootMargin, cb) {
    if ( this.lazy && typeof window !== 'undefined' && window.IntersectionObserver) {
      const io = (this.io = new window.IntersectionObserver((data) => {
        if (data[0].isIntersecting) {
          io.disconnect();
          this.io = undefined;
          cb();
        }
      }, { rootMargin }));
      io.observe(el);
    }
    else {
      // browser doesn't support IntersectionObserver
      // so just fallback to always show it
      cb();
    }
  }
  loadIcon() {
    if ( this.isVisible) {
      const url = getUrl(this);
      if (url) {
        if (ioniconContent.has(url)) {
          // sync if it's already loaded
          this.svgContent = ioniconContent.get(url);
        }
        else {
          // async if it hasn't been loaded
          getSvgContent(url, this.sanitize).then(() => (this.svgContent = ioniconContent.get(url)));
        }
      }
    }
    if (!this.ariaLabel && this.ariaHidden !== 'true') {
      const label = getName(this.name, this.icon, this.mode, this.ios, this.md);
      // user did not provide a label
      // come up with the label based on the icon name
      if (label) {
        this.ariaLabel = label.replace(/\-/g, ' ');
      }
    }
  }
  render() {
    const mode = this.mode || 'md';
    const flipRtl = this.flipRtl ||
      (this.ariaLabel &&
        (this.ariaLabel.indexOf('arrow') > -1 || this.ariaLabel.indexOf('chevron') > -1) &&
        this.flipRtl !== false);
    return (index.h(index.Host, { role: "img", class: Object.assign(Object.assign({ [mode]: true }, createColorClasses(this.color)), { [`icon-${this.size}`]: !!this.size, 'flip-rtl': !!flipRtl && this.el.ownerDocument.dir === 'rtl' }) },  this.svgContent ? (index.h("div", { class: "icon-inner", innerHTML: this.svgContent })) : (index.h("div", { class: "icon-inner" }))));
  }
  static get assetsDirs() { return ["svg"]; }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "name": ["loadIcon"],
    "src": ["loadIcon"],
    "icon": ["loadIcon"]
  }; }
};
const getIonMode = () => ( typeof document !== 'undefined' && document.documentElement.getAttribute('mode')) || 'md';
const createColorClasses = (color) => {
  return color
    ? {
      'ion-color': true,
      [`ion-color-${color}`]: true,
    }
    : null;
};
Icon.style = iconCss;

exports.ion_button = Button;
exports.ion_icon = Icon;
