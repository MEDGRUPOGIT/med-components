'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const color = require('./color-2d4645aa.js');

const iosMedListaCss = ":host{--border-radius:8px;--border-color:transparent;--border:1px solid var(--border-color)}:host{border-radius:var(--border-radius)}::slotted(med-item:not(:last-child)){border-bottom:var(--border)}";

const mdMedListaCss = ":host{--border-radius:8px;--border-color:transparent;--border:1px solid var(--border-color)}:host{border-radius:var(--border-radius)}::slotted(med-item:not(:last-child)){border-bottom:var(--border)}";

const List = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  /**
   * todo
   */
  async closeSlidingItems() {
    const item = this.el.querySelector('ion-item-sliding');
    if (item && item.closeOpened) {
      return item.closeOpened();
    }
    return false;
  }
  render() {
    return (index.h(index.Host, { class: color.generateMedColor(null, { 'med-lista': true }) }, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
};
List.style = {
  ios: iosMedListaCss,
  md: mdMedListaCss
};

exports.med_lista = List;
