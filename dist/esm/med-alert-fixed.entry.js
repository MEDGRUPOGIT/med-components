import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-83c28ab9.js';

const medAlertFixedCss = ":host{--padding:12px}:host{padding:var(--padding);background:var(--background);display:block}:host .med-icon{margin-right:16px;width:16px;height:16px}.med-alert-fixed__container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.med-alert-fixed__text{--font-size:12px;--line-height:16px;--font-weight:400}:host(.med-alert-fixed--offline){--background:hsl(var(--med-color-fb-warning))}:host(.med-alert-fixed--offline) .med-icon{stroke:hsl(var(--med-color-neutral-10))}:host(.med-alert-fixed--atualizar){--background:hsl(var(--med-color-provas-4))}:host(.med-alert-fixed--atualizar) .med-icon{stroke:hsl(var(--med-color-neutral-10))}:host(.med-color){--background:hsl(var(--med-color-3))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback))}";

const MedAlertFixed = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
      * Define o texto no estado active.
      */
    this.labelOffline = 'Você está offline. Conecte-se para acessar o conteúdo.';
    /**
     * Define o texto no estado active.
     */
    this.labelAtualizar = 'Versão desatualizada';
  }
  render() {
    const { dsColor, dsName, labelOffline, labelAtualizar } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-alert-fixed': true,
        [`med-alert-fixed--${dsName}`]: dsName !== undefined,
      }) }, (dsName === 'offline') &&
      h("div", { class: "med-alert-fixed__container" }, h("ion-icon", { class: "med-icon", name: "med-offline" }), h("med-type", { class: "med-alert-fixed__text" }, labelOffline)), (dsName === 'atualizar') &&
      h("div", { class: "med-alert-fixed__container" }, h("ion-icon", { class: "med-icon", name: "med-alerta" }), h("med-type", { class: "med-alert-fixed__text" }, labelAtualizar)), h("slot", null)));
  }
};
MedAlertFixed.style = medAlertFixedCss;

export { MedAlertFixed as med_alert_fixed };
