/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from "@stencil/core";
import { generateMedColor } from "../../../@templarios/utilities/color";
export class MedRateBar {
    constructor() {
        this.dsColor = undefined;
    }
    render() {
        const { dsColor } = this;
        return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
                'med-rate-bar': true,
            }) }, h("slot", null), h("slot", { name: "avaliacao" })));
    }
    static get is() { return "med-rate-bar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["med-rate-bar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["med-rate-bar.css"]
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
            }
        };
    }
}
