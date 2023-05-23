import { r as registerInstance, h, H as Host, i as getElement } from './index-70672e81.js';
import { g as generateMedColor } from './color-a516669b.js';

const tpInputContainerCss = ".sc-tp-input-container-h{--background:hsl(var(--med-color-neutral-2))}.sc-tp-input-container-h{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:var(--background);border-radius:8px;height:40px}.sc-tp-input-container-s>ion-button[slot=start],.sc-tp-input-container-s>ion-icon[slot=start],.sc-tp-input-container-s>ion-button[slot=end],.sc-tp-input-container-s>ion-icon[slot=end]{--color:hsl(var(--med-color-neutral-6)) !important;margin:0 8px 0 8px;stroke:hsl(var(--med-color-neutral-6))}.sc-tp-input-container-s>ion-icon[slot=start],.sc-tp-input-container-s>ion-icon[slot=end]{min-width:24px}.sc-tp-input-container-h.tp-input-container--has-button-start.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.tp-input-container--has-button-start.sc-tp-input-container-s>ion-select,.sc-tp-input-container-h.tp-input-container--has-icon-start.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.tp-input-container--has-icon-start.sc-tp-input-container-s>ion-select{--padding-start:0}.sc-tp-input-container-h.tp--has-button-end.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.tp--has-button-end.sc-tp-input-container-s>ion-select,.sc-tp-input-container-h.tp-input-container--has-icon-end.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.tp-input-container--has-icon-end.sc-tp-input-container-s>ion-select{--padding-end:0}.sc-tp-input-container-h.tp-input-container--has-button-both.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.tp-input-container--has-button-both.sc-tp-input-container-s>ion-select,.sc-tp-input-container-h.tp-input-container--has-icon-both.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.tp-input-container--has-icon-both.sc-tp-input-container-s>ion-select{--padding-start:0;--padding-end:0}.sc-tp-input-container-h.tp-input-container--disabled.sc-tp-input-container-s>ion-button[slot=start],.sc-tp-input-container-h.tp-input-container--disabled.sc-tp-input-container-s>ion-icon[slot=start],.sc-tp-input-container-h.tp-input-container--disabled.sc-tp-input-container-s>ion-button[slot=end],.sc-tp-input-container-h.tp-input-container--disabled.sc-tp-input-container-s>ion-icon[slot=end]{opacity:0.4}.tp-input-container--secondary.sc-tp-input-container-h{--background:hsl(var(--med-color-neutral-3))}.sc-tp-input-container-h.tp-input-container--secondary.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.tp-input-container--secondary.sc-tp-input-container-s>ion-select{--background:hsl(var(--med-color-3))}.tp-input-container.tp-input-container--select-popover-clicked.sc-tp-input-container-h:not(.tp-input-container--disabled){border-radius:8px 8px 0 0 !important;-webkit-transition:border-radius 400ms ease-in-out;transition:border-radius 400ms ease-in-out;pointer-events:none}.sc-tp-input-container-h.tp-input-container.tp-input-container--inverted.sc-tp-input-container-s>ion-icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.tp-input-container.tp-input-container--inverted.tp-input-container--select-popover-clicked.sc-tp-input-container-h:not(.tp-input-container--disabled){border-radius:0 0 8px 8px !important}.tp-input-container.tp-input-container--with-select.sc-tp-input-container-h{cursor:not-allowed}.tp-input-container.tp-input-container--with-select.sc-tp-input-container-h:not(.tp-input-container--disabled){cursor:pointer}.sc-tp-input-container-h.tp-input-container.tp-input-container--with-select:not(.tp-input-container--disabled).sc-tp-input-container-s>ion-icon{-webkit-transition:-webkit-transform 400ms linear;transition:-webkit-transform 400ms linear;transition:transform 400ms linear;transition:transform 400ms linear, -webkit-transform 400ms linear}.sc-tp-input-container-h.tp-input-container.tp-input-container--with-select.tp-input-container--select-popover-clicked:not(.tp-input-container--disabled).sc-tp-input-container-s>ion-icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.sc-tp-input-container-h.tp-input-container.tp-input-container--with-select.tp-input-container--select-popover-clicked.tp-input-container--inverted:not(.tp-input-container--disabled).sc-tp-input-container-s>ion-icon{-webkit-transform:rotate(0deg);transform:rotate(0deg)}.med-color.sc-tp-input-container-h{--background:hsl(var(--med-color-3))}.sc-tp-input-container-h.med-color.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.med-color.sc-tp-input-container-s>ion-select{--background:hsl(var(--med-color-3));--placeholder-color:hsl(var(--med-color-contrast-fixed));--color:hsl(var(--med-color-contrast-fixed))}.sc-tp-input-container-h.med-color.sc-tp-input-container-s>ion-button,.sc-tp-input-container-h.med-color.sc-tp-input-container-s>ion-icon{--color:hsl(var(--med-color-contrast-fixed)) !important;stroke:hsl(var(--med-color-contrast-fixed)) !important}.med-color-neutral.sc-tp-input-container-h{--background:hsl(var(--med-color-neutral))}.sc-tp-input-container-h.med-color-neutral.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.med-color-neutral.sc-tp-input-container-s>ion-select{--background:hsl(var(--med-color-neutral));--placeholder-color:hsl(var(--med-color-neutral-contrast));--color:hsl(var(--med-color-neutral-contrast))}.sc-tp-input-container-h.med-color-neutral.sc-tp-input-container-s>ion-button,.sc-tp-input-container-h.med-color-neutral.sc-tp-input-container-s>ion-icon{--color:hsl(var(--med-color-neutral-contrast)) !important;stroke:hsl(var(--med-color-neutral-contrast)) !important}.med-color-feedback.sc-tp-input-container-h{--background:hsl(var(--med-color-feedback))}.sc-tp-input-container-h.med-color-feedback.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.med-color-feedback.sc-tp-input-container-s>ion-select{--background:hsl(var(--med-color-feedback));--placeholder-color:hsl(var(--med-color-feedback-contrast));--color:hsl(var(--med-color-feedback-contrast))}.sc-tp-input-container-h.med-color-feedback.sc-tp-input-container-s>ion-button,.sc-tp-input-container-h.med-color-feedback.sc-tp-input-container-s>ion-icon{--color:hsl(var(--med-color-feedback-contrast)) !important;stroke:hsl(var(--med-color-feedback-contrast)) !important}";

const TpInputContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Acrescimo ao hostWidth necessário para contabilizar as bordas
     */
    this.selectAndPopoverDiffWidth = 2;
    /**
     * Monitoria se o Select foi clicado e está ativo. A propriedade é usada para
     * aplicar estilização e evitar processamentos desnecessários em alguns métodos
     */
    this.selectWithPopoverClicked = false;
    /**
     * todo
     */
    this.pointerOnSelect = false;
    /**
     * todo
     */
    this.disabled = false;
    /**
     * todo
     */
    this.feedback = false;
    /**
     * todo
     */
    this.inverted = false;
  }
  setClickTarget(e) {
    if (this.disabled)
      return;
    this.clickTarget = e.target;
  }
  catchSelectIconClick(e) {
    const target = e.target;
    const ionSelect = this.host.querySelector("ion-select");
    const shouldOpenOverlay = this.host.contains(target) &&
      ionSelect.hasAttribute("interface") &&
      (target.nodeName === "ION-ICON" ||
        target.nodeName === "TP-INPUT-CONTAINER");
    if (shouldOpenOverlay) {
      ionSelect.open(e);
    }
  }
  setPopoverWidthOnResize() {
    if (!this.selectWithPopoverClicked)
      return;
    const popoverElement = document.querySelector(".select-popover");
    popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty("--width", `${this.host.clientWidth + this.selectAndPopoverDiffWidth}px`);
  }
  setPopoverCharacteristics() {
    if (!this.host.contains(this.clickTarget))
      return;
    this.selectWithPopoverClicked = true;
    this.hostWidth = this.host.clientWidth + this.selectAndPopoverDiffWidth;
    const popoverElement = document.querySelector(".select-popover");
    popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty("--width", `${this.hostWidth}px`);
    if (this.dsName === "secondary") {
      popoverElement.classList.add("tp-popover--secondary");
    }
    if (popoverElement.classList.contains("popover-bottom")) {
      this.inverted = true;
    }
    const { top, bottom, left } = this.host.getBoundingClientRect();
    if (this.inverted) {
      popoverElement.classList.add("tp-popover--inverted");
      popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty("--left", `${left}px`);
      popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty("--bottom", `${window.innerHeight - top}px`);
    }
    else {
      popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty("--left", `${left + 1}px`);
      popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty("--top", `${bottom}px`);
    }
  }
  unsetClikedState() {
    this.selectWithPopoverClicked = false;
  }
  componentDidLoad() {
    const ionSelect = this.host.querySelector("ION-SELECT");
    if (ionSelect) {
      this.pointerOnSelect = true;
      if (!ionSelect.hasAttribute("interface")) {
        ionSelect.interfaceOptions = { cssClass: "tp-hide" };
      }
    }
  }
  render() {
    const { dsColor, dsName, selectWithPopoverClicked, pointerOnSelect, inverted, disabled, feedback, hasButton, hasIcon, } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        "tp-input-container": true,
        "tp-input-container--with-select": pointerOnSelect,
        [`tp-input-container--select-popover-clicked`]: selectWithPopoverClicked,
        [`tp-input-container--inverted`]: inverted,
        "tp-input-container--disabled": disabled,
        "tp-input-container--feedback": feedback,
        [`tp-input-container--${dsName}`]: dsName !== undefined,
        [`tp-input-container--has-button-${hasButton}`]: hasButton !== undefined,
        [`tp-input-container--has-icon-${hasIcon}`]: hasIcon !== undefined,
      }) }, h("slot", { name: "start" }), h("slot", null), h("slot", { name: "end" })));
  }
  get host() { return getElement(this); }
};
TpInputContainer.style = tpInputContainerCss;

export { TpInputContainer as tp_input_container };
