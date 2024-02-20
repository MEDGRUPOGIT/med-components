/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const color = require('./color-c29da9e4.js');

const medVideoThumbnailCss = ".sc-med-video-thumbnail-h{--width:112px;--height:64px}.sc-med-video-thumbnail-h{display:block;width:var(--width);height:var(--height);position:relative;overflow:hidden;border-radius:4px}.med-video-thumbnail__img.sc-med-video-thumbnail{width:100%;height:auto;display:block}.med-video-thumbnail__icon.sc-med-video-thumbnail{stroke:#fff;font-size:20px;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.med-video-thumbnail__progress.sc-med-video-thumbnail{position:absolute;bottom:0;left:0}";

const MedVideoThumbnail = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dsColor = undefined;
    this.url = undefined;
    this.value = 0;
  }
  render() {
    const { dsColor, url, value } = this;
    return (index.h(index.Host, { class: color.generateMedColor(dsColor, {
        'med-video-thumbnail': true
      }) }, index.h("img", { class: "med-video-thumbnail__img", src: url }), index.h("ion-icon", { class: "med-icon med-icon--lg med-video-thumbnail__icon", name: "med-play" }), index.h("ion-progress-bar", { "ds-color": dsColor, class: "med-video-thumbnail__progress", "ds-name": "minimalist", value: value })));
  }
};
MedVideoThumbnail.style = medVideoThumbnailCss;

exports.med_video_thumbnail = MedVideoThumbnail;
