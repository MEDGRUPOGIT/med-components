import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './color-a516669b.js';

const medAddCardCss = ".sc-med-add-card-h{cursor:pointer;display:block}.med-add-card__container.sc-med-add-card{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.med-add-card__icon.sc-med-add-card{stroke:hsl(var(--med-color-neutral-10));margin-right:16px}";

const MedAddCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { titulo, iconName } = this;
    return (h(Host, { class: generateMedColor(null, {
        'med-add-card': true,
      }) }, h("med-base", { class: "med-add-card__container", "spacing-h": "s16", "spacing-v": "s16" }, h("ion-icon", { class: "med-icon med-add-card__icon", name: iconName }), h("med-type", { token: "p16x" }, titulo))));
  }
};
MedAddCard.style = medAddCardCss;

export { MedAddCard as med_add_card };
