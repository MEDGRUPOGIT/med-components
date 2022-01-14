import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-33df6a63.js';

const childCss = ":host{--background:hsl(var(--med-color-neutral-5));--color:hsl(var(--med-color-neutral-10));--border-color:hsl(var(--med-color-neutral-5))}:host(.med-child){background:var(--background);display:inline-block;width:30px;height:30px;text-align:center;border:1px solid;border-color:var(--border-color)}:host(.med-child) h3{color:var(--color);margin:0}:host(.med-color){--background:hsl(var(--med-color-3));--color:hsl(var(--med-color-contrast-fixed));--border-color:hsl(var(--med-color-3))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral));--color:hsl(var(--med-color-neutral-contrast));--border-color:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback));--color:hsl(var(--med-color-feedback-contrast));--border-color:hsl(var(--med-color-feedback))}:host(.med-child--outline){--background:transparent;--color:hsl(var(--med-color-neutral-5));--border-color:hsl(var(--med-color-neutral-5))}:host(.med-child--outline.med-color){--background:transparent;--color:hsl(var(--med-color-3));--border-color:hsl(var(--med-color-3))}:host(.med-child--outline.med-color-neutral){--background:transparent;--color:hsl(var(--med-color-neutral-contrast));--border-color:hsl(var(--med-color-neutral))}:host(.med-child--outline.med-color-feedback){--background:transparent;--color:hsl(var(--med-color-feedback));--border-color:hsl(var(--med-color-feedback))}:host(.med-child--gradient){--background:var(--med-color-brand-gradient);--color:hsl(var(--med-color-contrast-fixed));border:0}:host(.med-child--gradient.med-color){--background:var(--med-color-gradient);--color:hsl(var(--med-color-contrast-fixed))}:host(.med-child--gradient.med-color-neutral){--background:hsl(var(--med-color-neutral));--color:hsl(var(--med-color-neutral-contrast))}:host(.med-child--gradient.med-color-feedback){--background:hsl(var(--med-color-feedback));--color:hsl(var(--med-color-feedback-contrast))}:host(.med-child.med-color.darkest){--background:hsl(var(--med-color-1));--color:hsl(var(--med-color-neutral-10));--border-color:hsl(var(--med-color-1))}:host(.med-child.med-color.dark){--background:hsl(var(--med-color-2));--color:hsl(var(--med-color-neutral-10));--border-color:hsl(var(--med-color-2))}:host(.med-child.med-color.light){--background:hsl(var(--med-color-4));--color:hsl(var(--med-color-neutral-1));--border-color:hsl(var(--med-color-4))}:host(.med-child.med-color.lightest){--background:hsl(var(--med-color-5));--color:hsl(var(--med-color-neutral-1));--border-color:hsl(var(--med-color-5))}";

const Child = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { dsColor, fill } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-child': true,
        [`med-child_${fill}`]: fill !== undefined,
      }) }, h("h3", null, h("slot", null))));
  }
};
Child.style = childCss;

export { Child as med_child };
