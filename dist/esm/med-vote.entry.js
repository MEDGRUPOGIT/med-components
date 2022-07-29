import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './color-49be71bc.js';

const medVoteCss = ":host{--padding:16px 24px}:host{display:block;padding:var(--padding)}:host .med-vote__row{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:16px;-ms-flex-align:center;align-items:center}:host .med-vote__icon-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .med-vote__icon{min-width:24px}:host .med-vote__icon--cabe{stroke:hsl(var(--med-color-fb-success))}:host .med-vote__icon--nao-cabe{stroke:hsl(var(--med-color-fb-warning))}:host .med-vote__heading{font-size:20px;line-height:20px;font-weight:600;color:hsl(var(--med-color-neutral-10));margin:0}:host .med-vote__badge{display:-ms-flexbox;display:flex;height:26px;border-radius:16px;font-size:16px;line-height:16px;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-weight:600;width:100%;padding:0 8px}:host .med-vote__badge--cabe{background-color:hsl(var(--med-color-fb-success));color:hsl(var(--med-color-neutral-1));margin-left:8px}:host .med-vote__badge--nao-cabe{background-color:hsl(var(--med-color-fb-warning));color:hsl(var(--med-color-neutral-1));margin-right:8px}:host .med-vote__chart{height:2px}:host .med-vote__chart--cabe{background-color:hsl(var(--med-color-fb-success));margin-right:4px}:host .med-vote__chart--nao-cabe{background-color:hsl(var(--med-color-fb-warning));margin-left:4px}";

const MedVote = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * todo
     */
    this.titulo = 'Cabe recurso?';
    /**
     * todo
     */
    this.like = 0;
    /**
     * todo
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
    return (h(Host, { "from-stencil": true, class: generateMedColor(null, {
        'med-vote': true,
      }) }, h("div", { class: "med-vote__row" }, h("div", { class: "med-vote__icon-container" }, h("ion-icon", { class: "med-icon med-vote__icon med-vote__icon--cabe", name: "med-positivo" }), h("div", { class: "med-vote__badge med-vote__badge--cabe" }, like)), h("h3", { class: "med-vote__heading", innerHTML: titulo }), h("div", { class: "med-vote__icon-container" }, h("div", { class: "med-vote__badge med-vote__badge--nao-cabe" }, unlike), h("ion-icon", { class: "med-icon med-vote__icon med-vote__icon--nao-cabe", name: "med-negativo" }))), h("div", { class: "med-vote__row" }, h("div", { class: "med-vote__chart med-vote__chart--cabe", style: { width: `${likePercent}%` } }), h("div", { class: "med-vote__chart med-vote__chart--nao-cabe", style: { width: `${unlikePercent}%` } }))));
  }
};
MedVote.style = medVoteCss;

export { MedVote as med_vote };
