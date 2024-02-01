/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-71f41461.js');
const color = require('./color-2d957fd3.js');

const medAddCardCss = ".sc-med-add-card-h{cursor:pointer;display:block}.med-add-card__container.sc-med-add-card{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.med-add-card__icon.sc-med-add-card{stroke:hsl(var(--med-color-neutral-10));margin-right:16px}";

const MedAddCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.titulo = undefined;
        this.iconName = undefined;
    }
    render() {
        const { titulo, iconName } = this;
        return (index.h(index.Host, { class: color.generateMedColor(null, {
                'med-add-card': true,
            }) }, index.h("med-base", { class: "med-add-card__container", "spacing-h": "s16", "spacing-v": "s16" }, index.h("ion-icon", { class: "med-icon med-add-card__icon", name: iconName }), index.h("med-type", { token: "p16x" }, titulo))));
    }
};
MedAddCard.style = medAddCardCss;

exports.med_add_card = MedAddCard;
