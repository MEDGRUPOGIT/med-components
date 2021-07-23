import { attachShadow, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const medChartRadialContentCss = ":host{display:block}";

const MedChartRadialContent$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return medChartRadialContentCss; }
};

const MedChartRadialContent = /*@__PURE__*/proxyCustomElement(MedChartRadialContent$1, [1,"med-chart-radial-content"]);

export { MedChartRadialContent };
