import { r as registerInstance, e as createEvent, h, H as Host } from './index-70672e81.js';
import { R as RateStatus } from './med-rate-like.enum-eb597a6d.js';
import { g as generateMedColor } from './med-theme-33df6a63.js';

const medRateLikeCss = ":host{--spacing:var(--med-spacing-inline-base);--color:hsl(var(--med-color-neutral-10));--color-like:hsl(var(--med-color-fb-success));--color-dislike:hsl(var(--med-color-fb-warning));--color-hover:hsl(var(--med-color-neutral-7));display:block}:host .button{background:transparent;border:none;cursor:pointer;padding:0;outline:none}:host .button-spacing{padding-right:var(--spacing)}:host .rate{font-size:24px;stroke:var(--color);-webkit-transition:color 300ms;transition:color 300ms}:host .button--disabled{pointer-events:none}:host .button--like .rate{stroke:var(--color-like)}:host .button--dislike .rate{stroke:var(--color-dislike)}@media (any-hover: hover){:host .rate:hover{stroke:var(--color-hover)}}";

const MedRateLike = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.medChange = createEvent(this, "medChange", 7);
    this.onClick = (status) => {
      if (this.status) {
        return;
      }
      this.status = status;
      this.medChange.emit(this.status);
    };
  }
  render() {
    return (h(Host, { "from-stencil": true, class: generateMedColor(null, {
        'med-rate-like': true,
      }) }, h("button", { class: `button button-spacing
          ${this.status === RateStatus.LIKE ? 'button--like' : ''}
          ${this.status ? 'button--disabled' : ''}`, onClick: () => this.onClick(RateStatus.LIKE) }, h("ion-icon", { name: "med-positivo", class: "med-icon rate" })), h("button", { class: `button
          ${this.status === RateStatus.DISLIKE ? 'button--dislike' : ''}
          ${this.status ? 'button--disabled' : ''}`, onClick: () => this.onClick(RateStatus.DISLIKE) }, h("ion-icon", { name: "med-negativo", class: "med-icon rate" }))));
  }
};
MedRateLike.style = medRateLikeCss;

export { MedRateLike as med_rate_like };
