/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const color = require('./color-c29da9e4.js');

const multiSelectDropdownCss = "@charset \"UTF-8\";.sc-tp-multi-select-dropdown-h{position:relative;display:block;z-index:1}.tp-multi-select-dropdown__container.sc-tp-multi-select-dropdown{position:relative}.tp-multi-select-dropdown__header.sc-tp-multi-select-dropdown{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;gap:8px;height:40px;padding:12px 8px 12px 16px;background:hsl(var(--med-color-neutral-2));border-radius:8px;cursor:pointer;-webkit-transition:border-radius 200ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:border-radius 200ms cubic-bezier(0.25, 0.8, 0.5, 1)}.tp-multi-select-dropdown__header-content.sc-tp-multi-select-dropdown{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;gap:8px;width:100%}.tp-multi-select-dropdown__header-content.sc-tp-multi-select-dropdown .tp-multi-select-dropdown__label.sc-tp-multi-select-dropdown{-ms-flex:1;flex:1;width:0}.tp-multi-select-dropdown__left.sc-tp-multi-select-dropdown{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:8px}.tp-multi-select-dropdown__right.sc-tp-multi-select-dropdown{-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.tp-multi-select-dropdown__arrow.sc-tp-multi-select-dropdown,.tp-multi-select-dropdown__badge.sc-tp-multi-select-dropdown{display:-ms-flexbox;display:flex}.tp-multi-select-dropdown__arrow.sc-tp-multi-select-dropdown{-webkit-transition:-webkit-transform 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:-webkit-transform 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.5, 1), -webkit-transform 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}.tp-multi-select-dropdown__arrow.sc-tp-multi-select-dropdown ion-icon.sc-tp-multi-select-dropdown{stroke:hsl(var(--med-color-neutral-6))}.tp-multi-select-dropdown__label.sc-tp-multi-select-dropdown{text-overflow:ellipsis !important;white-space:nowrap !important;overflow:hidden !important}.tp-multi-select-dropdown__label--placeholder.sc-tp-multi-select-dropdown{color:hsl(var(--med-color-neutral-5)) !important}.tp-multi-select-dropdown__accordion-group.sc-tp-multi-select-dropdown{position:absolute;top:100%;left:0;width:100%;opacity:0;-webkit-transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.5, 1);pointer-events:none}.tp-multi-select-dropdown__accordion-group--open.sc-tp-multi-select-dropdown{pointer-events:initial}.tp-multi-select-dropdown__accordion.sc-tp-multi-select-dropdown{background:transparent}.tp-multi-select-dropdown__options.sc-tp-multi-select-dropdown{--tp-scroll-color:hsl(var(--med-color-neutral-4));display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;max-height:var(--dropdown-max-height, 220px);padding:0 !important;overflow-y:auto;background:hsl(var(--med-color-neutral-3));border-radius:0 0 8px 8px}.tp-multi-select-dropdown__option.sc-tp-multi-select-dropdown{height:44px;min-height:44px;--min-height:28px}.tp-multi-select-dropdown__option.sc-tp-multi-select-dropdown:not(:last-child):after{content:\"\";position:absolute;bottom:0;left:0;width:100%;border:1px solid hsl(var(--med-color-neutral-4))}.tp-multi-select-dropdown__option.sc-tp-multi-select-dropdown .tp-multi-select-dropdown__left.sc-tp-multi-select-dropdown{gap:16px}.tp-multi-select-dropdown--open.sc-tp-multi-select-dropdown-h{z-index:20001}.tp-multi-select-dropdown--open.sc-tp-multi-select-dropdown-h .tp-multi-select-dropdown__header.sc-tp-multi-select-dropdown{border-radius:8px 8px 0 0;-webkit-transition:border-radius 200ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:border-radius 200ms cubic-bezier(0.25, 0.8, 0.5, 1)}.tp-multi-select-dropdown--open.sc-tp-multi-select-dropdown-h .tp-multi-select-dropdown__accordion-group.sc-tp-multi-select-dropdown{opacity:1}.tp-multi-select-dropdown--open.sc-tp-multi-select-dropdown-h .tp-multi-select-dropdown__arrow.sc-tp-multi-select-dropdown{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.tp-multi-select-dropdown.sc-tp-multi-select-dropdown-h:not(.tp-multi-select-dropdown--open) .tp-multi-select-dropdown__header.sc-tp-multi-select-dropdown:hover{cursor:pointer}";

