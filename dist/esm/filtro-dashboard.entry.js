import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { m as modalController } from './overlays-0b1670e0.js';
import './ionic-global-10d9ffcf.js';
import './hardware-back-button-3fda9f12.js';
import './helpers-6b411283.js';

const filtroDashboardCss = ":host{display:block}:host .dashboard-filtro__base{-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;--background:hsl(var(--med-color-neutral-2))}:host .dashboard-filtro__heading{--color:hsl(var(--med-color-neutral-10))}:host .dashboard-filtro__icon{stroke:hsl(var(--med-color-neutral-8))}.dashboard-filtro-modal{border-radius:8px 8px 0 0}";

const FiltroDashboard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  async openModal() {
    const modal = await modalController.create({
      component: 'filtro-modal',
      cssClass: 'dashboard-filtro-modal',
      backdropDismiss: false
    });
    await modal.present();
  }
  render() {
    return (h(Host, { class: "dashboard-filtro" }, h("med-base", { class: "dashboard-filtro__base", "spacing-v": "s16", "spacing-h": "s16", radius: "s08" }, h("div", { slot: "start" }, h("med-heading", { "ds-size": "xs", "ds-color": "neutral-10", class: "dashboard-filtro__heading" }, h("h3", null, "Personalize seu dashboard com modal"))), h("div", { slot: "end" }, h("ion-button", { "ds-name": "tertiary", onClick: () => this.openModal() }, h("ion-icon", { slot: "icon-only", class: "med-icon dashboard-filtro__icon", name: "med-filtro" }))))));
  }
};
FiltroDashboard.style = filtroDashboardCss;

export { FiltroDashboard as filtro_dashboard };
