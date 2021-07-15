import { Component, Host, h } from '@stencil/core';
export class MedOffline {
  onClick(e) {
    e.preventDefault();
  }
  render() {
    return (h(Host, { onClick: (e) => this.onClick(e) },
      h("div", { class: "wrapper" },
        h("svg", { class: "icon", viewBox: "0 0 24 24" },
          h("path", { class: "icon-path", d: "M22.61 16.95A4.999 4.999 0 0018 10h-1.26a8 8 0 00-7.05-6M5 5a8 8 0 004 15h9a5 5 0 001.7-.3" }),
          h("path", { class: "icon-path", d: "M1 1l22 22" })),
        h("p", { class: "title" }, "Voc\u00EA est\u00E1 offline"),
        h("p", { class: "text" }, "Conecte-se \u00E0 internet para visualizar esse conte\u00FAdo"))));
  }
  static get is() { return "med-offline"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-offline.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-offline.css"]
  }; }
}
