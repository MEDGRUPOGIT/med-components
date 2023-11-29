/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');

const medAutocompleteCss = ".sc-med-autocomplete-h{--autocomplete-base-height:40px;--autocomplete-height:auto;--dropdown-max-height:164px;display:block;position:relative;border-radius:8px}.sc-med-autocomplete-s>med-dropdown+ion-searchbar{--border-radius:8px}.sc-med-autocomplete-s>med-dropdown{--top:40px;max-height:var(--dropdown-max-height);background:hsl(var(--med-color-neutral-2));cursor:pointer}.med-autocomplete--dropdown-hide.sc-med-autocomplete-h{opacity:1;-webkit-animation-duration:300ms;animation-duration:300ms;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes shorten{0%{height:var(--autocomplete-height)}100%{height:var(--autocomplete-base-height)}}@keyframes shorten{0%{height:var(--autocomplete-height)}100%{height:var(--autocomplete-base-height)}}.sc-med-autocomplete-h.med-autocomplete--dropdown-hide.sc-med-autocomplete-s>med-dropdown{opacity:0;pointer-events:none;-webkit-animation-name:fadeAndShrink;animation-name:fadeAndShrink;-webkit-animation-duration:300ms;animation-duration:300ms;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}@-webkit-keyframes fadeAndShrink{0%{opacity:1}100%{opacity:0}}@keyframes fadeAndShrink{0%{opacity:1}100%{opacity:0}}.med-autocomplete--dropdown-show.sc-med-autocomplete-h{opacity:1;-webkit-animation-duration:300ms;animation-duration:300ms;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes heighten{0%{height:var(--autocomplete-base-height)}100%{height:var(--autocomplete-height)}}@keyframes heighten{0%{height:var(--autocomplete-base-height)}100%{height:var(--autocomplete-height)}}.sc-med-autocomplete-h.med-autocomplete--dropdown-show.sc-med-autocomplete-s>ion-searchbar{--border-radius:8px 8px 0 0}.sc-med-autocomplete-h.med-autocomplete--dropdown-show.sc-med-autocomplete-s>med-dropdown{opacity:1;-webkit-animation-name:showUp;animation-name:showUp;-webkit-animation-duration:300ms;animation-duration:300ms;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}@-webkit-keyframes showUp{0%{opacity:0}100%{opacity:1}}@keyframes showUp{0%{opacity:0}100%{opacity:1}}";

const MedAutocomplete = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.open = undefined;
    this.baseHeight = undefined;
    this.dropdown = undefined;
    this.debounceTime = 0;
  }
  closeOnOutsideClick(e) {
    const target = e.target;
    if (!this.host.contains(target)) {
      this.open = false;
    }
  }
  handleInput() {
    this.open = true;
    /**
     * debounceTime deve ser setado de acordo com o tempo de debounce
     * do método de busca de items
     */
    setTimeout(() => {
      const extraHeight = this.dropdownElement.getBoundingClientRect().height;
      return this.host.style.setProperty("--autocomplete-height", `${this.baseHeight + extraHeight}px`);
    }, this.debounceTime);
  }
  handleFocus() {
    this.handleInput();
  }
  handleOpenChange() {
    if (!this.dropdownElement) {
      this.dropdownElement = this.host.querySelector("med-dropdown");
    }
    if (this.open) {
      const extraHeight = this.dropdownElement.getBoundingClientRect().height;
      return this.host.style.setProperty("--autocomplete-height", `${this.baseHeight + extraHeight}px`);
    }
  }
  async toggleDropdown() {
    this.open = !this.open;
  }
  componentWillLoad() {
    var _a;
    this.open = (_a = this.dropdown) !== null && _a !== void 0 ? _a : false;
  }
  componentDidLoad() {
    var _a, _b;
    const searchbar = this.host.querySelector("ion-searchbar");
    const searchbarHeight = (_b = (_a = searchbar === null || searchbar === void 0 ? void 0 : searchbar.getBoundingClientRect()) === null || _a === void 0 ? void 0 : _a.height) !== null && _b !== void 0 ? _b : 0;
    if (searchbarHeight) {
      this.baseHeight = searchbar.getBoundingClientRect().height;
      this.host.style.setProperty("--autocomplete-base-height", `${this.baseHeight}px`);
    }
    else {
      const poll = setInterval(() => {
        const searchbar = this.host.querySelector("ion-searchbar");
        if (searchbar) {
          this.baseHeight = searchbar.getBoundingClientRect().height;
          if (this.baseHeight) {
            this.host.style.setProperty("--autocomplete-base-height", `${this.baseHeight}px`);
          }
          clearInterval(this.pollTrigger);
        }
      }, 200);
      this.pollTrigger = poll;
    }
  }
  render() {
    const { open } = this;
    return (index.h(index.Host, { class: {
        "med-autocomplete--dropdown-hide": !open,
        "med-autocomplete--dropdown-show": open,
      } }, index.h("slot", null)));
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "open": ["handleOpenChange"]
  }; }
};
MedAutocomplete.style = medAutocompleteCss;

exports.med_autocomplete = MedAutocomplete;
