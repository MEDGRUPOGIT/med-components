/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from "@stencil/core";
import { generateMedColor } from "../../../@templarios/utilities/color";
export class MedLoader {
    constructor() {
        this.dsColor = undefined;
        this.fixed = false;
        this.dsName = undefined;
    }
    render() {
        const { dsColor, fixed, dsName } = this;
        return dsName === 'secondary' ? (h(Host, { "tp-loader-secondary": true, "ds-color": dsColor, class: generateMedColor(dsColor, {
                'tp-loader-secondary': true,
            }) }, h("div", null), h("div", null), h("div", null), h("div", null), h("div", null), h("div", null), h("div", null), h("div", null))) : (h(Host, { "tp-loader": true, "ds-color": dsColor, class: generateMedColor(dsColor, {
                'tp-loader-secondary': false,
                'tp-loader--fixed': fixed,
            }) }, h("div", { class: "loader-container" }, h("svg", { "tp-loader-svg": true, viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, h("circle", { "tp-loader-circle": true, cx: "50", cy: "50", r: "47" }), h("polyline", { "tp-loader-polyline": true, points: "85,37 63,37 63,15 " }), h("polyline", { "tp-loader-polyline": true, points: "63,86 63,64 85,64 " }), h("polyline", { "tp-loader-polyline": true, points: "14,64 36,64 36,86 " }), h("polyline", { "tp-loader-polyline": true, points: "36,15 36,37 14,37 " }), h("line", { "tp-loader-line": true, x1: "45", y1: "40", x2: "45", y2: "15" }), h("line", { "tp-loader-line": true, x1: "54", y1: "40", x2: "54", y2: "15" }), h("line", { "tp-loader-line": true, x1: "60", y1: "46", x2: "85", y2: "46" }), h("line", { "tp-loader-line": true, x1: "60", y1: "55", x2: "85", y2: "55" }), h("line", { "tp-loader-line": true, x1: "54", y1: "61", x2: "54", y2: "86" }), h("line", { "tp-loader-line": true, x1: "45", y1: "61", x2: "45", y2: "86" }), h("line", { "tp-loader-line": true, x1: "39", y1: "55", x2: "14", y2: "55" }), h("line", { "tp-loader-line": true, x1: "39", y1: "46", x2: "14", y2: "46" }), h("rect", { "tp-loader-rect": true, x: "42", y: "43", width: "6", height: "6" }), h("rect", { "tp-loader-rect": true, x: "42", y: "52", width: "6", height: "6" }), h("rect", { "tp-loader-rect": true, x: "51", y: "43", width: "6", height: "6" }), h("rect", { "tp-loader-rect": true, x: "51", y: "52", width: "6", height: "6" })))));
    }
    static get is() { return "med-loader"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["tp-loader.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["tp-loader.css"]
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
            "fixed": {
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
                "attribute": "fixed",
                "reflect": true,
                "defaultValue": "false"
            },
            "dsName": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'secondary'",
                    "resolved": "\"secondary\" | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "ds-name",
                "reflect": true
            }
        };
    }
}
