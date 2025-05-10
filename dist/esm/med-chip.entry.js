/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, f as createEvent, i as h, H as Host } from './index-336c66d9.js';
import { g as generateMedColor } from './color-1d14c71a.js';

const medChipCss = ".sc-med-chip-h{--background:transparent;--text-color:hsl(var(--med-color-brand-3));--stroke-color:hsl(var(--med-color-neutral-1));--border-color:hsl(var(--med-color-brand-3));--ripple-color:transparent;--background-image:hsl(var(--med-color-brand-3));--padding:8px 12px;--height:28px}.sc-med-chip-h{padding:var(--padding);background:var(--background);border-radius:50px;border-color:var(--border-color);border-width:1px;border-style:solid;height:var(--height);-webkit-transition:300ms all ease;transition:300ms all ease;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;cursor:pointer}.med-chip__img-warp.sc-med-chip{width:20px;height:20px;border-radius:50%;background:var(--background-image);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.med-chip__icon.sc-med-chip{font-size:16px;stroke:var(--stroke-color)}.med-chip__label.sc-med-chip{--font-size:12px;--font-weight:600;--line-height:12px;--color:var(--text-color)}.med-chip--icon-left.sc-med-chip-h{--padding:4px 12px 4px 4px}.med-chip--icon-left.sc-med-chip-h .med-chip__img-warp.sc-med-chip{margin-right:8px}.med-chip--icon-right.sc-med-chip-h{--padding:4px 4px 4px 12px}.med-chip--icon-right.sc-med-chip-h .med-chip__img-warp.sc-med-chip{margin-left:8px}.med-chip--secondary.sc-med-chip-h{--stroke-color:hsl(var(--med-color-neutral-2))}@media (any-hover: hover){.sc-med-chip-h:hover{--background:hsl(var(--med-color-brand-3));--background-image:hsl(var(--med-color-contrast-fixed));--text-color:hsl(var(--med-color-contrast-fixed));--stroke-color:hsl(var(--med-color-brand-3))}}.med-chip--active.sc-med-chip-h{--background:hsl(var(--med-color-brand-3));--background-image:hsl(var(--med-color-contrast-fixed));--text-color:hsl(var(--med-color-contrast-fixed));--stroke-color:hsl(var(--med-color-brand-3))}.med-chip--disabled.sc-med-chip-h{opacity:0.5;pointer-events:none}.med-chip--md.sc-med-chip-h{--height:32px}.med-chip--md.sc-med-chip-h .med-chip__label.sc-med-chip{--font-size:16px;--line-height:16px}.med-chip--md.sc-med-chip-h .med-chip__img-warp.sc-med-chip{width:24px;height:24px}.med-chip--md.sc-med-chip-h .med-chip__icon.sc-med-chip{font-size:20px}.med-color.sc-med-chip-h{--border-color:hsl(var(--med-color-3));--text-color:hsl(var(--med-color-3));--background-image:hsl(var(--med-color-3));--stroke-color:hsl(var(--med-color-neutral-1))}@media (any-hover: hover){.med-color.sc-med-chip-h:hover{--background:hsl(var(--med-color-3));--border-color:hsl(var(--med-color-3));--text-color:hsl(var(--med-color-contrast-fixed));--background-image:hsl(var(--med-color-contrast-fixed));--stroke-color:hsl(var(--med-color-3))}}.med-color.med-chip--active.sc-med-chip-h{--background:hsl(var(--med-color-3));--border-color:hsl(var(--med-color-3));--text-color:hsl(var(--med-color-contrast-fixed));--background-image:hsl(var(--med-color-contrast-fixed));--stroke-color:hsl(var(--med-color-3))}.med-color-neutral.sc-med-chip-h{--border-color:hsl(var(--med-color-neutral));--text-color:hsl(var(--med-color-neutral));--background-image:hsl(var(--med-color-neutral));--stroke-color:hsl(var(--med-color-neutral-1))}@media (any-hover: hover){.med-color-neutral.sc-med-chip-h:hover{--background:hsl(var(--med-color-neutral));--border-color:hsl(var(--med-color-neutral));--text-color:hsl(var(--med-color-neutral-contrast));--background-image:hsl(var(--med-color-neutral-contrast));--stroke-color:hsl(var(--med-color-neutral))}}.med-color-neutral.med-chip--active.sc-med-chip-h{--background:hsl(var(--med-color-neutral));--border-color:hsl(var(--med-color-neutral));--text-color:hsl(var(--med-color-neutral-contrast));--background-image:hsl(var(--med-color-neutral-contrast));--stroke-color:hsl(var(--med-color-neutral))}.med-color-feedback.sc-med-chip-h{--border-color:hsl(var(--med-color-feedback));--text-color:hsl(var(--med-color-feedback));--background-image:hsl(var(--med-color-feedback));--stroke-color:hsl(var(--med-color-neutral-1))}@media (any-hover: hover){.med-color-feedback.sc-med-chip-h:hover{--background:hsl(var(--med-color-feedback));--border-color:hsl(var(--med-color-feedback));--text-color:hsl(var(--med-color-feedback-contrast));--background-image:hsl(var(--med-color-feedback-contrast));--stroke-color:hsl(var(--med-color-feedback))}}.med-color-feedback.med-chip--active.sc-med-chip-h{--background:hsl(var(--med-color-feedback));--border-color:hsl(var(--med-color-feedback));--text-color:hsl(var(--med-color-feedback-contrast));--background-image:hsl(var(--med-color-feedback-contrast));--stroke-color:hsl(var(--med-color-feedback))}";

const MedChip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.medFocus = createEvent(this, "medFocus", 7);
    this.medBlur = createEvent(this, "medBlur", 7);
    this.medClick = createEvent(this, "medClick", 7);
    this.onFocus = () => {
      this.medFocus.emit();
    };
    this.onBlur = () => {
      this.medBlur.emit();
    };
    this.onClick = () => {
      this.medClick.emit();
    };
    this.dsColor = undefined;
    this.dsName = undefined;
    this.dsSize = undefined;
    this.label = undefined;
    this.disabled = false;
    this.active = false;
    this.iconLeft = undefined;
    this.iconRight = undefined;
  }
  render() {
    const { dsColor, dsName, dsSize, disabled, label, active, iconLeft, iconRight } = this;
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null, class: generateMedColor(dsColor, {
        'med-chip': true,
        'med-chip--active': active,
        'med-chip--disabled': disabled,
        [`med-chip--${dsName}`]: dsName !== undefined,
        [`med-chip--${dsSize}`]: dsSize !== undefined,
        [`med-chip--icon-left`]: iconLeft !== undefined,
        [`med-chip--icon-right`]: iconRight !== undefined,
      }), onFocus: this.onFocus, onBlur: this.onBlur, onClick: this.onClick }, iconLeft !== undefined && h("div", { class: "med-chip__img-warp" }, h("ion-icon", { class: "med-icon med-chip__icon", name: iconLeft })), h("med-type", { class: "med-chip__label" }, label), iconRight && h("div", { class: "med-chip__img-warp" }, h("ion-icon", { class: "med-icon med-chip__icon", name: iconRight }))));
  }
};
MedChip.style = medChipCss;

export { MedChip as med_chip };
