import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './color-49be71bc.js';

const tpInputContainerCss = ".sc-tp-input-container-h{--background:hsl(var(--med-color-neutral-2))}.sc-tp-input-container-h{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:var(--background);border-radius:8px;height:40px}.sc-tp-input-container-s>ion-button[slot=start],.sc-tp-input-container-s>ion-icon[slot=start],.sc-tp-input-container-s>ion-button[slot=end],.sc-tp-input-container-s>ion-icon[slot=end]{--color:hsl(var(--med-color-neutral-6)) !important;margin:0 8px 0 8px;stroke:hsl(var(--med-color-neutral-6))}.sc-tp-input-container-h.tp-input-container--has-button-start.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.tp-input-container--has-button-start.sc-tp-input-container-s>ion-select,.sc-tp-input-container-h.tp-input-container--has-icon-start.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.tp-input-container--has-icon-start.sc-tp-input-container-s>ion-select{--padding-start:0}.sc-tp-input-container-h.tp--has-button-end.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.tp--has-button-end.sc-tp-input-container-s>ion-select,.sc-tp-input-container-h.tp-input-container--has-icon-end.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.tp-input-container--has-icon-end.sc-tp-input-container-s>ion-select{--padding-end:0}.sc-tp-input-container-h.tp-input-container--has-button-both.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.tp-input-container--has-button-both.sc-tp-input-container-s>ion-select,.sc-tp-input-container-h.tp-input-container--has-icon-both.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.tp-input-container--has-icon-both.sc-tp-input-container-s>ion-select{--padding-start:0;--padding-end:0}.sc-tp-input-container-h.tp-input-container--disabled.sc-tp-input-container-s>ion-button[slot=start],.sc-tp-input-container-h.tp-input-container--disabled.sc-tp-input-container-s>ion-icon[slot=start],.sc-tp-input-container-h.tp-input-container--disabled.sc-tp-input-container-s>ion-button[slot=end],.sc-tp-input-container-h.tp-input-container--disabled.sc-tp-input-container-s>ion-icon[slot=end]{opacity:0.4}.tp-input-container--secondary.sc-tp-input-container-h{--background:hsl(var(--med-color-neutral-3))}.sc-tp-input-container-h.tp-input-container--secondary.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.tp-input-container--secondary.sc-tp-input-container-s>ion-select{--background:hsl(var(--med-color-3))}.med-color.sc-tp-input-container-h{--background:hsl(var(--med-color-3))}.sc-tp-input-container-h.med-color.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.med-color.sc-tp-input-container-s>ion-select{--background:hsl(var(--med-color-3));--placeholder-color:hsl(var(--med-color-contrast-fixed));--color:hsl(var(--med-color-contrast-fixed))}.sc-tp-input-container-h.med-color.sc-tp-input-container-s>ion-button,.sc-tp-input-container-h.med-color.sc-tp-input-container-s>ion-icon{--color:hsl(var(--med-color-contrast-fixed)) !important;stroke:hsl(var(--med-color-contrast-fixed)) !important}.med-color-neutral.sc-tp-input-container-h{--background:hsl(var(--med-color-neutral))}.sc-tp-input-container-h.med-color-neutral.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.med-color-neutral.sc-tp-input-container-s>ion-select{--background:hsl(var(--med-color-neutral));--placeholder-color:hsl(var(--med-color-neutral-contrast));--color:hsl(var(--med-color-neutral-contrast))}.sc-tp-input-container-h.med-color-neutral.sc-tp-input-container-s>ion-button,.sc-tp-input-container-h.med-color-neutral.sc-tp-input-container-s>ion-icon{--color:hsl(var(--med-color-neutral-contrast)) !important;stroke:hsl(var(--med-color-neutral-contrast)) !important}.med-color-feedback.sc-tp-input-container-h{--background:hsl(var(--med-color-feedback))}.sc-tp-input-container-h.med-color-feedback.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.med-color-feedback.sc-tp-input-container-s>ion-select{--background:hsl(var(--med-color-feedback));--placeholder-color:hsl(var(--med-color-feedback-contrast));--color:hsl(var(--med-color-feedback-contrast))}.sc-tp-input-container-h.med-color-feedback.sc-tp-input-container-s>ion-button,.sc-tp-input-container-h.med-color-feedback.sc-tp-input-container-s>ion-icon{--color:hsl(var(--med-color-feedback-contrast)) !important;stroke:hsl(var(--med-color-feedback-contrast)) !important}";

const TpInputContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * todo
     */
    this.disabled = false;
    /**
     * todo
     */
    this.feedback = false;
  }
  render() {
    const { dsColor, dsName, disabled, feedback, hasButton, hasIcon } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'tp-input-container': true,
        'tp-input-container--disabled': disabled,
        'tp-input-container--feedback': feedback,
        [`tp-input-container--${dsName}`]: dsName !== undefined,
        [`tp-input-container--has-button-${hasButton}`]: hasButton !== undefined,
        [`tp-input-container--has-icon-${hasIcon}`]: hasIcon !== undefined,
      }) }, h("slot", { name: "start" }), h("slot", null), h("slot", { name: "end" })));
  }
};
TpInputContainer.style = tpInputContainerCss;

export { TpInputContainer as tp_input_container };