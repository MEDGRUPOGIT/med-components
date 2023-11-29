/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const color = require('./color-c29da9e4.js');

const medVoteCss = ":host{--padding:16px 24px}:host{display:block;padding:var(--padding)}:host .med-vote__row{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:16px;-ms-flex-align:center;align-items:center}:host .med-vote__icon-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .med-vote__icon{min-width:24px}:host .med-vote__icon--cabe{stroke:hsl(var(--med-color-fb-success))}:host .med-vote__icon--nao-cabe{stroke:hsl(var(--med-color-fb-warning))}:host .med-vote__heading{font-size:20px;line-height:20px;font-weight:600;color:hsl(var(--med-color-neutral-10));margin:0}:host .med-vote__badge{display:-ms-flexbox;display:flex;height:26px;border-radius:16px;font-size:16px;line-height:16px;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-weight:600;width:100%;padding:0 8px}:host .med-vote__badge--cabe{background-color:hsl(var(--med-color-fb-success));color:hsl(var(--med-color-neutral-1));margin-left:8px}:host .med-vote__badge--nao-cabe{background-color:hsl(var(--med-color-fb-warning));color:hsl(var(--med-color-neutral-1));margin-right:8px}:host .med-vote__chart{height:2px}:host .med-vote__chart--cabe{background-color:hsl(var(--med-color-fb-success));margin-right:4px}:host .med-vote__chart--nao-cabe{background-color:hsl(var(--med-color-fb-warning));margin-left:4px}";

const MedVote = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.titulo = 'Cabe recurso?';
    this.like = 0;
    this.unlike = 0;
  }
  render() {
    const titulo = this.titulo;
    const like = isNaN(this.like) ? 0 : +this.like;
    const unlike = isNaN(this.unlike) ? 0 : +this.unlike;
    const total = like + unlike;
    const likePercent = unlike === 0 && like === 0 ? 50 : ((like * 100) / total);
    const unlikePercent = unlike === 0 && like === 0 ? 50 : ((unlike * 100) / total);
    return (index.h(index.Host, { "from-stencil": true, class: color.generateMedColor(null, {
        'med-vote': true,
      }) }, index.h("div", { class: "med-vote__row" }, index.h("div", { class: "med-vote__icon-container" }, index.h("ion-icon", { class: "med-icon med-vote__icon med-vote__icon--cabe", name: "med-positivo" }), index.h("div", { class: "med-vote__badge med-vote__badge--cabe" }, like)), index.h("h3", { class: "med-vote__heading", innerHTML: titulo }), index.h("div", { class: "med-vote__icon-container" }, index.h("div", { class: "med-vote__badge med-vote__badge--nao-cabe" }, unlike), index.h("ion-icon", { class: "med-icon med-vote__icon med-vote__icon--nao-cabe", name: "med-negativo" }))), index.h("div", { class: "med-vote__row" }, index.h("div", { class: "med-vote__chart med-vote__chart--cabe", style: { width: `${likePercent}%` } }), index.h("div", { class: "med-vote__chart med-vote__chart--nao-cabe", style: { width: `${unlikePercent}%` } }))));
  }
};
MedVote.style = medVoteCss;

exports.med_vote = MedVote;
