/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class MedSearchBar {
  constructor() {
    this.dsColor = undefined;
  }
  toggleClass(e) {
    var _a;
    this.el.classList.toggle('active');
    e.target.classList.add('click');
    setTimeout(() => {
      e.target.classList.remove('click');
    }, 1000);
    if (e.target === document.getElementById("busca")) {
      (_a = document.querySelector('ion-searchbar')) === null || _a === void 0 ? void 0 : _a.setFocus();
    }
  }
  render() {
    const { dsColor } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-search-bar': true,
      }) }, h("div", { class: "busca" }, h("button", { class: "busca__button", id: "fechar", onClick: (e) => this.toggleClass(e) }, h("ion-icon", { class: "med-icon", name: "med-fechar" })), h("slot", null)), h("div", { class: "title-container" }, h("h1", { class: "title-container__title" }, "Conte\u00FAdos"), h("button", { class: "title-container__button", id: "busca", onClick: (e) => this.toggleClass(e) }, h("ion-icon", { class: "med-icon", name: "med-busca" })))));
  }
  static get is() { return "med-search-bar"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["med-search-bar.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["med-search-bar.css"]
    };
  }
  static get properties() {
    return {
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
      }
    };
  }
  static get elementRef() { return "el"; }
}
