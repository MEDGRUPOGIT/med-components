import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-33df6a63.js';

const medTooltipCss = ":host{--background:hsl(var(--med-color-neutral-3));--z-index:1;--box-shadow:var(--med-shadow-level-1);--border-radius:8px;--padding:20px 16px;--min-width:285px;--max-width:285px}:host(.med-tooltip){display:inline-block;position:relative}:host(.med-tooltip) .med-tooltip__content{z-index:var(--z-index);position:absolute;background:var(--background);border-radius:var(--border-radius);padding:var(--padding);visibility:visible;opacity:1;-webkit-transition:opacity 300ms ease-in-out;transition:opacity 300ms ease-in-out;top:calc(100% + 6px);min-width:var(--min-width);max-width:var(--max-width);width:100%}:host(.med-tooltip) .med-tooltip__input-container{position:relative}:host(.med-tooltip) .med-tooltip__input-container::after{content:\"\";position:absolute;left:10px;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid var(--background);clear:both;-webkit-transition:opacity 300ms ease-in-out;transition:opacity 300ms ease-in-out;top:100%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}:host(.med-tooltip) .med-tooltip__button{--font-size:24px}:host(.med-tooltip) .med-tooltip__inner-button{position:absolute;right:8px;top:9px;--font-size:24px}:host(.med-tooltip) .med-tooltip__icon{stroke:hsl(var(--med-color-neutral-10))}:host(.med-tooltip) .med-tooltip__inner-icon{stroke:hsl(var(--med-color-neutral-3))}:host(.med-tooltip) .med-tooltip__titulo{font-size:var(--font-size-xxxs);font-weight:var(--font-weight-bold);line-height:16px;color:hsl(var(--med-color-neutral-10));margin:0;padding-top:var(--spacing-stack-xxxs);padding-bottom:var(--spacing-stack-xxxs)}:host(.med-tooltip) .med-tooltip__text{font-size:var(--font-size-xxxs);font-weight:var(--font-weight-regular);line-height:16px;color:hsl(var(--med-color-neutral-10));margin:0;white-space:nowrap}:host(.med-tooltip--definition){--padding:var(--med-spacing-inset-sm)}:host(.med-tooltip--definition) .med-tooltip__content{min-width:var(--min-width);max-width:var(--max-width);width:100%}:host(.med-tooltip--definition) .med-tooltip__text{white-space:initial}:host(.med-tooltip--collapsed) .med-tooltip__content{visibility:hidden;opacity:0;-webkit-transition:opacity 300ms ease-in-out;transition:opacity 300ms ease-in-out}:host(.med-tooltip--collapsed) .med-tooltip__input-container::after{visibility:hidden;opacity:0;-webkit-transition:opacity 300ms ease-in-out;transition:opacity 300ms ease-in-out}:host(.med-tooltip--bottom) .med-tooltip__input-container::after{border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid var(--background)}:host(.med-tooltip--bottom) .med-tooltip__content{top:calc(100% + 6px)}:host(.med-tooltip--top) .med-tooltip__input-container::after{bottom:100%;top:auto;border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid var(--background);border-bottom:0}:host(.med-tooltip--top) .med-tooltip__content{bottom:calc(100% + 6px);top:auto}:host(.med-tooltip--left) .med-tooltip__input-container::after{border-top:6px solid transparent;border-bottom:6px solid transparent;border-left:6px solid var(--background);border-right:0;right:100%;left:auto;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}:host(.med-tooltip--left) .med-tooltip__content{right:calc(100% + 6px);top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}:host(.med-tooltip--right) .med-tooltip__input-container::after{border-top:6px solid transparent;border-bottom:6px solid transparent;border-right:6px solid var(--background);border-left:0;right:auto;left:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}:host(.med-tooltip--right) .med-tooltip__content{left:calc(100% + 6px);top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}:host(.med-tooltip--center:not(.med-tooltip--right):not(.med-tooltip--left)) .med-tooltip__content{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}:host(.med-tooltip--center:not(.med-tooltip--right):not(.med-tooltip--left)) .med-tooltip__input-container::after{left:50%}:host(.med-tooltip--end:not(.med-tooltip--right):not(.med-tooltip--left)) .med-tooltip__content{left:unset;right:0}:host(.med-tooltip--end:not(.med-tooltip--right):not(.med-tooltip--left)) .med-tooltip__input-container::after{left:unset;right:0}:host(.med-color){--background:hsl(var(--med-color-3))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback))}";

const MedTooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Define o estado do componente.
     */
    this.collapsed = true;
  }
  /**
   * TODO
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
    const { dsName, placement, position, collapsed, titulo, content, dsColor } = this;
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-tooltip': true,
        [`med-tooltip--${dsName}`]: dsName !== undefined,
        [`med-tooltip--${placement}`]: placement !== undefined,
        [`med-tooltip--${position}`]: position !== undefined,
        'med-tooltip--collapsed': collapsed
      }) }, h("div", { class: "med-tooltip__input-container", onClick: (event) => { this.toggle(event); } }, h("slot", { name: "input" })), h("div", { class: "med-tooltip__content" }, titulo && h("h3", { class: "med-tooltip__titulo" }, titulo), content && h("p", { class: "med-tooltip__text" }, content), h("slot", { name: "content" }))));
  }
};
MedTooltip.style = medTooltipCss;

export { MedTooltip as med_tooltip };
