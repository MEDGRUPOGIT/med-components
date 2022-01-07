'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medTheme = require('./med-theme-1bca89cc.js');

const medChartRadialContentCss = ":host{--color:hsl(var(--med-color-neutral-10));--font-size-label:var(--med-font-size-nano);--font-size-number:var(--med-font-size-md)}:host(.med-chart-radial-content){text-align:center}:host(.med-chart-radial-content) .med-chart-radial-content__label{font-size:var(--font-size-label);color:var(--color);font-weight:var(--med-font-weight-bold);display:-ms-flexbox;display:flex;padding-bottom:2px;-ms-flex-pack:center;justify-content:center;line-height:var(--med-line-height-compressed)}:host(.med-chart-radial-content) .med-chart-radial-content__number{font-weight:var(--med-font-weight-bold);font-size:var(--font-size-number);color:var(--color);line-height:var(--med-line-height-compressed)}:host(.med-chart-radial-content) .med-chart-radial-content__number--small{font-size:var(--med-font-size-xs)}:host(.med-color){--color:hsl(var(--med-color-3))}:host(.med-color-neutral){color:hsl(var(--med-color-neutral))}:host(.med-color-feedback){color:hsl(var(--med-color-feedback))}:host(.med-chart-radial-content--lg){--font-size-label:var(--med-font-size-xxxs);--font-size-number:var(--med-font-size-lg)}";

const MedChartRadialContent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * TODO
     */
    this.total = 0;
  }
  componentDidRender() {
    this.fontResize();
  }
  collapsedChanged() {
    this.fontResize();
  }
  fontResize() {
    if (this.total.toString().length >= 6) {
      return 'med-chart-radial-content__number--small';
    }
    return '';
  }
  render() {
    const { total, dsColor, dsSize } = this;
    return (index.h(index.Host, { "from-stencil": true, class: medTheme.generateMedColor(dsColor, {
        'med-chart-radial-content': true,
        [`med-chart-radial-content--${dsSize}`]: dsSize !== undefined,
      }) }, index.h("span", { class: "med-chart-radial-content__label" }, "Total de"), index.h("span", { class: `med-chart-radial-content__number ${this.fontResize()}` }, total), index.h("span", { class: "med-chart-radial-content__label" }, "Quest\u00F5es")));
  }
  static get watchers() { return {
    "total": ["collapsedChanged"]
  }; }
};
MedChartRadialContent.style = medChartRadialContentCss;

exports.med_chart_radial_content = MedChartRadialContent;
