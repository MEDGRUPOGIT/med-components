/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from '@stencil/core';
import { getIonMode } from '../../global/ionic-global';
import { createColorClasses } from '../../utils/theme';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
export class Label {
  constructor() {
    this.inRange = false;
    this.color = undefined;
    this.position = undefined;
    this.noAnimate = false;
  }
  componentWillLoad() {
    this.inRange = !!this.el.closest('ion-range');
    this.noAnimate = (this.position === 'floating');
    this.emitStyle();
    this.emitColor();
  }
  componentDidLoad() {
    if (this.noAnimate) {
      setTimeout(() => {
        this.noAnimate = false;
      }, 1000);
    }
  }
  colorChanged() {
    this.emitColor();
  }
  positionChanged() {
    this.emitStyle();
  }
  emitColor() {
    const { color } = this;
    this.ionColor.emit({
      'item-label-color': color !== undefined,
      [`ion-color-${color}`]: color !== undefined
    });
  }
  emitStyle() {
    const { inRange, position } = this;
    // If the label is inside of a range we don't want
    // to override the classes added by the label that
    // is a direct child of the item
    if (!inRange) {
      this.ionStyle.emit({
        'label': true,
        [`label-${position}`]: position !== undefined
      });
    }
  }
  render() {
    const position = this.position;
    const mode = getIonMode(this);
    return (h(Host, { class: createColorClasses(this.color, {
        [mode]: true,
        [`label-${position}`]: position !== undefined,
        [`label-no-animate`]: (this.noAnimate)
      }) }));
  }
  static get is() { return "ion-label"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "ios": ["label.ios.scss"],
      "md": ["label.md.scss"]
    };
  }
  static get styleUrls() {
    return {
      "ios": ["label.ios.css"],
      "md": ["label.md.css"]
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
      "position": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'fixed' | 'stacked' | 'floating'",
          "resolved": "\"fixed\" | \"floating\" | \"stacked\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The position determines where and how the label behaves inside an item."
        },
        "attribute": "position",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "noAnimate": {}
    };
  }
  static get events() {
    return [{
        "method": "ionColor",
        "name": "ionColor",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": undefined
            }],
          "text": "Emitted when the color changes."
        },
        "complexType": {
          "original": "StyleEventDetail",
          "resolved": "StyleEventDetail",
          "references": {
            "StyleEventDetail": {
              "location": "import",
              "path": "../../interface"
            }
          }
        }
      }, {
        "method": "ionStyle",
        "name": "ionStyle",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": undefined
            }],
          "text": "Emitted when the styles change."
        },
        "complexType": {
          "original": "StyleEventDetail",
          "resolved": "StyleEventDetail",
          "references": {
            "StyleEventDetail": {
              "location": "import",
              "path": "../../interface"
            }
          }
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "color",
        "methodName": "colorChanged"
      }, {
        "propName": "position",
        "methodName": "positionChanged"
      }];
  }
}
