import { Component, Element, Event, h, Host, Prop, State, Watch } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
/**
  * @slot header - Define o conteúdo do header do componente.
  * @slot button - Se houver botões no componente eles devem ser inseridos nesse slot.
  * @slot content - Define o conteúdo do componente.
  * @slot auxiliar - Define o conteúdo auxiliar do componente.
  * @slot progress - Slot destinado a progress-bar.
  */
export class MedAccordionItem {
  constructor() {
    /**
      * Define a variação da borda do componente.
      */
    this.noBorder = false;
    /**
      * Define se o componente irá ter background quando aberto.
      */
    this.background = false;
    /**
     * Permite que a abertura do accordion seja bloqueada pelo front.
     */
    this.canCollapse = true;
    /**
     * Permite que o front consiga definir quando o accordion vem aberto ou fechado.
     */
    this.isOpened = false;
    /**
    * Permite que o front consiga definir quando o accordion vem aberto ou fechado.
    */
    this.slotsToggle = [];
    this.isOpen = false;
    this.isTransitioning = false;
    this.onClick = (slot) => {
      if (!this.canCollapse) {
        return;
      }
      if (!this.slotsToggle.length || this.slotsToggle.indexOf(slot) >= 0) {
        this.toggleOpen();
      }
    };
  }
  watchPropHandler(newValue) {
    if (newValue !== this.isOpen) { }
    this.toggleOpen();
  }
  componentDidLoad() {
    if (this.isOpened) {
      this.toggleOpen();
    }
  }
  toggleOpen() {
    if (this.isTransitioning) {
      return;
    }
    this.isOpen = !this.isOpen;
    this.opened.emit(this.isOpen);
    this.isTransitioning = true;
    this.toggle.emit({
      element: this.hostElement,
      content: this.content,
      header: this.header,
      shouldOpen: this.isOpen,
      startTransition: () => {
        this.isTransitioning = true;
      },
      endTransition: () => {
        this.isTransitioning = false;
      },
      setClosed: () => {
        this.isOpen = false;
        this.opened.emit(this.isOpen);
      },
    });
  }
  onHeaderClick() {
    this.medClick.emit();
  }
  render() {
    const { dsColor, noBorder, isOpen, background } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-accordion-item': true,
        'med-accordion-item--no-border': noBorder,
        'med-accordion-item--open': isOpen,
        'med-accordion-item--background': background,
      }) },
      h("div", { class: "med-accordion-item__header", onClick: () => this.onHeaderClick(), ref: (el) => this.header = el },
        h("div", { class: "med-accordion-item__header-container" },
          h("div", { class: "header-container__start", onClick: () => this.onClick('start') },
            h("slot", { name: "start" })),
          h("div", { class: "header-container__middle", onClick: () => this.onClick('middle') },
            h("slot", { name: "middle" })),
          h("div", { class: "header-container__end", onClick: () => this.onClick('end') },
            h("slot", { name: "end" }))),
        h("div", null,
          h("slot", { name: "auxiliar" })),
        h("div", { onClick: () => this.onClick('middle') },
          h("slot", { name: "full-header" }))),
      h("div", { class: "med-accordion-item__content", ref: (el) => this.content = el },
        h("slot", { name: "content" }))));
  }
  static get is() { return "med-accordion-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-accordion-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-accordion-item.css"]
  }; }
  static get properties() { return {
    "dsColor": {
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
        "text": "Define a cor do componente."
      },
      "attribute": "ds-color",
      "reflect": true
    },
    "noBorder": {
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
        "text": "Define a varia\u00E7\u00E3o da borda do componente."
      },
      "attribute": "no-border",
      "reflect": true,
      "defaultValue": "false"
    },
    "background": {
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
        "text": "Define se o componente ir\u00E1 ter background quando aberto."
      },
      "attribute": "background",
      "reflect": true,
      "defaultValue": "false"
    },
    "canCollapse": {
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
        "text": "Permite que a abertura do accordion seja bloqueada pelo front."
      },
      "attribute": "can-collapse",
      "reflect": true,
      "defaultValue": "true"
    },
    "isOpened": {
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
        "text": "Permite que o front consiga definir quando o accordion vem aberto ou fechado."
      },
      "attribute": "is-opened",
      "reflect": true,
      "defaultValue": "false"
    },
    "slotsToggle": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "'start' | 'middle' | 'end'[]",
        "resolved": "\"end\"[] | \"middle\" | \"start\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Permite que o front consiga definir quando o accordion vem aberto ou fechado."
      },
      "attribute": "slots-toggle",
      "reflect": true,
      "defaultValue": "[]"
    }
  }; }
  static get states() { return {
    "isOpen": {}
  }; }
  static get events() { return [{
      "method": "toggle",
      "name": "toggle",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Internal"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "opened",
      "name": "opened",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "medClick",
      "name": "medClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "hostElement"; }
  static get watchers() { return [{
      "propName": "isOpened",
      "methodName": "watchPropHandler"
    }]; }
}
