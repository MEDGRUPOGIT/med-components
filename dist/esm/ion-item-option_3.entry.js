import { r as registerInstance, h, H as Host, i as getElement, e as createEvent } from './index-7a8b7a1c.js';
import { b as getIonMode } from './ionic-global-366f1c10.js';
import { c as createColorClasses } from './theme-0269729a.js';
import { m as isEndSide } from './helpers-6b411283.js';

const itemOptionIosCss = ":root{--med-color-brand-primary-darkest:#074953;--med-color-brand-primary-darkest-rgb:7, 73, 83;--med-color-brand-primary-dark:#137585;--med-color-brand-primary-dark-rgb:19, 117, 133;--med-color-brand-primary-medium:#3aa8b9;--med-color-brand-primary-medium-rgb:58, 168, 185;--med-color-brand-primary-light:#73d6e5;--med-color-brand-primary-light-rgb:115, 214, 229;--med-color-brand-primary-lightest:#b0ecf5;--med-color-brand-primary-lightest-rgb:176, 236, 245;--med-color-brand-primary-gradient:linear-gradient(to right, #3aa8b9, #137585);--med-color-aula-darkest:#075344;--med-color-aula-darkest-rgb:7, 83, 68;--med-color-aula-dark:#13856e;--med-color-aula-dark-rgb:19, 133, 110;--med-color-aula-medium:#3ab89f;--med-color-aula-medium-rgb:58, 184, 159;--med-color-aula-light:#73e5cf;--med-color-aula-light-rgb:115, 229, 207;--med-color-aula-lightest:#b0f5e7;--med-color-aula-lightest-rgb:176, 245, 231;--med-color-aula-gradient:linear-gradient(to right, #3ab89f, #13856e);--med-color-material-darkest:#552607;--med-color-material-darkest-rgb:85, 38, 7;--med-color-material-dark:#854013;--med-color-material-dark-rgb:133, 64, 19;--med-color-material-medium:#b86d3b;--med-color-material-medium-rgb:184, 109, 59;--med-color-material-light:#e5a173;--med-color-material-light-rgb:229, 161, 115;--med-color-material-lightest:#f5ccb0;--med-color-material-lightest-rgb:245, 204, 176;--med-color-material-gradient:linear-gradient(to right, #b86d3b, #854013);--med-color-questoes-darkest:#073953;--med-color-questoes-darkest-rgb:7, 57, 83;--med-color-questoes-dark:#135f85;--med-color-questoes-dark-rgb:19, 95, 133;--med-color-questoes-medium:#3a8eb8;--med-color-questoes-medium-rgb:58, 142, 184;--med-color-questoes-light:#73bfe5;--med-color-questoes-light-rgb:115, 191, 229;--med-color-questoes-lightest:#b0def5;--med-color-questoes-lightest-rgb:176, 222, 245;--med-color-questoes-gradient:linear-gradient(to right, #3a8eb8, #135f85);--med-color-revalida-darkest:#53071e;--med-color-revalida-darkest-rgb:83, 7, 30;--med-color-revalida-dark:#851335;--med-color-revalida-dark-rgb:133, 19, 53;--med-color-revalida-medium:#b83a60;--med-color-revalida-medium-rgb:184, 58, 96;--med-color-revalida-light:#e57395;--med-color-revalida-light-rgb:229, 115, 149;--med-color-revalida-lightest:#f5b0c5;--med-color-revalida-lightest-rgb:245, 176, 197;--med-color-revalida-gradient:linear-gradient(to right, #b83a60, #851335);--med-color-provaschecklist-darkest:#2b0755;--med-color-provaschecklist-darkest-rgb:43, 7, 85;--med-color-provaschecklist-dark:#481385;--med-color-provaschecklist-dark-rgb:72, 19, 133;--med-color-provaschecklist-medium:#753bb8;--med-color-provaschecklist-medium-rgb:117, 59, 184;--med-color-provaschecklist-light:#a873e5;--med-color-provaschecklist-light-rgb:168, 115, 229;--med-color-provaschecklist-lightest:#d1b2f5;--med-color-provaschecklist-lightest-rgb:209, 178, 245;--med-color-provaschecklist-gradient:linear-gradient(to right, #753bb8, #481385);--med-color-neutral-dark-prime:#141414;--med-color-neutral-dark-prime-rgb:20, 20, 20;--med-color-neutral-dark-40:#292929;--med-color-neutral-dark-40-rgb:41, 41, 41;--med-color-neutral-dark-30:#474747;--med-color-neutral-dark-30-rgb:71, 71, 71;--med-color-neutral-dark-20:#5c5c5c;--med-color-neutral-dark-20-rgb:92, 92, 92;--med-color-neutral-dark-10:#7a7a7a;--med-color-neutral-dark-10-rgb:122, 122, 122;--med-color-neutral-dark-gradient:linear-gradient(to right, #fafafa, #141414);--med-color-neutral-light-prime:#fafafa;--med-color-neutral-light-prime-rgb:250, 250, 250;--med-color-neutral-light-40:#ebebeb;--med-color-neutral-light-40-rgb:235, 235, 235;--med-color-neutral-light-30:#d6d6d6;--med-color-neutral-light-30-rgb:214, 214, 214;--med-color-neutral-light-20:#c2c2c2;--med-color-neutral-light-20-rgb:194, 194, 194;--med-color-neutral-light-10:#adadad;--med-color-neutral-light-10-rgb:173, 173, 173;--med-color-neutral-light-gradient:linear-gradient(to right, #141414, #fafafa);--med-color-feedback-warning-darkest:#504606;--med-color-feedback-warning-darkest-rgb:80, 70, 6;--med-color-feedback-warning-dark:#857513;--med-color-feedback-warning-dark-rgb:133, 117, 19;--med-color-feedback-warning-medium:#b8a73b;--med-color-feedback-warning-medium-rgb:184, 167, 59;--med-color-feedback-warning-light:#e5d673;--med-color-feedback-warning-light-rgb:229, 214, 115;--med-color-feedback-warning-lightest:#f5ecb0;--med-color-feedback-warning-lightest-rgb:245, 236, 176;--med-color-feedback-warning-gradient:linear-gradient(to right, #b8a73b, #857513);--med-color-feedback-error-darkest:#520c07;--med-color-feedback-error-darkest-rgb:82, 12, 7;--med-color-feedback-error-dark:#851a13;--med-color-feedback-error-dark-rgb:133, 26, 19;--med-color-feedback-error-medium:#b8433b;--med-color-feedback-error-medium-rgb:184, 67, 59;--med-color-feedback-error-light:#e57a73;--med-color-feedback-error-light-rgb:229, 122, 115;--med-color-feedback-error-lightest:#f5b5b0;--med-color-feedback-error-lightest-rgb:245, 181, 176;--med-color-feedback-error-gradient:linear-gradient(to right, #b8433b, #851a13);--med-color-feedback-success-darkest:#065010;--med-color-feedback-success-darkest-rgb:6, 80, 16;--med-color-feedback-success-dark:#138522;--med-color-feedback-success-dark-rgb:19, 133, 34;--med-color-feedback-success-medium:#3bb84b;--med-color-feedback-success-medium-rgb:59, 184, 75;--med-color-feedback-success-light:#73e582;--med-color-feedback-success-light-rgb:115, 229, 130;--med-color-feedback-success-lightest:#b0f5b9;--med-color-feedback-success-lightest-rgb:176, 245, 185;--med-color-feedback-success-gradient:linear-gradient(to right, #3bb84b, #138522)}:root{--med-font-family-brand:fsemeric;--med-font-family-base:fsemeric;--med-font-size-nano:10px;--med-font-size-xxxs:12px;--med-font-size-xxs:14px;--med-font-size-xs:16px;--med-font-size-sm:20px;--med-font-size-md:24px;--med-font-size-lg:32px;--med-font-size-xl:40px;--med-font-size-xxl:48px;--med-font-size-xxxl:64px;--med-font-size-huge:96px;--med-font-weight-thin:250;--med-font-weight-light:300;--med-font-weight-regular:400;--med-font-weight-medium:500;--med-font-weight-semibold:600;--med-font-weight-bold:700;--med-font-weight-extrabold:800;--med-font-weight-heavy:900;--med-line-height-compressed:100%;--med-line-height-double:100%}:root{--med-spacing-inset-nano:4px;--med-spacing-inset-xs:8px;--med-spacing-inset-sm:16px;--med-spacing-inset-base:24px;--med-spacing-inset-md:32px;--med-spacing-inset-md:32px;--med-spacing-inset-md:32px;--med-spacing-inset-xxl:64px;--med-spacing-squish-nano:4px 8px;--med-spacing-squish-xs:8px 16px;--med-spacing-squish-sm:8px 24px;--med-spacing-squish-base:8px 32px;--med-spacing-squish-md:16px 24px;--med-spacing-squish-lg:16px 32px;--med-spacing-squish-xl:24px 32px;--med-spacing-squish-xxl:32px 40px;--med-spacing-stretch-nano:8px 4px;--med-spacing-stretch-xs:16px 8px;--med-spacing-stretch-sm:24px 8px;--med-spacing-stretch-base:32px 8px;--med-spacing-stretch-md:24px 16px;--med-spacing-stretch-lg:32px 16px;--med-spacing-stretch-xl:32px 24px;--med-spacing-stretch-xxl:40px 32px;--med-spacing-inline-quark:2px;--med-spacing-inline-nano:4px;--med-spacing-inline-xxxs:8px;--med-spacing-inline-base:16px;--med-spacing-inline-xxs:24px;--med-spacing-inline-xs:32px;--med-spacing-inline-sm:40px;--med-spacing-inline-md:48px;--med-spacing-inline-lg:56px;--med-spacing-inline-xl:64px;--med-spacing-inline-xxl:72px;--med-spacing-inline-xxxl:80px;--med-spacing-inline-huge:120px;--med-spacing-inline-ultra:160px;--med-spacing-stack-quark:2px;--med-spacing-stack-nano:4px;--med-spacing-stack-xxxs:8px;--med-spacing-stack-base:16px;--med-spacing-stack-xxs:24px;--med-spacing-stack-xs:32px;--med-spacing-stack-sm:40px;--med-spacing-stack-md:48px;--med-spacing-stack-lg:56px;--med-spacing-stack-xl:64px;--med-spacing-stack-xxl:72px;--med-spacing-stack-xxxl:80px;--med-spacing-stack-huge:120px;--med-spacing-stack-ultra:160px}:root{--med-border-radius-none:0;--med-border-radius-quark:2px;--med-border-radius-nano:4px;--med-border-radius-sm:8px;--med-border-radius-md:16px;--med-border-radius-lg:24px;--med-border-radius-pill:31.25em;--med-border-radius-full:50%;--med-border-radius-speech-left-down:8px 8px 8px 0;--med-border-radius-speech-right-down:8px 8px 0 8px;--med-border-radius-speech-right-up:8px 0 8px 0px;--med-border-radius-speech-left-up:0 8px 8px 0px;--med-border-radius-table-down-sm:0 0 8px 8px;--med-border-radius-table-up-sm:8px 8px 0 0;--med-border-radius-table-down-md:16px 16px 0 0;--med-border-radius-table-up-md:0 0 16px 16px;--med-border-width-none:0;--med-border-width-quark:0.25px;--med-border-width-nano:0.5px;--med-border-width-hairline:1px;--med-border-width-thin:2px;--med-border-width-thick:4px;--med-border-width-bold:8px;--med-border-width-heavy:16px;--med-opacity-level-semiopaque:0.8;--med-opacity-level-intense:0.64;--med-opacity-level-half:0.5;--med-opacity-level-medium:0.32;--med-opacity-level-light:0.16;--med-opacity-level-semitransparent:0.08;--med-shadow-level-0:none;--med-shadow-level-1:0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 3px rgba(0, 0, 0, 0.2);--med-shadow-level-2:0 2px 4px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-3:0 3px 3px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-4:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-5:0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-6:0 8px 10px rgba(0, 0, 0, 0.14), 0 3px 14px rgba(0, 0, 0, 0.12), 0 4px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-7:0 9px 12px rgba(0, 0, 0, 0.14), 0 3px 16px rgba(0, 0, 0, 0.12), 0 5px 6px rgba(0, 0, 0, 0.2);--med-shadow-level-8:0 12px 17px rgba(0, 0, 0, 0.14), 0 5px 22px rgba(0, 0, 0, 0.12), 0 7px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-9:0 16px 24px rgba(0, 0, 0, 0.14), 0 6px 30px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-10:0 24px 38px rgba(0, 0, 0, 0.14), 0 9px 46px rgba(0, 0, 0, 0.12), 0 11px 15px rgba(0, 0, 0, 0.2)}:host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.in-list.item-options-end:last-child){padding-right:calc(.7em + var(--ion-safe-area-right))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-end:last-child){padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}:host(.in-list.item-options-start:first-child){padding-left:calc(.7em + var(--ion-safe-area-left))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-start:first-child){padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0.7em;padding-right:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em}}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted([slot=end]){margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=icon-only]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:16px}:host(.ion-activated){background:var(--ion-color-primary-shade, #3171e0)}:host(.ion-color.ion-activated){background:var(--ion-color-shade)}";

