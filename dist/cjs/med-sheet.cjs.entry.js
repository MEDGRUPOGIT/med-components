'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');

const medSheetCss = ".med-sheet{height:var(--height-mobile)}.med-sheet__header{margin:20px 0;display:-ms-flexbox;display:flex}.med-sheet__button{margin-left:auto}.med-sheet__content{overflow:auto;position:relative}@media only screen and (min-width: 992px){:host{height:var(--height-desktop)}}";

const MedSheet = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.medClick = index.createEvent(this, "medClick", 7);
  }
  onClick() {
    this.medClick.emit();
  }
  render() {
    return (index.h(index.Host, { class: "med-sheet" }, index.h("ion-header", { class: "med-sheet__header" }, index.h("ion-button", { class: "med-sheet__button", "ds-name": "tertiary", onClick: () => this.onClick() }, index.h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" })))));
  }
};
MedSheet.style = medSheetCss;

exports.med_sheet = MedSheet;
