'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const ionicGlobal = require('./ionic-global-c609be80.js');
const medTheme = require('./med-theme-42add9fc.js');

const avatarIosCss = ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:48px;height:48px}";

const avatarMdCss = ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:64px;height:64px}";

const Avatar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: ionicGlobal.getIonMode(this) }, index.h("slot", null)));
  }
};
Avatar.style = {
  ios: avatarIosCss,
  md: avatarMdCss
};

const iosBadgeMdCss = ":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);font-size:13px;font-weight:bold;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{--padding-top:3px;--padding-end:4px;--padding-bottom:4px;--padding-start:4px;border-radius:4px}:host{--background:hsl(var(--med-color-brand-3));--color:hsl(var(--med-color-contrast-fixed));--padding-bottom:0;--padding-end:8px;--padding-start:8px;--padding-top:0;--border-color:hsl(var(--med-color-brand-3))}:host(.med-badge){font-size:10x;line-height:12px;font-weight:600;border-radius:4px;border-color:var(--border-color);border-width:1px;font-family:inherit;min-width:auto;border-style:solid;height:24px;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}:host(.med-badge--sm){--padding-end:8px;--padding-start:8px;font-size:10x;line-height:12px;height:24px}:host(.med-badge--md){--padding-end:8px;--padding-start:8px;font-size:14px;line-height:16px;height:32px}:host(.med-color){--border-color:hsl(var(--med-color-3));background:hsl(var(--med-color-3));color:hsl(var(--med-color-contrast-fixed))}:host(.med-color-neutral){--border-color:hsl(var(--med-color-neutral));background:hsl(var(--med-color-neutral));color:hsl(var(--med-color-neutral-contrast))}:host(.med-color-feedback){--border-color:hsl(var(--med-color-feedback));background:hsl(var(--med-color-feedback));color:hsl(var(--med-color-feedback-contrast))}:host(.med-badge--outline){border-style:solid;background:transparent;color:hsl(var(--med-color-brand-3))}:host(.med-color.med-badge--outline){--border-color:hsl(var(--med-color-3));background:transparent;color:hsl(var(--med-color-3))}:host(.med-color-neutral.med-badge--outline){--border-color:hsl(var(--med-color-neutral));background:transparent;color:hsl(var(--med-color-neutral))}:host(.med-color-feedback.med-badge--outline){--border-color:hsl(var(--med-color-feedback));background:transparent;color:hsl(var(--med-color-feedback))}";

const badgeMdCss = ":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);font-size:13px;font-weight:bold;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{--padding-top:3px;--padding-end:4px;--padding-bottom:4px;--padding-start:4px;border-radius:4px}:host{--background:hsl(var(--med-color-brand-3));--color:hsl(var(--med-color-contrast-fixed));--padding-bottom:0;--padding-end:8px;--padding-start:8px;--padding-top:0;--border-color:hsl(var(--med-color-brand-3))}:host(.med-badge){font-size:10x;line-height:12px;font-weight:600;border-radius:4px;border-color:var(--border-color);border-width:1px;font-family:inherit;min-width:auto;border-style:solid;height:24px;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}:host(.med-badge--sm){--padding-end:8px;--padding-start:8px;font-size:10x;line-height:12px;height:24px}:host(.med-badge--md){--padding-end:8px;--padding-start:8px;font-size:14px;line-height:16px;height:32px}:host(.med-color){--border-color:hsl(var(--med-color-3));background:hsl(var(--med-color-3));color:hsl(var(--med-color-contrast-fixed))}:host(.med-color-neutral){--border-color:hsl(var(--med-color-neutral));background:hsl(var(--med-color-neutral));color:hsl(var(--med-color-neutral-contrast))}:host(.med-color-feedback){--border-color:hsl(var(--med-color-feedback));background:hsl(var(--med-color-feedback));color:hsl(var(--med-color-feedback-contrast))}:host(.med-badge--outline){border-style:solid;background:transparent;color:hsl(var(--med-color-brand-3))}:host(.med-color.med-badge--outline){--border-color:hsl(var(--med-color-3));background:transparent;color:hsl(var(--med-color-3))}:host(.med-color-neutral.med-badge--outline){--border-color:hsl(var(--med-color-neutral));background:transparent;color:hsl(var(--med-color-neutral))}:host(.med-color-feedback.med-badge--outline){--border-color:hsl(var(--med-color-feedback));background:transparent;color:hsl(var(--med-color-feedback))}";

const Badge = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const { dsColor, fill, dsSize } = this;
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { class: medTheme.generateMedColor(dsColor, {
        [mode]: true,
        'med-badge': true,
        [`med-badge--${fill}`]: fill !== undefined,
        [`med-badge--${dsSize}`]: dsSize !== undefined,
      }) }, index.h("slot", null)));
  }
};
Badge.style = {
  ios: iosBadgeMdCss,
  md: badgeMdCss
};

const thumbnailCss = ":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}";

const Thumbnail = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: ionicGlobal.getIonMode(this) }, index.h("slot", null)));
  }
};
Thumbnail.style = thumbnailCss;

exports.ion_avatar = Avatar;
exports.ion_badge = Badge;
exports.ion_thumbnail = Thumbnail;