const TpMultiSelectDropdown = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.valueChange = index.createEvent(this, "valueChange", 7);
    this.selectedOptionsMap = new Map();
    this.color = undefined;
    this.value = [];
    this.options = [];
    this.placeholder = undefined;
    this.valueLabel = undefined;
    this.numeric = false;
    this.open = false;
    this.selectedOptions = [];
  }
  closeOnOutsideClick(event) {
    const target = event.target;
    if (this.open && !this.host.contains(target)) {
      this.open = false;
    }
  }
  closeOnEscapeKey(event) {
    if (this.open && event.key === 'Escape') {
      this.open = false;
    }
  }
  onValueChange() {
    this.selectedOptions = this.getSelectedOptions();
  }
  change(event) {
    const value = this.numeric
      ? Number(event.detail.value)
      : event.detail.value;
    const updatedValue = this.getUpdatedValue(value, event.detail.checked);
    this.value = updatedValue;
    this.valueChange.emit(updatedValue);
  }
  getUpdatedValue(selectedValue, checked) {
    const isIncluded = this.value.includes(selectedValue);
    if (!isIncluded && checked) {
      return [...this.value, selectedValue];
    }
    else if (isIncluded && !checked) {
      return this.value.filter((optionValue) => optionValue !== selectedValue);
    }
    return [...this.value];
  }
  getSelectedOptions() {
    const selectedOptions = this.options.filter(({ value }) => {
      return this.value.includes(value);
    });
    this.options.forEach(({ value }) => {
      this.selectedOptionsMap.set(value, false);
    });
    selectedOptions.forEach(({ value }) => {
      this.selectedOptionsMap.set(value, true);
    });
    return selectedOptions;
  }
  componentWillLoad() {
    this.selectedOptions = this.getSelectedOptions();
  }
  render() {
    const { color: color$1, options, placeholder, valueLabel, open, selectedOptions, selectedOptionsMap } = this;
    return (index.h(index.Host, { class: color.generateMedColor(color$1, {
        'tp-multi-select-dropdown': true,
        'tp-multi-select-dropdown--open': open
      }) }, index.h("div", { class: 'tp-multi-select-dropdown__container' }, index.h("div", { class: 'tp-multi-select-dropdown__header', onClick: () => (this.open = !this.open) }, index.h("div", { class: 'tp-multi-select-dropdown__header-content' }, index.h("div", { class: 'tp-multi-select-dropdown__left' }, index.h("ion-label", { class: {
        'tp-multi-select-dropdown__label': true,
        'tp-multi-select-dropdown__label--placeholder': !selectedOptions.length
      },
      // @ts-ignore
      token: 'p14' }, selectedOptions.length
      ? valueLabel
        ? valueLabel
        : selectedOptions.map(({ label }) => label).join(', ')
      : placeholder))), index.h("div", { class: 'tp-multi-select-dropdown__arrow' }, index.h("ion-icon", { class: 'med-icon', name: 'med-baixo' }))), index.h("ion-accordion-group", { class: {
        'tp-multi-select-dropdown__accordion-group': true,
        'tp-multi-select-dropdown__accordion-group--open': open
      }, value: open ? 'open' : null }, index.h("ion-accordion", { class: 'tp-multi-select-dropdown__accordion', value: 'open' }, index.h("div", { slot: 'content', class: 'tp-multi-select-dropdown__options tp-scroll', "no-styling-content": true }, options.map(({ value: optionValue, label }) => (index.h("ion-item", { class: 'tp-multi-select-dropdown__option', mode: 'ios',
      //  @ts-ignore
      gap: 's16', "spacing-v": 's08', "spacing-h": 's12' }, index.h("ion-checkbox", { mode: 'md', slot: 'start', checked: selectedOptionsMap.get(optionValue), value: optionValue, onIonChange: this.change.bind(this) }), index.h("ion-label", { class: 'tp-multi-select-dropdown__label',
      //  @ts-ignore
      token: 'p14', "ds-color": 'neutral-10' }, label))))))))));
  }
  static get assetsDirs() { return ["assets"]; }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "value": ["onValueChange"]
  }; }
};
TpMultiSelectDropdown.style = multiSelectDropdownCss;

exports.tp_multi_select_dropdown = TpMultiSelectDropdown;
