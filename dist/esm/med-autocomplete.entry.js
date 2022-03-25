import { r as registerInstance, h, H as Host } from './index-70672e81.js';

const medAutocompleteCss = ".sc-med-autocomplete-h{display:block;position:relative}.sc-med-autocomplete-s>med-dropdown+ion-searchbar{--border-radius:8px 8px 0 0}.sc-med-autocomplete-s>med-dropdown{--top:40px}";

const MedAutocomplete = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
MedAutocomplete.style = medAutocompleteCss;

export { MedAutocomplete as med_autocomplete };
