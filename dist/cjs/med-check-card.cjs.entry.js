'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const color = require('./color-2d4645aa.js');

const medCheckCardCss = ".sc-med-check-card-h{display:block}.med-check-card__title.sc-med-check-card{margin-right:16px}.med-check-card__title-wrap.sc-med-check-card{display:-ms-flexbox;display:flex;margin-top:4px}.med-check-card__base.sc-med-check-card{--padding:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border:1px solid transparent}.med-check-card__container.sc-med-check-card{padding:12px 0 12px 0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer;-ms-flex:1;flex:1}.med-check-card__input-container.sc-med-check-card{padding:12px 0 12px 16px}.med-check-card__text-container.sc-med-check-card{padding:0 18px;-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-direction:column;flex-direction:column}.med-check-card__info-container.sc-med-check-card{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap}.med-check-card__icon.sc-med-check-card{stroke:hsl(var(--med-color-neutral-8))}.med-check-card__container-fix.sc-med-check-card{display:-ms-flexbox;display:flex}.med-check-card__subtitulo.sc-med-check-card{--color:hsl(var(--med-color-neutral-8));margin:0 8px;stroke:hsl(var(--med-color-neutral-8))}.med-check-card__hora.sc-med-check-card{--color:hsl(var(--med-color-neutral-8))}.med-check-card__data.sc-med-check-card{--color:hsl(var(--med-color-neutral-8))}.med-check-card__data-hora.sc-med-check-card{margin-top:8px;--color:hsl(var(--med-color-neutral-8))}.med-check-card__tooltip-container.sc-med-check-card{padding:12px 16px 12px 0}.med-check-card--alert.sc-med-check-card-h .med-check-card__base.sc-med-check-card{border:1px solid hsl(var(--med-color-fb-warning))}";

const MedCheckCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.medClick = index.createEvent(this, "medClick", 7);
    this.medTooltipClose = index.createEvent(this, "medTooltipClose", 7);
    /**
     * todo
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
    const { dsColor, alert, titulo, categoria, horaInicial, horaFinal, dataInicial, dataFinal, iconName, } = this;
    return (index.h(index.Host, { "from-stencil": true, class: color.generateMedColor(dsColor, {
        "med-check-card": true,
        "med-check-card--alert": alert,
      }) }, index.h("med-base", { "spacing-v": "s00", "spacing-h": "s00", class: "med-check-card__base" }, index.h("div", { class: "med-check-card__input-container" }, index.h("slot", { name: "input" })), index.h("div", { class: "med-check-card__container", onClick: () => this.onClick() }, index.h("div", { class: "med-check-card__text-container" }, index.h("med-type", { class: "med-check-card__title", token: "p16xb" }, titulo), index.h("div", { class: "med-check-card__title-wrap" }, index.h("div", { class: "med-check-card__info-container" }, index.h("div", { class: "med-check-card__container-fix" }, index.h("ion-icon", { class: "med-check-card__icon med-icon med-icon--xs", name: iconName }), index.h("med-type", { class: "med-check-card__subtitulo", token: "p12xb" }, categoria)), !dataInicial && !dataFinal && horaInicial && horaFinal && (index.h("med-type", { class: "med-check-card__hora", token: "p12x" }, horaInicial, " \u2013 ", horaFinal)), dataInicial && dataFinal && !horaInicial && !horaFinal && (index.h("med-type", { class: "med-check-card__data", token: "p12x" }, dataInicial, " at\u00E9 ", dataFinal)))), dataInicial && dataFinal && horaInicial && horaFinal && (index.h("med-type", { class: "med-check-card__data-hora", token: "p12x" }, dataInicial, " - ", horaInicial, " at\u00E9 ", dataFinal, " - ", horaFinal)))), index.h("div", { class: alert ? "med-check-card__tooltip-container" : "" }, index.h("slot", { name: "tooltip" })))));
  }
};
MedCheckCard.style = medCheckCardCss;

exports.med_check_card = MedCheckCard;
