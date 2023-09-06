import { r as registerInstance, e as createEvent, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './color-49be71bc.js';

const medTooltipCss = ".sc-med-tooltip-h{--background:hsl(var(--med-color-neutral-3));--text-color:hsl(var(--med-color-neutral-10));--z-index:1;--box-shadow:0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 3px rgba(0, 0, 0, 0.2);--border-radius:8px;--padding:16px;--min-width:285px;--max-width:285px;--arrow-distance:12px;--arrow-size:9px;--arrow-size-2:12px}.sc-med-tooltip-h{display:inline-block;position:relative}.sc-med-tooltip-h .med-tooltip__content.sc-med-tooltip{z-index:var(--z-index);position:absolute;background:var(--background);border-radius:var(--border-radius);padding:var(--padding);visibility:visible;opacity:1;-webkit-transition:opacity 300ms ease-in-out;transition:opacity 300ms ease-in-out;top:calc(100% + var(--arrow-distance));min-width:var(--min-width);max-width:var(--max-width);width:100%;left:-20px}.sc-med-tooltip-h .med-tooltip__input-container.sc-med-tooltip{position:relative}.sc-med-tooltip-h .med-tooltip__input-container.sc-med-tooltip::after{content:\"\";position:absolute;left:13px;width:0;height:0;border-left:var(--arrow-size) solid transparent;border-right:var(--arrow-size) solid transparent;border-bottom:var(--arrow-size-2) solid var(--background);clear:both;-webkit-transition:opacity 300ms ease-in-out;transition:opacity 300ms ease-in-out;top:100%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.sc-med-tooltip-h .med-tooltip__header.sc-med-tooltip{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:8px;-ms-flex-align:start;align-items:flex-start}.sc-med-tooltip-h .med-tooltip__titulo.sc-med-tooltip{--font-size:16px;--font-weight:600;--line-height:24px;--color:var(--text-color);margin-right:8px}.sc-med-tooltip-h .med-tooltip__text.sc-med-tooltip{--font-size:14px;--font-weight:400;--line-height:20px;--color:var(--text-color)}.sc-med-tooltip-h .med-tooltip__footer.sc-med-tooltip{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;margin-top:12px}.sc-med-tooltip-h .med-tooltip__button.sc-med-tooltip{--color-hover:hsl(var(--med-color-neutral-10));--color-focused:hsl(var(--med-color-neutral-10));--color-activated:hsl(var(--med-color-neutral-10))}.sc-med-tooltip-h .med-tooltip__button-fechar.sc-med-tooltip{stroke:var(--text-color)}.med-tooltip--collapsed.sc-med-tooltip-h .med-tooltip__content.sc-med-tooltip{visibility:hidden;opacity:0;-webkit-transition:opacity 300ms ease-in-out;transition:opacity 300ms ease-in-out}.med-tooltip--collapsed.sc-med-tooltip-h .med-tooltip__input-container.sc-med-tooltip::after{visibility:hidden;opacity:0;-webkit-transition:opacity 300ms ease-in-out;transition:opacity 300ms ease-in-out}.med-tooltip--bottom.sc-med-tooltip-h .med-tooltip__input-container.sc-med-tooltip::after{border-left:var(--arrow-size) solid transparent;border-right:var(--arrow-size) solid transparent;border-bottom:var(--arrow-size-2) solid var(--background)}.med-tooltip--bottom.sc-med-tooltip-h .med-tooltip__content.sc-med-tooltip{top:calc(100% + var(--arrow-distance))}.med-tooltip--top.sc-med-tooltip-h .med-tooltip__input-container.sc-med-tooltip::after{bottom:100%;top:auto;border-left:var(--arrow-size) solid transparent;border-right:var(--arrow-size) solid transparent;border-top:var(--arrow-size-2) solid var(--background);border-bottom:0}.med-tooltip--top.sc-med-tooltip-h .med-tooltip__content.sc-med-tooltip{bottom:calc(100% + var(--arrow-distance));top:auto}.med-tooltip--left.sc-med-tooltip-h .med-tooltip__input-container.sc-med-tooltip::after{border-top:var(--arrow-size) solid transparent;border-bottom:var(--arrow-size) solid transparent;border-left:var(--arrow-size-2) solid var(--background);border-right:0;right:100%;left:auto;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.med-tooltip--left.sc-med-tooltip-h .med-tooltip__content.sc-med-tooltip{right:calc(100% + var(--arrow-distance));top:50%;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.med-tooltip--right.sc-med-tooltip-h .med-tooltip__input-container.sc-med-tooltip::after{border-top:var(--arrow-size) solid transparent;border-bottom:var(--arrow-size) solid transparent;border-right:var(--arrow-size-2) solid var(--background);border-left:0;right:auto;left:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.med-tooltip--right.sc-med-tooltip-h .med-tooltip__content.sc-med-tooltip{left:calc(100% + var(--arrow-distance));top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.med-tooltip--center.sc-med-tooltip-h:not(.med-tooltip--right):not(.med-tooltip--left) .med-tooltip__content.sc-med-tooltip{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.med-tooltip--center.sc-med-tooltip-h:not(.med-tooltip--right):not(.med-tooltip--left) .med-tooltip__input-container.sc-med-tooltip::after{left:50%}.med-tooltip--end.sc-med-tooltip-h:not(.med-tooltip--right):not(.med-tooltip--left) .med-tooltip__content.sc-med-tooltip{left:unset;right:-20px}.med-tooltip--end.sc-med-tooltip-h:not(.med-tooltip--right):not(.med-tooltip--left) .med-tooltip__input-container.sc-med-tooltip::after{left:unset;right:-6px}@media (max-width: 575.98px){.med-tooltip--end.sc-med-tooltip-h:not(.med-tooltip--right):not(.med-tooltip--left) .med-tooltip__input-container.sc-med-tooltip::after{right:-10px}}.med-color.sc-med-tooltip-h{--background:hsl(var(--med-color-4));--text-color:hsl(var(--med-color-neutral-1))}.med-color.sc-med-tooltip-h ion-button.sc-med-tooltip{--color:hsl(var(--med-color-neutral-1));--color-hover:hsl(var(--med-color-neutral-1))}.med-color-neutral.sc-med-tooltip-h{--background:hsl(var(--med-color-neutral));--text-color:hsl(var(--med-color-neutral-contrast))}.med-color-neutral.sc-med-tooltip-h ion-button.sc-med-tooltip{--color:hsl(var(--med-color-neutral-contrast));--color-hover:hsl(var(--med-color-neutral-contrast))}.med-color-feedback.sc-med-tooltip-h{--background:hsl(var(--med-color-feedback));--text-color:hsl(var(--med-color-feedback-contrast))}.med-color-feedback.sc-med-tooltip-h ion-button.sc-med-tooltip{--color:hsl(var(--med-color-feedback-contrast));--color-hover:hsl(var(--med-color-feedback-contrast))}";

const MedTooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.btnLeftClick = createEvent(this, "btnLeftClick", 7);
    this.btnRightClick = createEvent(this, "btnRightClick", 7);
    /**
     * todo
     */
    this.collapsed = true;
    this.onBtnLeftClick = () => {
      this.btnLeftClick.emit();
    };
    this.onBtnRightClick = () => {
      this.btnRightClick.emit();
    };
  }
  /**
   * todo
   */
  async toggle(event) {
    if (!this.enableHover) {
      event === null || event === void 0 ? void 0 : event.stopPropagation();
      this.collapsed = !this.collapsed;
    }
  }
  async toggleOnHover(event) {
    if (this.enableHover) {
      event === null || event === void 0 ? void 0 : event.stopPropagation();
      this.collapsed = !this.collapsed;
    }
  }
  handleClick(event) {
    if ((event === null || event === void 0 ? void 0 : event.target.localName) !== 'med-tooltip' && this.titulo) {
      if (!this.collapsed) {
        this.toggle(event);
      }
    }
    else if (!this.titulo) {
      if (!this.collapsed) {
        this.toggle(event);
      }
    }
  }
  render() {
    const { dsColor, placement, position, collapsed, titulo, content, btnLeft, btnRight } = this;
    return (h(Host, { "from-stencil": true, onMouseenter: (event) => { this.toggleOnHover(event); }, onMouseleave: (event) => { this.toggleOnHover(event); }, class: generateMedColor(dsColor, {
        'med-tooltip': true,
        [`med-tooltip--${placement}`]: placement !== undefined,
        [`med-tooltip--${position}`]: position !== undefined,
        'med-tooltip--collapsed': collapsed
      }) }, h("div", { class: "med-tooltip__input-container", onClick: (event) => { this.toggle(event); } }, h("slot", { name: "input" })), h("div", { class: "med-tooltip__content" }, titulo && h("div", { class: "med-tooltip__header" }, h("med-type", { class: "med-tooltip__titulo" }, titulo), h("ion-button", { mode: "ios", "icon-only": true, class: "med-tooltip__button-fechar", "ds-color": !dsColor ? 'neutral-10' : dsColor, fill: "clear", "ds-size": "xxs", onClick: (event) => { this.toggle(event); } }, h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" }))), content && h("med-type", { class: "med-tooltip__text" }, content), h("slot", { name: "content" }), (btnLeft || btnRight) && h("div", { class: "med-tooltip__footer" }, btnLeft && h("ion-button", { mode: "ios", class: "med-tooltip__button", "ds-color": !dsColor ? 'neutral-10' : dsColor, "ds-size": "xxs", fill: "clear", onClick: this.onBtnLeftClick }, " ", btnLeft, " "), btnRight && h("ion-button", { mode: "ios", class: "med-tooltip__button", "ds-color": !dsColor ? 'neutral-10' : dsColor, "ds-size": "xxs", fill: "clear", onClick: this.onBtnRightClick }, " ", btnRight, " ")))));
  }
};
MedTooltip.style = medTooltipCss;

export { MedTooltip as med_tooltip };
