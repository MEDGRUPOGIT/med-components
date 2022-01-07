'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const medTheme = require('./med-theme-1bca89cc.js');

const medAvatarCss = ":host{--color:hsl(var(--med-color-contrast-fixed));--background:hsl(var(--med-color-brand-3));--size-xxs:24px;--size-xs:32px;--size-sm:40px;--size-base:48px;--size-md:56px;--size-lg:64px;--size-xl:72px;--size-xxl:80px;--font-size-xxs:var(--med-font-size-xs);--font-size-xs:var(--med-font-size-xs);--font-size-sm:var(--med-font-size-md);--font-size-base:var(--med-font-size-md);--font-size-md:var(--med-font-size-lg);--font-size-lg:var(--med-font-size-lg);--font-size-xl:var(--med-font-size-xl);--font-size-xxl:var(--med-font-size-xl)}:host(.med-avatar){font-size:var(--font-size-base);min-width:var(--size-base);height:var(--size-base);color:var(--color);background:var(--background);font-weight:var(--med-font-weight-semibold);line-height:var(--med-line-height-compressed);border-radius:var(--med-border-radius-full);display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host(.med-color){--background:hsl(var(--med-color-3));--color:hsl(var(--med-color-contrast-fixed))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral));--color:hsl(var(--med-color-neutral-contrast))}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback));--color:hsl(var(--med-color-feedback-contrast))}:host(.med-avatar--xxs){font-size:var(--font-size-xxs);min-width:var(--size-xxs);height:var(--size-xxs)}:host(.med-avatar--xs){font-size:var(--font-size-xs);min-width:var(--size-xs);height:var(--size-xs)}:host(.med-avatar--sm){font-size:var(--font-size-sm);min-width:var(--size-sm);height:var(--size-sm)}:host(.med-avatar--md){font-size:var(--font-size-md);min-width:var(--size-md);height:var(--size-md)}:host(.med-avatar--lg){font-size:var(--font-size-lg);min-width:var(--size-lg);height:var(--size-lg)}:host(.med-avatar--xl){font-size:var(--font-size-xl);min-width:var(--size-xl);height:var(--size-xl)}:host(.med-avatar--xxl){font-size:var(--font-size-xxl);min-width:var(--size-xxl);height:var(--size-xxl)}";

const MedAvatar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const { dsColor, dsSize, image, letter } = this;
    return (index.h(index.Host, { "from-stencil": true, class: medTheme.generateMedColor(dsColor, {
        'med-avatar': true,
        [`med-avatar--${dsSize}`]: dsSize !== undefined,
      }) }, (letter && !image) && index.h("span", { class: "med-avatar__letter" }, letter), (image) && index.h("img", { class: "med-avatar__img", src: image })));
  }
};
MedAvatar.style = medAvatarCss;

exports.med_avatar = MedAvatar;
