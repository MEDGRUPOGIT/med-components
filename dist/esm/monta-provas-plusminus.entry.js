import { r as registerInstance, e as createEvent, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-33df6a63.js';

var PlusMinusStatus;
(function (PlusMinusStatus) {
  PlusMinusStatus["MINUS"] = "minus";
  PlusMinusStatus["PLUS"] = "plus";
})(PlusMinusStatus || (PlusMinusStatus = {}));

const montaProvasPlusminusCss = ".sc-monta-provas-plusminus-h{--color:hsl(var(--med-color-neutral-10));--pointer-events:initial}.monta-provas-plusminus.sc-monta-provas-plusminus-h{font-size:var(--med-font-size-lg);font-weight:var(--med-font-weight-bold);line-height:var(--med-line-height-compressed);color:var(--color);max-height:400px;width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.monta-provas-plusminus.sc-monta-provas-plusminus-h .monta-provas-plusminus__icon-minus.sc-monta-provas-plusminus{margin-right:var(--med-spacing-inline-base);cursor:pointer;stroke:var(--color)}.monta-provas-plusminus.sc-monta-provas-plusminus-h .monta-provas-plusminus__icon-plus.sc-monta-provas-plusminus{margin-left:var(--med-spacing-inline-base);cursor:pointer;stroke:var(--color)}.monta-provas-plusminus--disabled-minus.sc-monta-provas-plusminus-h .monta-provas-plusminus__icon-minus.sc-monta-provas-plusminus,.monta-provas-plusminus--disabled-plus.sc-monta-provas-plusminus-h .monta-provas-plusminus__icon-plus.sc-monta-provas-plusminus{opacity:var(--med-opacity-level-half);pointer-events:var(--pointer-events)}.monta-provas-plusminus--disabled-both.sc-monta-provas-plusminus-h .monta-provas-plusminus__icon-minus.sc-monta-provas-plusminus,.monta-provas-plusminus--disabled-both.sc-monta-provas-plusminus-h .monta-provas-plusminus__icon-plus.sc-monta-provas-plusminus{opacity:var(--med-opacity-level-half);pointer-events:var(--pointer-events)}.monta-provas-plusminus--xl.sc-monta-provas-plusminus-h{font-size:var(--med-font-size-xxxl)}.monta-provas-plusminus--xl.sc-monta-provas-plusminus-h .med-icon.sc-monta-provas-plusminus{font-size:50px}.med-color.sc-monta-provas-plusminus-h{--color:hsl(var(--med-color-3));stroke:hsl(var(--med-color-3))}.med-color-neutral.sc-monta-provas-plusminus-h{--color:hsl(var(--med-color-neutral));stroke:hsl(var(--med-color-neutral))}.med-color-feedback.sc-monta-provas-plusminus-h{--color:hsl(var(--med-color-feedback));stroke:hsl(var(--med-color-feedback))}";

const MontaProvasPlusminus = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.medChange = createEvent(this, "medChange", 7);
    this.onClick = (status) => {
      this.medChange.emit(status);
    };
  }
  render() {
    const { dsSize, dsColor, disabled } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'monta-provas-plusminus': true,
        [`monta-provas-plusminus--disabled-${disabled}`]: disabled !== undefined,
        [`monta-provas-plusminus--${dsSize}`]: dsSize !== undefined,
      }) }, h("ion-icon", { class: "med-icon monta-provas-plusminus__icon-minus", name: "med-menos-circulo", onClick: () => this.onClick(PlusMinusStatus.MINUS) }), h("slot", null), h("ion-icon", { class: "med-icon monta-provas-plusminus__icon-plus", name: "med-mais-circulo", onClick: () => this.onClick(PlusMinusStatus.PLUS) })));
  }
};
MontaProvasPlusminus.style = montaProvasPlusminusCss;

export { MontaProvasPlusminus as monta_provas_plusminus };
