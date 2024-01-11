/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
export class SnackbarTest {
  render() {
    return (h(Host, null, h("div", { class: "tp-snackbar__container" }, h("ion-avatar", { "ds-size": "xxs" }), h("med-type", { class: "tp-snackbar__text", token: "p16b" }, "1.341 alunos fizeram o simulado"), h("ion-button", { class: "tp-snackbar__button", mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xxs" }, h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" })))));
  }
  static get is() { return "snackbar-test"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["snackbar-test.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["snackbar-test.css"]
    };
  }
}
