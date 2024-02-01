/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-71f41461.js');
const color = require('./color-2d957fd3.js');

const medChartBarCss = ":host{--height-label:18;--background:hsl(var(--med-color-brand-3));--background-track:hsl(var(--med-color-neutral-2));--padding-label:6px}:host{overflow:hidden;height:calc(var(--height) + var(--height-label) * 1px);border-radius:2px}.med-chart-bar__label{height:calc(var(--height-label) * 1px)}.med-chart-bar__container{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-webkit-transform:translateY(calc(var(--value) * 1px));transform:translateY(calc(var(--value) * 1px))}.med-chart-bar__progress{height:calc(var(--value) * 1px);background:var(--background);width:calc(var(--width) * 1px);height:calc(var(--height) * 1px);border-radius:2px}:host(.med-chart-bar[no-label]){background:var(--background-track)}::slotted(med-type){padding-bottom:var(--padding-label)}:host(.med-color){--background:hsl(var(--med-color-3))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback))}";

const MedChartBar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.hostHeight = 0;
        this.dsColor = undefined;
        this.value = 0;
        this.height = 50;
        this.width = 32;
        this.noLabel = false;
    }
    componentDidLoad() {
        this.setSize();
    }
    disconnectedCallback() {
        if (this.hostResizeObserver) {
            this.hostResizeObserver.disconnect();
        }
    }
    setSize() {
        this.hostResizeObserver = new ResizeObserver(() => {
            var _a;
            let newHostHeight = Number((_a = this.hostElement) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().height);
            if (newHostHeight !== this.hostHeight) {
                this.hostHeight = newHostHeight;
            }
        });
        this.hostResizeObserver.observe(this.hostElement);
    }
    render() {
        const { dsColor, value, height, width } = this;
        const percentage = value === 0 ? height : height - ((height * value) / 100);
        return (index.h(index.Host, { class: color.generateMedColor(dsColor, { 'med-chart-bar': true }), style: { '--value': `${percentage}`, '--height': `${height}`, '--width': `${width}` } }, index.h("div", { class: "med-chart-bar__container" }, !this.noLabel && (index.h("div", { class: "med-chart-bar__label" }, index.h("slot", null))), index.h("div", { class: "med-chart-bar__progress" }))));
    }
    get hostElement() { return index.getElement(this); }
};
MedChartBar.style = medChartBarCss;

exports.med_chart_bar = MedChartBar;
