/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const color = require('./color-7939264c.js');

const medSemanasCss = ":host{--padding:16px}:host(.med-semanas){display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;padding:var(--padding)}::slotted(*){margin:4px}";

const MedSemanas = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.skin = undefined;
  }
  render() {
    const { skin } = this;
    return (index.h(index.Host, { class: color.generateMedColor(null, {
        'med-semanas': true,
        [`med-semanas--${skin}`]: skin !== undefined,
      }) }, index.h("slot", null)));
  }
};
MedSemanas.style = medSemanasCss;

exports.med_semanas = MedSemanas;
