'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0a08b2a.js');

const medChartRadialContentCss = ":host{display:block}";

const MedChartRadialContent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
MedChartRadialContent.style = medChartRadialContentCss;

exports.med_chart_radial_content = MedChartRadialContent;
