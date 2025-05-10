/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, f as createEvent, i as h, H as Host } from './index-336c66d9.js';
import { g as generateMedColor } from './color-1d14c71a.js';
import { R as RateStatus } from './rate-like.enum-25c2a0be.js';

const medRateLikeCss = ":host{--spacing:16px;--color:hsl(var(--med-color-neutral-10));--color-like:hsl(var(--med-color-fb-success));--color-dislike:hsl(var(--med-color-fb-warning));display:block}:host .button{background:transparent;border:none;cursor:pointer;padding:0;outline:none}:host .button-spacing{padding-right:var(--spacing)}:host .rate{font-size:24px;stroke:var(--color);-webkit-transition:color 300ms;transition:color 300ms}:host .button--disabled{pointer-events:none;--color:hsl(var(--med-color-neutral-4))}:host .button--like .rate{stroke:var(--color-like)}:host .button--dislike .rate{stroke:var(--color-dislike)}";

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
    this.status = undefined;
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
