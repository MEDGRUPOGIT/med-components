/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from "@stencil/core";
import { generateMedColor } from "../../../@templarios/utilities/color";
export class MedInputContainer {
    constructor() {
        /**
         * Acrescimo ao hostWidth necessário para contabilizar as bordas
         */
        this.selectAndPopoverDiffWidth = 2;
        this.clickTarget = undefined;
        this.selectWithPopoverClicked = false;
        this.pointerOnSelect = false;
        this.dsColor = undefined;
        this.dsName = undefined;
        this.disabled = false;
        this.feedback = false;
        this.inverted = false;
        this.hasButton = undefined;
        this.hasIcon = undefined;
    }
    setClickTarget(e) {
        if (this.disabled)
            return;
        this.clickTarget = e.target;
    }
    catchSelectIconClick(e) {
        const target = e.target;
        const ionSelect = this.host.querySelector('ion-select');
        const shouldOpenOverlay = this.host.contains(target) &&
            ionSelect.hasAttribute('interface') &&
            (target.nodeName === 'ION-ICON' || target.nodeName === 'TP-INPUT-CONTAINER');
        if (shouldOpenOverlay) {
            ionSelect.open(e);
        }
    }
    setPopoverWidthOnResize() {
        if (!this.selectWithPopoverClicked)
            return;
        const popoverElement = document.querySelector('.select-popover');
        popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty('--width', `${this.host.clientWidth + this.selectAndPopoverDiffWidth}px`);
        this.setPopoverPosition();
    }
    setPopoverCharacteristics() {
        if (!this.host.contains(this.clickTarget))
            return;
        this.selectWithPopoverClicked = true;
        this.hostWidth = this.host.clientWidth + this.selectAndPopoverDiffWidth;
        const popoverElement = document.querySelector('.select-popover');
        popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty('--width', `${this.hostWidth}px`);
        if (this.dsName === 'secondary') {
            popoverElement.classList.add('tp-popover--secondary');
        }
        // colors
        if (this.dsColor) {
            popoverElement.setAttribute('ds-color', this.dsColor);
        }
        if (popoverElement.classList.contains('popover-bottom')) {
            this.inverted = true;
        }
        this.setPopoverPosition();
    }
    // fix para conflito com popover API do chrome
    // pode remover depois de migração pro ionic 7
    fixPopover() {
        const popover = document.querySelector('ion-select-popover');
        if (popover === null || popover === void 0 ? void 0 : popover.hasAttribute('popover')) {
            popover.removeAttribute('popover');
        }
    }
    unsetClikedState() {
        this.selectWithPopoverClicked = false;
    }
    componentDidLoad() {
        const ionSelect = this.host.querySelector('ION-SELECT');
        if (ionSelect) {
            this.pointerOnSelect = true;
            if (!ionSelect.hasAttribute('interface')) {
                ionSelect.interfaceOptions = { cssClass: 'tp-hide' };
            }
        }
    }
    setPopoverPosition() {
        const popoverElement = document.querySelector('.select-popover');
        const { top, bottom, left } = this.host.getBoundingClientRect();
        if (this.inverted) {
            popoverElement.classList.add('tp-popover--inverted');
            popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty('--left', `${left}px`);
            popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty('--bottom', `${window.innerHeight - top}px`);
        }
        else {
            popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty('--left', `${left + 1}px`);
            popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty('--top', `${bottom}px`);
        }
    }
    render() {
        const { dsColor, dsName, selectWithPopoverClicked, pointerOnSelect, inverted, disabled, feedback, hasButton, hasIcon, } = this;
        return (h(Host, { class: generateMedColor(dsColor, {
                'tp-input-container': true,
                'tp-input-container--with-select': pointerOnSelect,
                [`tp-input-container--select-popover-clicked`]: selectWithPopoverClicked,
                [`tp-input-container--inverted`]: inverted,
                'tp-input-container--disabled': disabled,
                'tp-input-container--feedback': feedback,
                [`tp-input-container--${dsName}`]: dsName !== undefined,
                [`tp-input-container--has-button-${hasButton}`]: hasButton !== undefined,
                [`tp-input-container--has-icon-${hasIcon}`]: hasIcon !== undefined,
            }) }, h("slot", { name: "start" }), h("slot", null), h("slot", { name: "end" })));
    }
    static get is() { return "med-input-container"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["tp-input-container.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["tp-input-container.css"]
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
            "feedback": {
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
                "attribute": "feedback",
                "reflect": true,
                "defaultValue": "false"
            },
            "inverted": {
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
                "attribute": "inverted",
                "reflect": true,
                "defaultValue": "false"
            },
            "hasButton": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'start' | 'end' | 'both'",
                    "resolved": "\"both\" | \"end\" | \"start\" | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "has-button",
                "reflect": true
            },
            "hasIcon": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'start' | 'end' | 'both'",
                    "resolved": "\"both\" | \"end\" | \"start\" | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "has-icon",
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "clickTarget": {},
            "selectWithPopoverClicked": {},
            "pointerOnSelect": {}
        };
    }
    static get elementRef() { return "host"; }
    static get listeners() {
        return [{
                "name": "click",
                "method": "setClickTarget",
                "target": "body",
                "capture": false,
                "passive": false
            }, {
                "name": "click",
                "method": "catchSelectIconClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "resize",
                "method": "setPopoverWidthOnResize",
                "target": "window",
                "capture": false,
                "passive": true
            }, {
                "name": "ionPopoverWillPresent",
                "method": "setPopoverCharacteristics",
                "target": "body",
                "capture": false,
                "passive": false
            }, {
                "name": "ionPopoverDidPresent",
                "method": "fixPopover",
                "target": "body",
                "capture": false,
                "passive": false
            }, {
                "name": "ionPopoverWillDismiss",
                "method": "unsetClikedState",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
