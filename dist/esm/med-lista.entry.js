/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, i as h, H as Host, j as getElement } from './index-336c66d9.js';
import { g as generateMedColor } from './color-1d14c71a.js';

const iosMedListaCss = ":host{--border-radius:8px;--border-color:transparent;--border:1px solid var(--border-color)}:host{border-radius:var(--border-radius)}::slotted(med-item:not(:last-child)){border-bottom:var(--border)}";

const mdMedListaCss = ":host{--border-radius:8px;--border-color:transparent;--border:1px solid var(--border-color)}:host{border-radius:var(--border-radius)}::slotted(med-item:not(:last-child)){border-bottom:var(--border)}";

const List = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, { class: generateMedColor(null, { 'med-lista': true }) }, h("slot", null)));
  }
  get el() { return getElement(this); }
};
List.style = {
  ios: iosMedListaCss,
  md: mdMedListaCss
};

export { List as med_lista };
