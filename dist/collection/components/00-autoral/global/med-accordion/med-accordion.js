import { Component, Host, h, Prop, Method, Element, State, Watch } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';
/**
 * @slot header - Define o conteudo do header.
 * @slot button - Se houver algum botão deve ser colocado nesse slot.
 * @slot content-fake - Conteúdo que vai aparecer com reticiências.
 * @slot content - Conteúdo do componente.
 */
export class MedAccordion {
  constructor() {
    /**
     * Define o estado do componente.
     */
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
    const { size, icon, collapsedState } = this;
    return (h(Host, { "from-stencil": true, class: createColorClasses(null, {
        'med-accordion': true,
        [`med-accordion--${size}`]: size !== undefined,
        'med-accordion--collapsed': collapsedState,
      }, null) },
      h("div", { class: "med-accordion__header" },
        icon === 'left' && h("div", { class: "med-accordion__icon-container med-accordion__icon-container--left", onClick: () => this.onClick() },
          h("ion-icon", { class: "med-icon med-accordion__icon", name: "med-baixo" })),
        h("div", { class: "med-accordion__heading", onClick: () => this.onClick() },
          h("slot", { name: "header" })),
        h("slot", { name: "button" }),
        (!icon || icon === 'right') && h("div", { class: "med-accordion__icon-container med-accordion__icon-container--right", onClick: () => this.onClick() },
          h("ion-icon", { class: "med-icon med-accordion__icon", name: "med-baixo" }))),
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
        "text": "Define a varia\u00E7\u00E3o de estilo do componente."
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
        "text": "Define o posicionamento do icone do componente."
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
        "text": "Define o estado do componente."
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
