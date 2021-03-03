'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2a75be79.js');

const iosMedButtonCss = ":host h1{font-size:25px;color:#fff}";

const mdMedButtonCss = ":host h1{font-size:25px;color:#fff}";

const MedButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("h1", null, "MED-BUTTON")));
  }
};
MedButton.style = {
  ios: iosMedButtonCss,
  md: mdMedButtonCss
};

exports.med_button = MedButton;
