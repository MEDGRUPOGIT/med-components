/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, f as createEvent, i as h, H as Host, j as getElement } from './index-336c66d9.js';
import { g as getIonMode } from './ionic-global-908d8380.js';
import './platform-a3776365.js';

/**
 * Logs a warning to the console with an Ionic prefix
 * to indicate the library that is warning the developer.
 *
 * @param message - The string message to be logged to the console.
 */
const printIonWarning = (message, ...params) => {
  return console.warn(`[Ionic Warning]: ${message}`, ...params);
};

const tpAccordionGroupIosCss = ":host{display:block}:host(.accordion-group-expand-inset){margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.accordion-group-expand-inset){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){border-bottom:none}";

const tpAccordionGroupMdCss = ":host{display:block}:host(.accordion-group-expand-inset){margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.accordion-group-expand-inset){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion){-webkit-box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;border-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion):first-of-type{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";

const TpAccordionGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.ionValueChange = createEvent(this, "ionValueChange", 7);
    this.animated = true;
    this.multiple = undefined;
    this.value = undefined;
    this.disabled = false;
    this.readonly = false;
    this.expand = "compact";
  }
  valueChanged() {
    const { value, multiple } = this;
    if (!multiple && Array.isArray(value)) {
      /**
       * We do some processing on the `value` array so
       * that it looks more like an array when logged to
       * the console.
       * Example given ['a', 'b']
       * Default toString() behavior: a,b
       * Custom behavior: ['a', 'b']
       */
      printIonWarning(`ion-accordion-group was passed an array of values, but multiple="false". This is incorrect usage and may result in unexpected behaviors. To dismiss this warning, pass a string to the "value" property when multiple="false".

  Value Passed: [${value.map((v) => `'${v}'`).join(", ")}]
`, this.el);
    }
    /**
     * Do not use `value` here as that will be
     * not account for the adjustment we make above.
     */
    this.ionValueChange.emit({ value: this.value });
  }
  async disabledChanged() {
    const { disabled } = this;
    const accordions = await this.getAccordions();
    for (const accordion of accordions) {
      accordion.disabled = disabled;
    }
  }
  async readonlyChanged() {
    const { readonly } = this;
    const accordions = await this.getAccordions();
    for (const accordion of accordions) {
      accordion.readonly = readonly;
    }
  }
  async onKeydown(ev) {
    const activeElement = document.activeElement;
    if (!activeElement) {
      return;
    }
    /**
     * Make sure focus is in the header, not the body, of the accordion. This ensures
     * that if there are any interactable elements in the body, their keyboard
     * interaction doesn't get stolen by the accordion. Example: using up/down keys
     * in ion-textarea.
     */
    const activeAccordionHeader = activeElement.closest('ion-accordion [slot="header"]');
    if (!activeAccordionHeader) {
      return;
    }
    const accordionEl = activeElement.tagName === "ION-ACCORDION"
      ? activeElement
      : activeElement.closest("ion-accordion");
    if (!accordionEl) {
      return;
    }
    const closestGroup = accordionEl.closest("ion-accordion-group");
    if (closestGroup !== this.el) {
      return;
    }
    // If the active accordion is not in the current array of accordions, do not do anything
    const accordions = await this.getAccordions();
    const startingIndex = accordions.findIndex((a) => a === accordionEl);
    if (startingIndex === -1) {
      return;
    }
    let accordion;
    if (ev.key === "ArrowDown") {
      accordion = this.findNextAccordion(accordions, startingIndex);
    }
    else if (ev.key === "ArrowUp") {
      accordion = this.findPreviousAccordion(accordions, startingIndex);
    }
    else if (ev.key === "Home") {
      accordion = accordions[0];
    }
    else if (ev.key === "End") {
      accordion = accordions[accordions.length - 1];
    }
    if (accordion !== undefined && accordion !== activeElement) {
      accordion.focus();
    }
  }
  async componentDidLoad() {
    if (this.disabled) {
      this.disabledChanged();
    }
    if (this.readonly) {
      this.readonlyChanged();
    }
  }
  /**
   * Sets the value property and emits ionChange.
   * This should only be called when the user interacts
   * with the accordion and not for any update
   * to the value property. The exception is when
   * the app sets the value of a single-select
   * accordion group to an array.
   */
  setValue(accordionValue) {
    const value = (this.value = accordionValue);
    this.ionChange.emit({ value });
  }
  /**
   * This method is used to ensure that the value
   * of ion-accordion-group is being set in a valid
   * way. This method should only be called in
   * response to a user generated action.
   * @internal
   */
  async requestAccordionToggle(accordionValue, accordionExpand) {
    const { multiple, value, readonly, disabled } = this;
    if (readonly || disabled) {
      return;
    }
    if (accordionExpand) {
      /**
       * If group accepts multiple values
       * check to see if value is already in
       * in values array. If not, add it
       * to the array.
       */
      if (multiple) {
        const groupValue = value !== null && value !== void 0 ? value : [];
        const processedValue = Array.isArray(groupValue)
          ? groupValue
          : [groupValue];
        const valueExists = processedValue.find((v) => v === accordionValue);
        if (valueExists === undefined && accordionValue !== undefined) {
          this.setValue([...processedValue, accordionValue]);
        }
      }
      else {
        this.setValue(accordionValue);
      }
    }
    else {
      /**
       * If collapsing accordion, either filter the value
       * out of the values array or unset the value.
       */
      if (multiple) {
        const groupValue = value !== null && value !== void 0 ? value : [];
        const processedValue = Array.isArray(groupValue)
          ? groupValue
          : [groupValue];
        this.setValue(processedValue.filter((v) => v !== accordionValue));
      }
      else {
        this.setValue(undefined);
      }
    }
  }
  findNextAccordion(accordions, startingIndex) {
    const nextAccordion = accordions[startingIndex + 1];
    if (nextAccordion === undefined) {
      return accordions[0];
    }
    return nextAccordion;
  }
  findPreviousAccordion(accordions, startingIndex) {
    const prevAccordion = accordions[startingIndex - 1];
    if (prevAccordion === undefined) {
      return accordions[accordions.length - 1];
    }
    return prevAccordion;
  }
  /**
   * @internal
   */
  async getAccordions() {
    return Array.from(this.el.querySelectorAll(":scope > ion-accordion"));
  }
  render() {
    const { disabled, readonly, expand } = this;
    const mode = getIonMode(this);
    return (h(Host, { class: {
        [mode]: true,
        "accordion-group-disabled": disabled,
        "accordion-group-readonly": readonly,
        [`accordion-group-expand-${expand}`]: true,
      }, role: "presentation" }, h("slot", null)));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "value": ["valueChanged"],
    "disabled": ["disabledChanged"],
    "readonly": ["readonlyChanged"]
  }; }
};
TpAccordionGroup.style = {
  ios: tpAccordionGroupIosCss,
  md: tpAccordionGroupMdCss
};

export { TpAccordionGroup as tp_accordion_group };
