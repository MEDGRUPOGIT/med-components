import { r as registerInstance, e as createEvent, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-83c28ab9.js';

const medDownloadButtonCss = ":host{display:block}:host(.med-download-button){cursor:pointer;padding:5px}:host(.med-download-button) .download-icon{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:15px;height:15px;border-radius:50%;background:hsl(var(--med-color-neutral-1));-webkit-transition:background-color 0.7s, -webkit-transform 0.7s;transition:background-color 0.7s, -webkit-transform 0.7s;transition:transform 0.7s, background-color 0.7s;transition:transform 0.7s, background-color 0.7s, -webkit-transform 0.7s}:host(.med-download-button) .download-icon::after,:host(.med-download-button) .download-icon::before{content:\"\";position:absolute;-webkit-transition:background-color 0.7s, -webkit-transform 0.7s;transition:background-color 0.7s, -webkit-transform 0.7s;transition:transform 0.7s, background-color 0.7s;transition:transform 0.7s, background-color 0.7s, -webkit-transform 0.7s}:host(.med-download-button) .download-icon::after{width:1px;height:7px;background:hsl(var(--med-color-aula-4))}:host(.med-download-button) .download-icon::before{width:4px;height:4px;border-bottom:1px solid hsl(var(--med-color-aula-4));border-right:1px solid hsl(var(--med-color-aula-4));-webkit-transform:rotate(45deg);transform:rotate(45deg)}:host(.med-download-button) .download-icon__svg{width:auto;height:100%;-ms-flex-negative:0;flex-shrink:0}:host(.med-download-button) .download-icon__circle{stroke-dashoffset:0;stroke:hsl(var(--med-color-neutral-2));stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none;-webkit-transition:stroke-dasharray 1s ease-in-out;transition:stroke-dasharray 1s ease-in-out;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:18px 18px;transform-origin:18px 18px}:host(.med-download-button) .download-icon__circle--value{stroke:hsl(var(--med-color-aula-4));stroke-dasharray:100 100}:host(.med-download-button--downloading) .download-icon::after{background:transparent}:host(.med-download-button--downloading) .download-icon::before{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:center;transform-origin:center;width:5px;height:5px;border:0;background:hsl(var(--med-color-aula-4));border-bottom:0;border-right:0}:host(.med-download-button--downloading) .download-icon__circle--value{stroke-dasharray:var(--value) 100}:host(.med-download-button--downloaded) .download-icon{background:hsl(var(--med-color-aula-4))}:host(.med-download-button--downloaded) .download-icon::after{background:hsl(var(--med-color-neutral-2))}:host(.med-download-button--downloaded) .download-icon::before{border-bottom:1px solid hsl(var(--med-color-neutral-2));border-right:1px solid hsl(var(--med-color-neutral-2))}:host(.med-download-button--downloaded) .download-icon__circle{-webkit-transform-origin:revert;transform-origin:revert}";

const MedDownloadButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.medDownloaded = createEvent(this, "medDownloaded", 7);
    this.medCancelar = createEvent(this, "medCancelar", 7);
    /**
      * Define o valor da progress bar do componente.
      */
    this.value = 0;
    /**
      * TODO.
      */
    this.downloaded = false;
    /**
      * TODO.
      */
    this.downloading = false;
    /**
      * TODO.
      */
    this.initial = true;
  }
  downloadedChanged() {
    this.medDownloaded.emit();
  }
  valueChanged() {
    if (this.value !== 0 && this.value !== 100) {
      this.initial = false;
      this.downloaded = false;
      this.downloading = true;
    }
    if (this.value === 0) {
      this.initial = true;
      this.downloaded = false;
      this.downloading = false;
    }
    if (this.value === 100) {
      this.downloaded = true;
      this.downloading = false;
      this.medDownloaded.emit();
    }
  }
  toggle(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    if (this.initial) {
      this.initial = false;
      if (this.value !== 100) {
        this.downloaded = false;
        this.downloading = true;
      }
      else if (this.value === 100) {
        this.downloaded = true;
        this.downloading = false;
        this.medDownloaded.emit();
      }
    }
    else {
      this.medCancelar.emit();
    }
  }
  render() {
    const { dsColor, value, initial, downloading, downloaded } = this;
    return (h(Host, { onClick: (event) => { this.toggle(event); }, class: generateMedColor(dsColor, {
        'med-download-button': true,
        'med-download-button--downloading': downloading && !initial,
        'med-download-button--downloaded': downloaded && !initial
      }) }, h("div", { class: "download-icon" }, h("svg", { viewBox: "0 0 36 36", class: "download-icon__svg" }, h("circle", { cx: "18", cy: "18", r: "16", class: "download-icon__circle" }), h("circle", { cx: "18", cy: "18", r: "16", class: "download-icon__circle download-icon__circle--value", style: { '--value': `${value}` } })))));
  }
  static get watchers() { return {
    "downloaded": ["downloadedChanged"],
    "value": ["valueChanged"]
  }; }
};
MedDownloadButton.style = medDownloadButtonCss;

