/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, f as createEvent, i as h, H as Host } from './index-336c66d9.js';
import { g as generateMedColor } from './color-2567dca3.js';
import { P as PlusMinusStatus } from './plusminus.enum-6ca17e16.js';

const medPlusminusCss = ".sc-med-plusminus-h{--color:hsl(var(--med-color-neutral-10));--pointer-events:initial}.med-plusminus.sc-med-plusminus-h{font-size:32px;font-weight:600;line-height:32px;color:var(--color);max-height:400px;width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.med-plusminus.sc-med-plusminus-h .med-plusminus__icon-minus.sc-med-plusminus{margin-right:16px;cursor:pointer;stroke:var(--color)}.med-plusminus.sc-med-plusminus-h .med-plusminus__icon-plus.sc-med-plusminus{margin-left:16px;cursor:pointer;stroke:var(--color)}.med-plusminus--disabled-minus.sc-med-plusminus-h .med-plusminus__icon-minus.sc-med-plusminus,.med-plusminus--disabled-plus.sc-med-plusminus-h .med-plusminus__icon-plus.sc-med-plusminus{opacity:0.5;pointer-events:var(--pointer-events)}.med-plusminus--disabled-both.sc-med-plusminus-h .med-plusminus__icon-minus.sc-med-plusminus,.med-plusminus--disabled-both.sc-med-plusminus-h .med-plusminus__icon-plus.sc-med-plusminus{opacity:0.5;pointer-events:var(--pointer-events)}.med-plusminus--lg.sc-med-plusminus-h{font-size:48px}.med-plusminus--lg.sc-med-plusminus-h .med-icon.sc-med-plusminus{font-size:48px}.med-color.sc-med-plusminus-h{--color:hsl(var(--med-color-3));stroke:hsl(var(--med-color-3))}.med-color-neutral.sc-med-plusminus-h{--color:hsl(var(--med-color-neutral));stroke:hsl(var(--med-color-neutral))}.med-color-feedback.sc-med-plusminus-h{--color:hsl(var(--med-color-feedback));stroke:hsl(var(--med-color-feedback))}";

const MedPlusminus = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.medChange = createEvent(this, "medChange", 7);
    this.medChangeAlt = createEvent(this, "medChangeAlt", 7);
    this.onClick = (status) => {
      if (this.min === undefined ||
        this.max === undefined ||
        this.value === undefined ||
        !this.automaticDisabled) {
        return this.medChange.emit(status);
      }
      if (status === PlusMinusStatus.MINUS && this.value === this.min)
        return;
      if (status === PlusMinusStatus.PLUS && this.value === this.max)
        return;
      const increment = status === PlusMinusStatus.MINUS ? -1 : 1;
      this.medChangeAlt.emit(this.value + increment);
    };
    this.dsColor = undefined;
    this.dsSize = undefined;
    this.disabled = undefined;
    this.automaticDisabled = false;
    this.useSlot = true;
    this.value = undefined;
    this.min = undefined;
    this.max = undefined;
  }
  disabledHandler(newValue, _) {
    if (this.min === undefined ||
      this.max === undefined ||
      this.value === undefined ||
      !this.automaticDisabled)
      return;
    if (newValue === this.min && newValue === this.max) {
      return (this.disabled = 'both');
    }
    if (newValue === this.min) {
      return (this.disabled = 'minus');
    }
    if (newValue === this.max) {
      return (this.disabled = 'plus');
    }
    this.disabled = undefined;
  }
  componentDidLoad() {
    var _a;
    this.disabledHandler((_a = this.value) !== null && _a !== void 0 ? _a : 0, 0);
  }
  render() {
    const { dsSize, dsColor, disabled, useSlot, value } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-plusminus': true,
        [`med-plusminus--disabled-${disabled}`]: disabled !== undefined,
        [`med-plusminus--${dsSize}`]: dsSize !== undefined
      }) }, h("ion-icon", { class: 'med-icon med-plusminus__icon-minus', name: 'med-menos-circulo', onClick: () => this.onClick(PlusMinusStatus.MINUS) }), useSlot ? h("slot", null) : value !== null && value !== void 0 ? value : 0, h("ion-icon", { class: 'med-icon med-plusminus__icon-plus', name: 'med-mais-circulo', onClick: () => this.onClick(PlusMinusStatus.PLUS) })));
  }
  static get watchers() { return {
    "value": ["disabledHandler"]
  }; }
};
MedPlusminus.style = medPlusminusCss;

export { MedPlusminus as med_plusminus };
