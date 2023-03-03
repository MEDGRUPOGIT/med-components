'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const color = require('./color-4ca1bfd7.js');
const rateLike_enum = require('./rate-like.enum-8de5ff17.js');

const medRateLikeCss = ":host{--spacing:16px;--color:hsl(var(--med-color-neutral-10));--color-like:hsl(var(--med-color-fb-success));--color-dislike:hsl(var(--med-color-fb-warning));display:block}:host .button{background:transparent;border:none;cursor:pointer;padding:0;outline:none}:host .button-spacing{padding-right:var(--spacing)}:host .rate{font-size:24px;stroke:var(--color);-webkit-transition:color 300ms;transition:color 300ms}:host .button--disabled{pointer-events:none;--color:hsl(var(--med-color-neutral-4))}:host .button--like .rate{stroke:var(--color-like)}:host .button--dislike .rate{stroke:var(--color-dislike)}";

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
    return (index.h(index.Host, { "from-stencil": true, class: color.generateMedColor(null, {
        'med-rate-like': true,
      }) }, index.h("button", { class: `button button-spacing
          ${this.status === rateLike_enum.RateStatus.LIKE ? 'button--like' : ''}
          ${this.status ? 'button--disabled' : ''}`, onClick: () => this.onClick(rateLike_enum.RateStatus.LIKE) }, index.h("ion-icon", { name: "med-positivo", class: "med-icon rate" })), index.h("button", { class: `button
          ${this.status === rateLike_enum.RateStatus.DISLIKE ? 'button--dislike' : ''}
          ${this.status ? 'button--disabled' : ''}`, onClick: () => this.onClick(rateLike_enum.RateStatus.DISLIKE) }, index.h("ion-icon", { name: "med-negativo", class: "med-icon rate" }))));
  }
};
MedRateLike.style = medRateLikeCss;

exports.med_rate_like = MedRateLike;
