import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { c as createColorClasses } from './theme-3b0eafd2.js';

const medContextMenuCss = ":host{--background:hsl(var(--med-color-neutral-3));--color:hsl(var(--med-color-neutral-10));--z-index:1}:host(.med-context-menu){display:block;position:relative}:host(.med-context-menu) .med-context-menu__content{z-index:var(--z-index);position:absolute;background:var(--background);right:-8px;top:-8px;min-width:250px;max-width:250px;width:100%;-webkit-box-shadow:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);box-shadow:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);border-radius:4px;padding:16px;visibility:visible;opacity:1;-webkit-transition:opacity 300ms ease-in-out;transition:opacity 300ms ease-in-out}:host(.med-context-menu) .med-context-menu__button{--font-size:24px}:host(.med-context-menu) .med-context-menu__inner-button{position:absolute;right:8px;top:9px;--font-size:24px}:host(.med-context-menu) .med-context-menu__inner-icon{stroke:hsl(var(--med-color-neutral-10))}:host(.med-context-menu--collapsed) .med-context-menu__content{visibility:hidden;opacity:0;-webkit-transition:opacity 300ms ease-in-out;transition:opacity 300ms ease-in-out;--z-index:0}";

const MedContextMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Define o estado do componente.
     */
    this.collapsed = true;
  }
  /**
   * Define o estado do componente programaticamente.
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
    return (h(Host, { "from-stencil": true, class: createColorClasses(null, {
        'med-context-menu': true,
        'med-context-menu--collapsed': this.collapsed
      }, null) }, h("ion-button", { onClick: (event) => { this.toggle(event); }, class: "med-context-menu__button", "ds-name": "tertiary", "ds-size": "xs" }, h("ion-icon", { slot: "icon-only", class: "med-icon med-context-menu__icon", name: "med-context-menu" })), h("div", { class: "med-context-menu__content" }, h("ion-button", { onClick: (event) => { this.toggle(event); }, class: "med-context-menu__inner-button", "ds-name": "tertiary", "ds-size": "xs" }, h("ion-icon", { slot: "icon-only", class: "med-icon med-context-menu__inner-icon", name: "med-context-menu" })), h("slot", null))));
  }
};
MedContextMenu.style = medContextMenuCss;

export { MedContextMenu as med_context_menu };