const itemOptionMdCss = ":root{--med-color-brand-primary-darkest:#074953;--med-color-brand-primary-darkest-rgb:7, 73, 83;--med-color-brand-primary-dark:#137585;--med-color-brand-primary-dark-rgb:19, 117, 133;--med-color-brand-primary-medium:#3aa8b9;--med-color-brand-primary-medium-rgb:58, 168, 185;--med-color-brand-primary-light:#73d6e5;--med-color-brand-primary-light-rgb:115, 214, 229;--med-color-brand-primary-lightest:#b0ecf5;--med-color-brand-primary-lightest-rgb:176, 236, 245;--med-color-brand-primary-gradient:linear-gradient(to right, #3aa8b9, #137585);--med-color-aula-darkest:#075344;--med-color-aula-darkest-rgb:7, 83, 68;--med-color-aula-dark:#13856e;--med-color-aula-dark-rgb:19, 133, 110;--med-color-aula-medium:#3ab89f;--med-color-aula-medium-rgb:58, 184, 159;--med-color-aula-light:#73e5cf;--med-color-aula-light-rgb:115, 229, 207;--med-color-aula-lightest:#b0f5e7;--med-color-aula-lightest-rgb:176, 245, 231;--med-color-aula-gradient:linear-gradient(to right, #3ab89f, #13856e);--med-color-material-darkest:#552607;--med-color-material-darkest-rgb:85, 38, 7;--med-color-material-dark:#854013;--med-color-material-dark-rgb:133, 64, 19;--med-color-material-medium:#b86d3b;--med-color-material-medium-rgb:184, 109, 59;--med-color-material-light:#e5a173;--med-color-material-light-rgb:229, 161, 115;--med-color-material-lightest:#f5ccb0;--med-color-material-lightest-rgb:245, 204, 176;--med-color-material-gradient:linear-gradient(to right, #b86d3b, #854013);--med-color-questoes-darkest:#073953;--med-color-questoes-darkest-rgb:7, 57, 83;--med-color-questoes-dark:#135f85;--med-color-questoes-dark-rgb:19, 95, 133;--med-color-questoes-medium:#3a8eb8;--med-color-questoes-medium-rgb:58, 142, 184;--med-color-questoes-light:#73bfe5;--med-color-questoes-light-rgb:115, 191, 229;--med-color-questoes-lightest:#b0def5;--med-color-questoes-lightest-rgb:176, 222, 245;--med-color-questoes-gradient:linear-gradient(to right, #3a8eb8, #135f85);--med-color-revalida-darkest:#53071e;--med-color-revalida-darkest-rgb:83, 7, 30;--med-color-revalida-dark:#851335;--med-color-revalida-dark-rgb:133, 19, 53;--med-color-revalida-medium:#b83a60;--med-color-revalida-medium-rgb:184, 58, 96;--med-color-revalida-light:#e57395;--med-color-revalida-light-rgb:229, 115, 149;--med-color-revalida-lightest:#f5b0c5;--med-color-revalida-lightest-rgb:245, 176, 197;--med-color-revalida-gradient:linear-gradient(to right, #b83a60, #851335);--med-color-provaschecklist-darkest:#2b0755;--med-color-provaschecklist-darkest-rgb:43, 7, 85;--med-color-provaschecklist-dark:#481385;--med-color-provaschecklist-dark-rgb:72, 19, 133;--med-color-provaschecklist-medium:#753bb8;--med-color-provaschecklist-medium-rgb:117, 59, 184;--med-color-provaschecklist-light:#a873e5;--med-color-provaschecklist-light-rgb:168, 115, 229;--med-color-provaschecklist-lightest:#d1b2f5;--med-color-provaschecklist-lightest-rgb:209, 178, 245;--med-color-provaschecklist-gradient:linear-gradient(to right, #753bb8, #481385);--med-color-neutral-dark-prime:#141414;--med-color-neutral-dark-prime-rgb:20, 20, 20;--med-color-neutral-dark-40:#292929;--med-color-neutral-dark-40-rgb:41, 41, 41;--med-color-neutral-dark-30:#474747;--med-color-neutral-dark-30-rgb:71, 71, 71;--med-color-neutral-dark-20:#5c5c5c;--med-color-neutral-dark-20-rgb:92, 92, 92;--med-color-neutral-dark-10:#7a7a7a;--med-color-neutral-dark-10-rgb:122, 122, 122;--med-color-neutral-dark-gradient:linear-gradient(to right, #fafafa, #141414);--med-color-neutral-light-prime:#fafafa;--med-color-neutral-light-prime-rgb:250, 250, 250;--med-color-neutral-light-40:#ebebeb;--med-color-neutral-light-40-rgb:235, 235, 235;--med-color-neutral-light-30:#d6d6d6;--med-color-neutral-light-30-rgb:214, 214, 214;--med-color-neutral-light-20:#c2c2c2;--med-color-neutral-light-20-rgb:194, 194, 194;--med-color-neutral-light-10:#adadad;--med-color-neutral-light-10-rgb:173, 173, 173;--med-color-neutral-light-gradient:linear-gradient(to right, #141414, #fafafa);--med-color-feedback-warning-darkest:#504606;--med-color-feedback-warning-darkest-rgb:80, 70, 6;--med-color-feedback-warning-dark:#857513;--med-color-feedback-warning-dark-rgb:133, 117, 19;--med-color-feedback-warning-medium:#b8a73b;--med-color-feedback-warning-medium-rgb:184, 167, 59;--med-color-feedback-warning-light:#e5d673;--med-color-feedback-warning-light-rgb:229, 214, 115;--med-color-feedback-warning-lightest:#f5ecb0;--med-color-feedback-warning-lightest-rgb:245, 236, 176;--med-color-feedback-warning-gradient:linear-gradient(to right, #b8a73b, #857513);--med-color-feedback-error-darkest:#520c07;--med-color-feedback-error-darkest-rgb:82, 12, 7;--med-color-feedback-error-dark:#851a13;--med-color-feedback-error-dark-rgb:133, 26, 19;--med-color-feedback-error-medium:#b8433b;--med-color-feedback-error-medium-rgb:184, 67, 59;--med-color-feedback-error-light:#e57a73;--med-color-feedback-error-light-rgb:229, 122, 115;--med-color-feedback-error-lightest:#f5b5b0;--med-color-feedback-error-lightest-rgb:245, 181, 176;--med-color-feedback-error-gradient:linear-gradient(to right, #b8433b, #851a13);--med-color-feedback-success-darkest:#065010;--med-color-feedback-success-darkest-rgb:6, 80, 16;--med-color-feedback-success-dark:#138522;--med-color-feedback-success-dark-rgb:19, 133, 34;--med-color-feedback-success-medium:#3bb84b;--med-color-feedback-success-medium-rgb:59, 184, 75;--med-color-feedback-success-light:#73e582;--med-color-feedback-success-light-rgb:115, 229, 130;--med-color-feedback-success-lightest:#b0f5b9;--med-color-feedback-success-lightest-rgb:176, 245, 185;--med-color-feedback-success-gradient:linear-gradient(to right, #3bb84b, #138522)}:root{--med-font-family-brand:fsemeric;--med-font-family-base:fsemeric;--med-font-size-nano:10px;--med-font-size-xxxs:12px;--med-font-size-xxs:14px;--med-font-size-xs:16px;--med-font-size-sm:20px;--med-font-size-md:24px;--med-font-size-lg:32px;--med-font-size-xl:40px;--med-font-size-xxl:48px;--med-font-size-xxxl:64px;--med-font-size-huge:96px;--med-font-weight-thin:250;--med-font-weight-light:300;--med-font-weight-regular:400;--med-font-weight-medium:500;--med-font-weight-semibold:600;--med-font-weight-bold:700;--med-font-weight-extrabold:800;--med-font-weight-heavy:900;--med-line-height-compressed:100%;--med-line-height-double:100%}:root{--med-spacing-inset-nano:4px;--med-spacing-inset-xs:8px;--med-spacing-inset-sm:16px;--med-spacing-inset-base:24px;--med-spacing-inset-md:32px;--med-spacing-inset-md:32px;--med-spacing-inset-md:32px;--med-spacing-inset-xxl:64px;--med-spacing-squish-nano:4px 8px;--med-spacing-squish-xs:8px 16px;--med-spacing-squish-sm:8px 24px;--med-spacing-squish-base:8px 32px;--med-spacing-squish-md:16px 24px;--med-spacing-squish-lg:16px 32px;--med-spacing-squish-xl:24px 32px;--med-spacing-squish-xxl:32px 40px;--med-spacing-stretch-nano:8px 4px;--med-spacing-stretch-xs:16px 8px;--med-spacing-stretch-sm:24px 8px;--med-spacing-stretch-base:32px 8px;--med-spacing-stretch-md:24px 16px;--med-spacing-stretch-lg:32px 16px;--med-spacing-stretch-xl:32px 24px;--med-spacing-stretch-xxl:40px 32px;--med-spacing-inline-quark:2px;--med-spacing-inline-nano:4px;--med-spacing-inline-xxxs:8px;--med-spacing-inline-base:16px;--med-spacing-inline-xxs:24px;--med-spacing-inline-xs:32px;--med-spacing-inline-sm:40px;--med-spacing-inline-md:48px;--med-spacing-inline-lg:56px;--med-spacing-inline-xl:64px;--med-spacing-inline-xxl:72px;--med-spacing-inline-xxxl:80px;--med-spacing-inline-huge:120px;--med-spacing-inline-ultra:160px;--med-spacing-stack-quark:2px;--med-spacing-stack-nano:4px;--med-spacing-stack-xxxs:8px;--med-spacing-stack-base:16px;--med-spacing-stack-xxs:24px;--med-spacing-stack-xs:32px;--med-spacing-stack-sm:40px;--med-spacing-stack-md:48px;--med-spacing-stack-lg:56px;--med-spacing-stack-xl:64px;--med-spacing-stack-xxl:72px;--med-spacing-stack-xxxl:80px;--med-spacing-stack-huge:120px;--med-spacing-stack-ultra:160px}:root{--med-border-radius-none:0;--med-border-radius-quark:2px;--med-border-radius-nano:4px;--med-border-radius-sm:8px;--med-border-radius-md:16px;--med-border-radius-lg:24px;--med-border-radius-pill:31.25em;--med-border-radius-full:50%;--med-border-radius-speech-left-down:8px 8px 8px 0;--med-border-radius-speech-right-down:8px 8px 0 8px;--med-border-radius-speech-right-up:8px 0 8px 0px;--med-border-radius-speech-left-up:0 8px 8px 0px;--med-border-radius-table-down-sm:0 0 8px 8px;--med-border-radius-table-up-sm:8px 8px 0 0;--med-border-radius-table-down-md:16px 16px 0 0;--med-border-radius-table-up-md:0 0 16px 16px;--med-border-width-none:0;--med-border-width-quark:0.25px;--med-border-width-nano:0.5px;--med-border-width-hairline:1px;--med-border-width-thin:2px;--med-border-width-thick:4px;--med-border-width-bold:8px;--med-border-width-heavy:16px;--med-opacity-level-semiopaque:0.8;--med-opacity-level-intense:0.64;--med-opacity-level-half:0.5;--med-opacity-level-medium:0.32;--med-opacity-level-light:0.16;--med-opacity-level-semitransparent:0.08;--med-shadow-level-0:none;--med-shadow-level-1:0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 3px rgba(0, 0, 0, 0.2);--med-shadow-level-2:0 2px 4px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-3:0 3px 3px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-4:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-5:0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-6:0 8px 10px rgba(0, 0, 0, 0.14), 0 3px 14px rgba(0, 0, 0, 0.12), 0 4px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-7:0 9px 12px rgba(0, 0, 0, 0.14), 0 3px 16px rgba(0, 0, 0, 0.12), 0 5px 6px rgba(0, 0, 0, 0.2);--med-shadow-level-8:0 12px 17px rgba(0, 0, 0, 0.14), 0 5px 22px rgba(0, 0, 0, 0.12), 0 7px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-9:0 16px 24px rgba(0, 0, 0, 0.14), 0 6px 30px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-10:0 24px 38px rgba(0, 0, 0, 0.14), 0 9px 46px rgba(0, 0, 0, 0.12), 0 11px 15px rgba(0, 0, 0, 0.2)}:host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.in-list.item-options-end:last-child){padding-right:calc(.7em + var(--ion-safe-area-right))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-end:last-child){padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}:host(.in-list.item-options-start:first-child){padding-left:calc(.7em + var(--ion-safe-area-left))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-start:first-child){padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0.7em;padding-right:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em}}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted([slot=end]){margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=icon-only]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:14px;font-weight:500;text-transform:uppercase}";

