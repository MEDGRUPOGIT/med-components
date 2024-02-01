/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-71f41461.js');
const color = require('./color-2d957fd3.js');

const medListCss = ":host{--margin:0}:host(.med-list) ::slotted(med-list-item){margin:var(--margin)}:host(.med-list) ::slotted(med-list-item:last-child){margin-bottom:0 !important}:host(.med-list) ::slotted(med-list-item-accordion){margin:var(--margin)}:host(.med-list) ::slotted(med-list-item-accordion:last-child){margin-bottom:0 !important}:host(.med-list--xs) ::slotted(med-list-item){--margin:0 0 4px 0}:host(.med-list--sm) ::slotted(med-list-item){--margin:0 0 8px 0}:host(.med-list--md) ::slotted(med-list-item){--margin:0 0 16px 0}:host(.med-list--lg) ::slotted(med-list-item){--margin:0 0 24px 0}:host(.med-list--xs) ::slotted(med-list-item-accordion){--margin:0 0 4px 0}:host(.med-list--sm) ::slotted(med-list-item-accordion){--margin:0 0 8px 0}:host(.med-list--md) ::slotted(med-list-item-accordion){--margin:0 0 16px 0}:host(.med-list--lg) ::slotted(med-list-item-accordion){--margin:0 0 24px 0}";

const MedList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dsColor = undefined;
        this.margin = undefined;
    }
    render() {
        const { dsColor, margin } = this;
        return (index.h(index.Host, { "from-stencil": true, class: color.generateMedColor(dsColor, {
                'med-list': true,
                [`med-list--${margin}`]: margin !== undefined
            }) }, index.h("slot", null)));
    }
};
MedList.style = medListCss;

exports.med_list = MedList;
