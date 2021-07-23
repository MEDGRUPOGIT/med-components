import { r as registerInstance, h, H as Host } from './index-a04c4e19.js';

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
