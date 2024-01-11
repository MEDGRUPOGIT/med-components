/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');

const sheetIaCss = ".sc-sheet-ia-h{display:block;height:100%;background:hsl(var(--med-color-neutral-2))}.lateral-ia__item.sc-sheet-ia{--background:hsl(var(--med-color-neutral-3))}.lateral-ia__item.sc-sheet-ia:hover{--background:hsl(var(--med-color-neutral-4))}";

const SheetIa = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("ion-header", { class: "tp-sheet-header" }, index.h("ion-button", { mode: "ios", "icon-only": true, class: "tp-dialog__button", fill: "clear", "ds-size": "xxs" }, index.h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" }))), index.h("div", { class: "tp-sheet-content lateral-ia__itens" }, index.h("med-nav-item", { class: "lateral-ia__item", icon: "med-busca", text: "Novo chat" }), index.h("med-nav-item", { class: "lateral-ia__item", icon: "med-naorespondida", text: "Chat - 09/01/2024 - 17:06:55" }), index.h("med-nav-item", { class: "lateral-ia__item", icon: "med-naorespondida", text: "Chat - 09/01/2024 - 17:06:55" }), index.h("med-nav-item", { class: "lateral-ia__item", icon: "med-naorespondida", text: "Chat - 09/01/2024 - 17:06:55" }))));
  }
};
SheetIa.style = sheetIaCss;

exports.sheet_ia = SheetIa;
