'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medRateLike_enum = require('./med-rate-like.enum-e8f4b5f3.js');
const medTheme = require('./med-theme-42add9fc.js');

const medRateLikeCss = ":host{--spacing:var(--med-spacing-inline-base);--color:hsl(var(--med-color-neutral-10));--color-like:hsl(var(--med-color-fb-success));--color-dislike:hsl(var(--med-color-fb-warning));--color-hover:hsl(var(--med-color-neutral-7));display:block}:host .button{background:transparent;border:none;cursor:pointer;padding:0;outline:none}:host .button-spacing{padding-right:var(--spacing)}:host .rate{font-size:24px;stroke:var(--color);-webkit-transition:color 300ms;transition:color 300ms}:host .button--disabled{pointer-events:none}:host .button--like .rate{stroke:var(--color-like)}:host .button--dislike .rate{stroke:var(--color-dislike)}@media (any-hover: hover){:host .rate:hover{stroke:var(--color-hover)}}";

const MedRateLike = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.medChange = index.createEvent(this, "medChange", 7);
    this.onClick = (status) => {
      if (this.status) {
        return;
      }
      this.status = status;
      this.medChange.emit(this.status);
    };
  }
  render() {
    return (index.h(index.Host, { "from-stencil": true, class: medTheme.generateMedColor(null, {
        'med-rate-like': true,
      }) }, index.h("button", { class: `button button-spacing
          ${this.status === medRateLike_enum.RateStatus.LIKE ? 'button--like' : ''}
          ${this.status ? 'button--disabled' : ''}`, onClick: () => this.onClick(medRateLike_enum.RateStatus.LIKE) }, index.h("ion-icon", { name: "med-positivo", class: "med-icon rate" })), index.h("button", { class: `button
          ${this.status === medRateLike_enum.RateStatus.DISLIKE ? 'button--dislike' : ''}
          ${this.status ? 'button--disabled' : ''}`, onClick: () => this.onClick(medRateLike_enum.RateStatus.DISLIKE) }, index.h("ion-icon", { name: "med-negativo", class: "med-icon rate" }))));
  }
};
MedRateLike.style = medRateLikeCss;

exports.med_rate_like = MedRateLike;
