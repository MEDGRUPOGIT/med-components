import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-33df6a63.js';

const medListItemCss = ":host{--padding:8px 16px;--background:transparent;--border-radius:8px;--font-size-title:14px;--color-title:hsl(var(--med-color-neutral-10));--font-size-label:12px;--color-label:hsl(var(--med-color-brand-4))}:host(.med-list-item){background-image:-webkit-gradient(linear, left top, right top, from(hsl(var(--med-color-neutral-2), 1)), color-stop(hsl(var(--med-color-neutral-2), 0.1)), to(hsl(var(--med-color-neutral-2), 0)));background-image:linear-gradient(to right, hsl(var(--med-color-neutral-2), 1), hsl(var(--med-color-neutral-2), 0.1), hsl(var(--med-color-neutral-2), 0));background-size:200% 100%;background-position:100% 0;-webkit-transition:background-image 0.5s linear;transition:background-image 0.5s linear;display:-ms-flexbox;display:flex;padding:var(--padding);-ms-flex-align:center;align-items:center}:host(.med-list-item) .med-list-item__content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;text-align:left;width:100%}:host(.med-list-item) .med-list-item__title{margin:0;padding:0;font-size:var(--font-size-title);font-weight:300;color:var(--color-title)}:host(.med-list-item) .med-list-item__label{margin:0;padding:0;font-size:var(--font-size-label);font-weight:400;color:var(--color-label);margin-top:4px}:host(.med-list-item) .med-list-item__border-radius{border-radius:var(--border-radius)}:host(.med-list-item--selected){background-position:0 0}:host(.med-list-item--disabled){opacity:0.5;pointer-events:none}::slotted([slot=start]){margin-right:16px}::slotted([slot=end]){margin-left:16px}:host(.med-list-item--xs){--padding:8px 16px}:host(.med-list-item--sm){--padding:16px}:host(.med-list-item--md){--padding:24px 16px}:host(.med-list-item.med-color) ::slotted(ion-checkbox){--border-color:hsl(var(--med-color-4))}:host(.med-list-item.med-color){--color-label:hsl(var(--med-color-4))}:host(.med-list-item.med-color-neutral) ::slotted(ion-checkbox){--border-color:hsl(var(--med-color-neutral))}:host(.med-list-item.med-color-neutral){--color-label:hsl(var(--med-color-neutral))}:host(.med-list-item.med-color-feedback) ::slotted(ion-checkbox){--border-color:hsl(var(--med-color-feedback))}:host(.med-list-item.med-color-feedback){--color-label:hsl(var(--med-color-feedback))}";

const MedListItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * TODO
     */
    this.selected = false;
    /**
     * TODO
     */
    this.border = false;
    /**
     * If `true`, the user cannot interact with the button.
     */
    this.disabled = false;
  }
  render() {
    const { dsColor, titulo, label, selected, dsSize, border, disabled } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-list-item': true,
        'med-list-item--selected': selected,
        'med-list-item--disabled': disabled,
        'med-list-item--border-radius': border,
        [`med-list-item--${dsSize}`]: dsSize !== undefined,
      }) }, h("slot", { name: "start" }), h("div", { class: "med-list-item__content" }, h("h3", { class: "med-list-item__title", innerHTML: titulo }), h("h4", { class: "med-list-item__label", innerHTML: label })), h("slot", { name: "end" })));
  }
};
MedListItem.style = medListItemCss;

export { MedListItem as med_list_item };
