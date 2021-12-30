import { Component, Host, h } from '@stencil/core';
import { modalController } from '../../../../../utils/overlays';
export class FiltroDashboard {
  async openModal() {
    const modal = await modalController.create({
      component: 'filtro-modal',
      cssClass: 'dashboard-filtro-modal',
      backdropDismiss: false
    });
    await modal.present();
  }
  render() {
    return (h(Host, { class: "dashboard-filtro" },
      h("med-base", { class: "dashboard-filtro__base", "spacing-v": "s16", "spacing-h": "s16", radius: "s08" },
        h("div", { slot: "start" },
          h("med-heading", { "ds-size": "xs", "ds-color": "neutral-10", class: "dashboard-filtro__heading" },
            h("h3", null, "Personalize seu dashboard com modal"))),
        h("div", { slot: "end" },
          h("ion-button", { "ds-name": "tertiary", onClick: () => this.openModal() },
            h("ion-icon", { slot: "icon-only", class: "med-icon dashboard-filtro__icon", name: "med-filtro" }))))));
  }
  static get is() { return "filtro-dashboard"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["filtro-dashboard.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["filtro-dashboard.css"]
  }; }
}
