/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from '@stencil/core';
import { getIonMode } from '../../global/ionic-global';
import { createColorClasses } from '../../utils/theme';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @slot - Content is placed between the named slots if provided without a slot.
 * @slot start - Content is placed to the left of the option text in LTR, and to the right in RTL.
 * @slot top - Content is placed above the option text.
 * @slot icon-only - Should be used on an icon in an option that has no text.
 * @slot bottom - Content is placed below the option text.
 * @slot end - Content is placed to the right of the option text in LTR, and to the left in RTL.
 *
 * @part native - The native HTML button or anchor element that wraps all child elements.
 */
export class ItemOption {
  constructor() {
    this.onClick = (ev) => {
      const el = ev.target.closest('ion-item-option');
      if (el) {
        ev.preventDefault();
      }
    };
    this.color = undefined;
    this.disabled = false;
    this.download = undefined;
    this.expandable = false;
    this.href = undefined;
    this.rel = undefined;
    this.target = undefined;
    this.type = 'button';
  }
  render() {
    const { disabled, expandable, href } = this;
    const TagType = href === undefined ? 'button' : 'a';
    const mode = getIonMode(this);
    const attrs = (TagType === 'button')
      ? { type: this.type }
      : {
        download: this.download,
        href: this.href,
        target: this.target
      };
    return (h(Host, { onClick: this.onClick, class: createColorClasses(this.color, {
        [mode]: true,
        'item-option-disabled': disabled,
        'item-option-expandable': expandable,
        'ion-activatable': true,
      }) }, h(TagType, Object.assign({}, attrs, { class: "button-native", part: "native", disabled: disabled }), h("span", { class: "button-inner" }, h("slot", { name: "top" }), h("div", { class: "horizontal-wrapper" }, h("slot", { name: "start" }), h("slot", { name: "icon-only" }), h("slot", null), h("slot", { name: "end" })), h("slot", { name: "bottom" })), mode === 'md' && h("ion-ripple-effect", null))));
  }
  static get is() { return "ion-item-option"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "ios": ["item-option.ios.scss"],
      "md": ["item-option.md.scss"]
    };
  }
  static get styleUrls() {
    return {
      "ios": ["item-option.ios.css"],
      "md": ["item-option.md.css"]
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
          "text": "If `true`, the user cannot interact with the item option."
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
      "expandable": {
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
          "text": "If `true`, the option will expand to take up the available width and cover any other options."
        },
        "attribute": "expandable",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "The type of the button."
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'button'"
      }
    };
  }
  static get elementRef() { return "el"; }
}
