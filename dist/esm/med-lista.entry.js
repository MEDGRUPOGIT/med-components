import { r as registerInstance, h, H as Host, i as getElement } from './index-70672e81.js';
import { b as getIonMode } from './ionic-global-10d9ffcf.js';
import { g as generateMedColor } from './med-theme-33df6a63.js';

const iosMedListaCss = ":host{--border-radius:8px;--border:1px solid color(\"neutral\", \"2\")}:host{display:block;background:var(--background);border-radius:var(--border-radius)}:host(.list-padding) ::slotted(med-item){--padding:12px 16px}::slotted(med-item:not(:last-child)){border-bottom:var(--border)}:host(.med-color){--background:hsl(var(--med-color-3))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback))}";

const mdMedListaCss = ":host{--border-radius:8px;--border:1px solid color(\"neutral\", \"2\")}:host{display:block;background:var(--background);border-radius:var(--border-radius)}:host(.list-padding) ::slotted(med-item){--padding:12px 16px}::slotted(med-item:not(:last-child)){border-bottom:var(--border)}:host(.med-color){--background:hsl(var(--med-color-3))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback))}";

const List = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    const mode = getIonMode(this);
    const { lines, inset, dsColor, padding } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        [mode]: true,
        // Used internally for styling
        //[`list-${mode}`]: true,
        'list-inset': inset,
        [`list-lines-${lines}`]: lines !== undefined,
        [`list-${mode}-lines-${lines}`]: lines !== undefined,
        'list-padding': padding,
      }) }, h("slot", null)));
  }
  get el() { return getElement(this); }
};
List.style = {
  ios: iosMedListaCss,
  md: mdMedListaCss
};

export { List as med_lista };
