import { r as registerInstance, h, H as Host } from './index-7a8b7a1c.js';

const medChartRadialContentCss = ":host{display:block}";

const MedChartRadialContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
MedChartRadialContent.style = medChartRadialContentCss;

export { MedChartRadialContent as med_chart_radial_content };
