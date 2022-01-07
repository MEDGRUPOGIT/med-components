import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-83c28ab9.js';

const medChartRadialContentCss = ":host{--color:hsl(var(--med-color-neutral-10));--font-size-label:var(--med-font-size-nano);--font-size-number:var(--med-font-size-md)}:host(.med-chart-radial-content){text-align:center}:host(.med-chart-radial-content) .med-chart-radial-content__label{font-size:var(--font-size-label);color:var(--color);font-weight:var(--med-font-weight-bold);display:-ms-flexbox;display:flex;padding-bottom:2px;-ms-flex-pack:center;justify-content:center;line-height:var(--med-line-height-compressed)}:host(.med-chart-radial-content) .med-chart-radial-content__number{font-weight:var(--med-font-weight-bold);font-size:var(--font-size-number);color:var(--color);line-height:var(--med-line-height-compressed)}:host(.med-chart-radial-content) .med-chart-radial-content__number--small{font-size:var(--med-font-size-xs)}:host(.med-color){--color:hsl(var(--med-color-3))}:host(.med-color-neutral){color:hsl(var(--med-color-neutral))}:host(.med-color-feedback){color:hsl(var(--med-color-feedback))}:host(.med-chart-radial-content--lg){--font-size-label:var(--med-font-size-xxxs);--font-size-number:var(--med-font-size-lg)}";

const MedChartRadialContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-chart-radial-content': true,
        [`med-chart-radial-content--${dsSize}`]: dsSize !== undefined,
      }) }, h("span", { class: "med-chart-radial-content__label" }, "Total de"), h("span", { class: `med-chart-radial-content__number ${this.fontResize()}` }, total), h("span", { class: "med-chart-radial-content__label" }, "Quest\u00F5es")));
  }
  static get watchers() { return {
    "total": ["collapsedChanged"]
  }; }
};
MedChartRadialContent.style = medChartRadialContentCss;

export { MedChartRadialContent as med_chart_radial_content };
