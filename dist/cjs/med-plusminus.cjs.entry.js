/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-71f41461.js');
const color = require('./color-2d957fd3.js');
const plusminus_enum = require('./plusminus.enum-9f20406a.js');

const medPlusminusCss = ".sc-med-plusminus-h{--color:hsl(var(--med-color-neutral-10));--pointer-events:initial}.med-plusminus.sc-med-plusminus-h{font-size:32px;font-weight:600;line-height:32px;color:var(--color);max-height:400px;width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.med-plusminus.sc-med-plusminus-h .med-plusminus__icon-minus.sc-med-plusminus{margin-right:16px;cursor:pointer;stroke:var(--color)}.med-plusminus.sc-med-plusminus-h .med-plusminus__icon-plus.sc-med-plusminus{margin-left:16px;cursor:pointer;stroke:var(--color)}.med-plusminus--disabled-minus.sc-med-plusminus-h .med-plusminus__icon-minus.sc-med-plusminus,.med-plusminus--disabled-plus.sc-med-plusminus-h .med-plusminus__icon-plus.sc-med-plusminus{opacity:0.5;pointer-events:var(--pointer-events)}.med-plusminus--disabled-both.sc-med-plusminus-h .med-plusminus__icon-minus.sc-med-plusminus,.med-plusminus--disabled-both.sc-med-plusminus-h .med-plusminus__icon-plus.sc-med-plusminus{opacity:0.5;pointer-events:var(--pointer-events)}.med-plusminus--lg.sc-med-plusminus-h{font-size:48px}.med-plusminus--lg.sc-med-plusminus-h .med-icon.sc-med-plusminus{font-size:48px}.med-color.sc-med-plusminus-h{--color:hsl(var(--med-color-3));stroke:hsl(var(--med-color-3))}.med-color-neutral.sc-med-plusminus-h{--color:hsl(var(--med-color-neutral));stroke:hsl(var(--med-color-neutral))}.med-color-feedback.sc-med-plusminus-h{--color:hsl(var(--med-color-feedback));stroke:hsl(var(--med-color-feedback))}";

const MedPlusminus = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.medChange = index.createEvent(this, "medChange", 7);
        this.medChangeAlt = index.createEvent(this, "medChangeAlt", 7);
        this.onClick = (status) => {
            if (this.min === undefined ||
                this.max === undefined ||
                this.value === undefined ||
                !this.automaticDisabled) {
                return this.medChange.emit(status);
            }
            if (status === plusminus_enum.PlusMinusStatus.MINUS && this.value === this.min)
                return;
            if (status === plusminus_enum.PlusMinusStatus.PLUS && this.value === this.max)
                return;
            const increment = status === plusminus_enum.PlusMinusStatus.MINUS ? -1 : 1;
            this.medChangeAlt.emit(this.value + increment);
            return;
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
            !this.automaticDisabled) {
            return;
        }
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
        return;
    }
    componentDidLoad() {
        var _a;
        this.disabledHandler((_a = this.value) !== null && _a !== void 0 ? _a : 0, 0);
    }
    render() {
        const { dsSize, dsColor, disabled, useSlot, value } = this;
        return (index.h(index.Host, { "from-stencil": true, class: color.generateMedColor(dsColor, {
                'med-plusminus': true,
                [`med-plusminus--disabled-${disabled}`]: disabled !== undefined,
                [`med-plusminus--${dsSize}`]: dsSize !== undefined
            }) }, index.h("ion-icon", { class: 'med-icon med-plusminus__icon-minus', name: 'med-menos-circulo', onClick: () => this.onClick(plusminus_enum.PlusMinusStatus.MINUS) }), useSlot ? index.h("slot", null) : value !== null && value !== void 0 ? value : 0, index.h("ion-icon", { class: 'med-icon med-plusminus__icon-plus', name: 'med-mais-circulo', onClick: () => this.onClick(plusminus_enum.PlusMinusStatus.PLUS) })));
    }
    static get watchers() { return {
        "value": ["disabledHandler"]
    }; }
};
MedPlusminus.style = medPlusminusCss;

exports.med_plusminus = MedPlusminus;
