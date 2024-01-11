/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
export class SheetIa {
  render() {
    return (h(Host, null, h("ion-header", { class: "tp-sheet-header" }, h("ion-button", { mode: "ios", "icon-only": true, class: "tp-dialog__button", fill: "clear", "ds-size": "xxs" }, h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" }))), h("div", { class: "tp-sheet-content lateral-ia__itens" }, h("med-nav-item", { class: "lateral-ia__item", icon: "med-busca", text: "Novo chat" }), h("med-nav-item", { class: "lateral-ia__item", icon: "med-naorespondida", text: "Chat - 09/01/2024 - 17:06:55" }), h("med-nav-item", { class: "lateral-ia__item", icon: "med-naorespondida", text: "Chat - 09/01/2024 - 17:06:55" }), h("med-nav-item", { class: "lateral-ia__item", icon: "med-naorespondida", text: "Chat - 09/01/2024 - 17:06:55" }))));
  }
  static get is() { return "sheet-ia"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["sheet-ia.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["sheet-ia.css"]
    };
  }
}
