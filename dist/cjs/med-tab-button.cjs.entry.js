'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const color = require('./color-2d4645aa.js');

const medTabButtonCss = ":host{--border-color:hsl(var(--med-color-neutral-10));--color:hsl(var(--med-color-neutral-5));--color-active:hsl(var(--med-color-neutral-10));--padding-top:16px;--padding-bottom:14px}:host(.med-tab-button){cursor:pointer;position:relative;height:100%;-ms-flex:0 0 20%;flex:0 0 20%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-transform:uppercase;color:var(--color);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-weight:400}@media (any-hover: hover){:host(.med-tab-button:hover){color:var(--color-active)}}:host(.med-tab-button--active){border-bottom:2px solid var(--border-color);color:var(--color-active)}:host(.med-color.med-tab-button){--border-color:hsl(var(--med-color-3))}:host(.med-color-neutral.med-tab-button){--border-color:hsl(var(--med-color-neutral))}:host(.med-color-feedback.med-tab-button){--border-color:hsl(var(--med-color-feedback))}";

const MedTabButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * todo
     */
    this.active = false;
  }
  render() {
    const { dsColor, active } = this;
    return (index.h(index.Host, { class: color.generateMedColor(dsColor, {
        'med-tab-button': true,
        'med-tab-button--active': active,
      }) }, index.h("slot", null)));
  }
};
MedTabButton.style = medTabButtonCss;

exports.med_tab_button = MedTabButton;
