/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, i as h, H as Host } from './index-336c66d9.js';
import { g as generateMedColor } from './color-1d14c71a.js';

const medContextMenuCss = ".sc-med-context-menu-h{--background:hsl(var(--med-color-neutral-3));--color:hsl(var(--med-color-neutral-10));--z-index:1}.med-context-menu.sc-med-context-menu-h{display:block;position:relative}.med-context-menu.sc-med-context-menu-h .med-context-menu__content.sc-med-context-menu{z-index:var(--z-index);position:absolute;background:var(--background);right:-8px;top:-8px;min-width:264px;max-width:264px;width:100%;-webkit-box-shadow:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);box-shadow:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);border-radius:4px;padding:16px;visibility:visible;opacity:1;-webkit-transition:opacity 300ms ease-in-out;transition:opacity 300ms ease-in-out}.med-context-menu.sc-med-context-menu-h .med-context-menu__button.sc-med-context-menu{--font-size:24px}.med-context-menu.sc-med-context-menu-h .med-context-menu__icon.sc-med-context-menu{margin-right:0}.med-context-menu.sc-med-context-menu-h .med-context-menu__inner-button.sc-med-context-menu{position:absolute;right:8px;top:9px;--font-size:24px}.med-context-menu.sc-med-context-menu-h .med-context-menu__inner-icon.sc-med-context-menu{stroke:hsl(var(--med-color-neutral-10));font-size:24px}.med-context-menu--collapsed.sc-med-context-menu-h .med-context-menu__content.sc-med-context-menu{visibility:hidden;opacity:0;-webkit-transition:opacity 300ms ease-in-out;transition:opacity 300ms ease-in-out;--z-index:0}";

const MedContextMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.collapsed = true;
  }
  /**
   * todo
   */
  async toggle(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.collapsed = !this.collapsed;
  }
  handleClick(event) {
    if (!this.collapsed) {
      this.toggle(event);
    }
  }
  render() {
    return (h(Host, { "from-stencil": true, class: generateMedColor(null, {
        'med-context-menu': true,
        'med-context-menu--collapsed': this.collapsed
      }) }, h("ion-button", { mode: "ios", "icon-only": true, onClick: (event) => { this.toggle(event); }, class: "med-context-menu__button", fill: "clear", "ds-size": "sm" }, h("ion-icon", { slot: "icon-only", class: "med-icon med-context-menu__icon", name: "med-context-menu" })), h("div", { class: "med-context-menu__content" }, h("ion-button", { mode: "ios", "icon-only": true, onClick: (event) => { this.toggle(event); }, class: "med-context-menu__inner-button", fill: "clear", "ds-size": "sm" }, h("ion-icon", { slot: "icon-only", class: "med-icon med-context-menu__inner-icon", name: "med-context-menu" })), h("slot", null))));
  }
};
MedContextMenu.style = medContextMenuCss;

export { MedContextMenu as med_context_menu };