const ItemOption = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * If `true`, the user cannot interact with the item option.
     */
    this.disabled = false;
    /**
     * If `true`, the option will expand to take up the available width and cover any other options.
     */
    this.expandable = false;
    /**
     * The type of the button.
     */
    this.type = 'button';
    this.onClick = (ev) => {
      const el = ev.target.closest('ion-item-option');
      if (el) {
        ev.preventDefault();
      }
    };
  }
  render() {
    const { disabled, expandable, href } = this;
    const TagType = href === undefined ? 'button' : 'a';
    const mode = getIonMode(this);
    const attrs = (TagType === 'button')
      ? { type: this.type }
      : {
        download: this.download,
        href: this.href,
        target: this.target
      };
    return (h(Host, { onClick: this.onClick, class: createColorClasses(this.color, {
        [mode]: true,
        'item-option-disabled': disabled,
        'item-option-expandable': expandable,
        'ion-activatable': true,
      }) }, h(TagType, Object.assign({}, attrs, { class: "button-native", part: "native", disabled: disabled }), h("span", { class: "button-inner" }, h("slot", { name: "top" }), h("div", { class: "horizontal-wrapper" }, h("slot", { name: "start" }), h("slot", { name: "icon-only" }), h("slot", null), h("slot", { name: "end" })), h("slot", { name: "bottom" })), mode === 'md' && h("ion-ripple-effect", null))));
  }
  get el() { return getElement(this); }
};
ItemOption.style = {
  ios: itemOptionIosCss,
  md: itemOptionMdCss
};

