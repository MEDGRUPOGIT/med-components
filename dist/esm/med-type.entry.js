import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { g as generateMedColor } from './med-theme-33df6a63.js';

const medTypeCss = ":host{--font-size:16px;--font-weight:400;--line-height:16px;--color:hsl(var(--med-color-neutral-10))}:host{display:block;font-size:var(--font-size) !important;font-weight:var(--font-weight) !important;line-height:var(--line-height) !important;color:var(--color) !important;margin:0;padding:0}:host(.med-color){--color:hsl(var(--med-color-3))}:host(.med-color-neutral){--color:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--color:hsl(var(--med-color-feedback))}:host(.med-type--h48){--font-size:48px;--font-weight:600;--line-height:48px}:host(.med-type--h32){--font-size:32px;--font-weight:600;--line-height:32px}:host(.med-type--h24){--font-size:24px;--font-weight:600;--line-height:24px}:host(.med-type--h24x){--font-size:24px;--font-weight:600;--line-height:32px}:host(.med-type--h20){--font-size:20px;--font-weight:600;--line-height:20px}:host(.med-type--h20x){--font-size:20px;--font-weight:600;--line-height:24px}:host(.med-type--p16){--font-size:16px;--font-weight:400;--line-height:16px}:host(.med-type--p16b){--font-size:16px;--font-weight:600;--line-height:16px}:host(.med-type--p16x){--font-size:16px;--font-weight:400;--line-height:24px}:host(.med-type--p16xb){--font-size:16px;--font-weight:600;--line-height:24px}:host(.med-type--p14){--font-size:14px;--font-weight:400;--line-height:16px}:host(.med-type--p14b){--font-size:14px;--font-weight:600;--line-height:16px}:host(.med-type--p14x){--font-size:14px;--font-weight:400;--line-height:20px}:host(.med-type--p14xb){--font-size:14px;--font-weight:600;--line-height:20px}:host(.med-type--p12){--font-size:12px;--font-weight:400;--line-height:12px}:host(.med-type--p12b){--font-size:12px;--font-weight:600;--line-height:12px}:host(.med-type--p12x){--font-size:12px;--font-weight:400;--line-height:16px}:host(.med-type--p12xb){--font-size:12px;--font-weight:600;--line-height:16px}:host(.med-type--p10){--font-size:10px;--font-weight:400;--line-height:12px}:host(.med-type--p10b){--font-size:10px;--font-weight:600;--line-height:12px}";

const MedType = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
      * Define a tag HTML do componente.
      */
    this.tag = 'span';
  }
  render() {
    const { dsColor, token, tag } = this;
    const TagType = tag === undefined ? 'span' : tag;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-type': true,
        [`med-type--${token}`]: token !== undefined,
      }) }, h(TagType, null, h("slot", null))));
  }
};
MedType.style = medTypeCss;

export { MedType as med_type };
