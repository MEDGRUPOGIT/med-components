/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from "@stencil/core";
import { generateMedColor } from "../../../@templarios/utilities/color";
export class MedChartBar {
    constructor() {
        this.hostHeight = 0;
        this.dsColor = undefined;
        this.value = 0;
        this.height = 50;
        this.width = 32;
        this.noLabel = false;
    }
    componentDidLoad() {
        this.setSize();
    }
    disconnectedCallback() {
        if (this.hostResizeObserver) {
            this.hostResizeObserver.disconnect();
        }
    }
    setSize() {
        this.hostResizeObserver = new ResizeObserver(() => {
            var _a;
            let newHostHeight = Number((_a = this.hostElement) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().height);
            if (newHostHeight !== this.hostHeight) {
                this.hostHeight = newHostHeight;
            }
        });
        this.hostResizeObserver.observe(this.hostElement);
    }
    render() {
        const { dsColor, value, height, width } = this;
        const percentage = value === 0 ? height : height - ((height * value) / 100);
        return (h(Host, { class: generateMedColor(dsColor, { 'med-chart-bar': true }), style: { '--value': `${percentage}`, '--height': `${height}`, '--width': `${width}` } }, h("div", { class: "med-chart-bar__container" }, !this.noLabel && (h("div", { class: "med-chart-bar__label" }, h("slot", null))), h("div", { class: "med-chart-bar__progress" }))));
    }
    static get is() { return "med-chart-bar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["med-chart-bar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["med-chart-bar.css"]
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
                    "text": ""
                },
                "attribute": "value",
                "reflect": true,
                "defaultValue": "0"
            },
            "height": {
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
                    "text": ""
                },
                "attribute": "height",
                "reflect": true,
                "defaultValue": "50"
            },
            "width": {
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
                    "text": ""
                },
                "attribute": "width",
                "reflect": true,
                "defaultValue": "32"
            },
            "noLabel": {
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
                "attribute": "no-label",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
    static get elementRef() { return "hostElement"; }
}
