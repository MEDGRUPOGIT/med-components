'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medTheme = require('./med-theme-1bca89cc.js');

const medListItemAccordionCss = ".sc-med-list-item-accordion-h{--padding:6px 16px;--background:transparent;--border-radius:var(--med-border-radius-sm);--font-size-title:14px;--color-title:hsl(var(--med-color-neutral-10));--font-size-label:var(--med-font-size-xxxs);--color-label:hsl(var(--med-color-brand-4));--margin:0;--button-margin:auto}.med-list-item-accordion.sc-med-list-item-accordion-h{background-image:-webkit-gradient(linear, left top, right top, from(hsl(var(--med-color-neutral-2), 1)), color-stop(hsl(var(--med-color-neutral-2), 0.1)), to(hsl(var(--med-color-neutral-2), 0)));background-image:linear-gradient(to right, hsl(var(--med-color-neutral-2), 1), hsl(var(--med-color-neutral-2), 0.1), hsl(var(--med-color-neutral-2), 0));background-size:200% 100%;background-position:100% 0;-webkit-transition:background-image 0.5s linear;transition:background-image 0.5s linear;display:-ms-flexbox;display:flex;padding:var(--padding);-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column}.med-list-item-accordion.sc-med-list-item-accordion-h .med-list-item-accordion__button.sc-med-list-item-accordion{margin-left:var(--button-margin)}.med-list-item-accordion.sc-med-list-item-accordion-h .med-list-item-accordion__item.sc-med-list-item-accordion{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;margin:var(--margin)}.med-list-item-accordion.sc-med-list-item-accordion-h .med-list-item-accordion__sub-item.sc-med-list-item-accordion{width:100%;overflow:auto;height:auto;opacity:1;-webkit-transition:500ms opacity ease;transition:500ms opacity ease}.med-list-item-accordion.sc-med-list-item-accordion-h .med-list-item-accordion__content.sc-med-list-item-accordion{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;text-align:left}.med-list-item-accordion.sc-med-list-item-accordion-h .med-list-item-accordion__title.sc-med-list-item-accordion{margin:0;padding:0;font-size:var(--font-size-title);font-weight:var(--med-font-weight-light);line-height:var(--med-line-height-compressed);color:var(--color-title)}.med-list-item-accordion.sc-med-list-item-accordion-h .med-list-item-accordion__label.sc-med-list-item-accordion{margin:0;padding:0;font-size:var(--font-size-label);font-weight:var(--med-font-weight-regular);line-height:var(--med-line-height-compressed);color:var(--color-label)}.med-list-item-accordion.sc-med-list-item-accordion-h .med-list-item-accordion__border-radius.sc-med-list-item-accordion{border-radius:var(--border-radius)}.med-list-item-accordion--collapsed.sc-med-list-item-accordion-h .med-list-item-accordion__item.sc-med-list-item-accordion{margin:0}.med-list-item-accordion--collapsed.sc-med-list-item-accordion-h .med-list-item-accordion__sub-item.sc-med-list-item-accordion{overflow:hidden;opacity:0;height:0}.med-list-item-accordion--collapsed.sc-med-list-item-accordion-h .med-icon.sc-med-list-item-accordion{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.med-list-item-accordion--selected.sc-med-list-item-accordion-h{background-position:0 0}.sc-med-list-item-accordion-s>[slot=start]{margin-right:var(--med-spacing-inline-base)}.sc-med-list-item-accordion-s>[slot=end]{margin-left:var(--med-spacing-inline-base)}.med-list-item-accordion--xs.sc-med-list-item-accordion-h{--padding:var(--med-spacing-squish-xs)}.med-list-item-accordion--sm.sc-med-list-item-accordion-h{--padding:var(--med-spacing-inset-sm)}.med-list-item-accordion--md.sc-med-list-item-accordion-h{--padding:var(--med-spacing-stretch-md)}.med-list-item-accordion--disabled.sc-med-list-item-accordion-h{opacity:0.5;pointer-events:none}.med-list-item-accordion.med-color.sc-med-list-item-accordion-h{--border-background-selected:hsl(var(--med-color-3));--color-label:hsl(var(--med-color-4))}.sc-med-list-item-accordion-h.med-list-item-accordion.med-color .sc-med-list-item-accordion-s>*{--border-color:hsl(var(--med-color-4))}.med-list-item-accordion.med-color-neutral.sc-med-list-item-accordion-h{--border-background-selected:hsl(var(--med-color-neutral));--color-label:hsl(var(--med-color-neutral))}.sc-med-list-item-accordion-h.med-list-item-accordion.med-color-neutral .sc-med-list-item-accordion-s>*{--border-color:hsl(var(--med-color-neutral))}.med-list-item-accordion.med-color-feedback.sc-med-list-item-accordion-h{--border-background-selected:hsl(var(--med-color-feedback));--color-label:hsl(var(--med-color-feedback))}.sc-med-list-item-accordion-h.med-list-item-accordion.med-color-feedback .sc-med-list-item-accordion-s>*{--border-color:hsl(var(--med-color-feedback))}.sc-med-list-item-accordion-h.med-list-item-accordion .sc-med-list-item-accordion-s>med-list-item{margin:var(--margin)}.sc-med-list-item-accordion-h.med-list-item-accordion .sc-med-list-item-accordion-s>med-list-item:last-child{margin-bottom:0 !important}.med-list-item-accordion--xs.sc-med-list-item-accordion-h .med-list-item-accordion__item.sc-med-list-item-accordion,.sc-med-list-item-accordion-h.med-list-item-accordion--xs .sc-med-list-item-accordion-s>med-list-item{--margin:0 0 var(--med-spacing-stack-nano) 0}.med-list-item-accordion--sm.sc-med-list-item-accordion-h .med-list-item-accordion__item.sc-med-list-item-accordion,.sc-med-list-item-accordion-h.med-list-item-accordion--sm .sc-med-list-item-accordion-s>med-list-item{--margin:0 0 var(--med-spacing-stack-xxxs) 0}.med-list-item-accordion--md.sc-med-list-item-accordion-h .med-list-item-accordion__item.sc-med-list-item-accordion,.sc-med-list-item-accordion-h.med-list-item-accordion--md .sc-med-list-item-accordion-s>med-list-item{--margin:0 0 var(--med-spacing-stack-base) 0}.med-list-item-accordion--lg.sc-med-list-item-accordion-h .med-list-item-accordion__item.sc-med-list-item-accordion,.sc-med-list-item-accordion-h.med-list-item-accordion--lg .sc-med-list-item-accordion-s>med-list-item{--margin:0 0 var(--med-spacing-stack-xxs) 0}";

