/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, i as h, H as Host } from './index-336c66d9.js';
import { g as generateMedColor } from './color-2567dca3.js';

const medChartRadialCss = ".sc-med-chart-radial-h{--color-label:hsl(var(--med-color-neutral-2));--stroke-background:hsl(var(--med-color-neutral-2))}.sc-med-chart-radial-h{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative}.sc-med-chart-radial-h svg.sc-med-chart-radial{width:var(--size);height:var(--size)}.sc-med-chart-radial-h circle.sc-med-chart-radial{stroke-dashoffset:0;stroke:var(--stroke-background);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:18px 18px;transform-origin:18px 18px}.sc-med-chart-radial-h circle.size.sc-med-chart-radial{stroke-dasharray:var(--size) 100;stroke:var(--stroke-background)}.sc-med-chart-radial-h circle[class^=\"size med-color\"].sc-med-chart-radial{stroke:hsl(var(--med-color-4))}.sc-med-chart-radial-h circle[class^=\"size med-color-neutral\"].sc-med-chart-radial{stroke:hsl(var(--med-color-neutral))}.sc-med-chart-radial-h circle[class^=\"size med-color-fb\"].sc-med-chart-radial{stroke:hsl(var(--med-color-feedback))}.med-chart-radial__text-wrap.sc-med-chart-radial{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);text-align:center}.med-chart-radial__subtitulo.sc-med-chart-radial{--color:hsl(var(--med-color-neutral-7))}.med-chart-radial--xs.sc-med-chart-radial-h{--size:48px}.med-chart-radial--sm.sc-med-chart-radial-h{--size:56px}.med-chart-radial--md.sc-med-chart-radial-h{--size:80px}.med-chart-radial--lg.sc-med-chart-radial-h{--size:108px}.med-chart-radial--xs.sc-med-chart-radial-h .med-chart-radial__titulo.sc-med-chart-radial{--font-size:12px;--line-height:12px;--font-weight:600}.med-chart-radial--sm.sc-med-chart-radial-h .med-chart-radial__titulo.sc-med-chart-radial{--font-size:14px;--line-height:16px;--font-weight:600}.med-chart-radial--md.sc-med-chart-radial-h .med-chart-radial__titulo.sc-med-chart-radial{--font-size:16px;--line-height:16px;--font-weight:600}.med-chart-radial--lg.sc-med-chart-radial-h .med-chart-radial__titulo.sc-med-chart-radial{--font-size:20px;--line-height:20px;--font-weight:600}.med-chart-radial--xs.sc-med-chart-radial-h .med-chart-radial__subtitulo.sc-med-chart-radial{display:none}.med-chart-radial--sm.sc-med-chart-radial-h .med-chart-radial__subtitulo.sc-med-chart-radial{display:none}.med-chart-radial--md.sc-med-chart-radial-h .med-chart-radial__subtitulo.sc-med-chart-radial{--font-size:10px;--line-height:12px;--font-weight:400}.med-chart-radial--lg.sc-med-chart-radial-h .med-chart-radial__subtitulo.sc-med-chart-radial{--font-size:12px;--line-height:12px;--font-weight:400}.med-color.sc-med-chart-radial-h .med-chart-radial__titulo.sc-med-chart-radial{--color:hsl(var(--med-color-4))}.med-color-neutral.sc-med-chart-radial-h .med-chart-radial__titulo.sc-med-chart-radial{--color:hsl(var(--med-color-neutral))}.med-color-feedback.sc-med-chart-radial-h .med-chart-radial__titulo.sc-med-chart-radial{--color:hsl(var(--med-color-feedback))}.med-chart-radial--secondary.sc-med-chart-radial-h{--stroke-background:hsl(var(--med-color-neutral-1))}";

const MedChartRadial = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dsColor = undefined;
    this.dsName = undefined;
    this.dsSize = undefined;
    this.valores = [];
    this.titulo = undefined;
    this.subtitulo = undefined;
  }
  render() {
    const { dsColor, dsName, dsSize, titulo, subtitulo } = this;
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
    })), h("div", { class: "med-chart-radial__text-wrap" }, titulo && h("med-type", { class: "med-chart-radial__titulo" }, titulo), titulo && h("med-type", { class: "med-chart-radial__subtitulo" }, subtitulo)), h("slot", null)));
  }
};
MedChartRadial.style = medChartRadialCss;

export { MedChartRadial as med_chart_radial };
