import { Component, Host, h, Prop, Event } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
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
        btnLeft && h("ion-button", { class: "med-notification__button", "ds-color": dsColor, "ds-name": "tertiary", onClick: this.onButtonLeftClick },
          " ",
          btnLeft,
          " "),
        btnRight && h("ion-button", { class: "med-notification__button", "ds-color": dsColor, "ds-name": "tertiary", onClick: this.onButtonRightClick },
          " ",
          btnRight,
          " "))));
  }
  static get is() { return "med-banner"; }
  static get encapsulation() { return "shadow"; }
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
        "text": "Define o t\u00EDtulo do componente."
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
        "text": "Define o texto do componente."
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
        "text": "Define o texto do bot\u00E3o esquerdo, se existir."
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
        "text": "Define o texto do bot\u00E3o direito, se existir."
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
        "text": "Define o icone, se existir."
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
        "text": "Define a url da imagem, se existir."
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
        "text": "Emitido quando h\u00E1 um click no bot\u00E3o esquerdo."
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
        "text": "Emitido quando h\u00E1 um click no bot\u00E3o direito."
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
}
