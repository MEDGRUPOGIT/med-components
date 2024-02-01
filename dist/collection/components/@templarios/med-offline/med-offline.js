/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from "@stencil/core";
export class MedOffline {
    onClick() {
        this.medClick.emit();
    }
    render() {
        return (h(Host, { "from-stencil": true }, h("div", { class: "wrapper" }, h("med-header", null, h("med-navbar", { "ds-name": "transparent", slot: "navbar" }, h("ion-button", { mode: "ios", "icon-only": true, fill: "clear", "ds-size": "xs", slot: "left", onClick: () => this.onClick() }, h("ion-icon", { class: "med-icon", slot: "icon-only", name: "med-esquerda" })))), h("div", { class: "wrapper__content" }, h("ion-icon", { class: "med-icon med-icon--lg icon-path", name: "med-offline2" }), h("p", { class: "title" }, "Voc\u00EA est\u00E1 offline"), h("p", { class: "text" }, "Conecte-se \u00E0 internet para visualizar esse conte\u00FAdo")))));
    }
    static get is() { return "med-offline"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["med-offline.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["med-offline.css"]
        };
    }
    static get events() {
        return [{
                "method": "medClick",
                "name": "medClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
