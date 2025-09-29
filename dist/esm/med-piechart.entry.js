/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, i as h, H as Host } from './index-336c66d9.js';
import { g as generateMedColor } from './color-1d14c71a.js';

const medPiechartCss = ":host{--stroke:hsl(var(--med-color-brand-4));--stroke-background:hsl(var(--med-color-neutral-2));--front-background:transparent;--back-background:hsl(var(--med-color-neutral-3));--text-color-front:hsl(var(--med-color-neutral-10));--text-color-back:hsl(var(--med-color-neutral-10));--downloaded-background:hsl(var(--med-color-brand-2));--size:46px}.med-piechart__container{height:var(--size);width:var(--size);position:relative;-webkit-perspective:80px;perspective:80px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.med-piechart__side{height:var(--size);width:var(--size);position:absolute;top:0;left:0;-webkit-backface-visibility:hidden;backface-visibility:hidden;border-radius:50%;-webkit-transition:all 0.6s ease;transition:all 0.6s ease}.med-piechart__side--front{background-color:var(--front-background)}.med-piechart__side--back{background-color:var(--back-background);-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.med-piechart__text{--font-size:12px;--line-height:12px;--font-weight:600;--color:var(--text-color-front);text-transform:uppercase;text-align:center;position:absolute;top:calc(50% + 2px);left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);max-width:36px}.med-piechart__circle{stroke-dashoffset:0;stroke:var(--stroke-background);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none;-webkit-transition:stroke-dasharray 1s ease-in-out;transition:stroke-dasharray 1s ease-in-out;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:18px 18px;transform-origin:18px 18px;width:auto;height:100%;-ms-flex-negative:0;flex-shrink:0}.med-piechart__circle--porcentagem{stroke:var(--stroke);stroke-dasharray:var(--porcentagem) 100;-webkit-animation:start 0.6s;animation:start 0.6s}.med-piechart__button{position:absolute;bottom:-5px;left:-8px;-webkit-transform:scale(0);transform:scale(0);-webkit-transition:all 0.7s ease;transition:all 0.7s ease}:host(.med-piechart--sm){--size:56px}:host(.med-piechart--sm) .med-piechart__container{-webkit-perspective:80px;perspective:80px}:host(.med-piechart--sm) .med-piechart__text{--font-size:14px;--line-height:16px;--font-weight:600}:host(.med-color){--stroke:hsl(var(--med-color-4))}:host(.med-color-neutral){--stroke:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--stroke:hsl(var(--med-color-feedback))}:host(.med-piechart--download) .med-piechart__side--front{-webkit-transform:rotateY(-180deg);transform:rotateY(-180deg)}:host(.med-piechart--download) .med-piechart__side--back{-webkit-transform:rotateY(0);transform:rotateY(0)}:host(.med-piechart--download) .med-piechart__button{-webkit-transform:scale(1);transform:scale(1)}:host(.med-piechart--downloaded){--back-background:var(--downloaded-background)}:host(.med-piechart--downloaded) .med-piechart__text--back{--color:var(--text-color-back)}:host(.med-color.med-piechart--downloaded){--back-background:hsl(var(--med-color-2))}:host(.med-color-neutral.med-piechart--downloaded){--back-background:hsl(var(--med-color-neutral))}:host(.med-color-feedback.med-piechart--downloaded){--back-background:hsl(var(--med-color-feedback))}@-webkit-keyframes start{from{stroke-dasharray:0 100}to{stroke-dasharray:var(--porcentagem) 100}}@keyframes start{from{stroke-dasharray:0 100}to{stroke-dasharray:var(--porcentagem) 100}}";

const MedPiechart = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dsColor = undefined;
    this.dsSize = undefined;
    this.download = false;
    this.downloaded = false;
    this.label = undefined;
    this.value = 0;
    this.downloadProgress = 0;
    this.index = undefined;
    this.identification = undefined;
    this.hideDownload = false;
    this.disabled = false;
  }
  /**
   * todo
   */
  async toggle(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.download = !this.download;
  }
  /**
   * todo
   */
  Isdownloaded(event) {
    var _a;
    this.downloaded = (_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.downloaded;
  }
  render() {
    const { dsColor, dsSize, download, downloaded, label, value, downloadProgress, identification, index, hideDownload, disabled } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-piechart': true,
        'med-piechart--download': download,
        'med-piechart--downloaded': downloaded,
        [`med-piechart--${dsSize}`]: dsSize !== undefined,
      }) }, h("div", { class: "med-piechart__container" }, h("div", { class: "med-piechart__side med-piechart__side--front" }, h("med-type", { class: "med-piechart__text" }, label), h("svg", { viewBox: "0 0 36 36", style: { '--porcentagem': `${value}` } }, h("circle", { class: "med-piechart__circle", cx: "18", cy: "18", r: "16" }), h("circle", { cx: "18", cy: "18", r: "16", class: "med-piechart__circle med-piechart__circle--porcentagem" }))), h("div", { class: "med-piechart__side med-piechart__side--back" }, h("med-type", { class: "med-piechart__text med-piechart__text--back" }, label), !hideDownload && h("med-download-button", { class: "med-piechart__button", "ds-color": dsColor, index: index, value: downloadProgress, downloaded: downloaded, disabled: disabled, identification: identification })))));
  }
};
MedPiechart.style = medPiechartCss;

export { MedPiechart as med_piechart };
