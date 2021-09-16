import { Component, Element, Event, h, Host, Prop, State } from '@stencil/core';
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
    this.isOpen = false;
    this.isTransitioning = false;
    this.onClick = () => {
      this.toggleOpen();
    };
  }
  toggleOpen() {
    if (this.isTransitioning) {
      return;
    }
    this.isOpen = !this.isOpen;
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
      },
    });
  }
  render() {
    const { dsColor, noBorder, icon, isOpen, background } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-accordion-item': true,
        'med-accordion-item--no-border': noBorder,
        'med-accordion-item--open': isOpen,
        'med-accordion-item--background': background,
      }) },
      h("div", { class: "med-accordion-item__header", ref: (el) => this.header = el },
        h("div", { class: "med-accordion-item__header-container" },
          icon === 'left' && h("div", { class: "med-accordion-item__icon-container med-accordion-item__icon-container--left", onClick: () => this.onClick() },
            h("ion-icon", { class: "med-icon med-accordion-item__icon", name: "med-baixo" })),
          h("div", { class: "med-accordion-item__heading", onClick: () => this.onClick() },
            h("slot", { name: "header" }),
            h("slot", { name: "auxiliar" })),
          h("slot", { name: "button" }),
          (!icon || icon === 'right') && h("div", { class: "med-accordion-item__icon-container med-accordion-item__icon-container--right", onClick: () => this.onClick() },
            h("ion-icon", { class: "med-icon med-accordion-item__icon", name: "med-baixo" }))),
        h("div", { class: "med-accordion-item__bar" },
          h("slot", { name: "progress" }))),
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
        "text": "Define a posi\u00E7\u00E3o do \u00EDcone de abertura do componente."
      },
      "attribute": "icon",
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
        "text": "TODO"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "hostElement"; }
}
