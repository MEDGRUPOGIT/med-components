'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medTheme = require('./med-theme-42add9fc.js');

const medRateAulaCss = ".med-rate-aula.sc-med-rate-aula-h:not(:last-child){margin-right:16px}.med-rate-aula.sc-med-rate-aula-h{display:-ms-flexbox;display:flex;position:absolute;width:100%}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__container.sc-med-rate-aula{padding:16px 0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;width:100%;z-index:1;top:0;left:0;-webkit-transform:translateX(100%);transform:translateX(100%);opacity:0;-webkit-transition:300ms all ease-in-out;transition:300ms all ease-in-out}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__item.sc-med-rate-aula{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;margin-right:16px}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__item.sc-med-rate-aula:first-child{padding-left:16px}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__button.sc-med-rate-aula{border:2px solid;border-radius:50%;background:transparent;padding:0;margin:0;width:36px;height:36px;cursor:pointer}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__button--otimo.sc-med-rate-aula{border-color:hsl(var(--med-color-fb-success))}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__button--bom.sc-med-rate-aula{border-color:hsl(var(--med-color-fb-attention))}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__button--regular.sc-med-rate-aula{border-color:hsl(var(--med-color-fb-caution))}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__button--ruim.sc-med-rate-aula{border-color:hsl(var(--med-color-fb-warning))}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__icon--otimo.sc-med-rate-aula{stroke:hsl(var(--med-color-fb-success))}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__icon--bom.sc-med-rate-aula{stroke:hsl(var(--med-color-fb-attention))}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__icon--regular.sc-med-rate-aula{stroke:hsl(var(--med-color-fb-caution))}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__icon--ruim.sc-med-rate-aula{stroke:hsl(var(--med-color-fb-warning))}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__label.sc-med-rate-aula{padding:0;margin:0;margin-top:4px}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__button-fechar.sc-med-rate-aula{margin-left:auto;padding-right:16px}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__end.sc-med-rate-aula{margin-left:auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;padding:16px}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__icon-abrir.sc-med-rate-aula{font-size:38px;margin-bottom:8px}.med-rate-aula--collapsed.sc-med-rate-aula-h .med-rate-aula__container.sc-med-rate-aula{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}.med-rate-aula--collapsed.sc-med-rate-aula-h{width:100%;position:absolute}.med-rate-aula--collapsed.sc-med-rate-aula-h .med-rate-aula__end.sc-med-rate-aula{display:none}";

const MedRateAula = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
      * Define o estado do componente.
      */
    this.collapsed = false;
  }
  /**
    * Define o estado do componente programaticamente.
    */
  async toggle(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.collapsed = !this.collapsed;
  }
  render() {
    const { collapsed } = this;
    return (index.h(index.Host, { class: medTheme.generateMedColor(null, {
        'med-rate-aula': true,
        'med-rate-aula--collapsed': collapsed
      }) }, index.h("div", { class: "med-rate-aula__container" }, index.h("div", { class: "med-rate-aula__item" }, index.h("button", { class: "med-rate-aula__button med-rate-aula__button--otimo" }, index.h("ion-icon", { class: "med-icon med-rate-aula__icon med-rate-aula__icon--otimo", name: "med-excelente" })), index.h("med-type", { token: "p12", class: "med-rate-aula__label", "ds-color": "fb-success" }, "\u00D3timo")), index.h("div", { class: "med-rate-aula__item" }, index.h("button", { class: "med-rate-aula__button med-rate-aula__button--bom" }, index.h("ion-icon", { class: "med-icon med-rate-aula__icon med-rate-aula__icon--bom", name: "med-bom" })), index.h("med-type", { token: "p12", class: "med-rate-aula__label", "ds-color": "fb-attention" }, "Bom")), index.h("div", { class: "med-rate-aula__item" }, index.h("button", { class: "med-rate-aula__button med-rate-aula__button--regular" }, index.h("ion-icon", { class: "med-icon med-rate-aula__icon med-rate-aula__icon--regular", name: "med-regular" })), index.h("med-type", { token: "p12", class: "med-rate-aula__label", "ds-color": "fb-caution" }, "Regular")), index.h("div", { class: "med-rate-aula__item" }, index.h("button", { class: "med-rate-aula__button med-rate-aula__button--ruim" }, index.h("ion-icon", { class: "med-icon med-rate-aula__icon med-rate-aula__icon--ruim", name: "med-ruim" })), index.h("med-type", { token: "p12", class: "med-rate-aula__label", "ds-color": "fb-warning" }, "Ruim")), index.h("div", { class: "med-rate-aula__button-fechar", onClick: (event) => { this.toggle(event); } }, index.h("ion-button", { mode: "ios", "icon-only": true, "ds-size": "xs" }, index.h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" })))), index.h("div", { class: "med-rate-aula__end", onClick: (event) => { this.toggle(event); } }, index.h("ion-button", { mode: "ios", "icon-only": true, "ds-size": "xs", fill: "clear" }, index.h("ion-icon", { slot: "icon-only", class: "med-rate-aula__icon-abrir", name: "med-avaliar" })), index.h("med-type", { token: "p12" }, "Avalie"))));
  }
};
MedRateAula.style = medRateAulaCss;

exports.med_rate_aula = MedRateAula;
