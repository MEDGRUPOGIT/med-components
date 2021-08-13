import { Component, Host, h, Prop } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';
export class MedAvatar {
  render() {
    const { dsSize, image, letter } = this;
    return (h(Host, { "from-stencil": true, class: createColorClasses(null, {
        'med-avatar': true,
        [`med-avatar--${dsSize}`]: dsSize !== undefined,
      }, null) },
      (letter) && h("span", { class: "med-avatar__letter" }, letter),
      (image) && h("img", { class: "med-avatar__img", src: image })));
  }
  static get is() { return "med-avatar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-avatar.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-avatar.css"]
  }; }
  static get properties() { return {
    "dsSize": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'xxs' | 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | 'xxl'",
        "resolved": "\"base\" | \"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\" | \"xxl\" | \"xxs\" | undefined",
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
    "image": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a imagem do componente."
      },
      "attribute": "image",
      "reflect": false
    },
    "letter": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a imagem do componente."
      },
      "attribute": "letter",
      "reflect": false
    }
  }; }
}
