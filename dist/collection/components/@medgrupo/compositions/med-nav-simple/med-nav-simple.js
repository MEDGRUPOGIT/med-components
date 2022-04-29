import { Component, Host, h, Prop, Event } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedNavSimple {
  clickHandle() {
    this.close.emit();
  }
  render() {
    const { dsColor } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-nav-simple': true,
      }) },
      h("nav", { class: "med-nav-simple__wrapper" },
        h("div", { class: "med-nav-simple__logo" },
          h("div", { class: "med-nav-simple__icon-wrapper" },
            h("ion-icon", { class: "med-nav-simple__icon med-icon med-icon--sm", name: "med-logo" }))),
        h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-play", active: true }),
        h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-apostila" }),
        h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-concursos" }),
        h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-orientacao" }),
        h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-metricas" }),
        h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-qrcode" }),
        h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-slidedeaula" }),
        h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-duvidasacademicas" }),
        h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-cronograma" }),
        h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-bonus" }),
        h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-drogas" }),
        h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-anotacao" }),
        h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-multimidia" }),
        h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-concursos" }),
        h("med-nav-item", { "ds-color": dsColor, class: "med-nav-simple__item", icon: "med-montaprovas" }),
        h("ion-button", { "ds-color": dsColor, class: "med-nav__toggle", "ds-name": "tertiary", onClick: () => this.clickHandle() },
          h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-esquerda" })))));
  }
  static get is() { return "med-nav-simple"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-nav-simple.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-nav-simple.css"]
  }; }
  static get properties() { return {
    "dsColor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "MedColor",
        "resolved": "string | undefined",
        "references": {
          "MedColor": {
            "location": "import",
            "path": "../../../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a cor do componente."
      },
      "attribute": "ds-color",
      "reflect": true
    }
  }; }
  static get events() { return [{
      "method": "close",
      "name": "close",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "TODO."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
