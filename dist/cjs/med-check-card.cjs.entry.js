'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medTheme = require('./med-theme-42add9fc.js');

const medCheckCardCss = ".med-check-card__base{--padding:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border:1px solid transparent}.med-check-card__container{padding:16px 0 16px 0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer;-ms-flex:1;flex:1}.med-check-card__input-container{padding:16px 0 16px 12px}.med-check-card__text-container{padding:0 18px;-ms-flex:1;flex:1}.med-check-card__info-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-top:4px}.med-check-card__icon{stroke:hsl(var(--med-color-neutral-8))}.med-check-card__subtitulo{margin:0 8px;stroke:hsl(var(--med-color-neutral-8))}.med-check-card__hora{color:hsl(var(--med-color-neutral-8))}.med-check-card__data{margin-top:4px;color:hsl(var(--med-color-neutral-8))}.med-check-card__tooltip-container{padding:16px 12px 16px 0}:host(.med-check-card--alert) .med-check-card__base{border:1px solid hsl(var(--med-color-fb-warning))}";

const MedCheckCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.medClick = index.createEvent(this, "medClick", 7);
    this.medTooltipClose = index.createEvent(this, "medTooltipClose", 7);
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
    return (index.h(index.Host, { "from-stencil": true, class: medTheme.generateMedColor(dsColor, {
        'med-check-card': true,
        'med-check-card--alert': alert,
      }) }, index.h("med-base", { class: "med-check-card__base" }, index.h("div", { class: "med-check-card__input-container" }, index.h("slot", { name: "input" })), index.h("div", { class: "med-check-card__container", onClick: () => this.onClick() }, index.h("div", { class: "med-check-card__text-container" }, index.h("med-type", { token: "p16xb" }, titulo), index.h("div", { class: "med-check-card__info-container" }, index.h("ion-icon", { class: "med-check-card__icon med-icon med-icon--xs", name: iconName }), index.h("med-type", { class: "med-check-card__subtitulo", token: "p12xb" }, categoria), !dataInicial && !dataFinal && index.h("med-type", { class: "med-check-card__hora", token: "p12x" }, horaInicial, " \u2013 ", horaFinal)), dataInicial && dataFinal && index.h("med-type", { class: "med-check-card__data", token: "p12x" }, dataInicial, " - ", horaInicial, " at\u00E9 ", dataFinal, " - ", horaFinal))), index.h("div", { class: alert ? 'med-check-card__tooltip-container' : '' }, index.h("slot", { name: "tooltip" })))));
  }
};
MedCheckCard.style = medCheckCardCss;

exports.med_check_card = MedCheckCard;
