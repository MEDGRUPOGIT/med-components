'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const overlays = require('./overlays-738b020e.js');
require('./ionic-global-c609be80.js');
require('./hardware-back-button-e370df1e.js');
require('./helpers-ab0db03b.js');

const filtroDashboardCss = ":host{display:block}:host .dashboard-filtro__base{-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;--background:hsl(var(--med-color-neutral-2))}:host .dashboard-filtro__heading{--color:hsl(var(--med-color-neutral-10))}:host .dashboard-filtro__icon{stroke:hsl(var(--med-color-neutral-8))}.dashboard-filtro-modal{border-radius:8px 8px 0 0}";

const FiltroDashboard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  async openModal() {
    const modal = await overlays.modalController.create({
      component: 'filtro-modal',
      cssClass: 'dashboard-filtro-modal',
      backdropDismiss: false
    });
    await modal.present();
  }
  render() {
    return (index.h(index.Host, { class: "dashboard-filtro" }, index.h("med-base", { class: "dashboard-filtro__base", "spacing-v": "s16", "spacing-h": "s16", radius: "s08" }, index.h("div", { slot: "start" }, index.h("med-heading", { "ds-size": "xs", "ds-color": "neutral-10", class: "dashboard-filtro__heading" }, index.h("h3", null, "Personalize seu dashboard com modal"))), index.h("div", { slot: "end" }, index.h("ion-button", { "ds-name": "tertiary", onClick: () => this.openModal() }, index.h("ion-icon", { slot: "icon-only", class: "med-icon dashboard-filtro__icon", name: "med-filtro" }))))));
  }
};
FiltroDashboard.style = filtroDashboardCss;

exports.filtro_dashboard = FiltroDashboard;
