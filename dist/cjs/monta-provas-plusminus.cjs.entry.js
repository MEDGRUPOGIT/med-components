'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medTheme = require('./med-theme-42add9fc.js');

var PlusMinusStatus;
(function (PlusMinusStatus) {
  PlusMinusStatus["MINUS"] = "minus";
  PlusMinusStatus["PLUS"] = "plus";
})(PlusMinusStatus || (PlusMinusStatus = {}));

const montaProvasPlusminusCss = ":host{--color:hsl(var(--med-color-neutral-10));--pointer-events:initial}:host(.monta-provas-plusminus){font-size:var(--med-font-size-lg);font-weight:var(--med-font-weight-bold);line-height:var(--med-line-height-compressed);color:var(--color);max-height:400px;width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}:host(.monta-provas-plusminus) .monta-provas-plusminus__icon-minus{margin-right:var(--med-spacing-inline-base);cursor:pointer;stroke:var(--color)}:host(.monta-provas-plusminus) .monta-provas-plusminus__icon-plus{margin-left:var(--med-spacing-inline-base);cursor:pointer;stroke:var(--color)}:host(.monta-provas-plusminus--disabled-minus) .monta-provas-plusminus__icon-minus,:host(.monta-provas-plusminus--disabled-plus) .monta-provas-plusminus__icon-plus{opacity:var(--med-opacity-level-half);pointer-events:var(--pointer-events)}:host(.monta-provas-plusminus--disabled-both) .monta-provas-plusminus__icon-minus,:host(.monta-provas-plusminus--disabled-both) .monta-provas-plusminus__icon-plus{opacity:var(--med-opacity-level-half);pointer-events:var(--pointer-events)}:host(.monta-provas-plusminus--xl){font-size:var(--med-font-size-xxxl)}:host(.monta-provas-plusminus--xl) .med-icon{font-size:50px}:host(.med-color){--color:hsl(var(--med-color-3));stroke:hsl(var(--med-color-3))}:host(.med-color-neutral){--color:hsl(var(--med-color-neutral));stroke:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--color:hsl(var(--med-color-feedback));stroke:hsl(var(--med-color-feedback))}";

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
