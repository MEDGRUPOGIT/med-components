/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');

const sheetContentTestCss = ".sc-sheet-content-test-h{display:block;height:100%}";

const SheetContentTest = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("ion-header", { class: "tp-sheet-header" }, index.h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs" }, index.h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" }))), index.h("ion-content", { class: "tp-sheet-content" }, index.h("med-type", null, "Sheet"), index.h("med-type", null, "Sheet"), index.h("med-type", null, "Sheet")), index.h("ion-footer", { class: "tp-sheet-footer" }, index.h("ion-button", { mode: "ios", expand: "block" }, "button"))));
  }
};
SheetContentTest.style = sheetContentTestCss;

exports.sheet_content_test = SheetContentTest;
