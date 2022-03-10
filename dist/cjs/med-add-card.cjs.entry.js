'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medTheme = require('./med-theme-42add9fc.js');

const medAddCardCss = ":host{cursor:pointer;display:block}.med-add-card__container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.med-add-card__icon{stroke:hsl(var(--med-color-neutral-10));margin-right:16px}";

const MedAddCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const { titulo, iconName } = this;
    return (index.h(index.Host, { class: medTheme.generateMedColor(null, {
        'med-add-card': true,
      }) }, index.h("med-base", { class: "med-add-card__container", "spacing-h": "s16", "spacing-v": "s16" }, index.h("ion-icon", { class: "med-icon med-add-card__icon", name: iconName }), index.h("med-type", { token: "p16x" }, titulo))));
  }
};
MedAddCard.style = medAddCardCss;

exports.med_add_card = MedAddCard;
