'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');

const sheetTestCss = ".sc-sheet-test-h{display:block;height:100%}";

const SheetTest = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("ion-header", { class: "tp-sheet-header" }, index.h("ion-button", { class: "tp-dialog__button", "ds-name": "tertiary", "ds-size": "xxs" }, index.h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" }))), index.h("div", { class: "tp-sheet-content" }, index.h("med-type", null, "Sheet"), index.h("med-type", null, "Sheet"), index.h("med-type", null, "Sheet"), index.h("med-type", null, "Sheet"), index.h("med-type", null, "Sheet"), index.h("med-type", null, "Sheet")), index.h("ion-footer", { class: "tp-sheet-footer" }, index.h("ion-button", { class: "tp-dialog__button", expand: "block" }, "button"))));
  }
};
SheetTest.style = sheetTestCss;

exports.sheet_test = SheetTest;
