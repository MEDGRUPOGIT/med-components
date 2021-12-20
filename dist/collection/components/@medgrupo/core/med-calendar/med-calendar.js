import { Component, Host, h, Prop } from '@stencil/core';
import { generateMedColor } from '../../../../utils/med-theme';
export class MedCalendar {
  render() {
    const { dsColor } = this;
    return (h(Host, { class: generateMedColor(dsColor, { 'med-calendar': true }) },
      h("div", { class: "week" },
        h("div", { class: "week__day" }, "Seg"),
        h("div", { class: "week__day" }, "Ter"),
        h("div", { class: "week__day" }, "Qua"),
        h("div", { class: "week__day" }, "Qui"),
        h("div", { class: "week__day" }, "Sex"),
        h("div", { class: "week__day" }, "Sab")),
      h("div", { class: "body" },
        h("ion-slides", null,
          h("ion-slide", null,
            h("div", { class: "month__grid" },
              h("button", { class: "week__day" }, "1"),
              h("button", { class: "week__day" }, "2"),
              h("button", { class: "week__day" }, "3"),
              h("button", { class: "week__day" }, "4"),
              h("button", { class: "week__day" }, "5"),
              h("button", { class: "week__day" }, "6"),
              h("button", { class: "week__day" }, "7"),
              h("button", { class: "week__day" }, "8"),
              h("button", { class: "week__day" }, "9"),
              h("button", { class: "week__day" }, "10"),
              h("button", { class: "week__day" }, "11"),
              h("button", { class: "week__day" }, "12"),
              h("button", { class: "week__day" }, "13"),
              h("button", { class: "week__day" }, "14"),
              h("button", { class: "week__day" }, "15"),
              h("button", { class: "week__day" }, "16"),
              h("button", { class: "week__day" }, "17"),
              h("button", { class: "week__day" }, "18"),
              h("button", { class: "week__day" }, "19"),
              h("button", { class: "week__day" }, "20"),
              h("button", { class: "week__day" }, "21"),
              h("button", { class: "week__day" }, "22"),
              h("button", { class: "week__day" }, "23"),
              h("button", { class: "week__day" }, "24"),
              h("button", { class: "week__day" }, "25"),
              h("button", { class: "week__day" }, "26"),
              h("button", { class: "week__day" }, "27"),
              h("button", { class: "week__day" }, "28"),
              h("button", { class: "week__day" }, "29"),
              h("button", { class: "week__day" }, "30"),
              h("button", { class: "week__day" }, "31"))),
          h("ion-slide", null,
            h("div", { class: "month__grid" },
              h("button", { class: "week__day" }, "1"),
              h("button", { class: "week__day" }, "2"),
              h("button", { class: "week__day" }, "3"),
              h("button", { class: "week__day" }, "4"),
              h("button", { class: "week__day" }, "5"),
              h("button", { class: "week__day" }, "6"),
              h("button", { class: "week__day" }, "7"),
              h("button", { class: "week__day" }, "8"),
              h("button", { class: "week__day" }, "9"),
              h("button", { class: "week__day" }, "10"),
              h("button", { class: "week__day" }, "11"),
              h("button", { class: "week__day" }, "12"),
              h("button", { class: "week__day" }, "13"),
              h("button", { class: "week__day" }, "14"),
              h("button", { class: "week__day" }, "15"),
              h("button", { class: "week__day" }, "16"),
              h("button", { class: "week__day" }, "17"),
              h("button", { class: "week__day" }, "18"),
              h("button", { class: "week__day" }, "19"),
              h("button", { class: "week__day" }, "20"),
              h("button", { class: "week__day" }, "21"),
              h("button", { class: "week__day" }, "22"),
              h("button", { class: "week__day" }, "23"),
              h("button", { class: "week__day" }, "24"),
              h("button", { class: "week__day" }, "25"),
              h("button", { class: "week__day" }, "26"),
              h("button", { class: "week__day" }, "27"),
              h("button", { class: "week__day" }, "28"),
              h("button", { class: "week__day" }, "29"),
              h("button", { class: "week__day" }, "30"),
              h("button", { class: "week__day" }, "31")))))));
  }
  static get is() { return "med-calendar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-calendar.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-calendar.css"]
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
        "text": "Define a cor do componente."
      },
      "attribute": "ds-color",
      "reflect": true
    }
  }; }
}
