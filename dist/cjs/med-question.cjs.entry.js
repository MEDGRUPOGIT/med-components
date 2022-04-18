'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medTheme = require('./med-theme-42add9fc.js');

const medQuestionCss = "@charset \"UTF-8\";:host{--color:hsl(var(--med-color-neutral-10));--background:hsl(var(--med-color-brand-1));--lines:1}:host(.med-question){background:var(--background);color:var(--color);padding:var(--med-spacing-inset-base);font-size:var(--med-font-size-xxs);font-weight:var(--med-font-weight-regular);line-height:var(--med-line-height-compressed);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;cursor:pointer;width:100%;max-width:1200px}:host(.med-question) .med-question__icon{margin-top:var(--med-spacing-stack-xxxs);font-size:24px;stroke:var(--color);-webkit-transition:200ms -webkit-transform ease;transition:200ms -webkit-transform ease;transition:200ms transform ease;transition:200ms transform ease, 200ms -webkit-transform ease}:host(.med-question) .med-question__text{display:-webkit-box;-webkit-line-clamp:var(--lines);-webkit-box-orient:vertical;overflow:hidden;-webkit-animation:close 0.15s steps(10, end) backwards;animation:close 0.15s steps(10, end) backwards}:host(.med-question--collapsed) .med-question__text{-webkit-animation:open 0.15s steps(10, end) forwards;animation:open 0.15s steps(10, end) forwards}:host(.med-question--collapsed) .med-question__icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}@-webkit-keyframes open{0%{-webkit-line-clamp:var(--lines)}10%{-webkit-line-clamp:calc(var(--lines) + 1)}20%{-webkit-line-clamp:calc(var(--lines) + 2)}30%{-webkit-line-clamp:calc(var(--lines) + 3)}40%{-webkit-line-clamp:calc(var(--lines) + 4)}50%{-webkit-line-clamp:calc(var(--lines) + 5)}60%{-webkit-line-clamp:calc(var(--lines) + 6)}70%{-webkit-line-clamp:calc(var(--lines) + 7)}80%{-webkit-line-clamp:calc(var(--lines) + 8)}90%{-webkit-line-clamp:calc(var(--lines) + 9)}100%{-webkit-line-clamp:initial}}@keyframes open{0%{-webkit-line-clamp:var(--lines)}10%{-webkit-line-clamp:calc(var(--lines) + 1)}20%{-webkit-line-clamp:calc(var(--lines) + 2)}30%{-webkit-line-clamp:calc(var(--lines) + 3)}40%{-webkit-line-clamp:calc(var(--lines) + 4)}50%{-webkit-line-clamp:calc(var(--lines) + 5)}60%{-webkit-line-clamp:calc(var(--lines) + 6)}70%{-webkit-line-clamp:calc(var(--lines) + 7)}80%{-webkit-line-clamp:calc(var(--lines) + 8)}90%{-webkit-line-clamp:calc(var(--lines) + 9)}100%{-webkit-line-clamp:initial}}@-webkit-keyframes close{0%{-webkit-line-clamp:initial}10%{-webkit-line-clamp:calc(var(--lines) + 9)}20%{-webkit-line-clamp:calc(var(--lines) + 8)}30%{-webkit-line-clamp:calc(var(--lines) + 7)}40%{-webkit-line-clamp:calc(var(--lines) + 6)}50%{-webkit-line-clamp:calc(var(--lines) + 5)}60%{-webkit-line-clamp:calc(var(--lines) + 4)}70%{-webkit-line-clamp:calc(var(--lines) + 3)}80%{-webkit-line-clamp:calc(var(--lines) + 2)}90%{-webkit-line-clamp:calc(var(--lines) + 1)}100%{-webkit-line-clamp:var(--lines)}}@keyframes close{0%{-webkit-line-clamp:initial}10%{-webkit-line-clamp:calc(var(--lines) + 9)}20%{-webkit-line-clamp:calc(var(--lines) + 8)}30%{-webkit-line-clamp:calc(var(--lines) + 7)}40%{-webkit-line-clamp:calc(var(--lines) + 6)}50%{-webkit-line-clamp:calc(var(--lines) + 5)}60%{-webkit-line-clamp:calc(var(--lines) + 4)}70%{-webkit-line-clamp:calc(var(--lines) + 3)}80%{-webkit-line-clamp:calc(var(--lines) + 2)}90%{-webkit-line-clamp:calc(var(--lines) + 1)}100%{-webkit-line-clamp:var(--lines)}}:host(.med-color){--color:fuck!;--background:hsl(var(--med-color-1))}:host(.med-color-neutral){--color:hsl(var(--med-color-neutral-contrast));--background:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--color:hsl(var(--med-color-feedback-contrast));--background:hsl(var(--med-color-feedback))}";

const MedQuestion = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
      * Define o estado do componente.
      */
    this.collapsed = false;
  }
  /**
   * TODO
   */
  async toggle(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.collapsed = !this.collapsed;
  }
  render() {
    const { collapsed, texto, dsColor } = this;
    return (index.h(index.Host, { "from-stencil": true, class: medTheme.generateMedColor(dsColor, {
        'med-question': true,
        'med-question--collapsed': collapsed
      }), onClick: (event) => { this.toggle(event); } }, index.h("div", { class: "med-question__text", innerHTML: texto }), index.h("ion-icon", { class: "med-icon med-question__icon", name: "med-baixo" })));
  }
};
MedQuestion.style = medQuestionCss;

exports.med_question = MedQuestion;
