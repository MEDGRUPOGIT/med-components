import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-83c28ab9.js';

const medRateAulaCss = ".med-rate-aula.sc-med-rate-aula-h:not(:last-child){margin-right:16px}.med-rate-aula.sc-med-rate-aula-h{display:-ms-flexbox;display:flex;position:absolute;width:100%}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__container.sc-med-rate-aula{padding:16px 0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;width:100%;z-index:1;top:0;left:0;-webkit-transform:translateX(100%);transform:translateX(100%);opacity:0;-webkit-transition:300ms all ease-in-out;transition:300ms all ease-in-out}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__item.sc-med-rate-aula{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;margin-right:16px}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__item.sc-med-rate-aula:first-child{padding-left:16px}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__button.sc-med-rate-aula{border:2px solid;border-radius:50%;background:transparent;padding:0;margin:0;width:36px;height:36px;cursor:pointer}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__button--otimo.sc-med-rate-aula{border-color:hsl(var(--med-color-fb-success))}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__button--bom.sc-med-rate-aula{border-color:hsl(var(--med-color-fb-attention))}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__button--regular.sc-med-rate-aula{border-color:hsl(var(--med-color-fb-caution))}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__button--ruim.sc-med-rate-aula{border-color:hsl(var(--med-color-fb-warning))}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__icon--otimo.sc-med-rate-aula{stroke:hsl(var(--med-color-fb-success))}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__icon--bom.sc-med-rate-aula{stroke:hsl(var(--med-color-fb-attention))}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__icon--regular.sc-med-rate-aula{stroke:hsl(var(--med-color-fb-caution))}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__icon--ruim.sc-med-rate-aula{stroke:hsl(var(--med-color-fb-warning))}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__label.sc-med-rate-aula{padding:0;margin:0;margin-top:4px}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__button-fechar.sc-med-rate-aula{margin-left:auto;padding-right:16px}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__end.sc-med-rate-aula{margin-left:auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;padding:16px}.med-rate-aula.sc-med-rate-aula-h .med-rate-aula__icon-abrir.sc-med-rate-aula{font-size:38px;margin-bottom:8px}.med-rate-aula--collapsed.sc-med-rate-aula-h .med-rate-aula__container.sc-med-rate-aula{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}.med-rate-aula--collapsed.sc-med-rate-aula-h{width:100%;position:absolute}.med-rate-aula--collapsed.sc-med-rate-aula-h .med-rate-aula__end.sc-med-rate-aula{display:none}";

const MedRateAula = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, { class: generateMedColor(null, {
        'med-rate-aula': true,
        'med-rate-aula--collapsed': collapsed
      }) }, h("div", { class: "med-rate-aula__container" }, h("div", { class: "med-rate-aula__item" }, h("button", { class: "med-rate-aula__button med-rate-aula__button--otimo" }, h("ion-icon", { class: "med-icon med-rate-aula__icon med-rate-aula__icon--otimo", name: "med-excelente" })), h("med-type", { token: "p12", class: "med-rate-aula__label", "ds-color": "fb-success" }, "\u00D3timo")), h("div", { class: "med-rate-aula__item" }, h("button", { class: "med-rate-aula__button med-rate-aula__button--bom" }, h("ion-icon", { class: "med-icon med-rate-aula__icon med-rate-aula__icon--bom", name: "med-bom" })), h("med-type", { token: "p12", class: "med-rate-aula__label", "ds-color": "fb-attention" }, "Bom")), h("div", { class: "med-rate-aula__item" }, h("button", { class: "med-rate-aula__button med-rate-aula__button--regular" }, h("ion-icon", { class: "med-icon med-rate-aula__icon med-rate-aula__icon--regular", name: "med-regular" })), h("med-type", { token: "p12", class: "med-rate-aula__label", "ds-color": "fb-caution" }, "Regular")), h("div", { class: "med-rate-aula__item" }, h("button", { class: "med-rate-aula__button med-rate-aula__button--ruim" }, h("ion-icon", { class: "med-icon med-rate-aula__icon med-rate-aula__icon--ruim", name: "med-ruim" })), h("med-type", { token: "p12", class: "med-rate-aula__label", "ds-color": "fb-warning" }, "Ruim")), h("div", { class: "med-rate-aula__button-fechar", onClick: (event) => { this.toggle(event); } }, h("ion-button", { mode: "ios", "icon-only": true, "ds-size": "xs" }, h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" })))), h("div", { class: "med-rate-aula__end", onClick: (event) => { this.toggle(event); } }, h("ion-button", { mode: "ios", "icon-only": true, "ds-size": "xs", fill: "clear" }, h("ion-icon", { slot: "icon-only", class: "med-rate-aula__icon-abrir", name: "med-avaliar" })), h("med-type", { token: "p12" }, "Avalie"))));
  }
};
MedRateAula.style = medRateAulaCss;

export { MedRateAula as med_rate_aula };
