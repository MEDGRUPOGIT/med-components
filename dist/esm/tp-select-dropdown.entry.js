/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, f as createEvent, i as h, H as Host, j as getElement } from './index-336c66d9.js';
import { g as generateMedColor } from './color-1d14c71a.js';

const selectDropdownCss = "@charset \"UTF-8\";.sc-tp-select-dropdown-h{position:relative;display:block;z-index:1}.tp-select-dropdown__container.sc-tp-select-dropdown{position:relative}.tp-select-dropdown__header.sc-tp-select-dropdown{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;gap:8px;height:40px;padding:12px 8px 12px 16px;background:hsl(var(--med-color-neutral-2));border-radius:8px;cursor:pointer;-webkit-transition:border-radius 200ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:border-radius 200ms cubic-bezier(0.25, 0.8, 0.5, 1)}.tp-select-dropdown__header-content.sc-tp-select-dropdown{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;gap:8px}.tp-select-dropdown__left.sc-tp-select-dropdown{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:8px}.tp-select-dropdown__right.sc-tp-select-dropdown{-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.tp-select-dropdown__arrow.sc-tp-select-dropdown{display:-ms-flexbox;display:flex}.tp-select-dropdown__arrow.sc-tp-select-dropdown{-webkit-transition:-webkit-transform 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:-webkit-transform 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.5, 1), -webkit-transform 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}.tp-select-dropdown__arrow.sc-tp-select-dropdown ion-icon.sc-tp-select-dropdown{stroke:hsl(var(--med-color-neutral-6))}.tp-select-dropdown__label.sc-tp-select-dropdown{-ms-flex:1;flex:1;width:0;text-overflow:ellipsis;white-space:nowrap;color:hsl(var(--med-color-neutral-10));overflow:hidden}.tp-select-dropdown__label--placeholder.sc-tp-select-dropdown{color:hsl(var(--med-color-neutral-5)) !important}.tp-select-dropdown__accordion-group.sc-tp-select-dropdown{position:absolute;top:100%;left:0;width:100%;opacity:0;-webkit-transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.5, 1);pointer-events:none}.tp-select-dropdown__accordion-group--open.sc-tp-select-dropdown{pointer-events:initial}.tp-select-dropdown__accordion.sc-tp-select-dropdown{background:transparent}.tp-select-dropdown__options.sc-tp-select-dropdown{--tp-scroll-color:hsl(var(--med-color-neutral-4));display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;max-height:var(--dropdown-max-height, 220px);padding:0 !important;overflow-y:auto;background:hsl(var(--med-color-neutral-3));border-radius:0 0 8px 8px}.tp-select-dropdown__option.sc-tp-select-dropdown{position:relative;display:-ms-flexbox;display:flex;padding:16px 12px;height:44px;min-height:44px;background:hsl(var(--med-color-neutral-3));overflow:hidden}.tp-select-dropdown__option.sc-tp-select-dropdown:not(:last-child):after{content:\"\";position:absolute;bottom:0;left:0;width:100%;border:1px solid hsl(var(--med-color-neutral-4))}.tp-select-dropdown__option.sc-tp-select-dropdown input.sc-tp-select-dropdown{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;cursor:pointer}.tp-select-dropdown__option.sc-tp-select-dropdown .tp-select-dropdown__left.sc-tp-select-dropdown{gap:16px}.tp-select-dropdown--open.sc-tp-select-dropdown-h{z-index:20001}.tp-select-dropdown--open.sc-tp-select-dropdown-h .tp-select-dropdown__header.sc-tp-select-dropdown{border-radius:8px 8px 0 0;-webkit-transition:border-radius 200ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:border-radius 200ms cubic-bezier(0.25, 0.8, 0.5, 1)}.tp-select-dropdown--open.sc-tp-select-dropdown-h .tp-select-dropdown__accordion-group.sc-tp-select-dropdown{opacity:1}.tp-select-dropdown--open.sc-tp-select-dropdown-h .tp-select-dropdown__arrow.sc-tp-select-dropdown{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.tp-select-dropdown.sc-tp-select-dropdown-h:not(.tp-select-dropdown--open) .tp-select-dropdown__header.sc-tp-select-dropdown:hover{cursor:pointer}";

const TpSelectDropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 7);
    this.color = undefined;
    this.name = undefined;
    this.value = null;
    this.options = [];
    this.placeholder = undefined;
    this.numeric = false;
    this.open = false;
    this.selectedOption = null;
  }
  closeOnOutsideClick(event) {
    const target = event.target;
    if (this.open && !this.host.contains(target)) {
      this.open = false;
    }
  }
  closeOnEscapeKey(event) {
    if (this.open && event.key === "Escape") {
      this.open = false;
    }
  }
  handleChange(event) {
    this.value =
      event.target.value === ""
        ? null
        : this.numeric
          ? Number(event.target.value)
          : event.target.value;
    this.valueChange.emit(this.value);
    this.selectedOption = this.options.find(({ value }) => this.value === (value === null || this.numeric ? value : `${value}`));
    if (this.open) {
      this.open = false;
    }
  }
  componentWillLoad() {
    this.selectedOption = this.options.find(({ value }) => this.value === (value === null || this.numeric ? value : `${value}`));
  }
  render() {
    const { color, name, value, options, placeholder, open, selectedOption } = this;
    return (h(Host, { class: generateMedColor(color, {
        "tp-select-dropdown": true,
        "tp-select-dropdown--open": open,
      }) }, h("div", { class: "tp-select-dropdown__container" }, h("div", { class: "tp-select-dropdown__header", onClick: () => (this.open = !this.open) }, h("div", { class: "tp-select-dropdown__header-content" }, h("div", { class: "tp-select-dropdown__left" }, h("ion-label", { class: {
        "tp-select-dropdown__label": true,
        "tp-select-dropdown__label--placeholder": !selectedOption,
      },
      // @ts-ignore
      token: "p14" }, selectedOption ? selectedOption.label : placeholder))), h("div", { class: "tp-select-dropdown__arrow" }, h("ion-icon", { class: "med-icon", name: "med-baixo" }))), h("ion-accordion-group", { class: {
        "tp-select-dropdown__accordion-group": true,
        "tp-select-dropdown__accordion-group--open": open,
      }, value: open ? "open" : null }, h("ion-accordion", { class: "tp-select-dropdown__accordion", value: "open" }, h("div", { slot: "content", class: "tp-select-dropdown__options tp-scroll", "no-styling-content": true }, options.map(({ value: optionValue, label }) => (h("label", { class: {
        "tp-select-dropdown__option": true,
        "tp-select-dropdown__option--selected": optionValue === value,
      }, key: optionValue }, h("input", { type: "radio", name: name, value: optionValue === null ? "" : optionValue, checked: optionValue === value, onChange: this.handleChange.bind(this) }), h("div", { class: "tp-select-dropdown__left" }, h("ion-label", { class: "tp-select-dropdown__label",
      // @ts-ignore
      token: "p14", "ds-color": "neutral-10" }, label)))))))))));
  }
  static get assetsDirs() { return ["assets"]; }
  get host() { return getElement(this); }
};
TpSelectDropdown.style = selectDropdownCss;

export { TpSelectDropdown as tp_select_dropdown };
