/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const color = require('./color-7939264c.js');

const medAvatarCss = ":host{--background:hsl(var(--med-color-brand-3));--color:hsl(var(--med-color-contrast-fixed))}:host{font-size:var(--font-size);min-width:var(--size);height:var(--size);color:var(--color);background:var(--background);font-weight:var(--font-weight);line-height:var(--line-height);border-radius:500px;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;overflow:hidden}.med-avatar__image{width:var(--size);height:auto;display:block}:host(.med-color){--background:hsl(var(--med-color-3));--color:hsl(var(--med-color-contrast-fixed))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral));--color:hsl(var(--med-color-neutral-contrast))}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback));--color:hsl(var(--med-color-feedback-contrast))}:host(.med-avatar--xxs){--size:24px;--font-weight:600;--font-size:16px;--line-height:16px}:host(.med-avatar--xs){--size:32px;--font-weight:600;--font-size:16px;--line-height:16px}:host(.med-avatar--sm){--size:40px;--font-weight:600;--font-size:24px;--line-height:24px}:host(.med-avatar--base){--size:48px;--font-weight:600;--font-size:24px;--line-height:24px}:host(.med-avatar--md){--size:56px;--font-weight:600;--font-size:32px;--line-height:32px}:host(.med-avatar--lg){--size:64px;--font-weight:600;--font-size:32px;--line-height:32px}:host(.med-avatar--xl){--size:72px;--font-weight:600;--font-size:48px;--line-height:48px}:host(.med-avatar--xxl){--size:80px;--font-weight:600;--font-size:48px;--line-height:48px}";

const MedAvatar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dsColor = undefined;
    this.dsSize = undefined;
    this.image = undefined;
    this.letter = undefined;
  }
  render() {
    const { dsColor, dsSize, image, letter } = this;
    return (index.h(index.Host, { class: color.generateMedColor(dsColor, {
        'med-avatar': true,
        [`med-avatar--${dsSize}`]: dsSize !== undefined,
      }) }, letter && !image && index.h("span", { class: "med-avatar__letter" }, letter), image && index.h("img", { class: "med-avatar__image", src: image })));
  }
};
MedAvatar.style = medAvatarCss;

exports.med_avatar = MedAvatar;
