import { r as registerInstance, e as createEvent, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-33df6a63.js';

const medTooltipCss = ":host{--background:hsl(var(--med-color-neutral-3));--text-color:hsl(var(--med-color-neutral-10));--z-index:1;--box-shadow:0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 3px rgba(0, 0, 0, 0.2);--border-radius:8px;--padding:16px;--min-width:285px;--max-width:285px;--arrow-distance:12px;--arrow-size:9px;--arrow-size-2:12px}:host{display:inline-block;position:relative}:host .med-tooltip__content{z-index:var(--z-index);position:absolute;background:var(--background);border-radius:var(--border-radius);padding:var(--padding);visibility:visible;opacity:1;-webkit-transition:opacity 300ms ease-in-out;transition:opacity 300ms ease-in-out;top:calc(100% + var(--arrow-distance));min-width:var(--min-width);max-width:var(--max-width);width:100%;left:-20px}:host .med-tooltip__input-container{position:relative}:host .med-tooltip__input-container::after{content:\"\";position:absolute;left:13px;width:0;height:0;border-left:var(--arrow-size) solid transparent;border-right:var(--arrow-size) solid transparent;border-bottom:var(--arrow-size-2) solid var(--background);clear:both;-webkit-transition:opacity 300ms ease-in-out;transition:opacity 300ms ease-in-out;top:100%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}:host .med-tooltip__header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:8px;-ms-flex-align:start;align-items:flex-start}:host .med-tooltip__titulo{--font-size:16px;--font-weight:600;--line-height:24px;--color:var(--text-color);margin-right:8px}:host .med-tooltip__text{--font-size:14px;--font-weight:400;--line-height:20px;--color:var(--text-color)}:host .med-tooltip__footer{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;margin-top:12px}:host .med-tooltip__button{--color-hover:hsl(var(--med-color-neutral-10));--color-focused:hsl(var(--med-color-neutral-10));--color-activated:hsl(var(--med-color-neutral-10))}:host .med-tooltip__button-fechar{stroke:var(--text-color)}:host(.med-tooltip--collapsed) .med-tooltip__content{visibility:hidden;opacity:0;-webkit-transition:opacity 300ms ease-in-out;transition:opacity 300ms ease-in-out}:host(.med-tooltip--collapsed) .med-tooltip__input-container::after{visibility:hidden;opacity:0;-webkit-transition:opacity 300ms ease-in-out;transition:opacity 300ms ease-in-out}:host(.med-tooltip--bottom) .med-tooltip__input-container::after{border-left:var(--arrow-size) solid transparent;border-right:var(--arrow-size) solid transparent;border-bottom:var(--arrow-size-2) solid var(--background)}:host(.med-tooltip--bottom) .med-tooltip__content{top:calc(100% + var(--arrow-distance))}:host(.med-tooltip--top) .med-tooltip__input-container::after{bottom:100%;top:auto;border-left:var(--arrow-size) solid transparent;border-right:var(--arrow-size) solid transparent;border-top:var(--arrow-size-2) solid var(--background);border-bottom:0}:host(.med-tooltip--top) .med-tooltip__content{bottom:calc(100% + var(--arrow-distance));top:auto}:host(.med-tooltip--left) .med-tooltip__input-container::after{border-top:var(--arrow-size) solid transparent;border-bottom:var(--arrow-size) solid transparent;border-left:var(--arrow-size-2) solid var(--background);border-right:0;right:100%;left:auto;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}:host(.med-tooltip--left) .med-tooltip__content{right:calc(100% + var(--arrow-distance));top:50%;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}:host(.med-tooltip--right) .med-tooltip__input-container::after{border-top:var(--arrow-size) solid transparent;border-bottom:var(--arrow-size) solid transparent;border-right:var(--arrow-size-2) solid var(--background);border-left:0;right:auto;left:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}:host(.med-tooltip--right) .med-tooltip__content{left:calc(100% + var(--arrow-distance));top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}:host(.med-tooltip--center:not(.med-tooltip--right):not(.med-tooltip--left)) .med-tooltip__content{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}:host(.med-tooltip--center:not(.med-tooltip--right):not(.med-tooltip--left)) .med-tooltip__input-container::after{left:50%}:host(.med-tooltip--end:not(.med-tooltip--right):not(.med-tooltip--left)) .med-tooltip__content{left:unset;right:-20px}:host(.med-tooltip--end:not(.med-tooltip--right):not(.med-tooltip--left)) .med-tooltip__input-container::after{left:unset;right:-6px}:host(.med-color){--background:hsl(var(--med-color-4));--text-color:hsl(var(--med-color-neutral-1))}:host(.med-color) ion-button{--color:hsl(var(--med-color-neutral-1));--color-hover:hsl(var(--med-color-neutral-1))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral));--text-color:hsl(var(--med-color-neutral-contrast))}:host(.med-color-neutral) ion-button{--color:hsl(var(--med-color-neutral-contrast));--color-hover:hsl(var(--med-color-neutral-contrast))}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback));--text-color:hsl(var(--med-color-feedback-contrast))}:host(.med-color-feedback) ion-button{--color:hsl(var(--med-color-feedback-contrast));--color-hover:hsl(var(--med-color-feedback-contrast))}";

const MedTooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.btnLeftClick = createEvent(this, "btnLeftClick", 7);
    this.btnRightClick = createEvent(this, "btnRightClick", 7);
    /**
      * TODO
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
    * Define o estado do componente programaticamente.
    */
  async toggle(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.collapsed = !this.collapsed;
  }
  handleClick(event) {
    console.log(event);
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
    return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
        'med-tooltip': true,
        [`med-tooltip--${placement}`]: placement !== undefined,
        [`med-tooltip--${position}`]: position !== undefined,
        'med-tooltip--collapsed': collapsed
      }) }, h("div", { class: "med-tooltip__input-container", onClick: (event) => { this.toggle(event); } }, h("slot", { name: "input" })), h("div", { class: "med-tooltip__content" }, titulo && h("div", { class: "med-tooltip__header" }, h("med-type", { class: "med-tooltip__titulo" }, titulo), h("ion-button", { class: "med-tooltip__button-fechar", "ds-color": !dsColor ? 'neutral-3' : dsColor, "ds-name": "tertiary", "ds-size": "xxs", onClick: (event) => { this.toggle(event); } }, h("ion-icon", { slot: "icon-only", class: "med-icon", name: "med-fechar" }))), content && h("med-type", { class: "med-tooltip__text" }, content), h("slot", { name: "content" }), (btnLeft || btnRight) && h("div", { class: "med-tooltip__footer" }, btnLeft && h("ion-button", { class: "med-tooltip__button", "ds-color": !dsColor ? 'neutral-3' : dsColor, "ds-size": "xxs", "ds-name": "tertiary", onClick: this.onBtnLeftClick }, " ", btnLeft, " "), btnRight && h("ion-button", { class: "med-tooltip__button", "ds-color": !dsColor ? 'neutral-3' : dsColor, "ds-size": "xxs", "ds-name": "tertiary", onClick: this.onBtnRightClick }, " ", btnRight, " ")))));
  }
};
MedTooltip.style = medTooltipCss;

export { MedTooltip as med_tooltip };
