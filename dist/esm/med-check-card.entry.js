import { r as registerInstance, e as createEvent, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-33df6a63.js';

const medCheckCardCss = ":host{display:block}.med-check-card__title{margin-right:16px}.med-check-card__title-wrap{display:-ms-flexbox;display:flex}@media (max-width: 575.98px){.med-check-card__title-wrap{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start}}.med-check-card__base{--padding:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border:1px solid transparent}.med-check-card__container{padding:16px 0 16px 0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer;-ms-flex:1;flex:1}@media (max-width: 575.98px){.med-check-card__container{padding:12px 0}}.med-check-card__input-container{padding:16px 0 16px 16px}@media (max-width: 575.98px){.med-check-card__input-container{padding:12px 0 12px 16px}}.med-check-card__text-container{padding:0 18px;-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap}@media (max-width: 575.98px){.med-check-card__text-container{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start}}.med-check-card__info-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap}@media (max-width: 575.98px){.med-check-card__info-container{margin-top:4px}}.med-check-card__icon{stroke:hsl(var(--med-color-neutral-8))}.med-check-card__container-fix{display:-ms-flexbox;display:flex}.med-check-card__subtitulo{--color:hsl(var(--med-color-neutral-8));margin:0 8px;stroke:hsl(var(--med-color-neutral-8))}.med-check-card__hora{--color:hsl(var(--med-color-neutral-8))}.med-check-card__data{--color:hsl(var(--med-color-neutral-8))}@media (max-width: 575.98px){.med-check-card__data{margin-top:8px}}.med-check-card__tooltip-container{padding:16px 16px 16px 0}@media (max-width: 575.98px){.med-check-card__tooltip-container{padding:12px 16px 12px 0}}:host(.med-check-card--alert) .med-check-card__base{border:1px solid hsl(var(--med-color-fb-warning))}";

const MedCheckCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.medClick = createEvent(this, "medClick", 7);
    this.medTooltipClose = createEvent(this, "medTooltipClose", 7);
    /**
      * Define o estado.
      */
    this.alert = false;
  }
  onClick() {
    this.medClick.emit();
  }
  onTooltipCloseClick() {
    this.medTooltipClose.emit();
  }
  render() {
    const { dsColor, alert, titulo, categoria, horaInicial, horaFinal, dataInicial, dataFinal, iconName } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-check-card': true,
        'med-check-card--alert': alert,
      }) }, h("med-base", { "spacing-v": "s00", "spacing-h": "s00", class: "med-check-card__base" }, h("div", { class: "med-check-card__input-container" }, h("slot", { name: "input" })), h("div", { class: "med-check-card__container", onClick: () => this.onClick() }, h("div", { class: "med-check-card__text-container" }, h("med-type", { class: "med-check-card__title", token: "p16xb" }, titulo), h("div", { class: "med-check-card__title-wrap" }, h("div", { class: "med-check-card__info-container" }, h("div", { class: "med-check-card__container-fix" }, h("ion-icon", { class: "med-check-card__icon med-icon med-icon--xs", name: iconName }), h("med-type", { class: "med-check-card__subtitulo", token: "p12xb" }, categoria)), !dataInicial && !dataFinal && horaInicial && horaFinal && h("med-type", { class: "med-check-card__hora", token: "p12x" }, horaInicial, " \u2013 ", horaFinal)), dataInicial && dataFinal && !horaInicial && !horaFinal && h("med-type", { class: "med-check-card__data", token: "p12x" }, dataInicial, " at\u00E9 ", dataFinal), dataInicial && dataFinal && horaInicial && horaFinal && h("med-type", { class: "med-check-card__data", token: "p12x" }, dataInicial, " - ", horaInicial, " at\u00E9 ", dataFinal, " - ", horaFinal)))), h("div", { class: alert ? 'med-check-card__tooltip-container' : '' }, h("slot", { name: "tooltip" })))));
  }
};
MedCheckCard.style = medCheckCardCss;

export { MedCheckCard as med_check_card };
