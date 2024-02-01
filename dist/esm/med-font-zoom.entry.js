/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, h, H as Host } from './index-27668d5b.js';
import { h as MedFontSize } from './type.enum-9506b4e9.js';
import './plusminus.enum-b366e045.js';
import './rate-like.enum-b8140ae9.js';

const medFontZoomCss = ".sc-med-font-zoom-h{display:block;opacity:0;-webkit-transition:opacity 0.1s;transition:opacity 0.1s}.sc-med-font-zoom-h .med-icon.sc-med-font-zoom{stroke:hsl(var(--med-color-neutral-8))}";

const MedFontZoom = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.min = 1;
        this.max = 5;
        this.step = 1;
        this.fontSizeToValue = (fontSize) => {
            switch (fontSize) {
                case MedFontSize.XXXS:
                    return 1;
                case MedFontSize.XXS:
                    return 2;
                case MedFontSize.XS:
                    return 3;
                case MedFontSize.SM:
                    return 4;
                case MedFontSize.MD:
                    return 5;
            }
        };
        this.onRangeChange = (rangeValue) => {
            if (this.emitter) {
                switch (rangeValue) {
                    case 1:
                        this.value = MedFontSize.XXXS;
                        break;
                    case 2:
                        this.value = MedFontSize.XXS;
                        break;
                    case 3:
                        this.value = MedFontSize.XS;
                        break;
                    case 4:
                        this.value = MedFontSize.SM;
                        break;
                    case 5:
                        this.value = MedFontSize.MD;
                        break;
                    default:
                        this.value = MedFontSize.XS;
                }
                this.emitter.emit(this.value);
            }
        };
        this.emitter = undefined;
        this.value = MedFontSize.XS;
    }
    // fix para conflito com popover API do chrome
    // pode remover depois de migração pro ionic 7
    fixPopover() {
        const popover = document.querySelector('med-font-zoom');
        if (!popover)
            return;
        if (popover === null || popover === void 0 ? void 0 : popover.hasAttribute('popover')) {
            popover.removeAttribute('popover');
        }
        popover.style.opacity = '1';
    }
    render() {
        return (h(Host, { "from-stencil": true }, h("ion-range", { onIonChange: (ev) => this.onRangeChange(ev.detail.value), min: this.min, max: this.max, step: this.step, value: this.fontSizeToValue(this.value) }, h("ion-icon", { class: "med-icon", slot: "start", name: "med-fontemenor" }), h("ion-icon", { class: "med-icon", slot: "end", name: "med-fontemaior" }))));
    }
};
MedFontZoom.style = medFontZoomCss;

export { MedFontZoom as med_font_zoom };
