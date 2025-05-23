/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const color = require('./color-7939264c.js');

const medCartaoRespostaItemCss = ":host{--border-width:1px;--border-style:solid;--border-color:hsl(var(--med-color-neutral-3));--color:hsl(var(--med-color-neutral-6));--spacing:4px;--background:transparent;--font-size:20px;--font-weight:400;--line-height:100%;--icon-opacity:0.5;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);padding:0;font-size:var(--font-size);font-weight:var(--font-weight);line-height:var(--line-height);width:10vw;min-height:80px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}@media (max-width: 1199.98px){:host{width:10vw;height:10vw}}@media (max-width: 991.98px){:host{width:13vw;height:13vw}}@media (max-width: 767.98px){:host{width:14vw;height:14vw}}@media (max-width: 575.98px){:host{width:17vw;height:17vw}}@media (max-width: 379.98px){:host{width:19vw;height:19vw}}:host .container{position:relative;width:100%;height:100%}:host .item-button{color:var(--color);width:100%;height:100%;border:none;background:transparent;outline:none;font:inherit;cursor:pointer}slot[name]{height:16px;width:16px;position:absolute;display:-ms-flexbox;display:flex;opacity:var(--icon-opacity)}:host slot[name=icon-left-top]{top:0;left:0}:host slot[name=icon-right-top]{top:0;right:0}:host slot[name=icon-left-bottom]{bottom:0;left:0}:host slot[name=icon-right-bottom]{bottom:0;right:0}@media (any-hover: hover){:host(:hover){--background:hsl(var(--med-color-neutral-10), 0.16);--border-color:hsl(var(--med-color-neutral-10))}}:host(.med-cartao-resposta-item--anulada) .item-button{text-decoration:line-through}:host(.med-cartao-resposta-item--ativa){--background:linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(50, 210, 243, 0.3) 100%);--font-weight:700;-webkit-box-shadow:0 3px 3px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.2);box-shadow:0 3px 3px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.2);border-bottom:1px solid #32d2f3}:host(.med-cartao-resposta-item--impressa){--background:repeating-linear-gradient(-45deg, #222, #222 2px, #333 3px, #333 4px) !important}:host(.med-color){--color:hsl(var(--med-color-3))}:host(.med-color-neutral){--color:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--color:hsl(var(--med-color-feedback))}";

const MedCartaoRespostaItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dsColor = undefined;
    this.anulada = false;
    this.impressa = false;
    this.ativa = false;
  }
  render() {
    const { dsColor, anulada, impressa, ativa } = this;
    return (index.h(index.Host, { "from-stencil": true, class: color.generateMedColor(dsColor, {
        'med-cartao-resposta-item': true,
        'med-cartao-resposta-item--anulada': anulada,
        'med-cartao-resposta-item--impressa': impressa,
        'med-cartao-resposta-item--ativa': ativa,
      }) }, index.h("div", { class: "container" }, index.h("button", { class: "item-button" }, index.h("slot", null)))));
  }
};
MedCartaoRespostaItem.style = medCartaoRespostaItemCss;

exports.med_cartao_resposta_item = MedCartaoRespostaItem;
