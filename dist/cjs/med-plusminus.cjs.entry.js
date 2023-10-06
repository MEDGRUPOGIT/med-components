'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const color = require('./color-2d4645aa.js');
const plusminus_enum = require('./plusminus.enum-43139314.js');

const medPlusminusCss = ".sc-med-plusminus-h{--color:hsl(var(--med-color-neutral-10));--pointer-events:initial}.med-plusminus.sc-med-plusminus-h{font-size:32px;font-weight:600;line-height:32px;color:var(--color);max-height:400px;width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.med-plusminus.sc-med-plusminus-h .med-plusminus__icon-minus.sc-med-plusminus{margin-right:16px;cursor:pointer;stroke:var(--color)}.med-plusminus.sc-med-plusminus-h .med-plusminus__icon-plus.sc-med-plusminus{margin-left:16px;cursor:pointer;stroke:var(--color)}.med-plusminus--disabled-minus.sc-med-plusminus-h .med-plusminus__icon-minus.sc-med-plusminus,.med-plusminus--disabled-plus.sc-med-plusminus-h .med-plusminus__icon-plus.sc-med-plusminus{opacity:0.5;pointer-events:var(--pointer-events)}.med-plusminus--disabled-both.sc-med-plusminus-h .med-plusminus__icon-minus.sc-med-plusminus,.med-plusminus--disabled-both.sc-med-plusminus-h .med-plusminus__icon-plus.sc-med-plusminus{opacity:0.5;pointer-events:var(--pointer-events)}.med-plusminus--lg.sc-med-plusminus-h{font-size:48px}.med-plusminus--lg.sc-med-plusminus-h .med-icon.sc-med-plusminus{font-size:48px}.med-color.sc-med-plusminus-h{--color:hsl(var(--med-color-3));stroke:hsl(var(--med-color-3))}.med-color-neutral.sc-med-plusminus-h{--color:hsl(var(--med-color-neutral));stroke:hsl(var(--med-color-neutral))}.med-color-feedback.sc-med-plusminus-h{--color:hsl(var(--med-color-feedback));stroke:hsl(var(--med-color-feedback))}";

const MedPlusminus = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.medChange = index.createEvent(this, "medChange", 7);
    this.onClick = (status) => {
      this.medChange.emit(status);
    };
  }
  render() {
    const { dsSize, dsColor, disabled } = this;
    return (index.h(index.Host, { "from-stencil": true, class: color.generateMedColor(dsColor, {
        'med-plusminus': true,
        [`med-plusminus--disabled-${disabled}`]: disabled !== undefined,
        [`med-plusminus--${dsSize}`]: dsSize !== undefined,
      }) }, index.h("ion-icon", { class: "med-icon med-plusminus__icon-minus", name: "med-menos-circulo", onClick: () => this.onClick(plusminus_enum.PlusMinusStatus.MINUS) }), index.h("slot", null), index.h("ion-icon", { class: "med-icon med-plusminus__icon-plus", name: "med-mais-circulo", onClick: () => this.onClick(plusminus_enum.PlusMinusStatus.PLUS) })));
  }
};
MedPlusminus.style = medPlusminusCss;

exports.med_plusminus = MedPlusminus;
