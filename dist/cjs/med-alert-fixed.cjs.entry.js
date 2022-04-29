'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medTheme = require('./med-theme-42add9fc.js');

const medAlertFixedCss = ":host{--padding:12px}:host{padding:var(--padding);background:var(--background);display:block}:host .med-icon{margin-right:16px;width:16px;height:16px}.med-alert-fixed__container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.med-alert-fixed__text{--font-size:12px;--line-height:16px;--font-weight:400}:host(.med-alert-fixed--offline){--background:hsl(var(--med-color-fb-warning))}:host(.med-alert-fixed--offline) .med-icon{stroke:hsl(var(--med-color-neutral-10))}:host(.med-alert-fixed--atualizar){--background:hsl(var(--med-color-provas-4))}:host(.med-alert-fixed--atualizar) .med-icon{stroke:hsl(var(--med-color-neutral-10))}:host(.med-color){--background:hsl(var(--med-color-3))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback))}";

const MedAlertFixed = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, { class: medTheme.generateMedColor(dsColor, {
        'med-alert-fixed': true,
        [`med-alert-fixed--${dsName}`]: dsName !== undefined,
      }) }, (dsName === 'offline') &&
      index.h("div", { class: "med-alert-fixed__container" }, index.h("ion-icon", { class: "med-icon", name: "med-offline" }), index.h("med-type", { class: "med-alert-fixed__text" }, labelOffline)), (dsName === 'atualizar') &&
      index.h("div", { class: "med-alert-fixed__container" }, index.h("ion-icon", { class: "med-icon", name: "med-alerta" }), index.h("med-type", { class: "med-alert-fixed__text" }, labelAtualizar)), index.h("slot", null)));
  }
};
MedAlertFixed.style = medAlertFixedCss;

exports.med_alert_fixed = MedAlertFixed;
