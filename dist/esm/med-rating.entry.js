import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-83c28ab9.js';

const medRatingCss = "@charset \"UTF-8\";:host{--color:hsl(var(--med-color-neutral-10));--color-date:hsl(var(--med-color-neutral-5));--color-icon:hsl(var(--med-color-neutral-2));--background:hsl(var(--med-color-fb-success));--background-right:hsl(var(--med-color-neutral-2))}:host(.med-rating){border-radius:var(--med-border-radius-sm);display:-ms-flexbox;display:flex;width:100%;max-width:1200px;position:relative}:host(.med-rating) .med-rating__icon{margin-top:var(--med-spacing-stack-xxxs);font-size:24px;stroke:var(--color-icon);-webkit-transition:200ms -webkit-transform ease;transition:200ms -webkit-transform ease;transition:200ms transform ease;transition:200ms transform ease, 200ms -webkit-transform ease}:host(.med-rating) .med-rating__icon-medgrupo{position:absolute;top:var(--med-spacing-inline-base);right:var(--med-spacing-inline-base);stroke:#fff}:host(.med-rating) .med-rating__left{background:var(--background);padding:var(--med-spacing-stretch-xs);border-top-left-radius:var(--med-border-radius-sm);border-bottom-left-radius:var(--med-border-radius-sm)}:host(.med-rating) .med-rating__right{border-top-right-radius:var(--med-border-radius-sm);border-bottom-right-radius:var(--med-border-radius-sm);padding:var(--med-spacing-inset-sm);background:var(--background-right);text-align:left;width:100%}:host(.med-rating) .med-rating__name{font-size:var(--med-font-size-xxs);line-height:var(--med-line-height-compressed);color:var(--color)}:host(.med-rating) .med-rating__date{font-size:var(--med-font-size-xxxs);line-height:var(--med-line-height-compressed);color:var(--color-date)}:host(.med-rating) .med-rating__concurso{margin:0;padding:0;color:var(--color);font-size:var(--med-font-size-xxs);line-height:var(--med-line-height-compressed);font-weight:var(--med-font-weight-semibold);text-transform:uppercase;padding-top:var(--med-spacing-stack-quark);padding-bottom:var(--med-spacing-stack-nano)}:host(.med-rating) .med-rating__text{font-size:var(--med-font-size-xxs)}:host(.med-rating--cabe){--background:hsl(var(--med-color-fb-success))}:host(.med-rating--cabe) .med-rating__name,:host(.med-rating--cabe) .med-rating__concurso{--color:hsl(var(--med-color-fb-success))}:host(.med-rating--nao-cabe){--background:hsl(var(--med-color-fb-warning))}:host(.med-rating--nao-cabe) .med-rating__name,:host(.med-rating--nao-cabe) .med-rating__concurso{--color:hsl(var(--med-color-fb-warning))}:host(.med-rating--medgrupo) .med-rating__name,:host(.med-rating--medgrupo) .med-rating__concurso{--color:var(--med-color-neutral-10)}:host(.med-rating--medgrupo) .med-rating__date{display:none}:host(.med-rating--banca) .med-rating__name,:host(.med-rating--banca) .med-rating__date,:host(.med-rating--banca) .med-rating__text{display:none}:host(.med-rating--banca) .med-rating__right{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.med-rating--banca) .med-rating__concurso{font-size:var(--med-font-size-xs);line-height:var(--med-line-height-compressed);font-weight:var(--med-font-weight-semibold)}";

const MedRating = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
    * Define o estado cabe ou não cabe recurso.
    */
    this.cabe = false;
  }
  render() {
    const { dsColor, dsName, nome, data, concurso, texto, cabe } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-rating': true,
        'med-rating--cabe': cabe,
        'med-rating--nao-cabe': !cabe,
        [`med-rating--${dsName}`]: dsName !== undefined,
      }) }, h("div", { class: "med-rating__left" }, h("ion-icon", { name: cabe ? "med-positivo" : "med-negativo", class: "med-icon med-rating__icon" })), h("div", { class: "med-rating__right" }, h("span", { class: "med-rating__name" }, nome), " ", h("span", { class: "med-rating__date" }, data), h("p", { class: "med-rating__concurso" }, concurso), h("span", { class: "med-rating__text" }, texto), (dsName === 'medgrupo') && h("ion-icon", { name: "med-logo", class: "med-icon med-rating__icon-medgrupo" }))));
  }
};
MedRating.style = medRatingCss;

export { MedRating as med_rating };
