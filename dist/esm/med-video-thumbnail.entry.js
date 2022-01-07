import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-83c28ab9.js';

const medVideoThumbnailCss = ":host(.med-video-thumbnail){display:block;width:112px;height:64px;position:relative;overflow:hidden;border-radius:4px}:host(.med-video-thumbnail) .med-video-thumbnail__img{width:100%;height:auto;display:block}:host(.med-video-thumbnail) .med-video-thumbnail__icon{stroke:#fff;font-size:20px;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}:host(.med-video-thumbnail) .med-video-thumbnail__progress{position:absolute;bottom:0;left:0}";

const MedVideoThumbnail = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
      * Define o valor da progress bar do componente.
      */
    this.value = 0;
  }
  render() {
    const { url, value, dsColor } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-video-thumbnail': true,
      }) }, h("img", { class: "med-video-thumbnail__img", src: url }), h("ion-icon", { class: "med-icon med-icon--lg med-video-thumbnail__icon", name: "med-play" }), h("ion-progress-bar", { "ds-color": dsColor, class: "med-video-thumbnail__progress", "ds-name": "minimalist", value: value })));
  }
};
MedVideoThumbnail.style = medVideoThumbnailCss;

export { MedVideoThumbnail as med_video_thumbnail };
