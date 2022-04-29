import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedNavAccordion {
  render() {
    const { dsColor } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-nav-accordion': true,
      }) },
      h("med-accordion-list", { class: "med-nav-accordion__list", "single-open": "false" },
        h("med-accordion-item", { class: "med-nav-accordion__item", color: "aula", background: true },
          h("div", { class: "med-nav-accordion__header", slot: "full-header" },
            h("med-type", { token: "p16b" }, "Mentoria"),
            h("ion-icon", { class: "med-icon med-nav-accordion__icon", name: "med-baixo" })),
          h("div", { slot: "content" },
            h("med-nav-item", { icon: "med-orientacao", text: "Orienta\u00E7\u00F5es" }),
            h("med-nav-item", { icon: "med-metricas", text: "Desempenho" }))),
        h("med-accordion-item", { class: "med-nav-accordion__item", color: "aula", background: true },
          h("div", { class: "med-nav-accordion__header", slot: "full-header" },
            h("med-type", { token: "p16b" }, "Geral"),
            h("ion-icon", { class: "med-icon med-nav-accordion__icon", name: "med-baixo" })),
          h("div", { class: "", slot: "content" },
            h("med-nav-item", { icon: "med-qrcode", text: "Medcode" }),
            h("med-nav-item", { icon: "med-slidedeaula", text: "Slides de Aula" }),
            h("med-nav-item", { icon: "med-duvidasacademicas", text: "D\u00FAvidas Acad\u00EAmicas" }),
            h("med-nav-item", { icon: "med-cronograma", text: "Cronograma" }),
            h("med-nav-item", { icon: "med-bonus", text: "B\u00F4nus" }),
            h("med-nav-item", { icon: "med-drogas", text: "Drogas" }))),
        h("med-accordion-item", { class: "med-nav-accordion__item", color: "aula", background: true },
          h("div", { class: "med-nav-accordion__header", slot: "full-header" },
            h("med-type", { token: "p16b" }, "Treinamento"),
            h("ion-icon", { class: "med-icon med-nav-accordion__icon", name: "med-baixo" })),
          h("div", { class: "", slot: "content" },
            h("med-nav-item", { icon: "med-anotacao", text: "Simulados" }),
            h("med-nav-item", { icon: "med-multimidia", text: "Multimedia" }),
            h("med-nav-item", { icon: "med-concursos", text: "Concurso na Integra" }),
            h("med-nav-item", { icon: "med-montaprovas", text: "Monta Provas" }))))));
  }
  static get is() { return "med-nav-accordion"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-nav-accordion.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-nav-accordion.css"]
  }; }
  static get properties() { return {
    "dsColor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "MedColor",
        "resolved": "string | undefined",
        "references": {
          "MedColor": {
            "location": "import",
            "path": "../../../../interface"
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
  }; }
}
