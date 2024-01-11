/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');

const snackbarTestCss = ".sc-snackbar-test-h{display:block;border-radius:0}";

const SnackbarTest = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "tp-snackbar__container" }, index.h("ion-avatar", { "ds-size": "xxs" }), index.h("med-type", { class: "tp-snackbar__text", token: "p16b" }, "1.341 alunos fizeram o simulado"), index.h("ion-button", { class: "tp-snackbar__button", mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs" }, index.h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" })))));
  }
};
SnackbarTest.style = snackbarTestCss;

exports.snackbar_test = SnackbarTest;
