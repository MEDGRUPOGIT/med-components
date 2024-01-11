/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const color = require('./color-c29da9e4.js');

const medDownloadButtonCss = ":host{--color-1:hsl(var(--med-color-neutral-10));--color-2:hsl(var(--med-color-neutral-10));--padding:5px}:host{cursor:pointer;padding:var(--padding);display:inline-block}.med-download-button__icon{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:15px;height:15px;border-radius:50%;background:transparent;-webkit-transition:background-color 0.7s, -webkit-transform 0.7s;transition:background-color 0.7s, -webkit-transform 0.7s;transition:transform 0.7s, background-color 0.7s;transition:transform 0.7s, background-color 0.7s, -webkit-transform 0.7s}.med-download-button__icon::after,.med-download-button__icon::before{content:\"\";position:absolute;-webkit-transition:background-color 0.7s, -webkit-transform 0.7s;transition:background-color 0.7s, -webkit-transform 0.7s;transition:transform 0.7s, background-color 0.7s;transition:transform 0.7s, background-color 0.7s, -webkit-transform 0.7s}.med-download-button__icon::after{width:1px;height:7px;background:var(--color-1)}.med-download-button__icon::before{width:4px;height:4px;border-bottom:1px solid var(--color-1);border-right:1px solid var(--color-1);-webkit-transform:rotate(45deg);transform:rotate(45deg)}.med-download-button__svg{width:auto;height:100%;-ms-flex-negative:0;flex-shrink:0}.med-download-button__circle{stroke-dashoffset:0;stroke:var(--color-2);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none;-webkit-transition:stroke-dasharray 1s ease-in-out;transition:stroke-dasharray 1s ease-in-out;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:18px 18px;transform-origin:18px 18px}.med-download-button__circle--value{stroke:var(--color-1);stroke-dasharray:100 100}:host(.med-color.med-download-button--downloading){--color-1:hsl(var(--med-color-4));--color-2:hsl(var(--med-color-2))}:host(.med-color.med-download-button--downloaded){--color-1:hsl(var(--med-color-4));--color-2:hsl(var(--med-color-2))}:host(.med-color-neutral.med-download-button--downloading){--color-1:hsl(var(--med-color-neutral))}:host(.med-color-neutral.med-download-button--downloaded){--color-1:hsl(var(--med-color-neutral))}:host(.med-color-feedback.med-download-button--downloading){--color-1:hsl(var(--med-color-feedback))}:host(.med-color-feedback.med-download-button--downloaded){--color-1:hsl(var(--med-color-feedback))}:host(.med-download-button--downloading){--color-1:hsl(var(--med-color-brand-4));--color-2:hsl(var(--med-color-neutral-2))}:host(.med-download-button--downloading) .med-download-button__icon::after{background:transparent}:host(.med-download-button--downloading) .med-download-button__icon::before{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:center;transform-origin:center;width:5px;height:5px;border:0;background:var(--color-1);border-bottom:0;border-right:0}:host(.med-download-button--downloading) .med-download-button__circle--value{stroke-dasharray:var(--value) 100}:host(.med-download-button--downloaded){--color-1:hsl(var(--med-color-brand-4));--color-2:hsl(var(--med-color-neutral-2))}:host(.med-download-button--downloaded) .med-download-button__icon{background:var(--color-1)}:host(.med-download-button--downloaded) .med-download-button__icon::after{background:var(--color-2)}:host(.med-download-button--downloaded) .med-download-button__icon::before{border-bottom:1px solid var(--color-2);border-right:1px solid var(--color-2)}:host(.med-download-button--downloaded) .med-download-button__icon__circle{-webkit-transform-origin:revert;transform-origin:revert}:host(.med-download-button--lg) .med-download-button__icon{position:relative;width:24px;height:24px}:host(.med-download-button--lg) .med-download-button__icon::after{width:2px;height:9px}:host(.med-download-button--lg) .med-download-button__icon::before{width:6px;height:6px;left:8px;border-bottom:2px solid var(--color-1);border-right:2px solid var(--color-1)}:host(.med-download-button--downloading.med-download-button--lg) .med-download-button__icon::before{width:6px;height:6px}:host(.med-download-button--downloaded.med-download-button--lg) .med-download-button__icon::before{border-bottom:2px solid var(--color-2);border-right:2px solid var(--color-2)}";

const MedDownloadButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.medDownloadRequested = index.createEvent(this, "medDownloadRequested", 7);
    this.dsColor = undefined;
    this.value = 0;
    this.downloading = false;
    this.downloaded = false;
    this.index = undefined;
    this.identification = undefined;
    this.disabled = false;
    this.dsSize = undefined;
  }
  render() {
    const { dsColor, value, downloading, downloaded, dsSize } = this;
    return (index.h(index.Host, { class: color.generateMedColor(dsColor, {
        'med-download-button': true,
        'med-download-button--downloading': downloading && !downloaded,
        'med-download-button--downloaded': downloaded,
        [`med-download-button--${dsSize}`]: dsSize !== undefined,
      }) }, index.h("div", { class: "med-download-button__icon" }, index.h("svg", { viewBox: "0 0 36 36", class: "med-download-button__svg" }, index.h("circle", { cx: "18", cy: "18", r: "16", class: "med-download-button__circle" }), index.h("circle", { cx: "18", cy: "18", r: "16", class: "med-download-button__circle med-download-button__circle--value", style: { '--value': `${value}` } })))));
  }
};
MedDownloadButton.style = medDownloadButtonCss;

exports.med_download_button = MedDownloadButton;
