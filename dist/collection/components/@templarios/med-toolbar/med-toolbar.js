/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from "@stencil/core";
import { generateMedColor } from "../../../@templarios/utilities/color";
export class MedToolbar {
    constructor() {
        this.dsColor = undefined;
    }
    render() {
        const { dsColor } = this;
        return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
                'med-toolbar': true,
            }) }, h("div", { class: "container" }, h("slot", { name: "start" }), h("div", { class: "container__center" }, h("slot", null)), h("slot", { name: "end" }))));
    }
    static get is() { return "med-toolbar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["med-toolbar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["med-toolbar.css"]
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
