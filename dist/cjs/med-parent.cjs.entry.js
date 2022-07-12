'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medTheme = require('./med-theme-1bca89cc.js');

const parentCss = ":host{--background:hsl(var(--med-color-brand-3));--color:hsl(var(--med-color-contrast-fixed));--border-color:hsl(var(--med-color-brand-3))}:host(.med-parent){background:var(--background);display:inline-block;padding:16px;min-width:100px;text-align:center;border:1px solid;border-color:var(--border-color)}:host(.med-parent) h3{color:var(--color);margin:0}:host(.med-parent) .med-parent__child{--background:red;--color:red;--border-color:red}:host(.med-color){--background:hsl(var(--med-color-3));--color:hsl(var(--med-color-contrast-fixed));--border-color:hsl(var(--med-color-3))}:host(.med-color) .med-parent__child{--background:hsl(var(--med-color-3));--color:hsl(var(--med-color-contrast-fixed));--border-color:hsl(var(--med-color-3))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral));--color:hsl(var(--med-color-neutral-contrast));--border-color:hsl(var(--med-color-neutral))}:host(.med-color-neutral) .med-parent__child{--background:hsl(var(--med-color-neutral));--color:hsl(var(--med-color-neutral-contrast));--border-color:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback));--color:hsl(var(--med-color-feedback-contrast));--border-color:hsl(var(--med-color-feedback))}:host(.med-color-feedback) .med-parent__child{--background:hsl(var(--med-color-feedback));--color:hsl(var(--med-color-feedback-contrast));--border-color:hsl(var(--med-color-feedback))}:host(.med-parent--outline){--background:transparent;--color:hsl(var(--med-color-neutral-5));--border-color:hsl(var(--med-color-neutral-5))}:host(.med-parent--outline.med-color){--background:transparent;--color:hsl(var(--med-color-3));--border-color:hsl(var(--med-color-3))}:host(.med-parent--outline.med-color-neutral){--background:transparent;--color:hsl(var(--med-color-neutral-contrast));--border-color:hsl(var(--med-color-neutral))}:host(.med-parent--outline.med-color-feedback){--background:transparent;--color:hsl(var(--med-color-feedback));--border-color:hsl(var(--med-color-feedback))}:host(.med-parent--gradient){--background:var(--med-color-brand-gradient);--color:hsl(var(--med-color-contrast-fixed));border:0}:host(.med-parent--gradient.med-color){--background:var(--med-color-gradient);--color:hsl(var(--med-color-contrast-fixed))}:host(.med-parent--gradient.med-color-neutral){--background:hsl(var(--med-color-neutral));--color:hsl(var(--med-color-neutral-contrast))}:host(.med-parent--gradient.med-color-feedback){--background:hsl(var(--med-color-feedback));--color:hsl(var(--med-color-feedback-contrast))}:host(.med-parent.med-color.darkest){--background:hsl(var(--med-color-1));--color:hsl(var(--med-color-neutral-10));--border-color:hsl(var(--med-color-1))}:host(.med-parent.med-color.dark){--background:hsl(var(--med-color-2));--color:hsl(var(--med-color-neutral-10));--border-color:hsl(var(--med-color-2))}:host(.med-parent.med-color.light){--background:hsl(var(--med-color-4));--color:hsl(var(--med-color-neutral-1));--border-color:hsl(var(--med-color-4))}:host(.med-parent.med-color.lightest){--background:hsl(var(--med-color-5));--color:hsl(var(--med-color-neutral-1));--border-color:hsl(var(--med-color-5))}";

const Parent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
      * Teste.
      */
    this.child = false;
  }
  render() {
    const { dsColor, fill, child } = this;
    return (index.h(index.Host, { class: medTheme.generateMedColor(dsColor, {
        'med-parent': true,
        [`med-parent--${fill}`]: fill !== undefined,
      }) }, index.h("h3", null, index.h("slot", null)), child && index.h("med-child", { class: "med-parent__child" })));
  }
};
Parent.style = parentCss;

exports.med_parent = Parent;
