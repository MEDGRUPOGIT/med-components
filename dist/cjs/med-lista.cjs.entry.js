'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medTheme = require('./med-theme-1bca89cc.js');

const iosMedListaCss = ":host{--border-radius:8px;--border-color:transparent;--border:1px solid var(--border-color)}:host{border-radius:var(--border-radius)}::slotted(med-item:not(:last-child)){border-bottom:var(--border)}";

const mdMedListaCss = ":host{--border-radius:8px;--border-color:transparent;--border:1px solid var(--border-color)}:host{border-radius:var(--border-radius)}::slotted(med-item:not(:last-child)){border-bottom:var(--border)}";

const List = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  async closeSlidingItems() {
    const item = this.el.querySelector('ion-item-sliding');
    if (item && item.closeOpened) {
      return item.closeOpened();
    }
    return false;
  }
  render() {
    return (index.h(index.Host, { class: medTheme.generateMedColor(null, { 'med-lista': true }) }, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
};
List.style = {
  ios: iosMedListaCss,
  md: mdMedListaCss
};

exports.med_lista = List;
