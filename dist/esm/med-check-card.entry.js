import { r as registerInstance, e as createEvent, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-33df6a63.js';

const medCheckCardCss = ".med-check-card__base{--padding:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border:1px solid transparent}.med-check-card__container{padding:16px 0 16px 0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer;-ms-flex:1;flex:1}.med-check-card__input-container{padding:16px 0 16px 12px}.med-check-card__text-container{padding:0 18px;-ms-flex:1;flex:1}.med-check-card__info-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap}.med-check-card__icon{stroke:hsl(var(--med-color-neutral-8));padding-top:4px}.med-check-card__container-fix{display:-ms-flexbox;display:flex}.med-check-card__subtitulo{margin:0 8px;padding-top:4px;stroke:hsl(var(--med-color-neutral-8))}.med-check-card__hora{color:hsl(var(--med-color-neutral-8));padding-top:4px}.med-check-card__data{margin-top:4px;color:hsl(var(--med-color-neutral-8))}.med-check-card__tooltip-container{padding:16px 12px 16px 0}:host(.med-check-card--alert) .med-check-card__base{border:1px solid hsl(var(--med-color-fb-warning))}";

const MedCheckCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.medClick = createEvent(this, "medClick", 7);
    this.medTooltipClose = createEvent(this, "medTooltipClose", 7);
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
      }) }, h("med-base", { class: "med-check-card__base" }, h("div", { class: "med-check-card__input-container" }, h("slot", { name: "input" })), h("div", { class: "med-check-card__container", onClick: () => this.onClick() }, h("div", { class: "med-check-card__text-container" }, h("med-type", { token: "p16xb" }, titulo), h("div", { class: "med-check-card__info-container" }, h("div", { class: "med-check-card__container-fix" }, h("ion-icon", { class: "med-check-card__icon med-icon med-icon--xs", name: iconName }), h("med-type", { class: "med-check-card__subtitulo", token: "p12xb" }, categoria)), !dataInicial && !dataFinal && horaInicial && horaFinal && h("med-type", { class: "med-check-card__hora", token: "p12x" }, horaInicial, " \u2013 ", horaFinal)), dataInicial && dataFinal && !horaInicial && !horaFinal && h("med-type", { class: "med-check-card__data", token: "p12x" }, dataInicial, " at\u00E9 ", dataFinal), dataInicial && dataFinal && horaInicial && horaFinal && h("med-type", { class: "med-check-card__data", token: "p12x" }, dataInicial, " - ", horaInicial, " at\u00E9 ", dataFinal, " - ", horaFinal))), h("div", { class: alert ? 'med-check-card__tooltip-container' : '' }, h("slot", { name: "tooltip" })))));
  }
};
MedCheckCard.style = medCheckCardCss;

export { MedCheckCard as med_check_card };
