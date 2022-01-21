import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-33df6a63.js';

const medChartRadialCss = ".sc-med-chart-radial-h{display:-ms-flexbox;display:flex;position:relative;--size-default:104px;--size-sm:48px;--color-label:hsl(var(--med-color-neutral-2))}.sc-med-chart-radial-h svg.sc-med-chart-radial{width:var(--size-default);height:var(--size-default)}.sc-med-chart-radial-h circle.sc-med-chart-radial{stroke-dashoffset:0;stroke:hsl(var(--med-color-neutral-1));stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:18px 18px;transform-origin:18px 18px}.sc-med-chart-radial-h circle.size.sc-med-chart-radial{stroke-dasharray:var(--size) 100;stroke:hsl(var(--med-color-4))}.sc-med-chart-radial-h circle[class^=\"size med-color-neutral\"].sc-med-chart-radial{stroke:hsl(var(--med-color-neutral))}.sc-med-chart-radial-h circle[class^=\"size med-color-fb\"].sc-med-chart-radial{stroke:hsl(var(--med-color-feedback))}.med-chart-radial--lg.sc-med-chart-radial-h{--size-default:125px}.med-chart-radial--secondary.sc-med-chart-radial-h svg.sc-med-chart-radial{width:var(--size-sm);height:var(--size-sm)}.med-chart-radial--secondary.sc-med-chart-radial-h .size.sc-med-chart-radial{stroke:hsl(var(--med-color-brand-4))}.med-chart-radial--secondary.sc-med-chart-radial-h circle.sc-med-chart-radial{stroke:hsl(var(--med-color-neutral-2))}.med-chart-radial--secondary.sc-med-chart-radial-h .med-chart-radial__percent.sc-med-chart-radial{font-size:var(--med-font-size-xxxs);line-height:var(--med-line-height-compressed);font-weight:var(--med-font-weight-semibold);position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);color:var(--color-label)}.med-color.med-chart-radial--secondary.sc-med-chart-radial-h .size.sc-med-chart-radial{stroke:hsl(var(--med-color-4))}.med-color.med-chart-radial--secondary.sc-med-chart-radial-h .med-chart-radial__percent.sc-med-chart-radial{--color-label:hsl(var(--med-color-4))}.med-color-neutral.med-chart-radial--secondary.sc-med-chart-radial-h .size.sc-med-chart-radial{stroke:hsl(var(--med-color-neutral))}.med-color-neutral.med-chart-radial--secondary.sc-med-chart-radial-h .med-chart-radial__percent.sc-med-chart-radial{--color-label:hsl(var(--med-color-neutral))}.med-color-feedback.med-chart-radial--secondary.sc-med-chart-radial-h .size.sc-med-chart-radial{stroke:hsl(var(--med-color-feedback))}.med-color-feedback.med-chart-radial--secondary.sc-med-chart-radial-h .med-chart-radial__percent.sc-med-chart-radial{--color-label:hsl(var(--med-color-feedback))}";

const MedChartRadial = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Define os valores do gráfico
     */
    this.valores = [];
  }
  render() {
    const { dsName, dsColor, dsSize } = this;
    const totais = {
      total: 0,
      subtotais: []
    };
    this.valores.forEach((item) => {
      totais.total += item.quantia;
      totais.subtotais.push(totais.total);
    });
    const arrayReverse = this.valores.slice(0).reverse();
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-chart-radial': true,
        [`med-chart-radial--${dsName}`]: dsName !== undefined,
        [`med-chart-radial--${dsSize}`]: dsSize !== undefined,
      }) }, h("svg", { viewBox: "0 0 36 36" }, h("circle", { cx: "18", cy: "18", r: "16" }), arrayReverse.map((item, index) => {
      const subtotalIndex = this.valores.length - index - 1;
      if (!item.ignoreBarra && item.quantia !== 0) {
        return h("circle", { cx: "18", cy: "18", r: "16", class: { 'size': true, [item.cor]: true }, style: {
            '--size': `${(totais.subtotais[subtotalIndex] / totais.total) * 100}`,
          } });
      }
    })), dsName === "secondary" && h("div", { class: "med-chart-radial__percent" }, "10%")));
  }
};
MedChartRadial.style = medChartRadialCss;

export { MedChartRadial as med_chart_radial };
