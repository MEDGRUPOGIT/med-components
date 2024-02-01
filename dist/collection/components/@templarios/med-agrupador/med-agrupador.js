/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from "@stencil/core";
import { generateMedColor } from "../../../@templarios/utilities/color";
export class MedAgrupador {
    constructor() {
        this.dsColor = undefined;
        this.labelDefault = 'Expandir a lista';
        this.labelAlternativo = 'Ocultar a lista';
        this.collapsed = false;
    }
    async toggle(event) {
        event === null || event === void 0 ? void 0 : event.stopPropagation();
        this.collapsed = !this.collapsed;
    }
    render() {
        const { dsColor, collapsed, labelDefault, labelAlternativo } = this;
        return (h(Host, { class: generateMedColor(dsColor, {
                'med-agrupador': true,
                'med-agrupador--collapsed': collapsed
            }), onClick: (event) => { this.toggle(event); } }, h("div", { class: "med-agrupador__expandir" }, labelDefault), h("div", { class: "med-agrupador__ocultar" }, labelAlternativo), h("ion-icon", { class: "med-icon med-agrupador__icon", name: "med-baixo" })));
    }
    static get is() { return "med-agrupador"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["med-agrupador.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["med-agrupador.css"]
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
                            "path": "../../../@templarios/types/color.type",
                            "id": "src/@templarios/types/color.type.ts::MedColor"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "ds-color",
                "reflect": true
            },
            "labelDefault": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "label-default",
                "reflect": true,
                "defaultValue": "'Expandir a lista'"
            },
            "labelAlternativo": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "label-alternativo",
                "reflect": true,
                "defaultValue": "'Ocultar a lista'"
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
                "defaultValue": "false"
            }
        };
    }
    static get methods() {
        return {
            "toggle": {
                "complexType": {
                    "signature": "(event?: Event) => Promise<void>",
                    "parameters": [{
                            "name": "event",
                            "type": "Event | undefined",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "Event": {
                            "location": "global",
                            "id": "global::Event"
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
}
