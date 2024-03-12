/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h, } from "@stencil/core";
export class MedAutocomplete {
    constructor() {
        this.open = undefined;
        this.baseHeight = undefined;
        this.dropdown = undefined;
        this.debounceTime = 0;
    }
    closeOnOutsideClick(e) {
        const target = e.target;
        if (!this.host.contains(target)) {
            this.open = false;
        }
    }
    handleInput() {
        this.open = true;
        /**
         * debounceTime deve ser setado de acordo com o tempo de debounce
         * do método de busca de items
         */
        setTimeout(() => {
            const extraHeight = this.dropdownElement.getBoundingClientRect().height;
            return this.host.style.setProperty("--autocomplete-height", `${this.baseHeight + extraHeight}px`);
        }, this.debounceTime);
    }
    handleFocus() {
        this.handleInput();
    }
    handleOpenChange() {
        if (!this.dropdownElement) {
            this.dropdownElement = this.host.querySelector("med-dropdown");
        }
        if (this.open) {
            const extraHeight = this.dropdownElement.getBoundingClientRect().height;
            return this.host.style.setProperty("--autocomplete-height", `${this.baseHeight + extraHeight}px`);
        }
    }
    async toggleDropdown() {
        this.open = !this.open;
    }
    componentWillLoad() {
        var _a;
        this.open = (_a = this.dropdown) !== null && _a !== void 0 ? _a : false;
    }
    componentDidLoad() {
        var _a, _b;
        const searchbar = this.host.querySelector("ion-searchbar");
        const searchbarHeight = (_b = (_a = searchbar === null || searchbar === void 0 ? void 0 : searchbar.getBoundingClientRect()) === null || _a === void 0 ? void 0 : _a.height) !== null && _b !== void 0 ? _b : 0;
        if (searchbarHeight) {
            this.baseHeight = searchbar.getBoundingClientRect().height;
            this.host.style.setProperty("--autocomplete-base-height", `${this.baseHeight}px`);
        }
        else {
            const poll = setInterval(() => {
                const searchbar = this.host.querySelector("ion-searchbar");
                if (searchbar) {
                    this.baseHeight = searchbar.getBoundingClientRect().height;
                    if (this.baseHeight) {
                        this.host.style.setProperty("--autocomplete-base-height", `${this.baseHeight}px`);
                    }
                    clearInterval(this.pollTrigger);
                }
            }, 200);
            this.pollTrigger = poll;
        }
    }
    render() {
        const { open } = this;
        return (h(Host, { class: {
                "med-autocomplete--dropdown-hide": !open,
                "med-autocomplete--dropdown-show": open,
            } }, h("slot", null)));
    }
    static get is() { return "med-autocomplete"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["med-autocomplete.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["med-autocomplete.css"]
        };
    }
    static get properties() {
        return {
            "dropdown": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indica se o componente deve ser renderizado mostrando o dropdown ou n\u00E3o"
                },
                "attribute": "dropdown",
                "reflect": true
            },
            "debounceTime": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Se a pesquisa por items possuir debounce time at\u00E9 o item ser inserido\r\n no dom, deve ser indicado por essa propriedade (defaults to 0)"
                },
                "attribute": "debounce-time",
                "reflect": true,
                "defaultValue": "0"
            }
        };
    }
    static get states() {
        return {
            "open": {},
            "baseHeight": {}
        };
    }
    static get methods() {
        return {
            "toggleDropdown": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "host"; }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "handleOpenChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "click",
                "method": "closeOnOutsideClick",
                "target": "body",
                "capture": false,
                "passive": false
            }, {
                "name": "ionInput",
                "method": "handleInput",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "ionFocus",
                "method": "handleFocus",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