const itemOptionsIosCss = ":root{--med-color-brand-primary-darkest:#074953;--med-color-brand-primary-darkest-rgb:7, 73, 83;--med-color-brand-primary-dark:#137585;--med-color-brand-primary-dark-rgb:19, 117, 133;--med-color-brand-primary-medium:#3aa8b9;--med-color-brand-primary-medium-rgb:58, 168, 185;--med-color-brand-primary-light:#73d6e5;--med-color-brand-primary-light-rgb:115, 214, 229;--med-color-brand-primary-lightest:#b0ecf5;--med-color-brand-primary-lightest-rgb:176, 236, 245;--med-color-brand-primary-gradient:linear-gradient(to right, #3aa8b9, #137585);--med-color-aula-darkest:#075344;--med-color-aula-darkest-rgb:7, 83, 68;--med-color-aula-dark:#13856e;--med-color-aula-dark-rgb:19, 133, 110;--med-color-aula-medium:#3ab89f;--med-color-aula-medium-rgb:58, 184, 159;--med-color-aula-light:#73e5cf;--med-color-aula-light-rgb:115, 229, 207;--med-color-aula-lightest:#b0f5e7;--med-color-aula-lightest-rgb:176, 245, 231;--med-color-aula-gradient:linear-gradient(to right, #3ab89f, #13856e);--med-color-material-darkest:#552607;--med-color-material-darkest-rgb:85, 38, 7;--med-color-material-dark:#854013;--med-color-material-dark-rgb:133, 64, 19;--med-color-material-medium:#b86d3b;--med-color-material-medium-rgb:184, 109, 59;--med-color-material-light:#e5a173;--med-color-material-light-rgb:229, 161, 115;--med-color-material-lightest:#f5ccb0;--med-color-material-lightest-rgb:245, 204, 176;--med-color-material-gradient:linear-gradient(to right, #b86d3b, #854013);--med-color-questoes-darkest:#073953;--med-color-questoes-darkest-rgb:7, 57, 83;--med-color-questoes-dark:#135f85;--med-color-questoes-dark-rgb:19, 95, 133;--med-color-questoes-medium:#3a8eb8;--med-color-questoes-medium-rgb:58, 142, 184;--med-color-questoes-light:#73bfe5;--med-color-questoes-light-rgb:115, 191, 229;--med-color-questoes-lightest:#b0def5;--med-color-questoes-lightest-rgb:176, 222, 245;--med-color-questoes-gradient:linear-gradient(to right, #3a8eb8, #135f85);--med-color-revalida-darkest:#53071e;--med-color-revalida-darkest-rgb:83, 7, 30;--med-color-revalida-dark:#851335;--med-color-revalida-dark-rgb:133, 19, 53;--med-color-revalida-medium:#b83a60;--med-color-revalida-medium-rgb:184, 58, 96;--med-color-revalida-light:#e57395;--med-color-revalida-light-rgb:229, 115, 149;--med-color-revalida-lightest:#f5b0c5;--med-color-revalida-lightest-rgb:245, 176, 197;--med-color-revalida-gradient:linear-gradient(to right, #b83a60, #851335);--med-color-provaschecklist-darkest:#2b0755;--med-color-provaschecklist-darkest-rgb:43, 7, 85;--med-color-provaschecklist-dark:#481385;--med-color-provaschecklist-dark-rgb:72, 19, 133;--med-color-provaschecklist-medium:#753bb8;--med-color-provaschecklist-medium-rgb:117, 59, 184;--med-color-provaschecklist-light:#a873e5;--med-color-provaschecklist-light-rgb:168, 115, 229;--med-color-provaschecklist-lightest:#d1b2f5;--med-color-provaschecklist-lightest-rgb:209, 178, 245;--med-color-provaschecklist-gradient:linear-gradient(to right, #753bb8, #481385);--med-color-neutral-dark-prime:#141414;--med-color-neutral-dark-prime-rgb:20, 20, 20;--med-color-neutral-dark-40:#292929;--med-color-neutral-dark-40-rgb:41, 41, 41;--med-color-neutral-dark-30:#474747;--med-color-neutral-dark-30-rgb:71, 71, 71;--med-color-neutral-dark-20:#5c5c5c;--med-color-neutral-dark-20-rgb:92, 92, 92;--med-color-neutral-dark-10:#7a7a7a;--med-color-neutral-dark-10-rgb:122, 122, 122;--med-color-neutral-dark-gradient:linear-gradient(to right, #fafafa, #141414);--med-color-neutral-light-prime:#fafafa;--med-color-neutral-light-prime-rgb:250, 250, 250;--med-color-neutral-light-40:#ebebeb;--med-color-neutral-light-40-rgb:235, 235, 235;--med-color-neutral-light-30:#d6d6d6;--med-color-neutral-light-30-rgb:214, 214, 214;--med-color-neutral-light-20:#c2c2c2;--med-color-neutral-light-20-rgb:194, 194, 194;--med-color-neutral-light-10:#adadad;--med-color-neutral-light-10-rgb:173, 173, 173;--med-color-neutral-light-gradient:linear-gradient(to right, #141414, #fafafa);--med-color-feedback-warning-darkest:#504606;--med-color-feedback-warning-darkest-rgb:80, 70, 6;--med-color-feedback-warning-dark:#857513;--med-color-feedback-warning-dark-rgb:133, 117, 19;--med-color-feedback-warning-medium:#b8a73b;--med-color-feedback-warning-medium-rgb:184, 167, 59;--med-color-feedback-warning-light:#e5d673;--med-color-feedback-warning-light-rgb:229, 214, 115;--med-color-feedback-warning-lightest:#f5ecb0;--med-color-feedback-warning-lightest-rgb:245, 236, 176;--med-color-feedback-warning-gradient:linear-gradient(to right, #b8a73b, #857513);--med-color-feedback-error-darkest:#520c07;--med-color-feedback-error-darkest-rgb:82, 12, 7;--med-color-feedback-error-dark:#851a13;--med-color-feedback-error-dark-rgb:133, 26, 19;--med-color-feedback-error-medium:#b8433b;--med-color-feedback-error-medium-rgb:184, 67, 59;--med-color-feedback-error-light:#e57a73;--med-color-feedback-error-light-rgb:229, 122, 115;--med-color-feedback-error-lightest:#f5b5b0;--med-color-feedback-error-lightest-rgb:245, 181, 176;--med-color-feedback-error-gradient:linear-gradient(to right, #b8433b, #851a13);--med-color-feedback-success-darkest:#065010;--med-color-feedback-success-darkest-rgb:6, 80, 16;--med-color-feedback-success-dark:#138522;--med-color-feedback-success-dark-rgb:19, 133, 34;--med-color-feedback-success-medium:#3bb84b;--med-color-feedback-success-medium-rgb:59, 184, 75;--med-color-feedback-success-light:#73e582;--med-color-feedback-success-light-rgb:115, 229, 130;--med-color-feedback-success-lightest:#b0f5b9;--med-color-feedback-success-lightest-rgb:176, 245, 185;--med-color-feedback-success-gradient:linear-gradient(to right, #3bb84b, #138522)}:root{--med-font-family-brand:fsemeric;--med-font-family-base:fsemeric;--med-font-size-nano:10px;--med-font-size-xxxs:12px;--med-font-size-xxs:14px;--med-font-size-xs:16px;--med-font-size-sm:20px;--med-font-size-md:24px;--med-font-size-lg:32px;--med-font-size-xl:40px;--med-font-size-xxl:48px;--med-font-size-xxxl:64px;--med-font-size-huge:96px;--med-font-weight-thin:250;--med-font-weight-light:300;--med-font-weight-regular:400;--med-font-weight-medium:500;--med-font-weight-semibold:600;--med-font-weight-bold:700;--med-font-weight-extrabold:800;--med-font-weight-heavy:900;--med-line-height-compressed:100%;--med-line-height-double:100%}:root{--med-spacing-inset-nano:4px;--med-spacing-inset-xs:8px;--med-spacing-inset-sm:16px;--med-spacing-inset-base:24px;--med-spacing-inset-md:32px;--med-spacing-inset-md:32px;--med-spacing-inset-md:32px;--med-spacing-inset-xxl:64px;--med-spacing-squish-nano:4px 8px;--med-spacing-squish-xs:8px 16px;--med-spacing-squish-sm:8px 24px;--med-spacing-squish-base:8px 32px;--med-spacing-squish-md:16px 24px;--med-spacing-squish-lg:16px 32px;--med-spacing-squish-xl:24px 32px;--med-spacing-squish-xxl:32px 40px;--med-spacing-stretch-nano:8px 4px;--med-spacing-stretch-xs:16px 8px;--med-spacing-stretch-sm:24px 8px;--med-spacing-stretch-base:32px 8px;--med-spacing-stretch-md:24px 16px;--med-spacing-stretch-lg:32px 16px;--med-spacing-stretch-xl:32px 24px;--med-spacing-stretch-xxl:40px 32px;--med-spacing-inline-quark:2px;--med-spacing-inline-nano:4px;--med-spacing-inline-xxxs:8px;--med-spacing-inline-base:16px;--med-spacing-inline-xxs:24px;--med-spacing-inline-xs:32px;--med-spacing-inline-sm:40px;--med-spacing-inline-md:48px;--med-spacing-inline-lg:56px;--med-spacing-inline-xl:64px;--med-spacing-inline-xxl:72px;--med-spacing-inline-xxxl:80px;--med-spacing-inline-huge:120px;--med-spacing-inline-ultra:160px;--med-spacing-stack-quark:2px;--med-spacing-stack-nano:4px;--med-spacing-stack-xxxs:8px;--med-spacing-stack-base:16px;--med-spacing-stack-xxs:24px;--med-spacing-stack-xs:32px;--med-spacing-stack-sm:40px;--med-spacing-stack-md:48px;--med-spacing-stack-lg:56px;--med-spacing-stack-xl:64px;--med-spacing-stack-xxl:72px;--med-spacing-stack-xxxl:80px;--med-spacing-stack-huge:120px;--med-spacing-stack-ultra:160px}:root{--med-border-radius-none:0;--med-border-radius-quark:2px;--med-border-radius-nano:4px;--med-border-radius-sm:8px;--med-border-radius-md:16px;--med-border-radius-lg:24px;--med-border-radius-pill:31.25em;--med-border-radius-full:50%;--med-border-radius-speech-left-down:8px 8px 8px 0;--med-border-radius-speech-right-down:8px 8px 0 8px;--med-border-radius-speech-right-up:8px 0 8px 0px;--med-border-radius-speech-left-up:0 8px 8px 0px;--med-border-radius-table-down-sm:0 0 8px 8px;--med-border-radius-table-up-sm:8px 8px 0 0;--med-border-radius-table-down-md:16px 16px 0 0;--med-border-radius-table-up-md:0 0 16px 16px;--med-border-width-none:0;--med-border-width-quark:0.25px;--med-border-width-nano:0.5px;--med-border-width-hairline:1px;--med-border-width-thin:2px;--med-border-width-thick:4px;--med-border-width-bold:8px;--med-border-width-heavy:16px;--med-opacity-level-semiopaque:0.8;--med-opacity-level-intense:0.64;--med-opacity-level-half:0.5;--med-opacity-level-medium:0.32;--med-opacity-level-light:0.16;--med-opacity-level-semitransparent:0.08;--med-shadow-level-0:none;--med-shadow-level-1:0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 3px rgba(0, 0, 0, 0.2);--med-shadow-level-2:0 2px 4px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-3:0 3px 3px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-4:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-5:0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-6:0 8px 10px rgba(0, 0, 0, 0.14), 0 3px 14px rgba(0, 0, 0, 0.12), 0 4px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-7:0 9px 12px rgba(0, 0, 0, 0.14), 0 3px 16px rgba(0, 0, 0, 0.12), 0 5px 6px rgba(0, 0, 0, 0.2);--med-shadow-level-8:0 12px 17px rgba(0, 0, 0, 0.14), 0 5px 22px rgba(0, 0, 0, 0.12), 0 7px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-9:0 16px 24px rgba(0, 0, 0, 0.14), 0 6px 30px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-10:0 24px 38px rgba(0, 0, 0, 0.14), 0 9px 46px rgba(0, 0, 0, 0.12), 0 11px 15px rgba(0, 0, 0, 0.2)}ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}[dir=rtl] ion-item-options,:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end),:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] .item-options-start,:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end),:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-ios{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)))}.item-options-ios.item-options-end{border-bottom-width:0.55px}.list-ios-lines-none .item-options-ios{border-bottom-width:0}.list-ios-lines-full .item-options-ios,.list-ios-lines-inset .item-options-ios.item-options-end{border-bottom-width:0.55px}";

