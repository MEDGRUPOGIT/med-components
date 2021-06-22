import { Component, Host, h } from '@stencil/core';
export class MedCartaoRespostaLista {
  render() {
    return (h(Host, { "from-stencil": true },
      h("div", { class: "wrapper" },
        h("slot", null))));
  }
  static get is() { return "med-cartao-resposta-lista"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-cartao-resposta-lista.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-cartao-resposta-lista.css"]
  }; }
}
