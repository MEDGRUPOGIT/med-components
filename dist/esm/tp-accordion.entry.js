/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, i as h, H as Host, j as getElement } from './index-336c66d9.js';
import { g as generateMedColor } from './color-1d14c71a.js';
import { c as config, g as getIonMode } from './ionic-global-908d8380.js';
import { r as raf, t as transitionEndAsync, a as addEventListener, b as removeEventListener, g as getElementRoot } from './helpers-7c8ceac4.js';
import './platform-a3776365.js';

/* Ionicons v5.5.4, ES Modules */
const chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";

const tpAccordionIosCss = ":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}:host(.accordion-next) ::slotted(ion-item[slot=header]){--border-width:0.55px 0px 0.55px 0px}";

const tpAccordionMdCss = ":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}";

const TpAccordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.updateListener = () => this.updateState(false);
    this.setItemDefaults = () => {
      const ionItem = this.getSlottedHeaderIonItem();
      if (!ionItem) {
        return;
      }
      /**
       * For a11y purposes, we make
       * the ion-item a button so users
       * can tab to it and use keyboard
       * navigation to get around.
       */
      ionItem.button = true;
      ionItem.detail = false;
      /**
       * By default, the lines in an
       * item should be full here, but
       * only do that if a user has
       * not explicitly overridden them
       */
      if (ionItem.lines === undefined) {
        ionItem.lines = "full";
      }
    };
    this.getSlottedHeaderIonItem = () => {
      const { headerEl } = this;
      if (!headerEl) {
        return;
      }
      /**
       * Get the first ion-item
       * slotted in the header slot
       */
      const slot = headerEl.querySelector("slot");
      if (!slot) {
        return;
      }
      // This is not defined in unit tests
      if (slot.assignedElements === undefined)
        return;
      return slot.assignedElements().find((el) => el.tagName === "ION-ITEM");
    };
    this.setAria = (expanded = false) => {
      const ionItem = this.getSlottedHeaderIonItem();
      if (!ionItem) {
        return;
      }
      /**
       * Get the native <button> element inside of
       * ion-item because that is what will be focused
       */
      const root = getElementRoot(ionItem);
      const button = root.querySelector("button");
      if (!button) {
        return;
      }
      button.setAttribute("aria-expanded", `${expanded}`);
    };
    this.slotToggleIcon = () => {
      const ionItem = this.getSlottedHeaderIonItem();
      if (!ionItem) {
        return;
      }
      const { toggleIconSlot, toggleIcon } = this;
      /**
       * Check if there already is a toggle icon.
       * If so, do not add another one.
       */
      const existingToggleIcon = ionItem.querySelector(".ion-accordion-toggle-icon");
      if (existingToggleIcon) {
        return;
      }
      const iconEl = document.createElement("ion-icon");
      iconEl.slot = toggleIconSlot;
      iconEl.lazy = false;
      iconEl.classList.add("ion-accordion-toggle-icon");
      iconEl.icon = toggleIcon;
      iconEl.setAttribute("aria-hidden", "true");
      //ionItem.appendChild(iconEl);
    };
    this.expandAccordion = (initialUpdate = false) => {
      const { contentEl, contentElWrapper } = this;
      if (initialUpdate ||
        contentEl === undefined ||
        contentElWrapper === undefined) {
        this.state = 4 /* AccordionState.Expanded */;
        return;
      }
      if (this.state === 4 /* AccordionState.Expanded */) {
        return;
      }
      if (this.currentRaf !== undefined) {
        cancelAnimationFrame(this.currentRaf);
      }
      if (this.shouldAnimate()) {
        raf(() => {
          this.state = 8 /* AccordionState.Expanding */;
          this.currentRaf = raf(async () => {
            const contentHeight = contentElWrapper.offsetHeight;
            const waitForTransition = transitionEndAsync(contentEl, 2000);
            contentEl.style.setProperty("max-height", `${contentHeight}px`);
            await waitForTransition;
            this.state = 4 /* AccordionState.Expanded */;
            contentEl.style.removeProperty("max-height");
          });
        });
      }
      else {
        this.state = 4 /* AccordionState.Expanded */;
      }
    };
    this.collapseAccordion = (initialUpdate = false) => {
      const { contentEl } = this;
      if (initialUpdate || contentEl === undefined) {
        this.state = 1 /* AccordionState.Collapsed */;
        return;
      }
      if (this.state === 1 /* AccordionState.Collapsed */) {
        return;
      }
      if (this.currentRaf !== undefined) {
        cancelAnimationFrame(this.currentRaf);
      }
      if (this.shouldAnimate()) {
        this.currentRaf = raf(async () => {
          const contentHeight = contentEl.offsetHeight;
          contentEl.style.setProperty("max-height", `${contentHeight}px`);
          raf(async () => {
            const waitForTransition = transitionEndAsync(contentEl, 2000);
            this.state = 2 /* AccordionState.Collapsing */;
            await waitForTransition;
            this.state = 1 /* AccordionState.Collapsed */;
            contentEl.style.removeProperty("max-height");
          });
        });
      }
      else {
        this.state = 1 /* AccordionState.Collapsed */;
      }
    };
    /**
     * Helper function to determine if
     * something should animate.
     * If prefers-reduced-motion is set
     * then we should not animate, regardless
     * of what is set in the config.
     */
    this.shouldAnimate = () => {
      if (typeof window === "undefined") {
        return false;
      }
      const prefersReducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        return false;
      }
      const animated = config.get("animated", true);
      if (!animated) {
        return false;
      }
      if (this.accordionGroupEl && !this.accordionGroupEl.animated) {
        return false;
      }
      return true;
    };
    this.updateState = async (initialUpdate = false) => {
      const accordionGroup = this.accordionGroupEl;
      const accordionValue = this.value;
      if (!accordionGroup) {
        return;
      }
      const value = accordionGroup.value;
      const shouldExpand = Array.isArray(value)
        ? value.includes(accordionValue)
        : value === accordionValue;
      if (shouldExpand) {
        this.expandAccordion(initialUpdate);
        this.isNext = this.isPrevious = false;
      }
      else {
        this.collapseAccordion(initialUpdate);
        /**
         * When using popout or inset,
         * the collapsed accordion items
         * may need additional border radius
         * applied. Check to see if the
         * next or previous accordion is selected.
         */
        const nextAccordion = this.getNextSibling();
        const nextAccordionValue = nextAccordion === null || nextAccordion === void 0 ? void 0 : nextAccordion.value;
        if (nextAccordionValue !== undefined) {
          this.isPrevious = Array.isArray(value)
            ? value.includes(nextAccordionValue)
            : value === nextAccordionValue;
        }
        const previousAccordion = this.getPreviousSibling();
        const previousAccordionValue = previousAccordion === null || previousAccordion === void 0 ? void 0 : previousAccordion.value;
        if (previousAccordionValue !== undefined) {
          this.isNext = Array.isArray(value)
            ? value.includes(previousAccordionValue)
            : value === previousAccordionValue;
        }
      }
    };
    this.getNextSibling = () => {
      if (!this.el) {
        return;
      }
      const nextSibling = this.el.nextElementSibling;
      if ((nextSibling === null || nextSibling === void 0 ? void 0 : nextSibling.tagName) !== "ION-ACCORDION") {
        return;
      }
      return nextSibling;
    };
    this.getPreviousSibling = () => {
      if (!this.el) {
        return;
      }
      const previousSibling = this.el.previousElementSibling;
      if ((previousSibling === null || previousSibling === void 0 ? void 0 : previousSibling.tagName) !== "ION-ACCORDION") {
        return;
      }
      return previousSibling;
    };
    this.state = 1 /* AccordionState.Collapsed */;
    this.isNext = false;
    this.isPrevious = false;
    this.dsColor = undefined;
    this.value = `ion-accordion-${accordionIds++}`;
    this.disabled = false;
    this.readonly = false;
    this.toggleIcon = chevronDown;
    this.toggleIconSlot = "end";
  }
  valueChanged() {
    this.updateState();
  }
  connectedCallback() {
    var _a;
    const accordionGroupEl = (this.accordionGroupEl =
      (_a = this.el) === null || _a === void 0 ? void 0 : _a.closest("tp-accordion-group"));
    if (accordionGroupEl) {
      this.updateState(true);
      addEventListener(accordionGroupEl, "ionValueChange", this.updateListener);
    }
  }
  disconnectedCallback() {
    const accordionGroupEl = this.accordionGroupEl;
    if (accordionGroupEl) {
      removeEventListener(accordionGroupEl, "ionValueChange", this.updateListener);
    }
  }
  componentDidLoad() {
    this.setItemDefaults();
    this.slotToggleIcon();
    /**
     * We need to wait a tick because we
     * just set ionItem.button = true and
     * the button has not have been rendered yet.
     */
    raf(() => {
      /**
       * Set aria label on button inside of ion-item
       * once the inner content has been rendered.
       */
      const expanded = this.state === 4 /* AccordionState.Expanded */ ||
        this.state === 8 /* AccordionState.Expanding */;
      this.setAria(expanded);
    });
  }
  toggleExpanded() {
    const { accordionGroupEl, value, state } = this;
    if (accordionGroupEl) {
      /**
       * Because the accordion group may or may
       * not allow multiple accordions open, we
       * need to request the toggling of this
       * accordion and the accordion group will
       * make the decision on whether or not
       * to allow it.
       */
      const expand = state === 1 /* AccordionState.Collapsed */ ||
        state === 2 /* AccordionState.Collapsing */;
      accordionGroupEl.requestAccordionToggle(value, expand);
    }
  }
  render() {
    const { disabled, readonly, dsColor } = this;
    const mode = getIonMode(this);
    const expanded = this.state === 4 /* AccordionState.Expanded */ ||
      this.state === 8 /* AccordionState.Expanding */;
    const headerPart = expanded ? "header expanded" : "header";
    const contentPart = expanded ? "content expanded" : "content";
    this.setAria(expanded);
    return (h(Host, { class: generateMedColor(dsColor, {
        [mode]: true,
        "accordion-expanding": this.state === 8 /* AccordionState.Expanding */,
        "accordion-expanded": this.state === 4 /* AccordionState.Expanded */,
        "accordion-collapsing": this.state === 2 /* AccordionState.Collapsing */,
        "accordion-collapsed": this.state === 1 /* AccordionState.Collapsed */,
        "accordion-next": this.isNext,
        "accordion-previous": this.isPrevious,
        "accordion-disabled": disabled,
        "accordion-readonly": readonly,
        "accordion-animated": this.shouldAnimate(),
      }) }, h("div", { onClick: () => this.toggleExpanded(), id: "header", part: headerPart, "aria-controls": "content", ref: (headerEl) => (this.headerEl = headerEl) }, h("slot", { name: "header" })), h("div", { id: "content", part: contentPart, role: "region", "aria-labelledby": "header", ref: (contentEl) => (this.contentEl = contentEl) }, h("div", { id: "content-wrapper", ref: (contentElWrapper) => (this.contentElWrapper = contentElWrapper) }, h("slot", { name: "content" })))));
  }
  static get delegatesFocus() { return true; }
  get el() { return getElement(this); }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
};
let accordionIds = 0;
TpAccordion.style = {
  ios: tpAccordionIosCss,
  md: tpAccordionMdCss
};

export { TpAccordion as tp_accordion };
