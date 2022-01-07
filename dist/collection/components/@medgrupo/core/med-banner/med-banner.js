import { Component, Host, h, Prop, Event } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedBanner {
  constructor() {
    /**
     * Define a variação de tamanho do componente.
     */
    this.dsSize = 'sm';
    this.onBtnLeftClick = () => {
      this.btnLeftClick.emit();
    };
    this.onBtnRightClick = () => {
      this.btnRightClick.emit();
    };
  }
  render() {
    const { dsColor, dsSize, titulo, texto, btnLeft, btnRight } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-notification': true,
        [`med-notification--${dsSize}`]: dsSize !== undefined,
      }) },
      (titulo || texto) && h("div", { class: "med-notification__content" },
        h("div", { class: "med-notification__left" },
          titulo && h("med-type", { class: "med-notification__titulo", token: dsSize === 'md' ? 'h20' : 'p16b' }, titulo),
          texto && h("med-type", { class: "med-notification__texto", token: dsSize === 'md' ? 'p16x' : 'p14x' }, texto)),
        h("div", { class: "med-notification__right" },
          h("slot", { name: "imagem" }))),
      (btnLeft || btnRight) && h("div", { class: "med-notification__footer" },
        btnLeft && h("ion-button", { class: "med-notification__button", "ds-color": dsColor, "ds-name": "tertiary", "ds-size": dsSize, onClick: this.onBtnLeftClick },
          " ",
          btnLeft,
          " "),
        btnRight && h("ion-button", { class: "med-notification__button", "ds-color": dsColor, "ds-name": "tertiary", "ds-size": dsSize, onClick: this.onBtnRightClick },
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
    "dsSize": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'sm' | 'md'",
        "resolved": "\"md\" | \"sm\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a varia\u00E7\u00E3o de tamanho do componente."
      },
      "attribute": "ds-size",
      "reflect": true,
      "defaultValue": "'sm'"
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
