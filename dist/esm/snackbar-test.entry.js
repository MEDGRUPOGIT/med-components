/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, i as h, H as Host } from './index-336c66d9.js';

const snackbarTestCss = ".sc-snackbar-test-h{display:block;border-radius:0}";

const SnackbarTest = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("div", { class: "tp-snackbar__container" }, h("ion-avatar", { "ds-size": "xxs" }), h("med-type", { class: "tp-snackbar__text", token: "p16b" }, "1.341 alunos fizeram o simulado"), h("ion-button", { class: "tp-snackbar__button", mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs" }, h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" })))));
  }
};
SnackbarTest.style = snackbarTestCss;

export { SnackbarTest as snackbar_test };
