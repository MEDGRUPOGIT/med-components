/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from '@stencil/core';
import { getIonMode } from '../../global/ionic-global';
import { createColorClasses, openURL } from '../../utils/theme';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @part native - The native HTML button, anchor, or div element that wraps all child elements.
 */
export class Card {
  constructor() {
    this.color = undefined;
    this.button = false;
    this.type = 'button';
    this.disabled = false;
    this.download = undefined;
    this.href = undefined;
    this.rel = undefined;
    this.routerDirection = 'forward';
    this.routerAnimation = undefined;
    this.target = undefined;
  }
  isClickable() {
    return (this.href !== undefined || this.button);
  }
  renderCard(mode) {
    const clickable = this.isClickable();
    if (!clickable) {
      return [
        h("slot", null)
      ];
    }
    const { href, routerAnimation, routerDirection } = this;
    const TagType = clickable ? (href === undefined ? 'button' : 'a') : 'div';
    const attrs = (TagType === 'button')
      ? { type: this.type }
      : {
        download: this.download,
        href: this.href,
        rel: this.rel,
        target: this.target
      };
    return (h(TagType, Object.assign({}, attrs, { class: "card-native", part: "native", disabled: this.disabled, onClick: (ev) => openURL(href, ev, routerDirection, routerAnimation) }), h("slot", null), clickable && mode === 'md' && h("ion-ripple-effect", null)));
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { class: createColorClasses(this.color, {
        [mode]: true,
        'card-disabled': this.disabled,
        'ion-activatable': this.isClickable()
      }) }, this.renderCard(mode)));
  }
  static get is() { return "ion-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "ios": ["card.ios.scss"],
      "md": ["card.md.scss"]
    };
  }
  static get styleUrls() {
    return {
      "ios": ["card.ios.css"],
      "md": ["card.md.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "The color to use from your application's color palette.\r\nDefault options are: `\"primary\"`, `\"secondary\"`, `\"tertiary\"`, `\"success\"`, `\"warning\"`, `\"danger\"`, `\"light\"`, `\"medium\"`, and `\"dark\"`.\r\nFor more information on colors, see [theming](/docs/theming/basics)."
        },
        "attribute": "color",
        "reflect": false
      },
      "button": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true`, a button tag will be rendered and the card will be tappable."
        },
        "attribute": "button",
        "reflect": false,
        "defaultValue": "false"
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'submit' | 'reset' | 'button'",
          "resolved": "\"button\" | \"reset\" | \"submit\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The type of the button. Only used when an `onclick` or `button` property is present."
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'button'"
      },
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true`, the user cannot interact with the card."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "download": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | undefined",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "This attribute instructs browsers to download a URL instead of navigating to\r\nit, so the user will be prompted to save it as a local file. If the attribute\r\nhas a value, it is used as the pre-filled file name in the Save prompt\r\n(the user can still change the file name if they want)."
        },
        "attribute": "download",
        "reflect": false
      },
      "href": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | undefined",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Contains a URL or a URL fragment that the hyperlink points to.\r\nIf this property is set, an anchor tag will be rendered."
        },
        "attribute": "href",
        "reflect": false
      },
      "rel": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | undefined",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specifies the relationship of the target object to the link object.\r\nThe value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types)."
        },
        "attribute": "rel",
        "reflect": false
      },
      "routerDirection": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "RouterDirection",
          "resolved": "\"back\" | \"forward\" | \"root\"",
          "references": {
            "RouterDirection": {
              "location": "import",
              "path": "../../interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "When using a router, it specifies the transition direction when navigating to\r\nanother page using `href`."
        },
        "attribute": "router-direction",
        "reflect": false,
        "defaultValue": "'forward'"
      },
      "routerAnimation": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "AnimationBuilder | undefined",
          "resolved": "((baseEl: any, opts?: any) => Animation) | undefined",
          "references": {
            "AnimationBuilder": {
              "location": "import",
              "path": "../../interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "When using a router, it specifies the transition animation when navigating to\r\nanother page using `href`."
        }
      },
      "target": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | undefined",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specifies where to display the linked URL.\r\nOnly applies when an `href` is provided.\r\nSpecial keywords: `\"_blank\"`, `\"_self\"`, `\"_parent\"`, `\"_top\"`."
        },
        "attribute": "target",
        "reflect": false
      }
    };
  }
}
