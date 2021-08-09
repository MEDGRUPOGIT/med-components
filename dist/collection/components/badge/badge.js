import { Component, Host, Prop, h } from '@stencil/core';
import { getIonMode } from '../../global/ionic-global';
import { createColorClasses } from '../../utils/theme';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
export class Badge {
  render() {
    const { color, neutral, dsName, dsSize } = this;
    const mode = getIonMode(this);
    return (h(Host, { "from-stencil": true, class: createColorClasses(color, {
        [mode]: true,
        'med-badge': true,
        [`med-badge--${dsName}`]: dsName !== undefined,
        [`med-badge--${dsSize}`]: dsSize !== undefined,
      }, neutral) },
      h("slot", null)));
  }
  static get is() { return "ion-badge"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "ios": ["badge.md.scss"],
    "md": ["badge.md.scss"]
  }; }
  static get styleUrls() { return {
    "ios": ["badge.md.css"],
    "md": ["badge.md.css"]
  }; }
  static get properties() { return {
    "neutral": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Neutral",
        "resolved": "string | undefined",
        "references": {
          "Neutral": {
            "location": "import",
            "path": "../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a cor neutra do componente."
      },
      "attribute": "neutral",
      "reflect": false
    },
    "dsName": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'secondary'",
        "resolved": "\"secondary\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a varia\u00E7\u00E3o do componente."
      },
      "attribute": "ds-name",
      "reflect": false
    },
    "dsSize": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'xxs' | 'xs' | 'sm' | 'md' | 'lg'",
        "resolved": "\"lg\" | \"md\" | \"sm\" | \"xs\" | \"xxs\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a varia\u00E7\u00E3o de tamanho do componente."
      },
      "attribute": "ds-size",
      "reflect": false
    },
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Color",
        "resolved": "string | undefined",
        "references": {
          "Color": {
            "location": "import",
            "path": "../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The color to use from your application's color palette.\nDefault options are: `\"primary\"`, `\"secondary\"`, `\"tertiary\"`, `\"success\"`, `\"warning\"`, `\"danger\"`, `\"light\"`, `\"medium\"`, and `\"dark\"`.\nFor more information on colors, see [theming](/docs/theming/basics)."
      },
      "attribute": "color",
      "reflect": false
    }
  }; }
}
