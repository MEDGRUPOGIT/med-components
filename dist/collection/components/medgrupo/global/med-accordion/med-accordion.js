import { Component, Host, h, Prop, Method, Element, State, Watch } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';
export class MedAccordion {
  constructor() {
    this.collapsed = true;
    this.collapsedState = true;
    this.onClick = () => {
      this.expandContent();
    };
    this.expandContent = async () => {
      if (this.collapsedState) {
        this.contentFakeEl.style.display = 'block';
        this.fakeHeight = this.contentFakeEl.scrollHeight;
        this.collapsedState = !this.collapsedState;
        this.contentEl.style.maxHeight = `${this.fakeHeight}px`;
        this.contentFakeEl.style.maxHeight = '0';
        this.contentEl.style.maxHeight = `${this.contentEl.scrollHeight}px`;
        this.contentEl.style.transition = 'max-height 0.2s ease-out';
      }
      else {
        this.contentFakeEl.style.display = 'none';
        this.contentFakeEl.style.maxHeight = `${this.fakeHeight}px`;
        this.contentEl.style.maxHeight = `${this.fakeHeight}px`;
        await this.sleep(200);
        this.contentEl.style.transition = 'unset';
        this.contentEl.style.maxHeight = '0px';
        this.contentFakeEl.style.display = 'block';
        this.collapsedState = !this.collapsedState;
      }
    };
    this.sleep = async (timeout) => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, timeout);
      });
    };
  }
  componentDidLoad() {
    this.contentEl.style.maxHeight = '0';
    this.fakeHeight = this.contentFakeEl.scrollHeight;
  }
  async toggle() {
    this.expandContent();
  }
  collapsedChanged() {
    this.expandContent();
  }
  render() {
    const { color, size, collapsedState: collapsed, icon } = this;
    return (h(Host, { "from-stencil": true, class: createColorClasses(color, {
        'med-accordion--full': size !== undefined,
        'med-accordion--collapsed': collapsed,
      }) },
      h("div", { class: "med-accordion__header", onClick: this.onClick },
        icon === 'left' && h("div", { class: "med-accordion__icon-container med-accordion__icon-container--left" },
          h("ion-icon", { class: "med-accordion__icon", name: "med-arrow-down" })),
        h("slot", { name: "header" }),
        (!icon || icon === 'right') && h("div", { class: "med-accordion__icon-container med-accordion__icon-container--right" },
          h("ion-icon", { class: "med-accordion__icon", name: "med-arrow-down" }))),
      h("div", { class: "med-accordion__content--fake", ref: (el) => this.contentFakeEl = el },
        h("slot", { name: "content-fake" })),
      h("div", { class: "med-accordion__content", ref: (el) => this.contentEl = el },
        h("slot", { name: "content" }))));
  }
  static get is() { return "med-accordion"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-accordion.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-accordion.css"]
  }; }
  static get properties() { return {
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Color",
        "resolved": "string | undefined",
        "references": {
          "Color": {
            "location": "import",
            "path": "../../../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "color",
      "reflect": false
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'full'",
        "resolved": "\"full\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "size",
      "reflect": false
    },
    "icon": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'left' | 'right'",
        "resolved": "\"left\" | \"right\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "icon",
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
        "text": ""
      },
      "attribute": "collapsed",
      "reflect": true,
      "defaultValue": "true"
    }
  }; }
  static get states() { return {
    "collapsedState": {}
  }; }
  static get methods() { return {
    "toggle": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "collapsed",
      "methodName": "collapsedChanged"
    }]; }
}