const itemOptionsMdCss = ":root{--med-color-brand-primary-darkest:#074953;--med-color-brand-primary-darkest-rgb:7, 73, 83;--med-color-brand-primary-dark:#137585;--med-color-brand-primary-dark-rgb:19, 117, 133;--med-color-brand-primary-medium:#3aa8b9;--med-color-brand-primary-medium-rgb:58, 168, 185;--med-color-brand-primary-light:#73d6e5;--med-color-brand-primary-light-rgb:115, 214, 229;--med-color-brand-primary-lightest:#b0ecf5;--med-color-brand-primary-lightest-rgb:176, 236, 245;--med-color-brand-primary-gradient:linear-gradient(to right, #3aa8b9, #137585);--med-color-aula-darkest:#075344;--med-color-aula-darkest-rgb:7, 83, 68;--med-color-aula-dark:#13856e;--med-color-aula-dark-rgb:19, 133, 110;--med-color-aula-medium:#3ab89f;--med-color-aula-medium-rgb:58, 184, 159;--med-color-aula-light:#73e5cf;--med-color-aula-light-rgb:115, 229, 207;--med-color-aula-lightest:#b0f5e7;--med-color-aula-lightest-rgb:176, 245, 231;--med-color-aula-gradient:linear-gradient(to right, #3ab89f, #13856e);--med-color-material-darkest:#552607;--med-color-material-darkest-rgb:85, 38, 7;--med-color-material-dark:#854013;--med-color-material-dark-rgb:133, 64, 19;--med-color-material-medium:#b86d3b;--med-color-material-medium-rgb:184, 109, 59;--med-color-material-light:#e5a173;--med-color-material-light-rgb:229, 161, 115;--med-color-material-lightest:#f5ccb0;--med-color-material-lightest-rgb:245, 204, 176;--med-color-material-gradient:linear-gradient(to right, #b86d3b, #854013);--med-color-questoes-darkest:#073953;--med-color-questoes-darkest-rgb:7, 57, 83;--med-color-questoes-dark:#135f85;--med-color-questoes-dark-rgb:19, 95, 133;--med-color-questoes-medium:#3a8eb8;--med-color-questoes-medium-rgb:58, 142, 184;--med-color-questoes-light:#73bfe5;--med-color-questoes-light-rgb:115, 191, 229;--med-color-questoes-lightest:#b0def5;--med-color-questoes-lightest-rgb:176, 222, 245;--med-color-questoes-gradient:linear-gradient(to right, #3a8eb8, #135f85);--med-color-revalida-darkest:#53071e;--med-color-revalida-darkest-rgb:83, 7, 30;--med-color-revalida-dark:#851335;--med-color-revalida-dark-rgb:133, 19, 53;--med-color-revalida-medium:#b83a60;--med-color-revalida-medium-rgb:184, 58, 96;--med-color-revalida-light:#e57395;--med-color-revalida-light-rgb:229, 115, 149;--med-color-revalida-lightest:#f5b0c5;--med-color-revalida-lightest-rgb:245, 176, 197;--med-color-revalida-gradient:linear-gradient(to right, #b83a60, #851335);--med-color-provaschecklist-darkest:#2b0755;--med-color-provaschecklist-darkest-rgb:43, 7, 85;--med-color-provaschecklist-dark:#481385;--med-color-provaschecklist-dark-rgb:72, 19, 133;--med-color-provaschecklist-medium:#753bb8;--med-color-provaschecklist-medium-rgb:117, 59, 184;--med-color-provaschecklist-light:#a873e5;--med-color-provaschecklist-light-rgb:168, 115, 229;--med-color-provaschecklist-lightest:#d1b2f5;--med-color-provaschecklist-lightest-rgb:209, 178, 245;--med-color-provaschecklist-gradient:linear-gradient(to right, #753bb8, #481385);--med-color-neutral-dark-prime:#141414;--med-color-neutral-dark-prime-rgb:20, 20, 20;--med-color-neutral-dark-40:#292929;--med-color-neutral-dark-40-rgb:41, 41, 41;--med-color-neutral-dark-30:#474747;--med-color-neutral-dark-30-rgb:71, 71, 71;--med-color-neutral-dark-20:#5c5c5c;--med-color-neutral-dark-20-rgb:92, 92, 92;--med-color-neutral-dark-10:#7a7a7a;--med-color-neutral-dark-10-rgb:122, 122, 122;--med-color-neutral-dark-gradient:linear-gradient(to right, #fafafa, #141414);--med-color-neutral-light-prime:#fafafa;--med-color-neutral-light-prime-rgb:250, 250, 250;--med-color-neutral-light-40:#ebebeb;--med-color-neutral-light-40-rgb:235, 235, 235;--med-color-neutral-light-30:#d6d6d6;--med-color-neutral-light-30-rgb:214, 214, 214;--med-color-neutral-light-20:#c2c2c2;--med-color-neutral-light-20-rgb:194, 194, 194;--med-color-neutral-light-10:#adadad;--med-color-neutral-light-10-rgb:173, 173, 173;--med-color-neutral-light-gradient:linear-gradient(to right, #141414, #fafafa);--med-color-feedback-warning-darkest:#504606;--med-color-feedback-warning-darkest-rgb:80, 70, 6;--med-color-feedback-warning-dark:#857513;--med-color-feedback-warning-dark-rgb:133, 117, 19;--med-color-feedback-warning-medium:#b8a73b;--med-color-feedback-warning-medium-rgb:184, 167, 59;--med-color-feedback-warning-light:#e5d673;--med-color-feedback-warning-light-rgb:229, 214, 115;--med-color-feedback-warning-lightest:#f5ecb0;--med-color-feedback-warning-lightest-rgb:245, 236, 176;--med-color-feedback-warning-gradient:linear-gradient(to right, #b8a73b, #857513);--med-color-feedback-error-darkest:#520c07;--med-color-feedback-error-darkest-rgb:82, 12, 7;--med-color-feedback-error-dark:#851a13;--med-color-feedback-error-dark-rgb:133, 26, 19;--med-color-feedback-error-medium:#b8433b;--med-color-feedback-error-medium-rgb:184, 67, 59;--med-color-feedback-error-light:#e57a73;--med-color-feedback-error-light-rgb:229, 122, 115;--med-color-feedback-error-lightest:#f5b5b0;--med-color-feedback-error-lightest-rgb:245, 181, 176;--med-color-feedback-error-gradient:linear-gradient(to right, #b8433b, #851a13);--med-color-feedback-success-darkest:#065010;--med-color-feedback-success-darkest-rgb:6, 80, 16;--med-color-feedback-success-dark:#138522;--med-color-feedback-success-dark-rgb:19, 133, 34;--med-color-feedback-success-medium:#3bb84b;--med-color-feedback-success-medium-rgb:59, 184, 75;--med-color-feedback-success-light:#73e582;--med-color-feedback-success-light-rgb:115, 229, 130;--med-color-feedback-success-lightest:#b0f5b9;--med-color-feedback-success-lightest-rgb:176, 245, 185;--med-color-feedback-success-gradient:linear-gradient(to right, #3bb84b, #138522)}:root{--med-font-family-brand:fsemeric;--med-font-family-base:fsemeric;--med-font-size-nano:10px;--med-font-size-xxxs:12px;--med-font-size-xxs:14px;--med-font-size-xs:16px;--med-font-size-sm:20px;--med-font-size-md:24px;--med-font-size-lg:32px;--med-font-size-xl:40px;--med-font-size-xxl:48px;--med-font-size-xxxl:64px;--med-font-size-huge:96px;--med-font-weight-thin:250;--med-font-weight-light:300;--med-font-weight-regular:400;--med-font-weight-medium:500;--med-font-weight-semibold:600;--med-font-weight-bold:700;--med-font-weight-extrabold:800;--med-font-weight-heavy:900;--med-line-height-compressed:100%;--med-line-height-double:100%}:root{--med-spacing-inset-nano:4px;--med-spacing-inset-xs:8px;--med-spacing-inset-sm:16px;--med-spacing-inset-base:24px;--med-spacing-inset-md:32px;--med-spacing-inset-md:32px;--med-spacing-inset-md:32px;--med-spacing-inset-xxl:64px;--med-spacing-squish-nano:4px 8px;--med-spacing-squish-xs:8px 16px;--med-spacing-squish-sm:8px 24px;--med-spacing-squish-base:8px 32px;--med-spacing-squish-md:16px 24px;--med-spacing-squish-lg:16px 32px;--med-spacing-squish-xl:24px 32px;--med-spacing-squish-xxl:32px 40px;--med-spacing-stretch-nano:8px 4px;--med-spacing-stretch-xs:16px 8px;--med-spacing-stretch-sm:24px 8px;--med-spacing-stretch-base:32px 8px;--med-spacing-stretch-md:24px 16px;--med-spacing-stretch-lg:32px 16px;--med-spacing-stretch-xl:32px 24px;--med-spacing-stretch-xxl:40px 32px;--med-spacing-inline-quark:2px;--med-spacing-inline-nano:4px;--med-spacing-inline-xxxs:8px;--med-spacing-inline-base:16px;--med-spacing-inline-xxs:24px;--med-spacing-inline-xs:32px;--med-spacing-inline-sm:40px;--med-spacing-inline-md:48px;--med-spacing-inline-lg:56px;--med-spacing-inline-xl:64px;--med-spacing-inline-xxl:72px;--med-spacing-inline-xxxl:80px;--med-spacing-inline-huge:120px;--med-spacing-inline-ultra:160px;--med-spacing-stack-quark:2px;--med-spacing-stack-nano:4px;--med-spacing-stack-xxxs:8px;--med-spacing-stack-base:16px;--med-spacing-stack-xxs:24px;--med-spacing-stack-xs:32px;--med-spacing-stack-sm:40px;--med-spacing-stack-md:48px;--med-spacing-stack-lg:56px;--med-spacing-stack-xl:64px;--med-spacing-stack-xxl:72px;--med-spacing-stack-xxxl:80px;--med-spacing-stack-huge:120px;--med-spacing-stack-ultra:160px}:root{--med-border-radius-none:0;--med-border-radius-quark:2px;--med-border-radius-nano:4px;--med-border-radius-sm:8px;--med-border-radius-md:16px;--med-border-radius-lg:24px;--med-border-radius-pill:31.25em;--med-border-radius-full:50%;--med-border-radius-speech-left-down:8px 8px 8px 0;--med-border-radius-speech-right-down:8px 8px 0 8px;--med-border-radius-speech-right-up:8px 0 8px 0px;--med-border-radius-speech-left-up:0 8px 8px 0px;--med-border-radius-table-down-sm:0 0 8px 8px;--med-border-radius-table-up-sm:8px 8px 0 0;--med-border-radius-table-down-md:16px 16px 0 0;--med-border-radius-table-up-md:0 0 16px 16px;--med-border-width-none:0;--med-border-width-quark:0.25px;--med-border-width-nano:0.5px;--med-border-width-hairline:1px;--med-border-width-thin:2px;--med-border-width-thick:4px;--med-border-width-bold:8px;--med-border-width-heavy:16px;--med-opacity-level-semiopaque:0.8;--med-opacity-level-intense:0.64;--med-opacity-level-half:0.5;--med-opacity-level-medium:0.32;--med-opacity-level-light:0.16;--med-opacity-level-semitransparent:0.08;--med-shadow-level-0:none;--med-shadow-level-1:0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 3px rgba(0, 0, 0, 0.2);--med-shadow-level-2:0 2px 4px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-3:0 3px 3px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-4:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-5:0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-6:0 8px 10px rgba(0, 0, 0, 0.14), 0 3px 14px rgba(0, 0, 0, 0.12), 0 4px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-7:0 9px 12px rgba(0, 0, 0, 0.14), 0 3px 16px rgba(0, 0, 0, 0.12), 0 5px 6px rgba(0, 0, 0, 0.2);--med-shadow-level-8:0 12px 17px rgba(0, 0, 0, 0.14), 0 5px 22px rgba(0, 0, 0, 0.12), 0 7px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-9:0 16px 24px rgba(0, 0, 0, 0.14), 0 6px 30px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-10:0 24px 38px rgba(0, 0, 0, 0.14), 0 9px 46px rgba(0, 0, 0, 0.12), 0 11px 15px rgba(0, 0, 0, 0.2)}ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}[dir=rtl] ion-item-options,:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end),:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] .item-options-start,:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end),:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-md{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))))}.list-md-lines-none .item-options-md{border-bottom-width:0}.list-md-lines-full .item-options-md,.list-md-lines-inset .item-options-md.item-options-end{border-bottom-width:1px}";

