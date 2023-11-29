/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, i as h, H as Host } from './index-336c66d9.js';

const dialogTestCss = ".sc-dialog-test-h{display:block;border-radius:0}";

const DialogTest = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("ion-header", { class: "tp-dialog-header" }, h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs" }, h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" }))), h("div", { class: "tp-dialog-container" }, h("med-type", { class: "tp-dialog-heading", token: "h20x" }, "Lorem ipsum dolor sit."), h("med-type", { "ds-color": "neutral-8", token: "p14x" }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corrupti cumque adipisci, voluptatibus facilis odio tenetur. In deleniti aliquam, unde facilis reiciendis suscipit laudantium numquam!"), h("div", { class: "tp-dialog-footer" }, h("ion-button", { mode: "ios", fill: "outline", "ds-size": "sm" }, "Fechar"), h("ion-button", { mode: "ios", "ds-size": "sm" }, "Salvar")))));
  }
};
DialogTest.style = dialogTestCss;

export { DialogTest as dialog_test };
