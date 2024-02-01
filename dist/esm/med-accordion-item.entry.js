/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, d as createEvent, h, H as Host, f as getElement } from './index-27668d5b.js';
import { g as generateMedColor } from './color-f9402468.js';

const medAccordionItemCss = ":host{--background-header:linear-gradient(to right, hsl(var(--med-color-brand-1)), hsl(var(--med-color-neutral-2)), hsl(var(--med-color-neutral-2)));--background-content:hsl(var(--med-color-neutral-2));--icon-color:hsl(var(--med-color-neutral-10));--border-radius:8px;--padding:16px;--icon-font-size:24px;--align-items:initial}:host(.med-accordion-item){display:block;border-radius:var(--border-radius)}:host(.med-accordion-item) .med-accordion-item__header-container{width:100%;cursor:pointer;z-index:1;display:-ms-flexbox;display:flex;-ms-flex-align:var(--align-items);align-items:var(--align-items)}:host(.med-accordion-item) .med-accordion-item__header{-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--padding);background:var(--background-header);border-radius:var(--border-radius);position:relative;width:100%;-webkit-transition:background 0.5s linear;transition:background 0.5s linear;background-size:200% 100%;background-position:100% 0}:host(.med-accordion-item) .med-accordion-item__heading{width:100%}:host(.med-accordion-item) .med-accordion-item__icon-container{display:-ms-flexbox;display:flex}:host(.med-accordion-item) .med-accordion-item__icon-container--left{padding-right:8px}:host(.med-accordion-item) .med-accordion-item__icon-container--right{padding-left:8px;margin-left:auto}:host(.med-accordion-item) .med-accordion-item__content{display:none;background:var(--background-content);border-bottom-left-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);z-index:0}:host(.med-accordion-item) .header-container__end{margin-left:auto}:host(.med-accordion-item) .header-container__middle{width:var(--middle-width)}:host(.med-accordion-item--no-border){--border-radius:0}:host(.med-accordion-item--keep-border) .med-accordion-item__header{border-bottom-left-radius:8px !important;border-bottom-right-radius:8px !important}::slotted(ion-progress-bar){position:absolute;left:0;bottom:0;border-bottom-left-radius:4px;border-bottom-right-radius:4px}:host(.med-accordion-item--open.med-accordion-item--background) .med-accordion-item__header{background-position:0 0}:host(.med-accordion-item--open) ::slotted(ion-progress-bar){border-bottom-left-radius:0;border-bottom-right-radius:0}:host(.med-color.med-accordion-item--background){--background-header:linear-gradient(to right, hsl(var(--med-color-1)), hsl(var(--med-color-neutral-2)), hsl(var(--med-color-neutral-2)))}";

const MedAccordionItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toggle = createEvent(this, "toggle", 7);
        this.opened = createEvent(this, "opened", 7);
        this.medClick = createEvent(this, "medClick", 7);
        this.isTransitioning = false;
        this.onClick = (slot) => {
            if (!this.canCollapse) {
                return;
            }
            if (!this.slotsToggle.length || this.slotsToggle.indexOf(slot) >= 0) {
                this.toggleOpen();
            }
        };
        this.dsColor = undefined;
        this.noBorder = false;
        this.background = false;
        this.canCollapse = true;
        this.isOpened = false;
        this.slotsToggle = [];
        this.isOpen = false;
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
        return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
                'med-accordion-item': true,
                'med-accordion-item--no-border': noBorder,
                'med-accordion-item--open': isOpen,
                'med-accordion-item--background': background,
            }) }, h("div", { class: "med-accordion-item__header", onClick: () => this.onHeaderClick(), ref: (el) => this.header = el }, h("div", { class: "med-accordion-item__header-container" }, h("div", { class: "header-container__start", onClick: () => this.onClick('start') }, h("slot", { name: "start" })), h("div", { class: "header-container__middle", onClick: () => this.onClick('middle') }, h("slot", { name: "middle" })), h("div", { class: "header-container__end", onClick: () => this.onClick('end') }, h("slot", { name: "end" }))), h("div", null, h("slot", { name: "auxiliar" })), h("div", { onClick: () => this.onClick('middle') }, h("slot", { name: "full-header" }))), h("div", { class: "med-accordion-item__content", ref: (el) => this.content = el }, h("slot", { name: "content" }))));
    }
    get hostElement() { return getElement(this); }
    static get watchers() { return {
        "isOpened": ["watchPropHandler"]
    }; }
};
MedAccordionItem.style = medAccordionItemCss;

export { MedAccordionItem as med_accordion_item };
