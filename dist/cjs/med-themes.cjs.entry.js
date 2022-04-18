'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');

const medThemesCss = ":host{--background-left:hsl(var(--med-color-brand-1));--background-right:hsl(var(--med-color-neutral-1));--background-circle:hsl(var(--med-color-brand-3));--border-color:hsl(var(--med-color-brand-4));--color-text:hsl(var(--med-color-neutral-10))}:host ion-radio-group{width:100%}.med-theme{display:-ms-flexbox;display:flex}.med-theme:not(:last-child){margin-bottom:var(--med-spacing-inset-sm)}.med-theme .med-theme__left{padding:var(--med-spacing-stretch-xs);width:54px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background:var(--background-left);border:var(--med-border-width-thin) solid var(--border-color);border-top-left-radius:var(--med-border-radius-sm);border-bottom-left-radius:var(--med-border-radius-sm)}.med-theme .med-theme__circle{display:block;width:32px;height:32px;border-radius:var(--med-border-radius-full);background:var(--background-circle)}.med-theme .med-theme__right{display:-ms-flexbox;display:flex;width:100%;-ms-flex-direction:column;flex-direction:column;padding:var(--med-spacing-inset-sm);background:var(--background-right);border-top-right-radius:var(--med-border-radius-sm);border-bottom-right-radius:var(--med-border-radius-sm);border-top:var(--med-border-width-thin) solid var(--border-color);border-right:var(--med-border-width-thin) solid var(--border-color);border-bottom:var(--med-border-width-thin) solid var(--border-color)}.med-theme .med-theme__bar{display:block;width:100%;height:8px;border-radius:var(--med-border-radius-nano);background:hsl(var(--med-color-neutral-6));margin:var(--med-spacing-stack-nano) 0}.med-theme .med-theme__bar--small{width:80%}.med-theme .med-theme__wrapper{margin-top:var(--med-spacing-stack-xxxs);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.med-theme .med-theme__name{font-size:var(--med-font-size-xs);line-height:var(--med-line-height-compressed);font-weight:var(--med-font-weight-regular);margin-left:var(--med-spacing-inline-base);color:var(--color-text)}.med-theme--theme-gold{--border-color:hsla(46, 65%, 60%, 1)}.med-theme--theme-gold .med-theme__left{--background-left:hsla(46, 65%, 20%, 1)}.med-theme--theme-gold .med-theme__circle{background:hsl(46, 65%, 40%, 1)}.med-theme--theme-gold .med-theme__bar{background:hsl(46, 10%, 58%, 1)}.med-theme--theme-gold ion-radio{--color:hsla(46, 65%, 60%, 1);--color-checked:hsla(46, 65%, 60%, 1)}";

const MedThemes = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.medChange = index.createEvent(this, "medChange", 7);
  }
  temaSelecionado(temaAtivo) {
    this.ativo = temaAtivo;
    this.medChange.emit(this.ativo);
  }
  render() {
    const { temas } = this;
    return (index.h(index.Host, { "from-stencil": true }, index.h("ion-radio-group", { onIonChange: ev => this.temaSelecionado(ev.detail.value), value: this.ativo }, temas === null || temas === void 0 ? void 0 : temas.map((tema) => (index.h("div", { class: `med-theme med-theme--${tema.value}` }, index.h("div", { class: "med-theme__left" }, index.h("div", { class: "med-theme__circle" })), index.h("div", { class: "med-theme__right" }, index.h("div", { class: "med-theme__bar" }), index.h("div", { class: "med-theme__bar med-theme__bar--small" }), index.h("div", { class: "med-theme__wrapper" }, index.h("ion-radio", { value: tema.value, class: "med-theme__radio" }), index.h("span", { class: "med-theme__name" }, tema.label)))))))));
  }
};
MedThemes.style = medThemesCss;

exports.med_themes = MedThemes;
