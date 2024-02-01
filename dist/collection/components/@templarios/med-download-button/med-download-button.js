/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from "@stencil/core";
import { generateMedColor } from "../../../@templarios/utilities/color";
export class MedDownloadButton {
    constructor() {
        this.dsColor = undefined;
        this.value = 0;
        this.downloading = false;
        this.downloaded = false;
        this.disabled = false;
        this.dsSize = undefined;
        this.index = undefined;
        this.identification = undefined;
    }
    render() {
        const { dsColor, value, downloading, downloaded, dsSize } = this;
        return (h(Host, { class: generateMedColor(dsColor, {
                'med-download-button': true,
                'med-download-button--downloading': downloading && !downloaded,
                'med-download-button--downloaded': downloaded,
                [`med-download-button--${dsSize}`]: dsSize !== undefined,
            }) }, h("div", { class: "med-download-button__icon" }, h("svg", { viewBox: "0 0 36 36", class: "med-download-button__svg" }, h("circle", { cx: "18", cy: "18", r: "16", class: "med-download-button__circle" }), h("circle", { cx: "18", cy: "18", r: "16", class: "med-download-button__circle med-download-button__circle--value", style: { '--value': `${value}` } })))));
    }
    static get is() { return "med-download-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["med-download-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["med-download-button.css"]
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
            "value": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "value",
                "reflect": true,
                "defaultValue": "0"
            },
            "downloading": {
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
                "attribute": "downloading",
                "reflect": true,
                "defaultValue": "false"
            },
            "downloaded": {
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
                "attribute": "downloaded",
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
                    "text": ""
                },
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "dsSize": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'lg'",
                    "resolved": "\"lg\" | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "ds-size",
                "reflect": true
            },
            "index": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "remover"
                },
                "attribute": "index",
                "reflect": true
            },
            "identification": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "string|number|undefined",
                    "resolved": "number | string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "remover"
                },
                "attribute": "identification",
                "reflect": true
            }
        };
    }
    static get events() {
        return [{
                "method": "medDownloadRequested",
                "name": "medDownloadRequested",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
}
