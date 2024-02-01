/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from "@stencil/core";
import { generateMedColor } from "../../../@templarios/utilities/color";
export class MedType {
    constructor() {
        this.dsColor = undefined;
        this.token = undefined;
        this.tag = 'span';
    }
    render() {
        const { dsColor, token, tag } = this;
        const TagType = tag === undefined ? 'span' : tag;
        return (h(Host, { class: generateMedColor(dsColor, {
                'med-type': true,
                [`med-type--${token}`]: token !== undefined,
            }) }, h(TagType, null, h("slot", null))));
    }
    static get is() { return "med-type"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["med-type.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["med-type.css"]
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
            "token": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "MedTypeToken",
                    "resolved": "string | undefined",
                    "references": {
                        "MedTypeToken": {
                            "location": "import",
                            "path": "../../../@templarios/types/type.type",
                            "id": "src/@templarios/types/type.type.ts::MedTypeToken"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "token",
                "reflect": true
            },
            "tag": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "MedTypeTag",
                    "resolved": "string | undefined",
                    "references": {
                        "MedTypeTag": {
                            "location": "import",
                            "path": "../../../@templarios/types/type.type",
                            "id": "src/@templarios/types/type.type.ts::MedTypeTag"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "tag",
                "reflect": true,
                "defaultValue": "'span'"
            }
        };
    }
}
