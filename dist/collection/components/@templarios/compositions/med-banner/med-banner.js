import { Component, Event, h, Host, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedBanner {
  constructor() {
    this.onButtonLeftClick = () => {
      this.btnLeftClick.emit();
    };
    this.onButtonRightClick = () => {
      this.btnRightClick.emit();
    };
  }
  render() {
    const { dsColor, titulo, texto, btnLeft, btnRight, icon, image } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-notification': true,
      }) },
      (titulo || texto) && h("div", { class: "med-notification__content" },
        h("div", { class: "med-notification__left" },
          h("div", { class: "med-notification__header" },
            titulo && h("med-type", { class: "med-notification__titulo" },
              " ",
              titulo,
              " "),
            icon && h("ion-icon", { class: "med-notification__icon med-icon", name: icon })),
          texto && h("med-type", { class: "med-notification__texto" },
            " ",
            texto,
            " ")),
        image && h("div", { class: "med-notification__right" },
          h("img", { class: "med-notification__image", src: image }))),
      (btnLeft || btnRight) && h("div", { class: "med-notification__footer" },
        btnLeft && h("ion-button", { class: "med-notification__button", mode: "ios", "ds-color": dsColor, fill: "clear", "ds-size": "xs", onClick: this.onButtonLeftClick },
          " ",
          btnLeft,
          " "),
        btnRight && h("ion-button", { class: "med-notification__button", mode: "ios", "ds-color": dsColor, fill: "clear", "ds-size": "xs", onClick: this.onButtonRightClick },
          " ",
          btnRight,
          " "))));
  }
  static get is() { return "med-banner"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["med-banner.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-banner.css"]
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
            "path": "../../../../@templarios/types/color.type"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "attribute": "ds-color",
      "reflect": true
    },
    "titulo": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "attribute": "titulo",
      "reflect": false
    },
    "texto": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "attribute": "texto",
      "reflect": false
    },
    "btnLeft": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "attribute": "btn-left",
      "reflect": false
    },
    "btnRight": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "attribute": "btn-right",
      "reflect": false
    },
    "icon": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "attribute": "icon",
      "reflect": false
    },
    "image": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "attribute": "image",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "btnLeftClick",
      "name": "btnLeftClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "btnRightClick",
      "name": "btnRightClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
}
