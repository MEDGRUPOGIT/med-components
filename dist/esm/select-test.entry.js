import { r as registerInstance, h, H as Host } from './index-70672e81.js';

const selectTestCss = ":host{display:block}";

const SelectTest = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
SelectTest.style = selectTestCss;

export { SelectTest as select_test };
