/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');

const medDropdownContainerCss = ".sc-med-dropdown-container-h{display:block;position:relative}.sc-med-dropdown-container-s>med-dropdown+ion-select{--border-radius:8px 8px 0 0}.sc-med-dropdown-container-s>med-dropdown{--top:40px}";

const MedDropdownContainer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
MedDropdownContainer.style = medDropdownContainerCss;

exports.med_dropdown_container = MedDropdownContainer;
