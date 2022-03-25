'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');

const medAutocompleteCss = ".sc-med-autocomplete-h{display:block;position:relative}.sc-med-autocomplete-s>med-dropdown+ion-searchbar{--border-radius:8px 8px 0 0}.sc-med-autocomplete-s>med-dropdown{--top:40px}";

const MedAutocomplete = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
MedAutocomplete.style = medAutocompleteCss;

exports.med_autocomplete = MedAutocomplete;
