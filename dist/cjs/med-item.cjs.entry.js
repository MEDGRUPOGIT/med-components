/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const color = require('./color-7939264c.js');
const ionicGlobal = require('./ionic-global-b146ab44.js');
const helpers = require('./helpers-a2cc981d.js');
const theme = require('./theme-cef66eda.js');
require('./platform-df0a78a3.js');

const iosMedItemCss = ":host{--padding:8px 16px;--background:transparent;--border-radius:0}:host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;padding:var(--padding);position:relative;background-color:var(--background);outline:none;border-radius:var(--border-radius)}:host(.med-item--no-padding){--padding:8px 0}.item-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input-wrapper{-ms-flex:1;flex:1}.item-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin:0;padding:0;background:transparent;width:100%;border:0;text-align:left;outline:none}.item-native::-moz-focus-inner{border:0}.item-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0;z-index:-1}button,a{cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}button:focus{outline:none}.item-highlight,.item-inner-highlight{left:0;right:0;bottom:0;position:absolute;z-index:1}:host(.med-item-multiple-inputs) ::slotted(ion-checkbox),:host(.med-item-multiple-inputs) ::slotted(ion-datetime),:host(.med-item-multiple-inputs) ::slotted(ion-radio),:host(.med-item-multiple-inputs) ::slotted(ion-select),:host(.med-item-multiple-inputs) ::slotted(ion-toggle){position:relative}:host(.med-item-disabled){opacity:0.5;pointer-events:none}::slotted([slot=start]){margin-right:16px}::slotted([slot=end]){margin-left:16px}::slotted(ion-icon){stroke:hsl(var(--med-color-neutral-10))}:host(.med-color){--background:hsl(var(--med-color-3))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback))}";

const mdMedItemCss = ":host{--padding:8px 16px;--background:transparent;--border-radius:0}:host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;padding:var(--padding);position:relative;background-color:var(--background);outline:none;border-radius:var(--border-radius)}:host(.med-item--no-padding){--padding:8px 0}.item-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input-wrapper{-ms-flex:1;flex:1}.item-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin:0;padding:0;background:transparent;width:100%;border:0;text-align:left;outline:none}.item-native::-moz-focus-inner{border:0}.item-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0;z-index:-1}button,a{cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}button:focus{outline:none}.item-highlight,.item-inner-highlight{left:0;right:0;bottom:0;position:absolute;z-index:1}:host(.med-item-multiple-inputs) ::slotted(ion-checkbox),:host(.med-item-multiple-inputs) ::slotted(ion-datetime),:host(.med-item-multiple-inputs) ::slotted(ion-radio),:host(.med-item-multiple-inputs) ::slotted(ion-select),:host(.med-item-multiple-inputs) ::slotted(ion-toggle){position:relative}:host(.med-item-disabled){opacity:0.5;pointer-events:none}::slotted([slot=start]){margin-right:16px}::slotted([slot=end]){margin-left:16px}::slotted(ion-icon){stroke:hsl(var(--med-color-neutral-10))}:host(.med-color){--background:hsl(var(--med-color-3))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback))}";

const MedItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.labelColorStyles = {};
    this.itemStyles = new Map();
    this.multipleInputs = false;
    this.dsColor = undefined;
    this.contain = false;
    this.noPadding = false;
    this.button = false;
    this.detail = undefined;
    this.detailIcon = 'chevron-forward';
    this.disabled = false;
    this.download = undefined;
    this.href = undefined;
    this.rel = undefined;
    this.lines = undefined;
    this.routerAnimation = undefined;
    this.routerDirection = 'forward';
    this.target = undefined;
    this.type = 'button';
  }
  labelColorChanged(ev) {
    const { dsColor } = this;
    // There will be a conflict with item color if
    // we apply the label color to item, so we ignore
    // the label color if the user sets a color on item
    if (dsColor === undefined) {
      this.labelColorStyles = ev.detail;
    }
  }
  itemStyle(ev) {
    ev.stopPropagation();
    const tagName = ev.target.tagName;
    const updatedStyles = ev.detail;
    const newStyles = {};
    const childStyles = this.itemStyles.get(tagName) || {};
    let hasStyleChange = false;
    Object.keys(updatedStyles).forEach(key => {
      if (updatedStyles[key]) {
        const itemKey = `item-${key}`;
        if (!childStyles[itemKey]) {
          hasStyleChange = true;
        }
        newStyles[itemKey] = true;
      }
    });
    if (!hasStyleChange && Object.keys(newStyles).length !== Object.keys(childStyles).length) {
      hasStyleChange = true;
    }
    if (hasStyleChange) {
      this.itemStyles.set(tagName, newStyles);
      index.forceUpdate(this);
    }
  }
  componentDidUpdate() {
    // Do not use @Listen here to avoid making all items
    // appear as clickable to screen readers
    // https://github.com/ionic-team/ionic-framework/issues/22011
    const input = this.getFirstInput();
    if (input && !this.clickListener) {
      this.clickListener = (ev) => this.delegateFocus(ev, input);
      this.el.addEventListener('click', this.clickListener);
    }
  }
  disconnectedCallback() {
    const input = this.getFirstInput();
    if (input && this.clickListener) {
      this.el.removeEventListener('click', this.clickListener);
      this.clickListener = undefined;
    }
  }
  componentDidLoad() {
    this.setMultipleInputs();
  }
  // If the item contains multiple clickable elements and/or inputs, then the item
  // should not have a clickable input cover over the entire item to prevent
  // interfering with their individual click events
  setMultipleInputs() {
    // The following elements have a clickable cover that is relative to the entire item
    const covers = this.el.querySelectorAll('ion-checkbox, ion-datetime, ion-select, ion-radio');
    // The following elements can accept focus alongside the previous elements
    // therefore if these elements are also a child of item, we don't want the
    // input cover on top of those interfering with their clicks
    const inputs = this.el.querySelectorAll('ion-input, ion-range, ion-searchbar, ion-segment, ion-textarea, ion-toggle');
    // The following elements should also stay clickable when an input with cover is present
    const clickables = this.el.querySelectorAll('ion-anchor, ion-button, a, button');
    // Check for multiple inputs to change the position of the input cover to relative
    // for all of the covered inputs above
    this.multipleInputs = covers.length + inputs.length > 1
      || covers.length + clickables.length > 1
      || covers.length > 0 && this.isClickable();
  }
  // If the item contains an input including a checkbox, datetime, select, or radio
  // then the item will have a clickable input cover that covers the item
  // that should get the hover, focused and activated states UNLESS it has multiple
  // inputs, then those need to individually get each click
  hasCover() {
    const inputs = this.el.querySelectorAll('ion-checkbox, ion-datetime, ion-select, ion-radio, ion-toggle');
    return inputs.length === 1 && !this.multipleInputs;
  }
  // If the item has an href or button property it will render a native
  // anchor or button that is clickable
  isClickable() {
    return (this.href !== undefined || this.button);
  }
  canActivate() {
    return (this.isClickable() || this.hasCover());
  }
  getFirstInput() {
    const inputs = this.el.querySelectorAll('ion-input, ion-textarea');
    return inputs[0];
  }
  // This is needed for WebKit due to a delegatesFocus bug where
  // clicking on the left padding of an item is not focusing the input
  // but is opening the keyboard. It will no longer be needed with
  // iOS 14.
  delegateFocus(ev, input) {
    const clickedItem = ev.target.tagName === 'MED-ITEM';
    let firstActive = false;
    // If the first input is the same as the active element we need
    // to focus the first input again, but if the active element
    // is another input inside of the item we shouldn't switch focus
    if (document.activeElement) {
      firstActive = input.querySelector('input, textarea') === document.activeElement;
    }
    // Only focus the first input if we clicked on an ion-item
    // and the first input exists
    if (clickedItem && firstActive) {
      input.fireFocusEvents = false;
      input.setBlur();
      input.setFocus();
      helpers.raf(() => {
        input.fireFocusEvents = true;
      });
    }
  }
  render() {
    const { dsColor, noPadding, download, labelColorStyles, lines, disabled, href, rel, target, routerAnimation, routerDirection } = this;
    const childStyles = {};
    const mode = ionicGlobal.getIonMode(this);
    const clickable = this.isClickable();
    const canActivate = this.canActivate();
    const TagType = clickable ? (href === undefined ? 'button' : 'a') : 'div';
    const attrs = (TagType === 'button')
      ? { type: this.type }
      : {
        download,
        href,
        rel,
        target
      };
    // Only set onClick if the item is clickable to prevent screen
    // readers from reading all items as clickable
    const clickFn = clickable ? {
      onClick: (ev) => { theme.openURL(href, ev, routerDirection, routerAnimation); }
    } : {};
    // const showDetail = detail !== undefined ? detail : mode === 'ios' && clickable;
    this.itemStyles.forEach(value => {
      Object.assign(childStyles, value);
    });
    return (index.h(index.Host, { "aria-disabled": disabled ? 'true' : null, class: Object.assign(Object.assign(Object.assign({}, childStyles), labelColorStyles), color.generateMedColor(dsColor, {
        [mode]: true,
        'med-item': true,
        [`med-item-lines-${lines}`]: lines !== undefined,
        'med-item-disabled': disabled,
        'in-list': theme.hostContext('med-lista', this.el),
        'med-item-multiple-inputs': this.multipleInputs || this.contain,
        'ion-activatable': canActivate,
        'ion-focusable': true,
        'med-item--no-padding': noPadding
      })) }, index.h(TagType, Object.assign({}, attrs, { class: "item-native", part: "native", disabled: disabled }, clickFn), index.h("div", { class: "item-inner" }, index.h("slot", { name: "start" }), index.h("div", { class: "input-wrapper" }, index.h("slot", null)), index.h("slot", { name: "end" }), index.h("div", { class: "item-inner-highlight" }))), index.h("div", { class: "item-highlight" })));
  }
  static get delegatesFocus() { return true; }
  get el() { return index.getElement(this); }
};
MedItem.style = {
  ios: iosMedItemCss,
  md: mdMedItemCss
};

exports.med_item = MedItem;
