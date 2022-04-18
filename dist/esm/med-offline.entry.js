import { r as registerInstance, e as createEvent, h, H as Host } from './index-70672e81.js';

const medOfflineCss = ":host{--z-index:1000;display:block;width:100vw;height:100vh;position:fixed;z-index:var(--z-index)}:host .wrapper{background:hsl(var(--med-color-neutral-1), 0.8);position:fixed;width:100%;height:100%;top:0px}:host .wrapper__content{pointer-events:none;width:100%;height:calc(100% - 50px);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column}:host .icon{width:48px;height:48px;margin-bottom:24px}:host .icon-path{stroke:hsl(var(--med-color-neutral-10));stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none}:host .title{font-size:16px;font-weight:700;line-height:100%;color:hsl(var(--med-color-neutral-10));margin-bottom:8px}:host .text{font-size:16px;font-weight:400;line-height:100%;color:hsl(var(--med-color-neutral-10))}";

const MedOffline = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.medClick = createEvent(this, "medClick", 7);
  }
  onClick() {
    this.medClick.emit();
  }
  render() {
    return (h(Host, { "from-stencil": true }, h("div", { class: "wrapper" }, h("med-header", null, h("med-navbar", { "ds-name": "transparent", slot: "navbar" }, h("ion-button", { "ds-name": "tertiary", "ds-size": "xs", slot: "left", onClick: () => this.onClick() }, h("ion-icon", { class: "med-icon", slot: "icon-only", name: "med-esquerda" })))), h("div", { class: "wrapper__content" }, h("ion-icon", { class: "med-icon med-icon--lg icon-path", name: "med-offline2" }), h("p", { class: "title" }, "Voc\u00EA est\u00E1 offline"), h("p", { class: "text" }, "Conecte-se \u00E0 internet para visualizar esse conte\u00FAdo")))));
  }
};
MedOffline.style = medOfflineCss;

export { MedOffline as med_offline };
