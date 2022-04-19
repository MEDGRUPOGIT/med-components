import { r as registerInstance, e as createEvent, h, H as Host } from './index-70672e81.js';

const medThemesCss = ":host{--background-left:hsl(var(--med-color-brand-1));--background-right:hsl(var(--med-color-neutral-1));--background-circle:hsl(var(--med-color-brand-3));--border-color:hsl(var(--med-color-brand-4));--color-text:hsl(var(--med-color-neutral-10))}:host ion-radio-group{width:100%}.med-theme{display:-ms-flexbox;display:flex}.med-theme:not(:last-child){margin-bottom:16px}.med-theme .med-theme__left{padding:16px 8px;width:54px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background:var(--background-left);border:2px solid var(--border-color);border-top-left-radius:8px;border-bottom-left-radius:8px}.med-theme .med-theme__circle{display:block;width:32px;height:32px;border-radius:50%;background:var(--background-circle)}.med-theme .med-theme__right{display:-ms-flexbox;display:flex;width:100%;-ms-flex-direction:column;flex-direction:column;padding:16px;background:var(--background-right);border-top-right-radius:8px;border-bottom-right-radius:8px;border-top:2px solid var(--border-color);border-right:2px solid var(--border-color);border-bottom:2px solid var(--border-color)}.med-theme .med-theme__bar{display:block;width:100%;height:8px;border-radius:4px;background:hsl(var(--med-color-neutral-6));margin:4px 0}.med-theme .med-theme__bar--small{width:80%}.med-theme .med-theme__wrapper{margin-top:8px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.med-theme .med-theme__name{font-size:16px;line-height:100%;font-weight:400;margin-left:16px;color:var(--color-text)}.med-theme--theme-gold{--border-color:hsla(46, 65%, 60%, 1)}.med-theme--theme-gold .med-theme__left{--background-left:hsla(46, 65%, 20%, 1)}.med-theme--theme-gold .med-theme__circle{background:hsl(46, 65%, 40%, 1)}.med-theme--theme-gold .med-theme__bar{background:hsl(46, 10%, 58%, 1)}.med-theme--theme-gold ion-radio{--color:hsla(46, 65%, 60%, 1);--color-checked:hsla(46, 65%, 60%, 1)}";

const MedThemes = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.medChange = createEvent(this, "medChange", 7);
  }
  temaSelecionado(temaAtivo) {
    this.ativo = temaAtivo;
    this.medChange.emit(this.ativo);
  }
  render() {
    const { temas } = this;
    return (h(Host, { "from-stencil": true }, h("ion-radio-group", { onIonChange: ev => this.temaSelecionado(ev.detail.value), value: this.ativo }, temas === null || temas === void 0 ? void 0 : temas.map((tema) => (h("div", { class: `med-theme med-theme--${tema.value}` }, h("div", { class: "med-theme__left" }, h("div", { class: "med-theme__circle" })), h("div", { class: "med-theme__right" }, h("div", { class: "med-theme__bar" }), h("div", { class: "med-theme__bar med-theme__bar--small" }), h("div", { class: "med-theme__wrapper" }, h("ion-radio", { value: tema.value, class: "med-theme__radio" }), h("span", { class: "med-theme__name" }, tema.label)))))))));
  }
};
MedThemes.style = medThemesCss;

export { MedThemes as med_themes };
