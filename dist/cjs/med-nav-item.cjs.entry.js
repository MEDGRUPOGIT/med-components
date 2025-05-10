/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const color = require('./color-7939264c.js');

const medNavItemCss = ":host{--stroke:hsl(var(--med-color-neutral-7));--margin-left-text:16px}:host{display:block}.med-nav-item__button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin:0;padding:8px;background:var(--background);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer;border-radius:8px;-webkit-transition:background-color 300ms ease-out;transition:background-color 300ms ease-out;border:0;width:100%;outline:initial}.med-nav-item__button::-moz-focus-inner{border:0;outline:initial}.med-nav-item__button:focus{outline:initial}.med-nav-item__icon{min-width:24px;stroke:var(--stroke);-webkit-transition:stroke 300ms ease-out;transition:stroke 300ms ease-out}.med-nav-item__text{--color:hsl(var(--med-color-neutral-7));margin-left:var(--margin-left-text) !important}:host(.button-disabled){opacity:0.5;pointer-events:none}:host(.med-nav-item--active){--background:hsl(var(--med-color-brand-1));--stroke:hsl(var(--med-color-neutral-10))}:host(.med-nav-item--active) .med-nav-item__text{--color:hsl(var(--med-color-neutral-10))}@media (any-hover: hover){:host(:hover){--background:hsl(var(--med-color-neutral-2));--stroke:hsl(var(--med-color-neutral-10))}:host(:hover) .med-nav-item__text{--color:hsl(var(--med-color-neutral-10))}}:host(.med-color.med-nav-item--active){--background:hsl(var(--med-color-2))}:host(.med-color-neutral.med-nav-item--active){--background:hsl(var(--med-color-neutral))}:host(.med-color-feedback.med-nav-item--active){--background:hsl(var(--med-color-feedback))}";

const MedNavItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.medFocus = index.createEvent(this, "medFocus", 7);
    this.medBlur = index.createEvent(this, "medBlur", 7);
    this.medClick = index.createEvent(this, "medClick", 7);
    this.onFocus = () => {
      this.medBlur.emit();
    };
    this.onBlur = () => {
      this.medClick.emit();
    };
    this.dsColor = undefined;
    this.active = false;
    this.text = undefined;
    this.icon = undefined;
    this.disabled = false;
    this.routerDirection = 'forward';
    this.routerAnimation = undefined;
    this.iconOnly = false;
  }
  componentDidLoad() {
    if (this.hostElement.classList.contains('button')) {
      this.hostElement.classList.remove('button');
    }
  }
  render() {
    const { dsColor, active, text, icon, disabled, iconOnly } = this;
    return (index.h(index.Host, { class: color.generateMedColor(dsColor, {
        'med-nav-item': true,
        'med-nav-item--active': active,
        'med-nav-item--icon-only': iconOnly,
        'button-disabled': disabled,
        'ion-activatable': true,
        'ion-focusable': true,
      }) }, index.h("button", { type: 'button', class: "med-nav-item__button", disabled: disabled, onFocus: this.onFocus, onBlur: this.onBlur }, index.h("ion-icon", { class: "med-nav-item__icon med-icon", name: icon }), index.h("med-type", { class: "med-nav-item__text", token: "p14" }, text))));
  }
  get hostElement() { return index.getElement(this); }
};
MedNavItem.style = medNavItemCss;

exports.med_nav_item = MedNavItem;
