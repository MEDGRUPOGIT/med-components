/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, h, H as Host } from './index-27668d5b.js';
import { g as generateMedColor } from './color-f9402468.js';

const medCaptionCss = ":host{--font-size:16px;--font-weight:400;--line-height:100%;--color:hsl(var(--med-color-neutral-10))}:host{display:block}::slotted(*){font-size:var(--font-size) !important;font-weight:var(--font-weight) !important;line-height:var(--line-height) !important;color:var(--color) !important;margin:0 !important;padding:0 !important}:host(.med-caption--xxs){--font-size:10px}:host(.med-caption--xs){--font-size:12px}:host(.med-caption--sm){--font-size:14px}:host(.med-caption--lg){--font-size:20px}:host(.med-caption--xl){--font-size:24px}:host(.med-color){--color:hsl(var(--med-color-3))}:host(.med-color-neutral){--color:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--color:hsl(var(--med-color-feedback))}";

const MedCaption = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dsColor = undefined;
        this.dsSize = undefined;
    }
    render() {
        const { dsColor, dsSize } = this;
        return (h(Host, { "from-stencil": true, class: generateMedColor(dsColor, {
                'med-caption': true,
                [`med-caption--${dsSize}`]: dsSize !== undefined,
            }) }, h("slot", null)));
    }
};
MedCaption.style = medCaptionCss;

export { MedCaption as med_caption };
