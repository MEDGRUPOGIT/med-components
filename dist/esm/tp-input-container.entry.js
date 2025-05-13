/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, i as h, H as Host, j as getElement } from './index-336c66d9.js';
import { g as generateMedColor } from './color-1d14c71a.js';
import { i as isPlatform } from './platform-a3776365.js';

const tpInputContainerCss = ".sc-tp-input-container-h{--background:hsl(var(--med-color-neutral-2))}.sc-tp-input-container-h{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:var(--background);border-radius:8px;height:40px}.sc-tp-input-container-s>ion-button[slot=start],.sc-tp-input-container-s>ion-icon[slot=start],.sc-tp-input-container-s>ion-button[slot=end],.sc-tp-input-container-s>ion-icon[slot=end]{--color:hsl(var(--med-color-neutral-6)) !important;margin:0 8px 0 8px;stroke:hsl(var(--med-color-neutral-6))}.sc-tp-input-container-s>ion-icon[slot=start],.sc-tp-input-container-s>ion-icon[slot=end]{min-width:24px}.sc-tp-input-container-h.tp-input-container--has-button-start.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.tp-input-container--has-button-start.sc-tp-input-container-s>ion-select,.sc-tp-input-container-h.tp-input-container--has-icon-start.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.tp-input-container--has-icon-start.sc-tp-input-container-s>ion-select{--padding-start:0}.sc-tp-input-container-h.tp--has-button-end.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.tp--has-button-end.sc-tp-input-container-s>ion-select,.sc-tp-input-container-h.tp-input-container--has-icon-end.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.tp-input-container--has-icon-end.sc-tp-input-container-s>ion-select{--padding-end:0}.sc-tp-input-container-h.tp-input-container--has-button-both.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.tp-input-container--has-button-both.sc-tp-input-container-s>ion-select,.sc-tp-input-container-h.tp-input-container--has-icon-both.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.tp-input-container--has-icon-both.sc-tp-input-container-s>ion-select{--padding-start:0;--padding-end:0}.sc-tp-input-container-h.tp-input-container--disabled.sc-tp-input-container-s>ion-button[slot=start],.sc-tp-input-container-h.tp-input-container--disabled.sc-tp-input-container-s>ion-icon[slot=start],.sc-tp-input-container-h.tp-input-container--disabled.sc-tp-input-container-s>ion-button[slot=end],.sc-tp-input-container-h.tp-input-container--disabled.sc-tp-input-container-s>ion-icon[slot=end]{opacity:0.4}.tp-input-container--secondary.sc-tp-input-container-h{--background:hsl(var(--med-color-neutral-3))}.sc-tp-input-container-h.tp-input-container--secondary.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.tp-input-container--secondary.sc-tp-input-container-s>ion-select{--background:hsl(var(--med-color-3))}.tp-input-container.tp-input-container--select-popover-clicked.sc-tp-input-container-h:not(.tp-input-container--disabled){border-radius:8px 8px 0 0 !important;-webkit-transition:border-radius 400ms ease-in-out;transition:border-radius 400ms ease-in-out;pointer-events:none}.sc-tp-input-container-h.tp-input-container.tp-input-container--inverted.sc-tp-input-container-s>ion-icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.tp-input-container.tp-input-container--inverted.tp-input-container--select-popover-clicked.sc-tp-input-container-h:not(.tp-input-container--disabled){border-radius:0 0 8px 8px !important}.tp-input-container.tp-input-container--with-select.sc-tp-input-container-h{cursor:not-allowed}.tp-input-container.tp-input-container--with-select.sc-tp-input-container-h:not(.tp-input-container--disabled){cursor:pointer}.sc-tp-input-container-h.tp-input-container.tp-input-container--with-select:not(.tp-input-container--disabled).sc-tp-input-container-s>ion-icon{-webkit-transition:-webkit-transform 400ms linear;transition:-webkit-transform 400ms linear;transition:transform 400ms linear;transition:transform 400ms linear, -webkit-transform 400ms linear}.sc-tp-input-container-h.tp-input-container.tp-input-container--with-select.tp-input-container--select-popover-clicked:not(.tp-input-container--disabled).sc-tp-input-container-s>ion-icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.sc-tp-input-container-h.tp-input-container.tp-input-container--with-select.tp-input-container--select-popover-clicked.tp-input-container--inverted:not(.tp-input-container--disabled).sc-tp-input-container-s>ion-icon{-webkit-transform:rotate(0deg);transform:rotate(0deg)}.med-color.sc-tp-input-container-h{--background:hsl(var(--med-color-3))}.sc-tp-input-container-h.med-color.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.med-color.sc-tp-input-container-s>ion-select{--background:hsl(var(--med-color-3));--placeholder-color:hsl(var(--med-color-contrast-fixed));--color:hsl(var(--med-color-contrast-fixed))}.sc-tp-input-container-h.med-color.sc-tp-input-container-s>ion-button,.sc-tp-input-container-h.med-color.sc-tp-input-container-s>ion-icon{--color:hsl(var(--med-color-contrast-fixed)) !important;stroke:hsl(var(--med-color-contrast-fixed)) !important}.med-color-neutral.sc-tp-input-container-h{--background:hsl(var(--med-color-neutral))}.sc-tp-input-container-h.med-color-neutral.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.med-color-neutral.sc-tp-input-container-s>ion-select{--background:hsl(var(--med-color-neutral));--placeholder-color:hsl(var(--med-color-neutral-contrast));--color:hsl(var(--med-color-neutral-contrast))}.sc-tp-input-container-h.med-color-neutral.sc-tp-input-container-s>ion-button,.sc-tp-input-container-h.med-color-neutral.sc-tp-input-container-s>ion-icon{--color:hsl(var(--med-color-neutral-contrast)) !important;stroke:hsl(var(--med-color-neutral-contrast)) !important}.med-color-feedback.sc-tp-input-container-h{--background:hsl(var(--med-color-feedback))}.sc-tp-input-container-h.med-color-feedback.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.med-color-feedback.sc-tp-input-container-s>ion-select{--background:hsl(var(--med-color-feedback));--placeholder-color:hsl(var(--med-color-feedback-contrast));--color:hsl(var(--med-color-feedback-contrast))}.sc-tp-input-container-h.med-color-feedback.sc-tp-input-container-s>ion-button,.sc-tp-input-container-h.med-color-feedback.sc-tp-input-container-s>ion-icon{--color:hsl(var(--med-color-feedback-contrast)) !important;stroke:hsl(var(--med-color-feedback-contrast)) !important}";

const TpInputContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Acrescimo ao hostWidth necessário para contabilizar as bordas
     */
    this.selectAndPopoverDiffWidth = 2;
    this.clickTarget = undefined;
    this.selectWithPopoverClicked = false;
    this.pointerOnSelect = false;
    this.dsColor = undefined;
    this.dsName = undefined;
    this.disabled = false;
    this.feedback = false;
    this.inverted = false;
    this.hasButton = undefined;
    this.showPopoverWithDelay = false;
    this.hasIcon = undefined;
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
    if (this.showPopoverWithDelay) {
      this.timeDisabledInputContainer();
    }
  }
  setPopoverWidthOnResize() {
    if (!this.selectWithPopoverClicked)
      return;
    const popoverElement = document.querySelector(".select-popover");
    popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty("--width", `${this.host.clientWidth + this.selectAndPopoverDiffWidth}px`);
    this.setPopoverPosition();
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
    // colors
    if (this.dsColor) {
      popoverElement.setAttribute("ds-color", this.dsColor);
    }
    if (popoverElement.classList.contains("popover-bottom")) {
      this.inverted = true;
    }
    this.setPopoverPosition();
  }
  // fix para conflito com popover API do chrome
  // pode remover depois de migração pro ionic 7
  fixPopover() {
    const popover = document.querySelector("ion-select-popover");
    if (popover === null || popover === void 0 ? void 0 : popover.hasAttribute("popover")) {
      popover.removeAttribute("popover");
    }
  }
  unsetClikedState() {
    this.selectWithPopoverClicked = false;
    if (this.showPopoverWithDelay) {
      this.timeDisabledInputContainer();
    }
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
  disconnectedCallback() {
    if (this.timePopover) {
      clearTimeout(this.timePopover);
    }
  }
  timeDisabledInputContainer() {
    const tpInputContainer = this.host;
    const ionPopover = document.querySelector("ion-popover");
    tpInputContainer.style.pointerEvents = "none";
    if (ionPopover) {
      ionPopover.style.pointerEvents = "none";
    }
    this.timePopover = setTimeout(() => {
      if (ionPopover) {
        ionPopover.style.pointerEvents = "auto";
      }
      tpInputContainer.style.pointerEvents = "auto";
    }, 450);
  }
  isLandscape() {
    return window.matchMedia("(orientation: landscape)").matches;
  }
  setPopoverPosition() {
    const popoverElement = document.querySelector(".select-popover");
    const { top, bottom, left } = this.host.getBoundingClientRect();
    const isIphone = isPlatform("iphone");
    const isIpad = isPlatform("ipad");
    const isLandscape = this.isLandscape();
    if (this.inverted) {
      popoverElement.classList.add("tp-popover--inverted");
      popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty("--left", `${left}px`);
      if (isIphone) {
        popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty("--bottom", isLandscape
          ? `${window.innerHeight - top - 20}px`
          : `${window.innerHeight - top - 33}px`);
      }
      else if (isIpad) {
        popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty("--bottom", `${window.innerHeight - top - 23}px`);
      }
      else {
        popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty("--bottom", `${window.innerHeight - top}px`);
      }
    }
    else {
      popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty("--left", `${left + 1}px`);
      popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty("--top", `${bottom}px`);
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
