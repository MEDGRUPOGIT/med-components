'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medTheme = require('./med-theme-42add9fc.js');

const medVideoListItemCss = ".sc-med-video-list-item-h{--border-color:hsl(var(--med-color-brand-3));--icon-stroke-color:hsl(var(--med-color-brand-3))}.med-video-list-item.sc-med-video-list-item-h{padding:8px 16px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;border-bottom:solid 1px var(--border-color)}.med-video-list-item.sc-med-video-list-item-h:last-child{border-bottom:0}.med-video-list-item.sc-med-video-list-item-h .med-video-list-item__avancar.sc-med-video-list-item{margin-left:auto}.med-video-list-item.sc-med-video-list-item-h .med-video-list-item__text-container.sc-med-video-list-item{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.med-video-list-item.sc-med-video-list-item-h .med-video-list-item__icon.sc-med-video-list-item{stroke:var(--icon-stroke-color)}.med-video-list-item.sc-med-video-list-item-h .med-video-list-item__title.sc-med-video-list-item{margin:0 8px}.med-color.sc-med-video-list-item-h{--border-color:hsl(var(--med-color-3));--icon-stroke-color:hsl(var(--med-color-3));color:hsl(var(--med-color-contrast-fixed))}.med-color-neutral.sc-med-video-list-item-h{--border-color:hsl(var(--med-color-neutral));--icon-stroke-color:hsl(var(--med-color-neutral));color:hsl(var(--med-color-neutral-contrast))}.med-color-feedback.sc-med-video-list-item-h{--border-color:hsl(var(--med-color-feedback));--icon-stroke-color:hsl(var(--med-color-feedback));color:hsl(var(--med-color-feedback-contrast))}";

const MedVideoListItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const { dsColor } = this;
    return (index.h(index.Host, { class: medTheme.generateMedColor(dsColor, {
        'med-video-list-item': true,
      }) }, index.h("div", { class: "med-video-list-item__text-container" }, index.h("ion-icon", { class: "med-icon med-video-list-item__icon", name: "med-play" }), index.h("med-type", { class: "med-video-list-item__title", token: "p12x", "ds-color": "neutral-9" }, "Taquiarritmias"), index.h("med-type", { token: "p12x", "ds-color": dsColor }, "00:42:25")), index.h("ion-button", { class: "med-video-list-item__avancar", "ds-color": dsColor, "ds-name": "tertiary" }, index.h("ion-icon", { class: "med-icon", slot: "icon-only", name: "med-direita" }))));
  }
};
MedVideoListItem.style = medVideoListItemCss;

exports.med_video_list_item = MedVideoListItem;
