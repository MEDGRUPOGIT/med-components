import { r as registerInstance, e as createEvent, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-83c28ab9.js';

const medDownloadButtonCss = ":host{--color-1:hsl(var(--med-color-brand-4));--color-2:hsl(var(--med-color-neutral-2));--padding:5px}:host{cursor:pointer;padding:var(--padding);display:inline-block}.med-download-button__icon{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:15px;height:15px;border-radius:50%;background:transparent;-webkit-transition:background-color 0.7s, -webkit-transform 0.7s;transition:background-color 0.7s, -webkit-transform 0.7s;transition:transform 0.7s, background-color 0.7s;transition:transform 0.7s, background-color 0.7s, -webkit-transform 0.7s}.med-download-button__icon::after,.med-download-button__icon::before{content:\"\";position:absolute;-webkit-transition:background-color 0.7s, -webkit-transform 0.7s;transition:background-color 0.7s, -webkit-transform 0.7s;transition:transform 0.7s, background-color 0.7s;transition:transform 0.7s, background-color 0.7s, -webkit-transform 0.7s}.med-download-button__icon::after{width:1px;height:7px;background:var(--color-1)}.med-download-button__icon::before{width:4px;height:4px;border-bottom:1px solid var(--color-1);border-right:1px solid var(--color-1);-webkit-transform:rotate(45deg);transform:rotate(45deg)}.med-download-button__svg{width:auto;height:100%;-ms-flex-negative:0;flex-shrink:0}.med-download-button__circle{stroke-dashoffset:0;stroke:var(--color-2);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none;-webkit-transition:stroke-dasharray 1s ease-in-out;transition:stroke-dasharray 1s ease-in-out;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:18px 18px;transform-origin:18px 18px}.med-download-button__circle--value{stroke:var(--color-1);stroke-dasharray:100 100}:host(.med-color){--color-1:hsl(var(--med-color-4));--color-2:hsl(var(--med-color-2))}:host(.med-color-neutral){--color-1:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--color-1:hsl(var(--med-color-feedback))}:host(.med-download-button--downloading) .med-download-button__icon::after{background:transparent}:host(.med-download-button--downloading) .med-download-button__icon::before{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:center;transform-origin:center;width:5px;height:5px;border:0;background:var(--color-1);border-bottom:0;border-right:0}:host(.med-download-button--downloading) .med-download-button__circle--value{stroke-dasharray:var(--value) 100}:host(.med-download-button--downloaded) .med-download-button__icon{background:var(--color-1)}:host(.med-download-button--downloaded) .med-download-button__icon::after{background:var(--color-2)}:host(.med-download-button--downloaded) .med-download-button__icon::before{border-bottom:1px solid var(--color-2);border-right:1px solid var(--color-2)}:host(.med-download-button--downloaded) .med-download-button__icon__circle{-webkit-transform-origin:revert;transform-origin:revert}";

const MedDownloadButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.medDownloaded = createEvent(this, "medDownloaded", 7);
    this.medCancelar = createEvent(this, "medCancelar", 7);
    this.medDownloading = createEvent(this, "medDownloading", 7);
    /**
      * Define o valor da progress bar do componente.
      */
    this.value = 0;
    /**
      * Define o estado inicial do componente.
      */
    this.initial = true;
    /**
      * Define o estado do componente durante o download.
      */
    this.downloading = false;
    /**
      * Define o estado do componente quando download tiver concluído.
      */
    this.downloaded = false;
    /**
     * Define o estado habilitado ou desabilitado do componente.
     */
    this.disabled = false;
  }
  downloadedChanged() {
    this.medDownloaded.emit({
      downloaded: this.downloaded,
      id: this.identification,
      index: this.index
    });
  }
  downloadingChange() {
    this.medDownloading.emit({
      downloading: this.downloading,
      id: this.identification,
      index: this.index
    });
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
    }
  }
  toggle(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    if (this.downloaded) {
      this.medDownloaded.emit({
        downloaded: this.downloaded,
        id: this.identification,
        index: this.index
      });
    }
    else if (this.initial) {
      this.initial = false;
      if (this.value !== 100) {
        this.downloaded = false;
        this.downloading = true;
      }
      else if (this.value === 100) {
        this.downloaded = true;
        this.downloading = false;
        this.medDownloaded.emit({
          downloaded: this.downloaded,
          id: this.identification,
          index: this.index
        });
      }
    }
    else {
      this.medCancelar.emit({
        id: this.identification,
        index: this.index
      });
      this.initial = true;
      this.downloaded = false;
      this.downloading = false;
      this.value = 0;
    }
  }
  render() {
    const { dsColor, value, initial, downloading, downloaded } = this;
    return (h(Host, { onClick: (event) => { this.toggle(event); }, class: generateMedColor(dsColor, {
        'med-download-button': true,
        'med-download-button--downloading': downloading && !initial,
        'med-download-button--downloaded': downloaded
      }) }, h("div", { class: "med-download-button__icon" }, h("svg", { viewBox: "0 0 36 36", class: "med-download-button__svg" }, h("circle", { cx: "18", cy: "18", r: "16", class: "med-download-button__circle" }), h("circle", { cx: "18", cy: "18", r: "16", class: "med-download-button__circle med-download-button__circle--value", style: { '--value': `${value}` } })))));
  }
  static get watchers() { return {
    "downloaded": ["downloadedChanged"],
    "downloading": ["downloadingChange"],
    "value": ["valueChanged"]
  }; }
};
MedDownloadButton.style = medDownloadButtonCss;

export { MedDownloadButton as med_download_button };
