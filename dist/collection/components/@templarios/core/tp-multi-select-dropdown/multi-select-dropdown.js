/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from '@stencil/core';
import { generateMedColor } from '../../../../@templarios/utilities/color';
export class TpMultiSelectDropdown {
  constructor() {
    this.selectedOptionsMap = new Map();
    this.color = undefined;
    this.value = [];
    this.options = [];
    this.placeholder = undefined;
    this.valueLabel = undefined;
    this.numeric = false;
    this.open = false;
    this.selectedOptions = [];
  }
  closeOnOutsideClick(event) {
    const target = event.target;
    if (this.open && !this.host.contains(target)) {
      this.open = false;
    }
  }
  closeOnEscapeKey(event) {
    if (this.open && event.key === 'Escape') {
      this.open = false;
    }
  }
  onValueChange() {
    this.selectedOptions = this.getSelectedOptions();
  }
  change(event) {
    const value = this.numeric
      ? Number(event.detail.value)
      : event.detail.value;
    const updatedValue = this.getUpdatedValue(value, event.detail.checked);
    this.value = updatedValue;
    this.valueChange.emit(updatedValue);
  }
  getUpdatedValue(selectedValue, checked) {
    const isIncluded = this.value.includes(selectedValue);
    if (!isIncluded && checked) {
      return [...this.value, selectedValue];
    }
    else if (isIncluded && !checked) {
      return this.value.filter((optionValue) => optionValue !== selectedValue);
    }
    return [...this.value];
  }
  getSelectedOptions() {
    const selectedOptions = this.options.filter(({ value }) => {
      return this.value.includes(value);
    });
    this.options.forEach(({ value }) => {
      this.selectedOptionsMap.set(value, false);
    });
    selectedOptions.forEach(({ value }) => {
      this.selectedOptionsMap.set(value, true);
    });
    return selectedOptions;
  }
  componentWillLoad() {
    this.selectedOptions = this.getSelectedOptions();
  }
  render() {
    const { color, options, placeholder, valueLabel, open, selectedOptions, selectedOptionsMap } = this;
    return (h(Host, { class: generateMedColor(color, {
        'tp-multi-select-dropdown': true,
        'tp-multi-select-dropdown--open': open
      }) }, h("div", { class: 'tp-multi-select-dropdown__container' }, h("div", { class: 'tp-multi-select-dropdown__header', onClick: () => (this.open = !this.open) }, h("div", { class: 'tp-multi-select-dropdown__header-content' }, h("div", { class: 'tp-multi-select-dropdown__left' }, h("ion-label", { class: {
        'tp-multi-select-dropdown__label': true,
        'tp-multi-select-dropdown__label--placeholder': !selectedOptions.length
      },
      // @ts-ignore
      token: 'p14' }, selectedOptions.length
      ? valueLabel
        ? valueLabel
        : selectedOptions.map(({ label }) => label).join(', ')
      : placeholder))), h("div", { class: 'tp-multi-select-dropdown__arrow' }, h("ion-icon", { class: 'med-icon', name: 'med-baixo' }))), h("ion-accordion-group", { class: {
        'tp-multi-select-dropdown__accordion-group': true,
        'tp-multi-select-dropdown__accordion-group--open': open
      }, value: open ? 'open' : null }, h("ion-accordion", { class: 'tp-multi-select-dropdown__accordion', value: 'open' }, h("div", { slot: 'content', class: 'tp-multi-select-dropdown__options tp-scroll', "no-styling-content": true }, options.map(({ value: optionValue, label }) => (h("ion-item", { class: 'tp-multi-select-dropdown__option', mode: 'ios',
      //  @ts-ignore
      gap: 's16', "spacing-v": 's08', "spacing-h": 's12' }, h("ion-checkbox", { mode: 'md', slot: 'start', checked: selectedOptionsMap.get(optionValue), value: optionValue, onIonChange: this.change.bind(this) }), h("ion-label", { class: 'tp-multi-select-dropdown__label',
      //  @ts-ignore
      token: 'p14', "ds-color": 'neutral-10' }, label))))))))));
  }
  static get is() { return "tp-multi-select-dropdown"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["multi-select-dropdown.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["multi-select-dropdown.css"]
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
      "value": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "Array<string | number>",
          "resolved": "(string | number)[]",
          "references": {
            "Array": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Define o valor do componente."
        },
        "defaultValue": "[]"
      },
      "options": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "TpMultiSelectDropdownOption[]",
          "resolved": "TpMultiSelectDropdownOption[]",
          "references": {
            "TpMultiSelectDropdownOption": {
              "location": "import",
              "path": "./utils/multi-select-dropdown.types"
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
      "valueLabel": {
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
          "text": "Define a representa\u00E7\u00E3o do valor selecionado caso o usu\u00E1rio do componente deseja n\u00E3o utilizar o default."
        },
        "attribute": "value-label",
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
      }
    };
  }
  static get states() {
    return {
      "open": {},
      "selectedOptions": {}
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
          "original": "Array<string | number>",
          "resolved": "(string | number)[]",
          "references": {
            "Array": {
              "location": "global"
            }
          }
        }
      }];
  }
  static get elementRef() { return "host"; }
  static get watchers() {
    return [{
        "propName": "value",
        "methodName": "onValueChange"
      }];
  }
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