const medPiechartCss = ":host{--stroke:hsl(var(--med-color-brand-4));--stroke-background:hsl(var(--med-color-neutral-2));--front-background:transparent;--back-background:hsl(var(--med-color-neutral-2));--text-color:color(\"neutral\", \"10\")}.med-piechart__container{height:46px;width:46px;position:relative;-webkit-perspective:80px;perspective:80px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.med-piechart__side{height:46px;width:46px;position:absolute;top:0;left:0;-webkit-backface-visibility:hidden;backface-visibility:hidden;border-radius:50%;-webkit-transition:all 0.6s ease;transition:all 0.6s ease}.med-piechart__side--front{background-color:var(--front-background)}.med-piechart__side--back{background-color:var(--back-background);-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.med-piechart__text{text-transform:uppercase;text-align:center;color:var(--text-color);position:absolute;top:calc(50% + 2px);left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);max-width:36px}.med-piechart__circle{width:auto;height:100%;-ms-flex-negative:0;flex-shrink:0}.med-piechart__circle{stroke-dashoffset:0;stroke:var(--stroke-background);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none;-webkit-transition:stroke-dasharray 1s ease-in-out;transition:stroke-dasharray 1s ease-in-out;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:18px 18px;transform-origin:18px 18px}.med-piechart__circle--porcentagem{stroke:var(--stroke);stroke-dasharray:var(--porcentagem) 100;-webkit-animation:start 0.6s;animation:start 0.6s}:host(.med-piechart--active) .med-piechart__side--front{-webkit-transform:rotateY(-180deg);transform:rotateY(-180deg)}:host(.med-piechart--active) .med-piechart__side--back{-webkit-transform:rotateY(0);transform:rotateY(0)}:host(.med-color){--stroke:hsl(var(--med-color-4))}:host(.med-color-neutral){--stroke:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--stroke:hsl(var(--med-color-feedback))}@-webkit-keyframes start{from{stroke-dasharray:0 100}to{stroke-dasharray:var(--porcentagem) 100}}@keyframes start{from{stroke-dasharray:0 100}to{stroke-dasharray:var(--porcentagem) 100}}";

const MedPiechart = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
      * Define o estado do componente.
      */
    this.active = false;
    /**
      * Define o value do componente.
      */
    this.value = 0;
  }
  async toggle(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.active = !this.active;
  }
  render() {
    const { dsColor, active, text, value } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-piechart': true,
        'med-piechart--active': active,
      }) }, h("div", { class: "med-piechart__container" }, h("div", { class: "med-piechart__side med-piechart__side--front" }, h("med-type", { class: "med-piechart__text", token: "p12b" }, text), h("svg", { viewBox: "0 0 36 36", style: { '--porcentagem': `${value}` } }, h("circle", { class: "med-piechart__circle", cx: "18", cy: "18", r: "16" }), h("circle", { cx: "18", cy: "18", r: "16", class: "med-piechart__circle med-piechart__circle--porcentagem" }))), h("div", { class: "med-piechart__side med-piechart__side--back" }, h("med-type", { class: "med-piechart__text", token: "p12b" }, text)))));
  }
};
MedPiechart.style = medPiechartCss;

export { MedDownloadButton as med_download_button, MedPiechart as med_piechart };
