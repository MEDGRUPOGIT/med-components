/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');

const medThemesCss = ".sc-med-themes-h{--background-left:hsl(var(--med-color-brand-1));--background-right:hsl(var(--med-color-neutral-1));--background-circle:hsl(var(--med-color-brand-3));--border-color:hsl(var(--med-color-brand-4));--color-text:hsl(var(--med-color-neutral-10));cursor:pointer}.sc-med-themes-h ion-radio-group.sc-med-themes{width:100%}.med-theme.sc-med-themes{display:-ms-flexbox;display:flex}.med-theme.sc-med-themes:not(:last-child){margin-bottom:16px}.med-theme.sc-med-themes .med-theme__left.sc-med-themes{padding:16px 8px;width:54px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background:var(--background-left);border:2px solid var(--border-color);border-top-left-radius:8px;border-bottom-left-radius:8px}.med-theme.sc-med-themes .med-theme__circle.sc-med-themes{display:block;width:32px;height:32px;border-radius:50%;background:var(--background-circle)}.med-theme.sc-med-themes .med-theme__right.sc-med-themes{display:-ms-flexbox;display:flex;width:100%;-ms-flex-direction:column;flex-direction:column;padding:16px;background:var(--background-right);border-top-right-radius:8px;border-bottom-right-radius:8px;border-top:2px solid var(--border-color);border-right:2px solid var(--border-color);border-bottom:2px solid var(--border-color)}.med-theme.sc-med-themes .med-theme__bar.sc-med-themes{display:block;width:100%;height:8px;border-radius:4px;background:hsl(var(--med-color-neutral-6));margin:4px 0}.med-theme.sc-med-themes .med-theme__bar--small.sc-med-themes{width:80%}.med-theme.sc-med-themes .med-theme__wrapper.sc-med-themes{margin-top:8px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.med-theme.sc-med-themes .med-theme__name.sc-med-themes{font-size:16px;line-height:100%;font-weight:400;margin-left:16px;color:var(--color-text)}";

const MedThemes = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.medChange = index.createEvent(this, "medChange", 7);
    this.ativo = undefined;
    this.temas = undefined;
  }
  temaSelecionado(temaAtivo) {
    this.ativo = temaAtivo;
    this.medChange.emit(this.ativo);
  }
  render() {
    const { temas } = this;
    return (index.h(index.Host, { "from-stencil": true }, index.h("ion-radio-group", { onIonChange: ev => this.temaSelecionado(ev.detail.value), value: this.ativo }, temas === null || temas === void 0 ? void 0 : temas.map((tema) => (index.h("div", { class: `med-theme med-theme--${tema.value}`, onClick: () => this.ativo = tema.value }, index.h("div", { class: "med-theme__left" }, index.h("div", { class: "med-theme__circle" })), index.h("div", { class: "med-theme__right" }, index.h("div", { class: "med-theme__bar" }), index.h("div", { class: "med-theme__bar med-theme__bar--small" }), index.h("div", { class: "med-theme__wrapper" }, index.h("ion-radio", { value: tema.value, class: "med-theme__radio" }), index.h("span", { class: "med-theme__name" }, tema.label)))))))));
  }
};
MedThemes.style = medThemesCss;

exports.med_themes = MedThemes;
