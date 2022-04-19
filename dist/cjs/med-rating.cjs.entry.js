'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medTheme = require('./med-theme-42add9fc.js');

const medRatingCss = ":host{--text-color:hsl(var(--med-color-neutral-10));--color-date:hsl(var(--med-color-neutral-5));--color-icon:hsl(var(--med-color-neutral-2));--background:hsl(var(--med-color-fb-success));--background-right:hsl(var(--med-color-neutral-2))}:host(.med-rating){border-radius:8px;display:-ms-flexbox;display:flex;width:100%;max-width:1200px;position:relative}:host(.med-rating) .med-rating__icon{font-size:24px;stroke:var(--color-icon);-webkit-transition:200ms -webkit-transform ease;transition:200ms -webkit-transform ease;transition:200ms transform ease;transition:200ms transform ease, 200ms -webkit-transform ease}:host(.med-rating) .med-rating__icon-medgrupo{position:absolute;top:16px;right:16px;stroke:#fff}:host(.med-rating) .med-rating__left{background:var(--background);padding:16px;border-top-left-radius:8px;border-bottom-left-radius:8px}:host(.med-rating) .med-rating__right{border-top-right-radius:8px;border-bottom-right-radius:8px;padding:16px;background:var(--background-right);text-align:left;width:100%}:host(.med-rating) .med-rating__name{--font-size:14px;--line-height:16px;--font-weight:400;--color:var(--text-color);display:inline-block}:host(.med-rating) .med-rating__date{--font-size:12px;--line-height:12px;--font-weight:400;--color:var(--color-date);display:inline-block}:host(.med-rating) .med-rating__concurso{--font-size:12px;--line-height:12px;--font-weight:400;--color:var(--text-color);text-transform:uppercase;padding-top:4px}:host(.med-rating) .med-rating__text{--font-size:14px;--line-height:20px;--font-weight:400;--color:var(--text-color);padding-top:8px}:host(.med-rating--cabe){--background:hsl(var(--med-color-fb-success))}:host(.med-rating--cabe) .med-rating__name,:host(.med-rating--cabe) .med-rating__concurso,:host(.med-rating--cabe) .med-rating__banca{--text-color:hsl(var(--med-color-fb-success))}:host(.med-rating--nao-cabe){--background:hsl(var(--med-color-fb-warning))}:host(.med-rating--nao-cabe) .med-rating__name,:host(.med-rating--nao-cabe) .med-rating__concurso,:host(.med-rating--nao-cabe) .med-rating__banca{--text-color:hsl(var(--med-color-fb-warning))}:host(.med-rating--banca) .med-rating__name,:host(.med-rating--banca) .med-rating__date,:host(.med-rating--banca) .med-rating__text,:host(.med-rating--banca) .med-rating__concurso{display:none}:host(.med-rating--banca) .med-rating__right{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.med-rating--banca) .med-rating__banca{--font-size:14px;--line-height:16px;--font-weight:600;--color:var(--text-color)}";

const MedRating = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
    * Define o estado cabe ou não cabe recurso.
    */
    this.cabe = false;
  }
  render() {
    const { dsColor, dsName, nome, data, concurso, texto, cabe } = this;
    return (index.h(index.Host, { "from-stencil": true, class: medTheme.generateMedColor(dsColor, {
        'med-rating': true,
        'med-rating--cabe': cabe,
        'med-rating--nao-cabe': !cabe,
        [`med-rating--${dsName}`]: dsName !== undefined,
      }) }, index.h("div", { class: "med-rating__left" }, index.h("ion-icon", { name: cabe ? "med-positivo" : "med-negativo", class: "med-icon med-rating__icon" })), index.h("div", { class: "med-rating__right" }, index.h("med-type", { class: "med-rating__name" }, nome), " ", index.h("med-type", { class: "med-rating__date" }, data), index.h("med-type", { class: "med-rating__concurso" }, concurso), index.h("med-type", { class: "med-rating__text" }, texto), (dsName === 'medgrupo') && index.h("ion-icon", { name: "med-logo", class: "med-icon med-rating__icon-medgrupo" }), (dsName === 'banca' && cabe) && index.h("med-type", { class: "med-rating__banca" }, "RECURSO CONCEDIDO"), (dsName === 'banca' && !cabe) && index.h("med-type", { class: "med-rating__banca" }, "RECURSO N\u00C3O CONCEDIDO"))));
  }
};
MedRating.style = medRatingCss;

exports.med_rating = MedRating;
