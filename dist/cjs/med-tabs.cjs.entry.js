'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medTheme = require('./med-theme-42add9fc.js');

const medTabsCss = ":host(.med-tabs){display:-ms-flexbox;display:flex;overflow-y:hidden;overflow-x:auto;width:100%;height:50px}";

const MedTabs = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const { dsColor } = this;
    return (index.h(index.Host, { class: medTheme.generateMedColor(dsColor, {
        'med-tabs': true,
      }) }, index.h("slot", null)));
  }
};
MedTabs.style = medTabsCss;

exports.med_tabs = MedTabs;
