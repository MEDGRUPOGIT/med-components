import { r as registerInstance, e as createEvent, h, H as Host, i as getElement } from './index-70672e81.js';

const accordionItemCss = ":host{--margin:10px;--background-page:hsl(var(--med-color-neutral-1));--background-content:hsl(var(--med-color-neutral-2));--background-header:linear-gradient(to right, hsl(var(--med-color-brand-1)), hsl(var(--med-color-neutral-2)), hsl(var(--med-color-neutral-2)));--border-radius:var(--med-border-radius-sm)}:host(.accordion-item){display:block;will-change:transform;border-bottom:var(--margin) solid var(--background-page);overflow:hidden}:host(.accordion-item) .accordion-item__header{background:var(--background-header);position:relative;-webkit-transition:background 0.5s linear;transition:background 0.5s linear;background-size:200% 100%;background-position:100% 0}:host(.accordion-item) .accordion-item__content{display:none;background-color:var(--background-content);z-index:-1;position:relative}:host(.accordion-item--open.accordion-item--background) .accordion-item__header{background-position:0 0}:host(.med-color.accordion-item--background){--background-header:linear-gradient(to right, hsl(var(--med-color-1)), hsl(var(--med-color-neutral-2)), hsl(var(--med-color-neutral-2)))}";

const AccordionItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.toggle = createEvent(this, "toggle", 7);
    /**
      * Define se o componente irá ter background quando aberto.
      */
    this.background = false;
    /**
      * Desabilita o componente.
      */
    this.disable = false;
    /**
      * Abre programaticamente o componente.
      */
    this.open = false;
    /**
      * Desabilita o componente.
      */
    this.headerToggle = true;
    this.isOpen = false;
    this.itemId = `accordion-item-${itemId++}`;
    this.isTransitioning = false;
    this.onClick = () => {
      if (this.disable)
        return;
      if (this.headerToggle) {
        this.toggleOpen();
      }
    };
  }
  watchPropHandler(newValue) {
    this.toggleOpen();
  }
  componentDidLoad() {
    if (this.open) {
      this.toggleOpen();
    }
  }
  toggleOpen() {
    if (this.isTransitioning) {
      return;
    }
    this.isOpen = !this.isOpen;
    this.isTransitioning = true;
    this.toggle.emit({
      element: this.hostElement,
      elementId: this.itemId,
      content: this.contentElement,
      shouldOpen: this.isOpen,
      startTransition: () => {
        this.isTransitioning = true;
      },
      endTransition: () => {
        this.isTransitioning = false;
      },
      setClosed: () => {
        this.isOpen = false;
      },
    });
  }
  render() {
    const { itemId, isOpen, background } = this;
    return (h(Host, { id: itemId, "from-stencil": true, class: {
        'accordion-item': true,
        'accordion-item--background': background,
        'accordion-item--open': isOpen,
      } }, h("div", { class: "accordion-item__header", onClick: () => this.onClick() }, h("slot", { name: "header" })), h("div", { class: "accordion-item__content", ref: (el) => this.contentElement = el }, h("slot", { name: "content" }))));
  }
  get hostElement() { return getElement(this); }
  static get watchers() { return {
    "open": ["watchPropHandler"]
  }; }
};
let itemId = 0;
AccordionItem.style = accordionItemCss;

export { AccordionItem as accordion_item };
