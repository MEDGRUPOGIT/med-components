import { Component, Host, h, Prop, Method } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedAgrupador {
  constructor() {
    /**
      * TODO.
      */
    this.texto1 = `Expandir a lista`;
    /**
      * TODO.
      */
    this.texto2 = `Ocultar a lista`;
    /**
      * Define o estado do componente.
      */
    this.collapsed = false;
  }
  /**
    * Define o estado do componente programaticamente.
    */
  async toggle(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.collapsed = !this.collapsed;
  }
  render() {
    const { dsColor, collapsed, texto1, texto2 } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-agrupador': true,
        'med-agrupador--collapsed': collapsed
      }), onClick: (event) => { this.toggle(event); } },
      h("div", { class: "med-agrupador__expandir" }, texto1),
      h("div", { class: "med-agrupador__ocultar" }, texto2),
      h("ion-icon", { class: "med-icon med-agrupador__icon", name: "med-baixo" })));
  }
  static get is() { return "med-agrupador"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-agrupador.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-agrupador.css"]
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
    "texto1": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "TODO."
      },
      "attribute": "texto-1",
      "reflect": true,
      "defaultValue": "`Expandir a lista`"
    },
    "texto2": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "TODO."
      },
      "attribute": "texto-2",
      "reflect": true,
      "defaultValue": "`Ocultar a lista`"
    },
    "collapsed": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Define o estado do componente."
      },
      "attribute": "collapsed",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get methods() { return {
    "toggle": {
      "complexType": {
        "signature": "(event?: Event | undefined) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "Event": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Define o estado do componente programaticamente.",
        "tags": []
      }
    }
  }; }
}
