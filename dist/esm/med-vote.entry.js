import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { c as createColorClasses } from './theme-3b0eafd2.js';

const medVoteCss = ":host(.med-vote){display:block;padding-top:var(--med-spacing-stack-base)}:host(.med-vote) .med-vote__row{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:var(--med-spacing-stack-base);-ms-flex-align:center;align-items:center}:host(.med-vote) .med-vote__icon-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.med-vote) .med-vote__icon{min-width:24px}:host(.med-vote) .med-vote__icon--cabe{stroke:hsl(var(--med-color-fb-success))}:host(.med-vote) .med-vote__icon--nao-cabe{stroke:hsl(var(--med-color-warning-warning))}:host(.med-vote) .med-vote__heading{font-size:var(--med-font-size-sm);line-height:var(--med-line-height-compressed);font-weight:var(--med-font-weight-semibold);color:hsl(var(--med-color-neutral-10));margin:0}:host(.med-vote) .med-vote__badge{display:-ms-flexbox;display:flex;height:26px;border-radius:var(--med-border-radius-md);font-size:var(--med-font-size-xs);line-height:var(--med-line-height-compressed);-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-weight:var(--med-font-weight-semibold);width:100%;padding:0 var(--med-spacing-inline-xxxs)}:host(.med-vote) .med-vote__badge--cabe{background-color:hsl(var(--med-color-fb-success));color:hsl(var(--med-color-neutral-1));margin-left:var(--med-spacing-inline-xxxs)}:host(.med-vote) .med-vote__badge--nao-cabe{background-color:hsl(var(--med-color-fb-warning));color:hsl(var(--med-color-neutral-1));margin-right:var(--med-spacing-inline-xxxs)}:host(.med-vote) .med-vote__chart{height:2px}:host(.med-vote) .med-vote__chart--cabe{background-color:hsl(var(--med-color-fb-success));margin-right:var(--med-spacing-inline-nano)}:host(.med-vote) .med-vote__chart--nao-cabe{background-color:hsl(var(--med-color-fb-warning));margin-left:var(--med-spacing-inline-nano)}";

const MedVote = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
      * Define o conteúdo de texto do componente.
      */
    this.titulo = 'Cabe recurso?';
    /**
      * Define o conteúdo de texto do componente.
      */
    this.like = 0;
    /**
      * Define o conteúdo de texto do componente.
      */
    this.unlike = 0;
  }
  render() {
    const titulo = this.titulo;
    const like = isNaN(this.like) ? 0 : +this.like;
    const unlike = isNaN(this.unlike) ? 0 : +this.unlike;
    const total = like + unlike;
    const likePercent = unlike === 0 && like === 0 ? 50 : ((like * 100) / total);
    const unlikePercent = unlike === 0 && like === 0 ? 50 : ((unlike * 100) / total);
    return (h(Host, { "from-stencil": true, class: createColorClasses(null, {
        'med-vote': true,
      }, null) }, h("div", { class: "med-vote__row" }, h("div", { class: "med-vote__icon-container" }, h("ion-icon", { class: "med-icon med-vote__icon med-vote__icon--cabe", name: "med-positivo" }), h("div", { class: "med-vote__badge med-vote__badge--cabe" }, like)), h("h3", { class: "med-vote__heading", innerHTML: titulo }), h("div", { class: "med-vote__icon-container" }, h("div", { class: "med-vote__badge med-vote__badge--nao-cabe" }, unlike), h("ion-icon", { class: "med-icon med-vote__icon med-vote__icon--nao-cabe", name: "med-negativo" }))), h("div", { class: "med-vote__row" }, h("div", { class: "med-vote__chart med-vote__chart--cabe", style: { width: `${likePercent}%` } }), h("div", { class: "med-vote__chart med-vote__chart--nao-cabe", style: { width: `${unlikePercent}%` } }))));
  }
};
MedVote.style = medVoteCss;

export { MedVote as med_vote };
