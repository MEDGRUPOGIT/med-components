'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medTheme = require('./med-theme-42add9fc.js');

var PlusMinusStatus;
(function (PlusMinusStatus) {
  PlusMinusStatus["MINUS"] = "minus";
  PlusMinusStatus["PLUS"] = "plus";
})(PlusMinusStatus || (PlusMinusStatus = {}));

const montaProvasPlusminusCss = ".sc-monta-provas-plusminus-h{--color:hsl(var(--med-color-neutral-10));--pointer-events:initial}.monta-provas-plusminus.sc-monta-provas-plusminus-h{font-size:32px;font-weight:700;line-height:100%;color:var(--color);max-height:400px;width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.monta-provas-plusminus.sc-monta-provas-plusminus-h .monta-provas-plusminus__icon-minus.sc-monta-provas-plusminus{margin-right:16px;cursor:pointer;stroke:var(--color)}.monta-provas-plusminus.sc-monta-provas-plusminus-h .monta-provas-plusminus__icon-plus.sc-monta-provas-plusminus{margin-left:16px;cursor:pointer;stroke:var(--color)}.monta-provas-plusminus--disabled-minus.sc-monta-provas-plusminus-h .monta-provas-plusminus__icon-minus.sc-monta-provas-plusminus,.monta-provas-plusminus--disabled-plus.sc-monta-provas-plusminus-h .monta-provas-plusminus__icon-plus.sc-monta-provas-plusminus{opacity:0.5;pointer-events:var(--pointer-events)}.monta-provas-plusminus--disabled-both.sc-monta-provas-plusminus-h .monta-provas-plusminus__icon-minus.sc-monta-provas-plusminus,.monta-provas-plusminus--disabled-both.sc-monta-provas-plusminus-h .monta-provas-plusminus__icon-plus.sc-monta-provas-plusminus{opacity:0.5;pointer-events:var(--pointer-events)}.monta-provas-plusminus--xl.sc-monta-provas-plusminus-h{font-size:64px}.monta-provas-plusminus--xl.sc-monta-provas-plusminus-h .med-icon.sc-monta-provas-plusminus{font-size:50px}.med-color.sc-monta-provas-plusminus-h{--color:hsl(var(--med-color-3));stroke:hsl(var(--med-color-3))}.med-color-neutral.sc-monta-provas-plusminus-h{--color:hsl(var(--med-color-neutral));stroke:hsl(var(--med-color-neutral))}.med-color-feedback.sc-monta-provas-plusminus-h{--color:hsl(var(--med-color-feedback));stroke:hsl(var(--med-color-feedback))}";

const MontaProvasPlusminus = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.medChange = index.createEvent(this, "medChange", 7);
    this.onClick = (status) => {
      this.medChange.emit(status);
    };
  }
  render() {
    const { dsSize, dsColor, disabled } = this;
    return (index.h(index.Host, { "from-stencil": true, class: medTheme.generateMedColor(dsColor, {
        'monta-provas-plusminus': true,
        [`monta-provas-plusminus--disabled-${disabled}`]: disabled !== undefined,
        [`monta-provas-plusminus--${dsSize}`]: dsSize !== undefined,
      }) }, index.h("ion-icon", { class: "med-icon monta-provas-plusminus__icon-minus", name: "med-menos-circulo", onClick: () => this.onClick(PlusMinusStatus.MINUS) }), index.h("slot", null), index.h("ion-icon", { class: "med-icon monta-provas-plusminus__icon-plus", name: "med-mais-circulo", onClick: () => this.onClick(PlusMinusStatus.PLUS) })));
  }
};
MontaProvasPlusminus.style = montaProvasPlusminusCss;

exports.monta_provas_plusminus = MontaProvasPlusminus;