const ItemOptions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionSwipe = createEvent(this, "ionSwipe", 7);
    /**
     * The side the option button should be on. Possible values: `"start"` and `"end"`. If you have multiple `ion-item-options`, a side must be provided for each.
     *
     */
    this.side = 'end';
  }
  /** @internal */
  async fireSwipeEvent() {
    this.ionSwipe.emit({
      side: this.side
    });
  }
  render() {
    const mode = getIonMode(this);
    const isEnd = isEndSide(this.side);
    return (h(Host, { class: {
        [mode]: true,
        // Used internally for styling
        [`item-options-${mode}`]: true,
        'item-options-start': !isEnd,
        'item-options-end': isEnd
      } }));
  }
  get el() { return getElement(this); }
};
ItemOptions.style = {
  ios: itemOptionsIosCss,
  md: itemOptionsMdCss
};

const itemSlidingCss = ":root{--med-color-brand-primary-darkest:#074953;--med-color-brand-primary-darkest-rgb:7, 73, 83;--med-color-brand-primary-dark:#137585;--med-color-brand-primary-dark-rgb:19, 117, 133;--med-color-brand-primary-medium:#3aa8b9;--med-color-brand-primary-medium-rgb:58, 168, 185;--med-color-brand-primary-light:#73d6e5;--med-color-brand-primary-light-rgb:115, 214, 229;--med-color-brand-primary-lightest:#b0ecf5;--med-color-brand-primary-lightest-rgb:176, 236, 245;--med-color-brand-primary-gradient:linear-gradient(to right, #3aa8b9, #137585);--med-color-aula-darkest:#075344;--med-color-aula-darkest-rgb:7, 83, 68;--med-color-aula-dark:#13856e;--med-color-aula-dark-rgb:19, 133, 110;--med-color-aula-medium:#3ab89f;--med-color-aula-medium-rgb:58, 184, 159;--med-color-aula-light:#73e5cf;--med-color-aula-light-rgb:115, 229, 207;--med-color-aula-lightest:#b0f5e7;--med-color-aula-lightest-rgb:176, 245, 231;--med-color-aula-gradient:linear-gradient(to right, #3ab89f, #13856e);--med-color-material-darkest:#552607;--med-color-material-darkest-rgb:85, 38, 7;--med-color-material-dark:#854013;--med-color-material-dark-rgb:133, 64, 19;--med-color-material-medium:#b86d3b;--med-color-material-medium-rgb:184, 109, 59;--med-color-material-light:#e5a173;--med-color-material-light-rgb:229, 161, 115;--med-color-material-lightest:#f5ccb0;--med-color-material-lightest-rgb:245, 204, 176;--med-color-material-gradient:linear-gradient(to right, #b86d3b, #854013);--med-color-questoes-darkest:#073953;--med-color-questoes-darkest-rgb:7, 57, 83;--med-color-questoes-dark:#135f85;--med-color-questoes-dark-rgb:19, 95, 133;--med-color-questoes-medium:#3a8eb8;--med-color-questoes-medium-rgb:58, 142, 184;--med-color-questoes-light:#73bfe5;--med-color-questoes-light-rgb:115, 191, 229;--med-color-questoes-lightest:#b0def5;--med-color-questoes-lightest-rgb:176, 222, 245;--med-color-questoes-gradient:linear-gradient(to right, #3a8eb8, #135f85);--med-color-revalida-darkest:#53071e;--med-color-revalida-darkest-rgb:83, 7, 30;--med-color-revalida-dark:#851335;--med-color-revalida-dark-rgb:133, 19, 53;--med-color-revalida-medium:#b83a60;--med-color-revalida-medium-rgb:184, 58, 96;--med-color-revalida-light:#e57395;--med-color-revalida-light-rgb:229, 115, 149;--med-color-revalida-lightest:#f5b0c5;--med-color-revalida-lightest-rgb:245, 176, 197;--med-color-revalida-gradient:linear-gradient(to right, #b83a60, #851335);--med-color-provaschecklist-darkest:#2b0755;--med-color-provaschecklist-darkest-rgb:43, 7, 85;--med-color-provaschecklist-dark:#481385;--med-color-provaschecklist-dark-rgb:72, 19, 133;--med-color-provaschecklist-medium:#753bb8;--med-color-provaschecklist-medium-rgb:117, 59, 184;--med-color-provaschecklist-light:#a873e5;--med-color-provaschecklist-light-rgb:168, 115, 229;--med-color-provaschecklist-lightest:#d1b2f5;--med-color-provaschecklist-lightest-rgb:209, 178, 245;--med-color-provaschecklist-gradient:linear-gradient(to right, #753bb8, #481385);--med-color-neutral-dark-prime:#141414;--med-color-neutral-dark-prime-rgb:20, 20, 20;--med-color-neutral-dark-40:#292929;--med-color-neutral-dark-40-rgb:41, 41, 41;--med-color-neutral-dark-30:#474747;--med-color-neutral-dark-30-rgb:71, 71, 71;--med-color-neutral-dark-20:#5c5c5c;--med-color-neutral-dark-20-rgb:92, 92, 92;--med-color-neutral-dark-10:#7a7a7a;--med-color-neutral-dark-10-rgb:122, 122, 122;--med-color-neutral-dark-gradient:linear-gradient(to right, #fafafa, #141414);--med-color-neutral-light-prime:#fafafa;--med-color-neutral-light-prime-rgb:250, 250, 250;--med-color-neutral-light-40:#ebebeb;--med-color-neutral-light-40-rgb:235, 235, 235;--med-color-neutral-light-30:#d6d6d6;--med-color-neutral-light-30-rgb:214, 214, 214;--med-color-neutral-light-20:#c2c2c2;--med-color-neutral-light-20-rgb:194, 194, 194;--med-color-neutral-light-10:#adadad;--med-color-neutral-light-10-rgb:173, 173, 173;--med-color-neutral-light-gradient:linear-gradient(to right, #141414, #fafafa);--med-color-feedback-warning-darkest:#504606;--med-color-feedback-warning-darkest-rgb:80, 70, 6;--med-color-feedback-warning-dark:#857513;--med-color-feedback-warning-dark-rgb:133, 117, 19;--med-color-feedback-warning-medium:#b8a73b;--med-color-feedback-warning-medium-rgb:184, 167, 59;--med-color-feedback-warning-light:#e5d673;--med-color-feedback-warning-light-rgb:229, 214, 115;--med-color-feedback-warning-lightest:#f5ecb0;--med-color-feedback-warning-lightest-rgb:245, 236, 176;--med-color-feedback-warning-gradient:linear-gradient(to right, #b8a73b, #857513);--med-color-feedback-error-darkest:#520c07;--med-color-feedback-error-darkest-rgb:82, 12, 7;--med-color-feedback-error-dark:#851a13;--med-color-feedback-error-dark-rgb:133, 26, 19;--med-color-feedback-error-medium:#b8433b;--med-color-feedback-error-medium-rgb:184, 67, 59;--med-color-feedback-error-light:#e57a73;--med-color-feedback-error-light-rgb:229, 122, 115;--med-color-feedback-error-lightest:#f5b5b0;--med-color-feedback-error-lightest-rgb:245, 181, 176;--med-color-feedback-error-gradient:linear-gradient(to right, #b8433b, #851a13);--med-color-feedback-success-darkest:#065010;--med-color-feedback-success-darkest-rgb:6, 80, 16;--med-color-feedback-success-dark:#138522;--med-color-feedback-success-dark-rgb:19, 133, 34;--med-color-feedback-success-medium:#3bb84b;--med-color-feedback-success-medium-rgb:59, 184, 75;--med-color-feedback-success-light:#73e582;--med-color-feedback-success-light-rgb:115, 229, 130;--med-color-feedback-success-lightest:#b0f5b9;--med-color-feedback-success-lightest-rgb:176, 245, 185;--med-color-feedback-success-gradient:linear-gradient(to right, #3bb84b, #138522)}:root{--med-font-family-brand:fsemeric;--med-font-family-base:fsemeric;--med-font-size-nano:10px;--med-font-size-xxxs:12px;--med-font-size-xxs:14px;--med-font-size-xs:16px;--med-font-size-sm:20px;--med-font-size-md:24px;--med-font-size-lg:32px;--med-font-size-xl:40px;--med-font-size-xxl:48px;--med-font-size-xxxl:64px;--med-font-size-huge:96px;--med-font-weight-thin:250;--med-font-weight-light:300;--med-font-weight-regular:400;--med-font-weight-medium:500;--med-font-weight-semibold:600;--med-font-weight-bold:700;--med-font-weight-extrabold:800;--med-font-weight-heavy:900;--med-line-height-compressed:100%;--med-line-height-double:100%}:root{--med-spacing-inset-nano:4px;--med-spacing-inset-xs:8px;--med-spacing-inset-sm:16px;--med-spacing-inset-base:24px;--med-spacing-inset-md:32px;--med-spacing-inset-md:32px;--med-spacing-inset-md:32px;--med-spacing-inset-xxl:64px;--med-spacing-squish-nano:4px 8px;--med-spacing-squish-xs:8px 16px;--med-spacing-squish-sm:8px 24px;--med-spacing-squish-base:8px 32px;--med-spacing-squish-md:16px 24px;--med-spacing-squish-lg:16px 32px;--med-spacing-squish-xl:24px 32px;--med-spacing-squish-xxl:32px 40px;--med-spacing-stretch-nano:8px 4px;--med-spacing-stretch-xs:16px 8px;--med-spacing-stretch-sm:24px 8px;--med-spacing-stretch-base:32px 8px;--med-spacing-stretch-md:24px 16px;--med-spacing-stretch-lg:32px 16px;--med-spacing-stretch-xl:32px 24px;--med-spacing-stretch-xxl:40px 32px;--med-spacing-inline-quark:2px;--med-spacing-inline-nano:4px;--med-spacing-inline-xxxs:8px;--med-spacing-inline-base:16px;--med-spacing-inline-xxs:24px;--med-spacing-inline-xs:32px;--med-spacing-inline-sm:40px;--med-spacing-inline-md:48px;--med-spacing-inline-lg:56px;--med-spacing-inline-xl:64px;--med-spacing-inline-xxl:72px;--med-spacing-inline-xxxl:80px;--med-spacing-inline-huge:120px;--med-spacing-inline-ultra:160px;--med-spacing-stack-quark:2px;--med-spacing-stack-nano:4px;--med-spacing-stack-xxxs:8px;--med-spacing-stack-base:16px;--med-spacing-stack-xxs:24px;--med-spacing-stack-xs:32px;--med-spacing-stack-sm:40px;--med-spacing-stack-md:48px;--med-spacing-stack-lg:56px;--med-spacing-stack-xl:64px;--med-spacing-stack-xxl:72px;--med-spacing-stack-xxxl:80px;--med-spacing-stack-huge:120px;--med-spacing-stack-ultra:160px}:root{--med-border-radius-none:0;--med-border-radius-quark:2px;--med-border-radius-nano:4px;--med-border-radius-sm:8px;--med-border-radius-md:16px;--med-border-radius-lg:24px;--med-border-radius-pill:31.25em;--med-border-radius-full:50%;--med-border-radius-speech-left-down:8px 8px 8px 0;--med-border-radius-speech-right-down:8px 8px 0 8px;--med-border-radius-speech-right-up:8px 0 8px 0px;--med-border-radius-speech-left-up:0 8px 8px 0px;--med-border-radius-table-down-sm:0 0 8px 8px;--med-border-radius-table-up-sm:8px 8px 0 0;--med-border-radius-table-down-md:16px 16px 0 0;--med-border-radius-table-up-md:0 0 16px 16px;--med-border-width-none:0;--med-border-width-quark:0.25px;--med-border-width-nano:0.5px;--med-border-width-hairline:1px;--med-border-width-thin:2px;--med-border-width-thick:4px;--med-border-width-bold:8px;--med-border-width-heavy:16px;--med-opacity-level-semiopaque:0.8;--med-opacity-level-intense:0.64;--med-opacity-level-half:0.5;--med-opacity-level-medium:0.32;--med-opacity-level-light:0.16;--med-opacity-level-semitransparent:0.08;--med-shadow-level-0:none;--med-shadow-level-1:0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 3px rgba(0, 0, 0, 0.2);--med-shadow-level-2:0 2px 4px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-3:0 3px 3px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-4:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-5:0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-6:0 8px 10px rgba(0, 0, 0, 0.14), 0 3px 14px rgba(0, 0, 0, 0.12), 0 4px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-7:0 9px 12px rgba(0, 0, 0, 0.14), 0 3px 16px rgba(0, 0, 0, 0.12), 0 5px 6px rgba(0, 0, 0, 0.2);--med-shadow-level-8:0 12px 17px rgba(0, 0, 0, 0.14), 0 5px 22px rgba(0, 0, 0, 0.12), 0 7px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-9:0 16px 24px rgba(0, 0, 0, 0.14), 0 6px 30px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-10:0 24px 38px rgba(0, 0, 0, 0.14), 0 9px 46px rgba(0, 0, 0, 0.12), 0 11px 15px rgba(0, 0, 0, 0.2)}ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;-ms-flex-order:1;order:1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-left;transition-property:padding-left}[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable,:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;-ms-flex-order:-1;order:-1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-right;transition-property:padding-right}[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable,:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}";

