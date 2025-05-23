/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h, } from "@stencil/core";
import { generateMedColor } from "../../../../@templarios/utilities/color";
export class TpSelectDropdown {
  constructor() {
    this.color = undefined;
    this.name = undefined;
    this.value = null;
    this.options = [];
    this.placeholder = undefined;
    this.numeric = false;
    this.disabled = false;
    this.open = false;
    this.selectedOption = null;
  }
  closeOnOutsideClick(event) {
    const target = event.target;
    if (this.open && !this.host.contains(target)) {
      this.open = false;
    }
  }
  closeOnEscapeKey(event) {
    if (this.open && event.key === "Escape") {
      this.open = false;
    }
  }
  handleChange(event) {
    this.value =
      event.target.value === ""
        ? null
        : this.numeric
          ? Number(event.target.value)
          : event.target.value;
    this.valueChange.emit(this.value);
    this.selectedOption = this.options.find(({ value }) => this.value === (value === null || this.numeric ? value : `${value}`));
    if (this.open) {
      this.open = false;
    }
  }
  componentWillLoad() {
    this.selectedOption = this.options.find(({ value }) => this.value === (value === null || this.numeric ? value : `${value}`));
  }
  render() {
    const { color, disabled, name, value, options, placeholder, open, selectedOption, } = this;
    return (h(Host, { class: generateMedColor(color, {
        "tp-select-dropdown": true,
        "tp-select-dropdown--open": open,
        "tp-select-dropdown--disabled": disabled,
      }) }, h("div", { class: "tp-select-dropdown__container" }, h("div", { class: "tp-select-dropdown__header", onClick: () => (this.open = !this.open) }, h("div", { class: "tp-select-dropdown__header-content" }, h("div", { class: "tp-select-dropdown__left" }, h("ion-label", { class: {
        "tp-select-dropdown__label": true,
        "tp-select-dropdown__label--placeholder": !selectedOption,
      },
      // @ts-ignore
      token: "p14" }, selectedOption ? selectedOption.label : placeholder))), h("div", { class: "tp-select-dropdown__arrow" }, h("ion-icon", { class: "med-icon", name: "med-baixo" }))), h("ion-accordion-group", { class: {
        "tp-select-dropdown__accordion-group": true,
        "tp-select-dropdown__accordion-group--open": open,
      }, value: open ? "open" : null }, h("ion-accordion", { class: "tp-select-dropdown__accordion", value: "open" }, h("div", { slot: "content", class: "tp-select-dropdown__options tp-scroll", "no-styling-content": true }, options.map(({ value: optionValue, label }) => (h("label", { class: {
        "tp-select-dropdown__option": true,
        "tp-select-dropdown__option--selected": optionValue === value,
      }, key: optionValue }, h("input", { type: "radio", name: name, value: optionValue === null ? "" : optionValue, checked: optionValue === value, onChange: this.handleChange.bind(this) }), h("div", { class: "tp-select-dropdown__left" }, h("ion-label", { class: "tp-select-dropdown__label",
      // @ts-ignore
      token: "p14", "ds-color": "neutral-10" }, label)))))))))));
  }
  static get is() { return "tp-select-dropdown"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["select-dropdown.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["select-dropdown.css"]
    };
  }
  static get assetsDirs() { return ["assets"]; }
  static get properties() {
    return {
      "color": {
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
          "text": "Define a varia\u00E7\u00E3o de cor do componente."
        },
        "attribute": "color",
        "reflect": true
      },
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Define o nome do componente, agrupando as op\u00E7\u00F5es."
        },
        "attribute": "name",
        "reflect": true
      },
      "value": {
        "type": "any",
        "mutable": true,
        "complexType": {
          "original": "string | number | null",
          "resolved": "null | number | string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Define o valor do componente."
        },
        "attribute": "value",
        "reflect": true,
        "defaultValue": "null"
      },
      "options": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "TpSelectDropdownOption[]",
          "resolved": "TpSelectDropdownOption[]",
          "references": {
            "TpSelectDropdownOption": {
              "location": "import",
              "path": "./utils/select-dropdown.types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Define as op\u00E7\u00F5es de sele\u00E7\u00E3o do componente."
        },
        "defaultValue": "[]"
      },
      "placeholder": {
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
          "text": "Define o placeholder do componente."
        },
        "attribute": "placeholder",
        "reflect": true
      },
      "numeric": {
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
          "text": "Define se o componente representa valores num\u00E9ricos."
        },
        "attribute": "numeric",
        "reflect": true,
        "defaultValue": "false"
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
          "text": "Define o estado disabled do componente."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "open": {},
      "selectedOption": {}
    };
  }
  static get events() {
    return [{
        "method": "valueChange",
        "name": "valueChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Evento emitido quando h\u00E1 mudan\u00E7a no valor do componente."
        },
        "complexType": {
          "original": "string | number",
          "resolved": "number | string",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "host"; }
  static get listeners() {
    return [{
        "name": "click",
        "method": "closeOnOutsideClick",
        "target": "window",
        "capture": false,
        "passive": false
      }, {
        "name": "keydown",
        "method": "closeOnEscapeKey",
        "target": "window",
        "capture": false,
        "passive": false
      }];
  }
}
