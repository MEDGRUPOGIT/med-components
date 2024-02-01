/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from "@stencil/core";
import { generateMedColor } from "../../../@templarios/utilities/color";
export class MedCartaoRespostaItem {
    constructor() {
        this.dsColor = undefined;
        this.anulada = false;
        this.impressa = false;
        this.ativa = false;
    }
    render() {
        const { dsColor, anulada, impressa, ativa } = this;
        return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
                'med-cartao-resposta-item': true,
                'med-cartao-resposta-item--anulada': anulada,
                'med-cartao-resposta-item--impressa': impressa,
                'med-cartao-resposta-item--ativa': ativa,
            }) }, h("div", { class: "container" }, h("button", { class: "item-button" }, h("slot", null)))));
    }
    static get is() { return "med-cartao-resposta-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["med-cartao-resposta-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["med-cartao-resposta-item.css"]
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
            "anulada": {
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
                    "text": ""
                },
                "attribute": "anulada",
                "reflect": true,
                "defaultValue": "false"
            },
            "impressa": {
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
                    "text": ""
                },
                "attribute": "impressa",
                "reflect": true,
                "defaultValue": "false"
            },
            "ativa": {
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
                    "text": ""
                },
                "attribute": "ativa",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
}