const MedListItemAccordion = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * TODO
     */
    this.selected = false;
    /**
     * TODO
     */
    this.border = false;
    /**
     * TODO
     */
    this.collapsed = true;
    /**
     * If `true`, the user cannot interact with the button.
     */
    this.disabled = false;
  }
  /**
   * TODO
   */
  async toggle(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.collapsed = !this.collapsed;
  }
  render() {
    const { dsColor, titulo, label, selected, dsSize, border, margin, collapsed, disabled } = this;
    return (index.h(index.Host, { "from-stencil": true, class: medTheme.generateMedColor(dsColor, {
        'med-list-item-accordion': true,
        'med-list-item-accordion--disabled': disabled,
        'med-list-item-accordion--selected': selected,
        'med-list-item-accordion--border-radius': border,
        [`med-list-item-accordion--${dsSize}`]: dsSize !== undefined,
        [`med-list-item-accordion--${margin}`]: margin !== undefined,
        'med-list-item-accordion--collapsed': collapsed
      }) }, index.h("div", { class: "med-list-item-accordion__item" }, index.h("slot", { name: "start" }), index.h("div", { class: "med-list-item-accordion__content" }, index.h("h3", { class: "med-list-item-accordion__title" }, titulo), index.h("h4", { class: "med-list-item-accordion__label" }, label)), index.h("ion-button", { class: "med-list-item-accordion__button", "ds-color": dsColor, "ds-name": "tertiary", "ds-size": "xs", slot: "left", onClick: (event) => { this.toggle(event); } }, index.h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-cima" }))), index.h("div", { class: "med-list-item-accordion__sub-item" }, index.h("slot", { name: "end" }))));
  }
};
MedListItemAccordion.style = medListItemAccordionCss;

exports.med_list_item_accordion = MedListItemAccordion;
