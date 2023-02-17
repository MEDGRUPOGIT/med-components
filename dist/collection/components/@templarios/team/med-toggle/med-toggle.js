import { Component, h, Host, Prop, Element, Watch } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedToggle {
  constructor() {
    /**
   * todo
   */
    this.collapsed = true;
  }
  componentDidLoad() {
    var _a;
    this.element = (_a = this.host.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.med-toggle__content');
  }
  setHeight() {
    var _a;
    const elementHeight = (_a = this.element) === null || _a === void 0 ? void 0 : _a.scrollHeight;
    this.element.style.maxHeight = `${elementHeight}px`;
  }
  open() {
    this.setHeight();
    setTimeout(() => {
      this.element.style.maxHeight = '100%';
    }, 300);
  }
  close() {
    this.setHeight();
    setTimeout(() => {
      this.element.style.maxHeight = 'var(--initial-max-height)';
    }, 350);
  }
  toggle() {
    if (!this.collapsed) {
      this.open();
    }
    else {
      this.close();
    }
  }
  render() {
    const { collapsed, dsColor } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-toggle': true,
        'med-toggle--collapsed': collapsed
      }), onClick: () => { this.collapsed = !this.collapsed; } },
      h("div", { class: "med-toggle__content" },
        h("slot", null)),
      h("ion-icon", { class: "med-icon med-toggle__icon", name: "med-cima" })));
  }
  static get is() { return "med-toggle"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-toggle.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-toggle.css"]
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
        "text": "todo"
      },
      "attribute": "collapsed",
      "reflect": true,
      "defaultValue": "true"
    }
  }; }
  static get elementRef() { return "host"; }
  static get watchers() { return [{
      "propName": "collapsed",
      "methodName": "toggle"
    }]; }
}
