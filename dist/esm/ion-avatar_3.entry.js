import { r as registerInstance, h, H as Host } from './index-70672e81.js';
import { b as getIonMode } from './ionic-global-10d9ffcf.js';
import { g as generateMedColor } from './med-theme-33df6a63.js';

const avatarIosCss = ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:48px;height:48px}";

const avatarMdCss = ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:64px;height:64px}";

const Avatar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: getIonMode(this) }, h("slot", null)));
  }
};
Avatar.style = {
  ios: avatarIosCss,
  md: avatarMdCss
};

const iosBadgeMdCss = ":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);font-size:13px;font-weight:bold;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{--padding-top:3px;--padding-end:4px;--padding-bottom:4px;--padding-start:4px;border-radius:4px}:host{--background:hsl(var(--med-color-brand-3));--color:hsl(var(--med-color-contrast-fixed));--padding-bottom:0;--padding-end:var(--med-spacing-inline-base);--padding-start:var(--med-spacing-inline-base);--padding-top:0;--border-color:hsl(var(--med-color-brand-3))}:host(.med-badge){font-size:var(--med-font-size-xxs);font-weight:var(--med-font-weight-medium);line-height:var(--med-line-height-compressed);border-radius:var(--med-border-radius-pill);border-color:var(--border-color);border-width:var(--med-border-width-hairline);font-family:inherit;min-width:auto;border-style:solid;height:24px;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}:host(.med-badge--xxs){--padding-start:var(--med-spacing-inline-xxxs);--padding-end:var(--med-spacing-inline-xxxs);font-size:var(--med-font-size-nano);font-weight:var(--font-weight-light);height:16px}:host(.med-badge--xs){--padding-start:var(--med-spacing-inline-xxxs);--padding-end:var(--med-spacing-inline-xxxs);font-size:var(--med-font-size-nano);font-weight:var(--med-font-weight-medium);height:16px}:host(.med-badge--sm){--padding-start:var(--med-spacing-inline-base);--padding-end:var(--med-spacing-inline-base);font-size:var(--med-font-size-nano);font-weight:var(--med-font-weight-medium);height:24px}:host(.med-badge--md){--padding-start:var(--med-spacing-inline-base);--padding-end:var(--med-spacing-inline-base);font-size:var(--med-font-size-xxs);font-weight:var(--med-font-weight-medium);height:32px}:host(.med-badge--lg){--padding-start:var(--med-spacing-inline-xxs);--padding-end:var(--med-spacing-inline-xxs);font-size:var(--med-font-size-xs);font-weight:var(--med-font-weight-medium);height:40px}:host(.med-color){--border-color:hsl(var(--med-color-3));background:hsl(var(--med-color-3));color:hsl(var(--med-color-contrast-fixed))}:host(.med-color-neutral){--border-color:hsl(var(--med-color-neutral));background:hsl(var(--med-color-neutral));color:hsl(var(--med-color-neutral-contrast))}:host(.med-color-feedback){--border-color:hsl(var(--med-color-feedback));background:hsl(var(--med-color-feedback));color:hsl(var(--med-color-feedback-contrast))}:host(.med-badge--secondary){border-style:solid;background:transparent;color:hsl(var(--med-color-brand-3))}:host(.med-color.med-badge--secondary){--border-color:hsl(var(--med-color-3));background:transparent;color:hsl(var(--med-color-3))}:host(.med-color-neutral.med-badge--secondary){--border-color:hsl(var(--med-color-neutral));background:transparent;color:hsl(var(--med-color-neutral))}:host(.med-color-feedback.med-badge--secondary){--border-color:hsl(var(--med-color-feedback));background:transparent;color:hsl(var(--med-color-feedback))}";

const badgeMdCss = ":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);font-size:13px;font-weight:bold;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{--padding-top:3px;--padding-end:4px;--padding-bottom:4px;--padding-start:4px;border-radius:4px}:host{--background:hsl(var(--med-color-brand-3));--color:hsl(var(--med-color-contrast-fixed));--padding-bottom:0;--padding-end:var(--med-spacing-inline-base);--padding-start:var(--med-spacing-inline-base);--padding-top:0;--border-color:hsl(var(--med-color-brand-3))}:host(.med-badge){font-size:var(--med-font-size-xxs);font-weight:var(--med-font-weight-medium);line-height:var(--med-line-height-compressed);border-radius:var(--med-border-radius-pill);border-color:var(--border-color);border-width:var(--med-border-width-hairline);font-family:inherit;min-width:auto;border-style:solid;height:24px;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}:host(.med-badge--xxs){--padding-start:var(--med-spacing-inline-xxxs);--padding-end:var(--med-spacing-inline-xxxs);font-size:var(--med-font-size-nano);font-weight:var(--font-weight-light);height:16px}:host(.med-badge--xs){--padding-start:var(--med-spacing-inline-xxxs);--padding-end:var(--med-spacing-inline-xxxs);font-size:var(--med-font-size-nano);font-weight:var(--med-font-weight-medium);height:16px}:host(.med-badge--sm){--padding-start:var(--med-spacing-inline-base);--padding-end:var(--med-spacing-inline-base);font-size:var(--med-font-size-nano);font-weight:var(--med-font-weight-medium);height:24px}:host(.med-badge--md){--padding-start:var(--med-spacing-inline-base);--padding-end:var(--med-spacing-inline-base);font-size:var(--med-font-size-xxs);font-weight:var(--med-font-weight-medium);height:32px}:host(.med-badge--lg){--padding-start:var(--med-spacing-inline-xxs);--padding-end:var(--med-spacing-inline-xxs);font-size:var(--med-font-size-xs);font-weight:var(--med-font-weight-medium);height:40px}:host(.med-color){--border-color:hsl(var(--med-color-3));background:hsl(var(--med-color-3));color:hsl(var(--med-color-contrast-fixed))}:host(.med-color-neutral){--border-color:hsl(var(--med-color-neutral));background:hsl(var(--med-color-neutral));color:hsl(var(--med-color-neutral-contrast))}:host(.med-color-feedback){--border-color:hsl(var(--med-color-feedback));background:hsl(var(--med-color-feedback));color:hsl(var(--med-color-feedback-contrast))}:host(.med-badge--secondary){border-style:solid;background:transparent;color:hsl(var(--med-color-brand-3))}:host(.med-color.med-badge--secondary){--border-color:hsl(var(--med-color-3));background:transparent;color:hsl(var(--med-color-3))}:host(.med-color-neutral.med-badge--secondary){--border-color:hsl(var(--med-color-neutral));background:transparent;color:hsl(var(--med-color-neutral))}:host(.med-color-feedback.med-badge--secondary){--border-color:hsl(var(--med-color-feedback));background:transparent;color:hsl(var(--med-color-feedback))}";

const Badge = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { dsColor, dsName, dsSize } = this;
    const mode = getIonMode(this);
    return (h(Host, { class: generateMedColor(dsColor, {
        [mode]: true,
        'med-badge': true,
        [`med-badge--${dsName}`]: dsName !== undefined,
        [`med-badge--${dsSize}`]: dsSize !== undefined,
      }) }, h("slot", null)));
  }
};
Badge.style = {
  ios: iosBadgeMdCss,
  md: badgeMdCss
};

const thumbnailCss = ":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}";

const Thumbnail = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: getIonMode(this) }, h("slot", null)));
  }
};
Thumbnail.style = thumbnailCss;

export { Avatar as ion_avatar, Badge as ion_badge, Thumbnail as ion_thumbnail };
