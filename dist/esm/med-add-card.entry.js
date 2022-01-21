import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-33df6a63.js';

const medAddCardCss = ":host(.med-add-card){cursor:pointer}.med-add-card__container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.med-add-card__icon{stroke:hsl(var(--med-color-neutral-10));margin-right:18px}";

const MedAddCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { dsColor, titulo, iconName } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-add-card': true,
      }) }, h("med-base", { class: "med-add-card__container", "spacing-h": "s16", "spacing-v": "s22" }, h("ion-icon", { class: "med-icon med-add-card__icon", name: iconName }), h("med-type", { token: "p14" }, titulo))));
  }
};
MedAddCard.style = medAddCardCss;

export { MedAddCard as med_add_card };
