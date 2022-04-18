'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const ionicGlobal = require('./ionic-global-c609be80.js');
const medTheme = require('./med-theme-42add9fc.js');

const iosMedListaCss = ":host{--border-radius:8px;--border:1px solid color(\"neutral\", \"2\")}:host{display:block;background:var(--background);border-radius:var(--border-radius)}:host(.list-padding) ::slotted(med-item){--padding:12px 16px}::slotted(med-item:not(:last-child)){border-bottom:var(--border)}:host(.med-color){--background:hsl(var(--med-color-3))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback))}";

const mdMedListaCss = ":host{--border-radius:8px;--border:1px solid color(\"neutral\", \"2\")}:host{display:block;background:var(--background);border-radius:var(--border-radius)}:host(.list-padding) ::slotted(med-item){--padding:12px 16px}::slotted(med-item:not(:last-child)){border-bottom:var(--border)}:host(.med-color){--background:hsl(var(--med-color-3))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback))}";

const List = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.padding = false;
    /**
     * If `true`, the list will have margin around it and rounded corners.
     */
    this.inset = false;
  }
  /**
   * If `ion-item-sliding` are used inside the list, this method closes
   * any open sliding item.
   *
   * Returns `true` if an actual `ion-item-sliding` is closed.
   */
  async closeSlidingItems() {
    const item = this.el.querySelector('ion-item-sliding');
    if (item && item.closeOpened) {
      return item.closeOpened();
    }
    return false;
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    const { lines, inset, dsColor, padding } = this;
    return (index.h(index.Host, { class: medTheme.generateMedColor(dsColor, {
        [mode]: true,
        // Used internally for styling
        //[`list-${mode}`]: true,
        'list-inset': inset,
        [`list-lines-${lines}`]: lines !== undefined,
        [`list-${mode}-lines-${lines}`]: lines !== undefined,
        'list-padding': padding,
      }) }, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
};
List.style = {
  ios: iosMedListaCss,
  md: mdMedListaCss
};

exports.med_lista = List;
