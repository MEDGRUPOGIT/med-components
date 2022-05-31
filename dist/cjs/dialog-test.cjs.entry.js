'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');

const dialogTestCss = ".sc-dialog-test-h{display:block;border-radius:0}";

const DialogTest = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("ion-header", { class: "tp-dialog-header" }, index.h("ion-button", { "ds-name": "tertiary", "ds-size": "xxs" }, index.h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" }))), index.h("div", { class: "tp-dialog-container" }, index.h("med-type", { class: "tp-dialog-heading", token: "h20x" }, "Lorem ipsum dolor sit."), index.h("med-type", { "ds-color": "neutral-8", token: "h14x" }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corrupti cumque adipisci, voluptatibus facilis odio tenetur. In deleniti aliquam, unde facilis reiciendis suscipit laudantium numquam!"), index.h("div", { class: "tp-dialog-footer" }, index.h("ion-button", { "ds-name": "secondary" }, "Salvar"), index.h("ion-button", null, "Salvar")))));
  }
};
DialogTest.style = dialogTestCss;

exports.dialog_test = DialogTest;
