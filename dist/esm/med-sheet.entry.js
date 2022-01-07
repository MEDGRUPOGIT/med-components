import { r as registerInstance, e as createEvent, h, H as Host } from './index-70672e81.js';

const medSheetCss = ".med-sheet{height:var(--height-mobile)}.med-sheet__header{margin:20px 0;display:-ms-flexbox;display:flex}.med-sheet__button{margin-left:auto}.med-sheet__content{overflow:auto;position:relative}@media only screen and (min-width: 992px){:host{height:var(--height-desktop)}}";

const MedSheet = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.medClick = createEvent(this, "medClick", 7);
  }
  onClick() {
    this.medClick.emit();
  }
  render() {
    return (h(Host, { class: "med-sheet" }, h("ion-header", { class: "med-sheet__header" }, h("ion-button", { class: "med-sheet__button", "ds-name": "tertiary", onClick: () => this.onClick() }, h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" })))));
  }
};
MedSheet.style = medSheetCss;

export { MedSheet as med_sheet };
