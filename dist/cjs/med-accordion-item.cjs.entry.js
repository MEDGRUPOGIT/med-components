'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medTheme = require('./med-theme-42add9fc.js');

const medAccordionItemCss = ":host{--background-header:linear-gradient(to right, hsl(var(--med-color-brand-1)), hsl(var(--med-color-neutral-2)), hsl(var(--med-color-neutral-2)));--background-content:hsl(var(--med-color-neutral-2));--icon-color:hsl(var(--med-color-neutral-10));--border-radius:var(--med-border-radius-sm);--padding:var(--med-spacing-inset-sm);--icon-font-size:24px}:host(.med-accordion-item){display:block;border-radius:var(--border-radius)}:host(.med-accordion-item) .med-accordion-item__header-container{width:100%;cursor:pointer;z-index:1;display:-ms-flexbox;display:flex}:host(.med-accordion-item) .med-accordion-item__header{-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--padding);background:var(--background-header);border-radius:var(--border-radius);position:relative;width:100%;-webkit-transition:background 0.5s linear;transition:background 0.5s linear;background-size:200% 100%;background-position:100% 0}:host(.med-accordion-item) .med-accordion-item__heading{width:100%}:host(.med-accordion-item) .med-accordion-item__icon-container{display:-ms-flexbox;display:flex}:host(.med-accordion-item) .med-accordion-item__icon-container--left{padding-right:var(--med-spacing-inline-xxxs)}:host(.med-accordion-item) .med-accordion-item__icon-container--right{padding-left:var(--med-spacing-inline-xxxs);margin-left:auto}:host(.med-accordion-item) .med-accordion-item__content{display:none;overflow:auto;background:var(--background-content);border-bottom-left-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);z-index:0}:host(.med-accordion-item) .header-container__end{margin-left:auto}:host(.med-accordion-item--no-border){--border-radius:0}:host(.med-accordion-item--keep-border) .med-accordion-item__header{border-bottom-left-radius:var(--med-border-radius-sm) !important;border-bottom-right-radius:var(--med-border-radius-sm) !important}::slotted(ion-progress-bar){position:absolute;left:0;bottom:0;border-bottom-left-radius:4px;border-bottom-right-radius:4px}:host(.med-accordion-item--open.med-accordion-item--background) .med-accordion-item__header{background-position:0 0}:host(.med-accordion-item--open) ::slotted(ion-progress-bar){border-bottom-left-radius:0;border-bottom-right-radius:0}:host(.med-color.med-accordion-item--background){--background-header:linear-gradient(to right, hsl(var(--med-color-1)), hsl(var(--med-color-neutral-2)), hsl(var(--med-color-neutral-2)))}";

const MedAccordionItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.toggle = index.createEvent(this, "toggle", 7);
    this.opened = index.createEvent(this, "opened", 7);
    this.medClick = index.createEvent(this, "medClick", 7);
    /**
      * Define a variação da borda do componente.
      */
    this.noBorder = false;
    /**
      * Define se o componente irá ter background quando aberto.
      */
    this.background = false;
    /**
     * Permite que a abertura do accordion seja bloqueada pelo front.
     */
    this.canCollapse = true;
    /**
     * Permite que o front consiga definir quando o accordion vem aberto ou fechado.
     */
    this.isOpened = false;
    /**
    * Permite que o front consiga definir quando o accordion vem aberto ou fechado.
    */
    this.slotsToggle = [];
    this.isOpen = false;
    this.isTransitioning = false;
    this.onClick = (slot) => {
      if (!this.canCollapse) {
        return;
      }
      if (!this.slotsToggle.length || this.slotsToggle.indexOf(slot) >= 0) {
        this.toggleOpen();
      }
    };
  }
  watchPropHandler(newValue) {
    this.toggleOpen();
  }
  componentDidLoad() {
    if (this.isOpened) {
      this.toggleOpen();
    }
  }
  toggleOpen() {
    if (this.isTransitioning) {
      return;
    }
    this.isOpen = !this.isOpen;
    this.opened.emit(this.isOpen);
    this.isTransitioning = true;
    this.toggle.emit({
      element: this.hostElement,
      content: this.content,
      header: this.header,
      shouldOpen: this.isOpen,
      startTransition: () => {
        this.isTransitioning = true;
      },
      endTransition: () => {
        this.isTransitioning = false;
      },
      setClosed: () => {
        this.isOpen = false;
        this.opened.emit(this.isOpen);
      },
    });
  }
  onHeaderClick() {
    this.medClick.emit();
  }
  render() {
    const { dsColor, noBorder, isOpen, background } = this;
    return (index.h(index.Host, { "from-stencil": true, class: medTheme.generateMedColor(dsColor, {
        'med-accordion-item': true,
        'med-accordion-item--no-border': noBorder,
        'med-accordion-item--open': isOpen,
        'med-accordion-item--background': background,
      }) }, index.h("div", { class: "med-accordion-item__header", onClick: () => this.onHeaderClick(), ref: (el) => this.header = el }, index.h("div", { class: "med-accordion-item__header-container" }, index.h("div", { class: "header-container__start", onClick: () => this.onClick('start') }, index.h("slot", { name: "start" })), index.h("div", { class: "header-container__middle", onClick: () => this.onClick('middle') }, index.h("slot", { name: "middle" })), index.h("div", { class: "header-container__end", onClick: () => this.onClick('end') }, index.h("slot", { name: "end" }))), index.h("div", null, index.h("slot", { name: "auxiliar" }))), index.h("div", { class: "med-accordion-item__content", ref: (el) => this.content = el }, index.h("slot", { name: "content" }))));
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "isOpened": ["watchPropHandler"]
  }; }
};
MedAccordionItem.style = medAccordionItemCss;

exports.med_accordion_item = MedAccordionItem;
