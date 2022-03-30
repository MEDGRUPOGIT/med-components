import { r as registerInstance, h, H as Host } from './index-70672e81.js';

const sheetContentTestCss = ".sc-sheet-content-test-h{display:block;height:100%}";

const SheetContentTest = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("ion-header", { class: "tp-sheet-header" }, h("ion-button", { "ds-name": "tertiary", "ds-size": "xxs" }, h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" }))), h("ion-content", { class: "tp-sheet-content" }, h("med-type", null, "Sheet"), h("med-type", null, "Sheet"), h("med-type", null, "Sheet")), h("ion-footer", { class: "tp-sheet-footer" }, h("ion-button", { expand: "block" }, "button"))));
  }
};
SheetContentTest.style = sheetContentTestCss;

export { SheetContentTest as sheet_content_test };