const SWIPE_MARGIN = 30;
const ELASTIC_FACTOR = 0.55;
let openSlidingItem;
const ItemSliding = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionDrag = createEvent(this, "ionDrag", 7);
    this.item = null;
    this.openAmount = 0;
    this.initialOpenAmount = 0;
    this.optsWidthRightSide = 0;
    this.optsWidthLeftSide = 0;
    this.sides = 0 /* None */;
    this.optsDirty = true;
    this.state = 2 /* Disabled */;
    /**
     * If `true`, the user cannot interact with the sliding item.
     */
    this.disabled = false;
  }
  disabledChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.disabled);
    }
  }
  async connectedCallback() {
    this.item = this.el.querySelector('ion-item');
    await this.updateOptions();
    this.gesture = (await import('./index-a148eeb5.js')).createGesture({
      el: this.el,
      gestureName: 'item-swipe',
      gesturePriority: 100,
      threshold: 5,
      canStart: ev => this.canStart(ev),
      onStart: () => this.onStart(),
      onMove: ev => this.onMove(ev),
      onEnd: ev => this.onEnd(ev),
    });
    this.disabledChanged();
  }
  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
    this.item = null;
    this.leftOptions = this.rightOptions = undefined;
    if (openSlidingItem === this.el) {
      openSlidingItem = undefined;
    }
  }
  /**
   * Get the amount the item is open in pixels.
   */
  getOpenAmount() {
    return Promise.resolve(this.openAmount);
  }
  /**
   * Get the ratio of the open amount of the item compared to the width of the options.
   * If the number returned is positive, then the options on the right side are open.
   * If the number returned is negative, then the options on the left side are open.
   * If the absolute value of the number is greater than 1, the item is open more than
   * the width of the options.
   */
  getSlidingRatio() {
    return Promise.resolve(this.getSlidingRatioSync());
  }
  /**
   * Open the sliding item.
   *
   * @param side The side of the options to open. If a side is not provided, it will open the first set of options it finds within the item.
   */
  async open(side) {
    if (this.item === null) {
      return;
    }
    const optionsToOpen = this.getOptions(side);
    if (!optionsToOpen) {
      return;
    }
    /**
     * If side is not set, we need to infer the side
     * so we know which direction to move the options
     */
    if (side === undefined) {
      side = (optionsToOpen === this.leftOptions) ? 'start' : 'end';
    }
    // In RTL we want to switch the sides
    side = isEndSide(side) ? 'end' : 'start';
    const isStartOpen = this.openAmount < 0;
    const isEndOpen = this.openAmount > 0;
    /**
     * If a side is open and a user tries to
     * re-open the same side, we should not do anything
     */
    if (isStartOpen && optionsToOpen === this.leftOptions) {
      return;
    }
    if (isEndOpen && optionsToOpen === this.rightOptions) {
      return;
    }
    this.closeOpened();
    this.state = 4 /* Enabled */;
    requestAnimationFrame(() => {
      this.calculateOptsWidth();
      const width = (side === 'end') ? this.optsWidthRightSide : -this.optsWidthLeftSide;
      openSlidingItem = this.el;
      this.setOpenAmount(width, false);
      this.state = (side === 'end') ? 8 /* End */ : 16 /* Start */;
    });
  }
  /**
   * Close the sliding item. Items can also be closed from the [List](../list).
   */
  async close() {
    this.setOpenAmount(0, true);
  }
  /**
   * Close all of the sliding items in the list. Items can also be closed from the [List](../list).
   */
  async closeOpened() {
    if (openSlidingItem !== undefined) {
      openSlidingItem.close();
      openSlidingItem = undefined;
      return true;
    }
    return false;
  }
  /**
   * Given an optional side, return the ion-item-options element.
   *
   * @param side This side of the options to get. If a side is not provided it will
   * return the first one available.
   */
  getOptions(side) {
    if (side === undefined) {
      return this.leftOptions || this.rightOptions;
    }
    else if (side === 'start') {
      return this.leftOptions;
    }
    else {
      return this.rightOptions;
    }
  }
  async updateOptions() {
    const options = this.el.querySelectorAll('ion-item-options');
    let sides = 0;
    // Reset left and right options in case they were removed
    this.leftOptions = this.rightOptions = undefined;
    for (let i = 0; i < options.length; i++) {
      const item = options.item(i);
      /**
       * We cannot use the componentOnReady helper
       * util here since we need to wait for all of these items
       * to be ready before we set `this.sides` and `this.optsDirty`.
       */
      const option = (item.componentOnReady !== undefined) ? await item.componentOnReady() : item;
      const side = isEndSide(option.side) ? 'end' : 'start';
      if (side === 'start') {
        this.leftOptions = option;
        sides |= 1 /* Start */;
      }
      else {
        this.rightOptions = option;
        sides |= 2 /* End */;
      }
    }
    this.optsDirty = true;
    this.sides = sides;
  }
  canStart(gesture) {
    /**
     * If very close to start of the screen
     * do not open left side so swipe to go
     * back will still work.
     */
    const rtl = document.dir === 'rtl';
    const atEdge = (rtl) ? (window.innerWidth - gesture.startX) < 15 : gesture.startX < 15;
    if (atEdge) {
      return false;
    }
    const selected = openSlidingItem;
    if (selected && selected !== this.el) {
      this.closeOpened();
      return false;
    }
    return !!(this.rightOptions || this.leftOptions);
  }
  onStart() {
    openSlidingItem = this.el;
    if (this.tmr !== undefined) {
      clearTimeout(this.tmr);
      this.tmr = undefined;
    }
    if (this.openAmount === 0) {
      this.optsDirty = true;
      this.state = 4 /* Enabled */;
    }
    this.initialOpenAmount = this.openAmount;
    if (this.item) {
      this.item.style.transition = 'none';
    }
  }
  onMove(gesture) {
    if (this.optsDirty) {
      this.calculateOptsWidth();
    }
    let openAmount = this.initialOpenAmount - gesture.deltaX;
    switch (this.sides) {
      case 2 /* End */:
        openAmount = Math.max(0, openAmount);
        break;
      case 1 /* Start */:
        openAmount = Math.min(0, openAmount);
        break;
      case 3 /* Both */: break;
      case 0 /* None */: return;
      default:
        console.warn('invalid ItemSideFlags value', this.sides);
        break;
    }
    let optsWidth;
    if (openAmount > this.optsWidthRightSide) {
      optsWidth = this.optsWidthRightSide;
      openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
    }
    else if (openAmount < -this.optsWidthLeftSide) {
      optsWidth = -this.optsWidthLeftSide;
      openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
    }
    this.setOpenAmount(openAmount, false);
  }
  onEnd(gesture) {
    const velocity = gesture.velocityX;
    let restingPoint = (this.openAmount > 0)
      ? this.optsWidthRightSide
      : -this.optsWidthLeftSide;
    // Check if the drag didn't clear the buttons mid-point
    // and we aren't moving fast enough to swipe open
    const isResetDirection = (this.openAmount > 0) === !(velocity < 0);
    const isMovingFast = Math.abs(velocity) > 0.3;
    const isOnCloseZone = Math.abs(this.openAmount) < Math.abs(restingPoint / 2);
    if (swipeShouldReset(isResetDirection, isMovingFast, isOnCloseZone)) {
      restingPoint = 0;
    }
    const state = this.state;
    this.setOpenAmount(restingPoint, true);
    if ((state & 32 /* SwipeEnd */) !== 0 && this.rightOptions) {
      this.rightOptions.fireSwipeEvent();
    }
    else if ((state & 64 /* SwipeStart */) !== 0 && this.leftOptions) {
      this.leftOptions.fireSwipeEvent();
    }
  }
  calculateOptsWidth() {
    this.optsWidthRightSide = 0;
    if (this.rightOptions) {
      this.rightOptions.style.display = 'flex';
      this.optsWidthRightSide = this.rightOptions.offsetWidth;
      this.rightOptions.style.display = '';
    }
    this.optsWidthLeftSide = 0;
    if (this.leftOptions) {
      this.leftOptions.style.display = 'flex';
      this.optsWidthLeftSide = this.leftOptions.offsetWidth;
      this.leftOptions.style.display = '';
    }
    this.optsDirty = false;
  }
  setOpenAmount(openAmount, isFinal) {
    if (this.tmr !== undefined) {
      clearTimeout(this.tmr);
      this.tmr = undefined;
    }
    if (!this.item) {
      return;
    }
    const style = this.item.style;
    this.openAmount = openAmount;
    if (isFinal) {
      style.transition = '';
    }
    if (openAmount > 0) {
      this.state = (openAmount >= (this.optsWidthRightSide + SWIPE_MARGIN))
        ? 8 /* End */ | 32 /* SwipeEnd */
        : 8 /* End */;
    }
    else if (openAmount < 0) {
      this.state = (openAmount <= (-this.optsWidthLeftSide - SWIPE_MARGIN))
        ? 16 /* Start */ | 64 /* SwipeStart */
        : 16 /* Start */;
    }
    else {
      this.tmr = setTimeout(() => {
        this.state = 2 /* Disabled */;
        this.tmr = undefined;
      }, 600);
      openSlidingItem = undefined;
      style.transform = '';
      return;
    }
    style.transform = `translate3d(${-openAmount}px,0,0)`;
    this.ionDrag.emit({
      amount: openAmount,
      ratio: this.getSlidingRatioSync()
    });
  }
  getSlidingRatioSync() {
    if (this.openAmount > 0) {
      return this.openAmount / this.optsWidthRightSide;
    }
    else if (this.openAmount < 0) {
      return this.openAmount / this.optsWidthLeftSide;
    }
    else {
      return 0;
    }
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { class: {
        [mode]: true,
        'item-sliding-active-slide': (this.state !== 2 /* Disabled */),
        'item-sliding-active-options-end': (this.state & 8 /* End */) !== 0,
        'item-sliding-active-options-start': (this.state & 16 /* Start */) !== 0,
        'item-sliding-active-swipe-end': (this.state & 32 /* SwipeEnd */) !== 0,
        'item-sliding-active-swipe-start': (this.state & 64 /* SwipeStart */) !== 0
      } }));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "disabled": ["disabledChanged"]
  }; }
};
const swipeShouldReset = (isResetDirection, isMovingFast, isOnResetZone) => {
  // The logic required to know when the sliding item should close (openAmount=0)
  // depends on three booleans (isResetDirection, isMovingFast, isOnResetZone)
  // and it ended up being too complicated to be written manually without errors
  // so the truth table is attached below: (0=false, 1=true)
  // isResetDirection | isMovingFast | isOnResetZone || shouldClose
  //         0        |       0      |       0       ||    0
  //         0        |       0      |       1       ||    1
  //         0        |       1      |       0       ||    0
  //         0        |       1      |       1       ||    0
  //         1        |       0      |       0       ||    0
  //         1        |       0      |       1       ||    1
  //         1        |       1      |       0       ||    1
  //         1        |       1      |       1       ||    1
  // The resulting expression was generated by resolving the K-map (Karnaugh map):
  return (!isMovingFast && isOnResetZone) || (isResetDirection && isMovingFast);
};
ItemSliding.style = itemSlidingCss;

export { ItemOption as ion_item_option, ItemOptions as ion_item_options, ItemSliding as ion_item_sliding };
