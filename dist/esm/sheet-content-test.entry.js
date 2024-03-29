/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, i as h, H as Host } from './index-336c66d9.js';

const sheetContentTestCss = ".sc-sheet-content-test-h{display:block;height:100%}";

const SheetContentTest = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("ion-header", { class: "tp-sheet-header" }, h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs" }, h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" }))), h("ion-content", { class: "tp-sheet-content" }, h("med-type", null, "Sheet"), h("med-type", null, "Sheet"), h("med-type", null, "Sheet")), h("ion-footer", { class: "tp-sheet-footer" }, h("ion-button", { mode: "ios", expand: "block" }, "button"))));
  }
};
SheetContentTest.style = sheetContentTestCss;

export { SheetContentTest as sheet_content_test };
