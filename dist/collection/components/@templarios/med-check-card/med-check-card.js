/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from "@stencil/core";
import { generateMedColor } from "../../../@templarios/utilities/color";
export class MedCheckCard {
    constructor() {
        this.dsColor = undefined;
        this.alert = false;
        this.titulo = undefined;
        this.categoria = undefined;
        this.horaInicial = undefined;
        this.horaFinal = undefined;
        this.dataInicial = undefined;
        this.dataFinal = undefined;
        this.finalizada = undefined;
        this.iconName = undefined;
    }
    onClick() {
        this.medClick.emit();
    }
    onTooltipCloseClick() {
        this.medTooltipClose.emit();
    }
    render() {
        const { dsColor, alert, titulo, categoria, horaInicial, horaFinal, dataInicial, dataFinal, iconName, } = this;
        return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
                "med-check-card": true,
                "med-check-card--alert": alert,
            }) }, h("med-base", { "spacing-v": "s00", "spacing-h": "s00", class: "med-check-card__base" }, h("div", { class: "med-check-card__input-container" }, h("slot", { name: "input" })), h("div", { class: "med-check-card__container", onClick: () => this.onClick() }, h("div", { class: "med-check-card__text-container" }, h("med-type", { class: "med-check-card__title", token: "p16xb" }, titulo), h("div", { class: "med-check-card__title-wrap" }, h("div", { class: "med-check-card__info-container" }, h("div", { class: "med-check-card__container-fix" }, h("ion-icon", { class: "med-check-card__icon med-icon med-icon--xs", name: iconName }), h("med-type", { class: "med-check-card__subtitulo", token: "p12xb" }, categoria)), !dataInicial && !dataFinal && horaInicial && horaFinal && (h("med-type", { class: "med-check-card__hora", token: "p12x" }, horaInicial, " \u2013 ", horaFinal)), dataInicial && dataFinal && !horaInicial && !horaFinal && (h("med-type", { class: "med-check-card__data", token: "p12x" }, dataInicial, " at\u00E9 ", dataFinal)))), dataInicial && dataFinal && horaInicial && horaFinal && (h("med-type", { class: "med-check-card__data-hora", token: "p12x" }, dataInicial, " - ", horaInicial, " at\u00E9 ", dataFinal, " - ", horaFinal)))), h("div", { class: alert ? "med-check-card__tooltip-container" : "" }, h("slot", { name: "tooltip" })))));
    }
    static get is() { return "med-check-card"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["med-check-card.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["med-check-card.css"]
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
            "alert": {
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
                "attribute": "alert",
                "reflect": true,
                "defaultValue": "false"
            },
            "titulo": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "titulo",
                "reflect": true
            },
            "categoria": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "categoria",
                "reflect": true
            },
            "horaInicial": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "hora-inicial",
                "reflect": true
            },
            "horaFinal": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "hora-final",
                "reflect": true
            },
            "dataInicial": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "data-inicial",
                "reflect": true
            },
            "dataFinal": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "data-final",
                "reflect": true
            },
            "finalizada": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "finalizada",
                "reflect": true
            },
            "iconName": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "icon-name",
                "reflect": true
            }
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
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "medTooltipClose",
                "name": "medTooltipClose",
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
