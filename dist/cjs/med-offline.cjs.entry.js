'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');

const medOfflineCss = ":host{--z-index:1000;display:block;width:100vw;height:100vh;position:fixed;z-index:var(--z-index)}:host .wrapper{background:hsl(var(--med-color-neutral-1), 0.8);position:fixed;width:100%;height:100%;top:0px}:host .wrapper__content{pointer-events:none;width:100%;height:calc(100% - 50px);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column}:host .icon{width:48px;height:48px;margin-bottom:24px}:host .icon-path{stroke:hsl(var(--med-color-neutral-10));stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none}:host .title{font-size:16px;font-weight:700;line-height:100%;color:hsl(var(--med-color-neutral-10));margin-bottom:8px}:host .text{font-size:16px;font-weight:400;line-height:100%;color:hsl(var(--med-color-neutral-10))}";

const MedOffline = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.medClick = index.createEvent(this, "medClick", 7);
  }
  onClick() {
    this.medClick.emit();
  }
  render() {
    return (index.h(index.Host, { "from-stencil": true }, index.h("div", { class: "wrapper" }, index.h("med-header", null, index.h("med-navbar", { "ds-name": "transparent", slot: "navbar" }, index.h("ion-button", { "ds-name": "tertiary", "ds-size": "xs", slot: "left", onClick: () => this.onClick() }, index.h("ion-icon", { class: "med-icon", slot: "icon-only", name: "med-esquerda" })))), index.h("div", { class: "wrapper__content" }, index.h("ion-icon", { class: "med-icon med-icon--lg icon-path", name: "med-offline2" }), index.h("p", { class: "title" }, "Voc\u00EA est\u00E1 offline"), index.h("p", { class: "text" }, "Conecte-se \u00E0 internet para visualizar esse conte\u00FAdo")))));
  }
};
MedOffline.style = medOfflineCss;

exports.med_offline = MedOffline;
