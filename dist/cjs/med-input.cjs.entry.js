/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');

const medInputCss = ":host{display:block}::slotted(med-type){padding-bottom:8px}::slotted(ion-textarea){margin:0}";

const MedInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", { name: "label" }), index.h("slot", { name: "input" })));
  }
};
MedInput.style = medInputCss;

exports.med_input = MedInput;
