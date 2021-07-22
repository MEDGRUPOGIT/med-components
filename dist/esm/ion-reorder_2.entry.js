import { r as registerInstance, h, H as Host, i as getElement, e as createEvent } from './index-a04c4e19.js';
import { b as getIonMode } from './ionic-global-9e3e8d3f.js';
import { a as hapticSelectionStart, b as hapticSelectionChanged, h as hapticSelectionEnd } from './haptic-3835cb22.js';

const reorderIosCss = ":root{--med-color-brand-primary-darkest:#074953;--med-color-brand-primary-darkest-rgb:7, 73, 83;--med-color-brand-primary-dark:#137585;--med-color-brand-primary-dark-rgb:19, 117, 133;--med-color-brand-primary-medium:#3aa8b9;--med-color-brand-primary-medium-rgb:58, 168, 185;--med-color-brand-primary-light:#73d6e5;--med-color-brand-primary-light-rgb:115, 214, 229;--med-color-brand-primary-lightest:#b0ecf5;--med-color-brand-primary-lightest-rgb:176, 236, 245;--med-color-brand-primary-gradient:linear-gradient(to right, #3aa8b9, #137585);--med-color-aula-darkest:#075344;--med-color-aula-darkest-rgb:7, 83, 68;--med-color-aula-dark:#13856e;--med-color-aula-dark-rgb:19, 133, 110;--med-color-aula-medium:#3ab89f;--med-color-aula-medium-rgb:58, 184, 159;--med-color-aula-light:#73e5cf;--med-color-aula-light-rgb:115, 229, 207;--med-color-aula-lightest:#b0f5e7;--med-color-aula-lightest-rgb:176, 245, 231;--med-color-aula-gradient:linear-gradient(to right, #3ab89f, #13856e);--med-color-material-darkest:#552607;--med-color-material-darkest-rgb:85, 38, 7;--med-color-material-dark:#854013;--med-color-material-dark-rgb:133, 64, 19;--med-color-material-medium:#b86d3b;--med-color-material-medium-rgb:184, 109, 59;--med-color-material-light:#e5a173;--med-color-material-light-rgb:229, 161, 115;--med-color-material-lightest:#f5ccb0;--med-color-material-lightest-rgb:245, 204, 176;--med-color-material-gradient:linear-gradient(to right, #b86d3b, #854013);--med-color-questoes-darkest:#073953;--med-color-questoes-darkest-rgb:7, 57, 83;--med-color-questoes-dark:#135f85;--med-color-questoes-dark-rgb:19, 95, 133;--med-color-questoes-medium:#3a8eb8;--med-color-questoes-medium-rgb:58, 142, 184;--med-color-questoes-light:#73bfe5;--med-color-questoes-light-rgb:115, 191, 229;--med-color-questoes-lightest:#b0def5;--med-color-questoes-lightest-rgb:176, 222, 245;--med-color-questoes-gradient:linear-gradient(to right, #3a8eb8, #135f85);--med-color-revalida-darkest:#53071e;--med-color-revalida-darkest-rgb:83, 7, 30;--med-color-revalida-dark:#851335;--med-color-revalida-dark-rgb:133, 19, 53;--med-color-revalida-medium:#b83a60;--med-color-revalida-medium-rgb:184, 58, 96;--med-color-revalida-light:#e57395;--med-color-revalida-light-rgb:229, 115, 149;--med-color-revalida-lightest:#f5b0c5;--med-color-revalida-lightest-rgb:245, 176, 197;--med-color-revalida-gradient:linear-gradient(to right, #b83a60, #851335);--med-color-provaschecklist-darkest:#2b0755;--med-color-provaschecklist-darkest-rgb:43, 7, 85;--med-color-provaschecklist-dark:#481385;--med-color-provaschecklist-dark-rgb:72, 19, 133;--med-color-provaschecklist-medium:#753bb8;--med-color-provaschecklist-medium-rgb:117, 59, 184;--med-color-provaschecklist-light:#a873e5;--med-color-provaschecklist-light-rgb:168, 115, 229;--med-color-provaschecklist-lightest:#d1b2f5;--med-color-provaschecklist-lightest-rgb:209, 178, 245;--med-color-provaschecklist-gradient:linear-gradient(to right, #753bb8, #481385);--med-color-neutral-dark-prime:#141414;--med-color-neutral-dark-prime-rgb:20, 20, 20;--med-color-neutral-dark-40:#292929;--med-color-neutral-dark-40-rgb:41, 41, 41;--med-color-neutral-dark-30:#474747;--med-color-neutral-dark-30-rgb:71, 71, 71;--med-color-neutral-dark-20:#5c5c5c;--med-color-neutral-dark-20-rgb:92, 92, 92;--med-color-neutral-dark-10:#7a7a7a;--med-color-neutral-dark-10-rgb:122, 122, 122;--med-color-neutral-dark-gradient:linear-gradient(to right, #fafafa, #141414);--med-color-neutral-light-prime:#fafafa;--med-color-neutral-light-prime-rgb:250, 250, 250;--med-color-neutral-light-40:#ebebeb;--med-color-neutral-light-40-rgb:235, 235, 235;--med-color-neutral-light-30:#d6d6d6;--med-color-neutral-light-30-rgb:214, 214, 214;--med-color-neutral-light-20:#c2c2c2;--med-color-neutral-light-20-rgb:194, 194, 194;--med-color-neutral-light-10:#adadad;--med-color-neutral-light-10-rgb:173, 173, 173;--med-color-neutral-light-gradient:linear-gradient(to right, #141414, #fafafa);--med-color-feedback-warning-darkest:#504606;--med-color-feedback-warning-darkest-rgb:80, 70, 6;--med-color-feedback-warning-dark:#857513;--med-color-feedback-warning-dark-rgb:133, 117, 19;--med-color-feedback-warning-medium:#b8a73b;--med-color-feedback-warning-medium-rgb:184, 167, 59;--med-color-feedback-warning-light:#e5d673;--med-color-feedback-warning-light-rgb:229, 214, 115;--med-color-feedback-warning-lightest:#f5ecb0;--med-color-feedback-warning-lightest-rgb:245, 236, 176;--med-color-feedback-warning-gradient:linear-gradient(to right, #b8a73b, #857513);--med-color-feedback-error-darkest:#520c07;--med-color-feedback-error-darkest-rgb:82, 12, 7;--med-color-feedback-error-dark:#851a13;--med-color-feedback-error-dark-rgb:133, 26, 19;--med-color-feedback-error-medium:#b8433b;--med-color-feedback-error-medium-rgb:184, 67, 59;--med-color-feedback-error-light:#e57a73;--med-color-feedback-error-light-rgb:229, 122, 115;--med-color-feedback-error-lightest:#f5b5b0;--med-color-feedback-error-lightest-rgb:245, 181, 176;--med-color-feedback-error-gradient:linear-gradient(to right, #b8433b, #851a13);--med-color-feedback-success-darkest:#065010;--med-color-feedback-success-darkest-rgb:6, 80, 16;--med-color-feedback-success-dark:#138522;--med-color-feedback-success-dark-rgb:19, 133, 34;--med-color-feedback-success-medium:#3bb84b;--med-color-feedback-success-medium-rgb:59, 184, 75;--med-color-feedback-success-light:#73e582;--med-color-feedback-success-light-rgb:115, 229, 130;--med-color-feedback-success-lightest:#b0f5b9;--med-color-feedback-success-lightest-rgb:176, 245, 185;--med-color-feedback-success-gradient:linear-gradient(to right, #3bb84b, #138522)}:root{--med-font-family-brand:fsemeric;--med-font-family-base:fsemeric;--med-font-size-nano:10px;--med-font-size-xxxs:12px;--med-font-size-xxs:14px;--med-font-size-xs:16px;--med-font-size-sm:20px;--med-font-size-md:24px;--med-font-size-lg:32px;--med-font-size-xl:40px;--med-font-size-xxl:48px;--med-font-size-xxxl:64px;--med-font-size-huge:96px;--med-font-weight-thin:250;--med-font-weight-light:300;--med-font-weight-regular:400;--med-font-weight-medium:500;--med-font-weight-semibold:600;--med-font-weight-bold:700;--med-font-weight-extrabold:800;--med-font-weight-heavy:900;--med-line-height-compressed:100%;--med-line-height-double:100%}:root{--med-spacing-inset-nano:4px;--med-spacing-inset-xs:8px;--med-spacing-inset-sm:16px;--med-spacing-inset-base:24px;--med-spacing-inset-md:32px;--med-spacing-inset-md:32px;--med-spacing-inset-md:32px;--med-spacing-inset-xxl:64px;--med-spacing-squish-nano:4px 8px;--med-spacing-squish-xs:8px 16px;--med-spacing-squish-sm:8px 24px;--med-spacing-squish-base:8px 32px;--med-spacing-squish-md:16px 24px;--med-spacing-squish-lg:16px 32px;--med-spacing-squish-xl:24px 32px;--med-spacing-squish-xxl:32px 40px;--med-spacing-stretch-nano:8px 4px;--med-spacing-stretch-xs:16px 8px;--med-spacing-stretch-sm:24px 8px;--med-spacing-stretch-base:32px 8px;--med-spacing-stretch-md:24px 16px;--med-spacing-stretch-lg:32px 16px;--med-spacing-stretch-xl:32px 24px;--med-spacing-stretch-xxl:40px 32px;--med-spacing-inline-quark:2px;--med-spacing-inline-nano:4px;--med-spacing-inline-xxxs:8px;--med-spacing-inline-base:16px;--med-spacing-inline-xxs:24px;--med-spacing-inline-xs:32px;--med-spacing-inline-sm:40px;--med-spacing-inline-md:48px;--med-spacing-inline-lg:56px;--med-spacing-inline-xl:64px;--med-spacing-inline-xxl:72px;--med-spacing-inline-xxxl:80px;--med-spacing-inline-huge:120px;--med-spacing-inline-ultra:160px;--med-spacing-stack-quark:2px;--med-spacing-stack-nano:4px;--med-spacing-stack-xxxs:8px;--med-spacing-stack-base:16px;--med-spacing-stack-xxs:24px;--med-spacing-stack-xs:32px;--med-spacing-stack-sm:40px;--med-spacing-stack-md:48px;--med-spacing-stack-lg:56px;--med-spacing-stack-xl:64px;--med-spacing-stack-xxl:72px;--med-spacing-stack-xxxl:80px;--med-spacing-stack-huge:120px;--med-spacing-stack-ultra:160px}:root{--med-border-radius-none:0;--med-border-radius-quark:2px;--med-border-radius-nano:4px;--med-border-radius-sm:8px;--med-border-radius-md:16px;--med-border-radius-lg:24px;--med-border-radius-pill:31.25em;--med-border-radius-full:50%;--med-border-radius-speech-left-down:8px 8px 8px 0;--med-border-radius-speech-right-down:8px 8px 0 8px;--med-border-radius-speech-right-up:8px 0 8px 0px;--med-border-radius-speech-left-up:0 8px 8px 0px;--med-border-radius-table-down-sm:0 0 8px 8px;--med-border-radius-table-up-sm:8px 8px 0 0;--med-border-radius-table-down-md:16px 16px 0 0;--med-border-radius-table-up-md:0 0 16px 16px;--med-border-width-none:0;--med-border-width-quark:0.25px;--med-border-width-nano:0.5px;--med-border-width-hairline:1px;--med-border-width-thin:2px;--med-border-width-thick:4px;--med-border-width-bold:8px;--med-border-width-heavy:16px;--med-opacity-level-semiopaque:0.8;--med-opacity-level-intense:0.64;--med-opacity-level-half:0.5;--med-opacity-level-medium:0.32;--med-opacity-level-light:0.16;--med-opacity-level-semitransparent:0.08;--med-shadow-level-0:none;--med-shadow-level-1:0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 3px rgba(0, 0, 0, 0.2);--med-shadow-level-2:0 2px 4px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-3:0 3px 3px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-4:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-5:0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-6:0 8px 10px rgba(0, 0, 0, 0.14), 0 3px 14px rgba(0, 0, 0, 0.12), 0 4px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-7:0 9px 12px rgba(0, 0, 0, 0.14), 0 3px 16px rgba(0, 0, 0, 0.12), 0 5px 6px rgba(0, 0, 0, 0.2);--med-shadow-level-8:0 12px 17px rgba(0, 0, 0, 0.14), 0 5px 22px rgba(0, 0, 0, 0.12), 0 7px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-9:0 16px 24px rgba(0, 0, 0, 0.14), 0 6px 30px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-10:0 24px 38px rgba(0, 0, 0, 0.14), 0 9px 46px rgba(0, 0, 0, 0.12), 0 11px 15px rgba(0, 0, 0, 0.2)}:host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}";

const reorderMdCss = ":root{--med-color-brand-primary-darkest:#074953;--med-color-brand-primary-darkest-rgb:7, 73, 83;--med-color-brand-primary-dark:#137585;--med-color-brand-primary-dark-rgb:19, 117, 133;--med-color-brand-primary-medium:#3aa8b9;--med-color-brand-primary-medium-rgb:58, 168, 185;--med-color-brand-primary-light:#73d6e5;--med-color-brand-primary-light-rgb:115, 214, 229;--med-color-brand-primary-lightest:#b0ecf5;--med-color-brand-primary-lightest-rgb:176, 236, 245;--med-color-brand-primary-gradient:linear-gradient(to right, #3aa8b9, #137585);--med-color-aula-darkest:#075344;--med-color-aula-darkest-rgb:7, 83, 68;--med-color-aula-dark:#13856e;--med-color-aula-dark-rgb:19, 133, 110;--med-color-aula-medium:#3ab89f;--med-color-aula-medium-rgb:58, 184, 159;--med-color-aula-light:#73e5cf;--med-color-aula-light-rgb:115, 229, 207;--med-color-aula-lightest:#b0f5e7;--med-color-aula-lightest-rgb:176, 245, 231;--med-color-aula-gradient:linear-gradient(to right, #3ab89f, #13856e);--med-color-material-darkest:#552607;--med-color-material-darkest-rgb:85, 38, 7;--med-color-material-dark:#854013;--med-color-material-dark-rgb:133, 64, 19;--med-color-material-medium:#b86d3b;--med-color-material-medium-rgb:184, 109, 59;--med-color-material-light:#e5a173;--med-color-material-light-rgb:229, 161, 115;--med-color-material-lightest:#f5ccb0;--med-color-material-lightest-rgb:245, 204, 176;--med-color-material-gradient:linear-gradient(to right, #b86d3b, #854013);--med-color-questoes-darkest:#073953;--med-color-questoes-darkest-rgb:7, 57, 83;--med-color-questoes-dark:#135f85;--med-color-questoes-dark-rgb:19, 95, 133;--med-color-questoes-medium:#3a8eb8;--med-color-questoes-medium-rgb:58, 142, 184;--med-color-questoes-light:#73bfe5;--med-color-questoes-light-rgb:115, 191, 229;--med-color-questoes-lightest:#b0def5;--med-color-questoes-lightest-rgb:176, 222, 245;--med-color-questoes-gradient:linear-gradient(to right, #3a8eb8, #135f85);--med-color-revalida-darkest:#53071e;--med-color-revalida-darkest-rgb:83, 7, 30;--med-color-revalida-dark:#851335;--med-color-revalida-dark-rgb:133, 19, 53;--med-color-revalida-medium:#b83a60;--med-color-revalida-medium-rgb:184, 58, 96;--med-color-revalida-light:#e57395;--med-color-revalida-light-rgb:229, 115, 149;--med-color-revalida-lightest:#f5b0c5;--med-color-revalida-lightest-rgb:245, 176, 197;--med-color-revalida-gradient:linear-gradient(to right, #b83a60, #851335);--med-color-provaschecklist-darkest:#2b0755;--med-color-provaschecklist-darkest-rgb:43, 7, 85;--med-color-provaschecklist-dark:#481385;--med-color-provaschecklist-dark-rgb:72, 19, 133;--med-color-provaschecklist-medium:#753bb8;--med-color-provaschecklist-medium-rgb:117, 59, 184;--med-color-provaschecklist-light:#a873e5;--med-color-provaschecklist-light-rgb:168, 115, 229;--med-color-provaschecklist-lightest:#d1b2f5;--med-color-provaschecklist-lightest-rgb:209, 178, 245;--med-color-provaschecklist-gradient:linear-gradient(to right, #753bb8, #481385);--med-color-neutral-dark-prime:#141414;--med-color-neutral-dark-prime-rgb:20, 20, 20;--med-color-neutral-dark-40:#292929;--med-color-neutral-dark-40-rgb:41, 41, 41;--med-color-neutral-dark-30:#474747;--med-color-neutral-dark-30-rgb:71, 71, 71;--med-color-neutral-dark-20:#5c5c5c;--med-color-neutral-dark-20-rgb:92, 92, 92;--med-color-neutral-dark-10:#7a7a7a;--med-color-neutral-dark-10-rgb:122, 122, 122;--med-color-neutral-dark-gradient:linear-gradient(to right, #fafafa, #141414);--med-color-neutral-light-prime:#fafafa;--med-color-neutral-light-prime-rgb:250, 250, 250;--med-color-neutral-light-40:#ebebeb;--med-color-neutral-light-40-rgb:235, 235, 235;--med-color-neutral-light-30:#d6d6d6;--med-color-neutral-light-30-rgb:214, 214, 214;--med-color-neutral-light-20:#c2c2c2;--med-color-neutral-light-20-rgb:194, 194, 194;--med-color-neutral-light-10:#adadad;--med-color-neutral-light-10-rgb:173, 173, 173;--med-color-neutral-light-gradient:linear-gradient(to right, #141414, #fafafa);--med-color-feedback-warning-darkest:#504606;--med-color-feedback-warning-darkest-rgb:80, 70, 6;--med-color-feedback-warning-dark:#857513;--med-color-feedback-warning-dark-rgb:133, 117, 19;--med-color-feedback-warning-medium:#b8a73b;--med-color-feedback-warning-medium-rgb:184, 167, 59;--med-color-feedback-warning-light:#e5d673;--med-color-feedback-warning-light-rgb:229, 214, 115;--med-color-feedback-warning-lightest:#f5ecb0;--med-color-feedback-warning-lightest-rgb:245, 236, 176;--med-color-feedback-warning-gradient:linear-gradient(to right, #b8a73b, #857513);--med-color-feedback-error-darkest:#520c07;--med-color-feedback-error-darkest-rgb:82, 12, 7;--med-color-feedback-error-dark:#851a13;--med-color-feedback-error-dark-rgb:133, 26, 19;--med-color-feedback-error-medium:#b8433b;--med-color-feedback-error-medium-rgb:184, 67, 59;--med-color-feedback-error-light:#e57a73;--med-color-feedback-error-light-rgb:229, 122, 115;--med-color-feedback-error-lightest:#f5b5b0;--med-color-feedback-error-lightest-rgb:245, 181, 176;--med-color-feedback-error-gradient:linear-gradient(to right, #b8433b, #851a13);--med-color-feedback-success-darkest:#065010;--med-color-feedback-success-darkest-rgb:6, 80, 16;--med-color-feedback-success-dark:#138522;--med-color-feedback-success-dark-rgb:19, 133, 34;--med-color-feedback-success-medium:#3bb84b;--med-color-feedback-success-medium-rgb:59, 184, 75;--med-color-feedback-success-light:#73e582;--med-color-feedback-success-light-rgb:115, 229, 130;--med-color-feedback-success-lightest:#b0f5b9;--med-color-feedback-success-lightest-rgb:176, 245, 185;--med-color-feedback-success-gradient:linear-gradient(to right, #3bb84b, #138522)}:root{--med-font-family-brand:fsemeric;--med-font-family-base:fsemeric;--med-font-size-nano:10px;--med-font-size-xxxs:12px;--med-font-size-xxs:14px;--med-font-size-xs:16px;--med-font-size-sm:20px;--med-font-size-md:24px;--med-font-size-lg:32px;--med-font-size-xl:40px;--med-font-size-xxl:48px;--med-font-size-xxxl:64px;--med-font-size-huge:96px;--med-font-weight-thin:250;--med-font-weight-light:300;--med-font-weight-regular:400;--med-font-weight-medium:500;--med-font-weight-semibold:600;--med-font-weight-bold:700;--med-font-weight-extrabold:800;--med-font-weight-heavy:900;--med-line-height-compressed:100%;--med-line-height-double:100%}:root{--med-spacing-inset-nano:4px;--med-spacing-inset-xs:8px;--med-spacing-inset-sm:16px;--med-spacing-inset-base:24px;--med-spacing-inset-md:32px;--med-spacing-inset-md:32px;--med-spacing-inset-md:32px;--med-spacing-inset-xxl:64px;--med-spacing-squish-nano:4px 8px;--med-spacing-squish-xs:8px 16px;--med-spacing-squish-sm:8px 24px;--med-spacing-squish-base:8px 32px;--med-spacing-squish-md:16px 24px;--med-spacing-squish-lg:16px 32px;--med-spacing-squish-xl:24px 32px;--med-spacing-squish-xxl:32px 40px;--med-spacing-stretch-nano:8px 4px;--med-spacing-stretch-xs:16px 8px;--med-spacing-stretch-sm:24px 8px;--med-spacing-stretch-base:32px 8px;--med-spacing-stretch-md:24px 16px;--med-spacing-stretch-lg:32px 16px;--med-spacing-stretch-xl:32px 24px;--med-spacing-stretch-xxl:40px 32px;--med-spacing-inline-quark:2px;--med-spacing-inline-nano:4px;--med-spacing-inline-xxxs:8px;--med-spacing-inline-base:16px;--med-spacing-inline-xxs:24px;--med-spacing-inline-xs:32px;--med-spacing-inline-sm:40px;--med-spacing-inline-md:48px;--med-spacing-inline-lg:56px;--med-spacing-inline-xl:64px;--med-spacing-inline-xxl:72px;--med-spacing-inline-xxxl:80px;--med-spacing-inline-huge:120px;--med-spacing-inline-ultra:160px;--med-spacing-stack-quark:2px;--med-spacing-stack-nano:4px;--med-spacing-stack-xxxs:8px;--med-spacing-stack-base:16px;--med-spacing-stack-xxs:24px;--med-spacing-stack-xs:32px;--med-spacing-stack-sm:40px;--med-spacing-stack-md:48px;--med-spacing-stack-lg:56px;--med-spacing-stack-xl:64px;--med-spacing-stack-xxl:72px;--med-spacing-stack-xxxl:80px;--med-spacing-stack-huge:120px;--med-spacing-stack-ultra:160px}:root{--med-border-radius-none:0;--med-border-radius-quark:2px;--med-border-radius-nano:4px;--med-border-radius-sm:8px;--med-border-radius-md:16px;--med-border-radius-lg:24px;--med-border-radius-pill:31.25em;--med-border-radius-full:50%;--med-border-radius-speech-left-down:8px 8px 8px 0;--med-border-radius-speech-right-down:8px 8px 0 8px;--med-border-radius-speech-right-up:8px 0 8px 0px;--med-border-radius-speech-left-up:0 8px 8px 0px;--med-border-radius-table-down-sm:0 0 8px 8px;--med-border-radius-table-up-sm:8px 8px 0 0;--med-border-radius-table-down-md:16px 16px 0 0;--med-border-radius-table-up-md:0 0 16px 16px;--med-border-width-none:0;--med-border-width-quark:0.25px;--med-border-width-nano:0.5px;--med-border-width-hairline:1px;--med-border-width-thin:2px;--med-border-width-thick:4px;--med-border-width-bold:8px;--med-border-width-heavy:16px;--med-opacity-level-semiopaque:0.8;--med-opacity-level-intense:0.64;--med-opacity-level-half:0.5;--med-opacity-level-medium:0.32;--med-opacity-level-light:0.16;--med-opacity-level-semitransparent:0.08;--med-shadow-level-0:none;--med-shadow-level-1:0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 3px rgba(0, 0, 0, 0.2);--med-shadow-level-2:0 2px 4px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-3:0 3px 3px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-4:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-5:0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-6:0 8px 10px rgba(0, 0, 0, 0.14), 0 3px 14px rgba(0, 0, 0, 0.12), 0 4px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-7:0 9px 12px rgba(0, 0, 0, 0.14), 0 3px 16px rgba(0, 0, 0, 0.12), 0 5px 6px rgba(0, 0, 0, 0.2);--med-shadow-level-8:0 12px 17px rgba(0, 0, 0, 0.14), 0 5px 22px rgba(0, 0, 0, 0.12), 0 7px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-9:0 16px 24px rgba(0, 0, 0, 0.14), 0 6px 30px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-10:0 24px 38px rgba(0, 0, 0, 0.14), 0 9px 46px rgba(0, 0, 0, 0.12), 0 11px 15px rgba(0, 0, 0, 0.2)}:host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}";

const Reorder = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  onClick(ev) {
    const reorderGroup = this.el.closest('ion-reorder-group');
    ev.preventDefault();
    // Only stop event propagation if the reorder is inside of an enabled
    // reorder group. This allows interaction with clickable children components.
    if (!reorderGroup || !reorderGroup.disabled) {
      ev.stopImmediatePropagation();
    }
  }
  render() {
    const mode = getIonMode(this);
    const reorderIcon = mode === 'ios' ? 'reorder-three-outline' : 'reorder-two-sharp';
    return (h(Host, { class: mode }, h("slot", null, h("ion-icon", { name: reorderIcon, lazy: false, class: "reorder-icon", part: "icon" }))));
  }
  get el() { return getElement(this); }
};
Reorder.style = {
  ios: reorderIosCss,
  md: reorderMdCss
};

const reorderGroupCss = ":root{--med-color-brand-primary-darkest:#074953;--med-color-brand-primary-darkest-rgb:7, 73, 83;--med-color-brand-primary-dark:#137585;--med-color-brand-primary-dark-rgb:19, 117, 133;--med-color-brand-primary-medium:#3aa8b9;--med-color-brand-primary-medium-rgb:58, 168, 185;--med-color-brand-primary-light:#73d6e5;--med-color-brand-primary-light-rgb:115, 214, 229;--med-color-brand-primary-lightest:#b0ecf5;--med-color-brand-primary-lightest-rgb:176, 236, 245;--med-color-brand-primary-gradient:linear-gradient(to right, #3aa8b9, #137585);--med-color-aula-darkest:#075344;--med-color-aula-darkest-rgb:7, 83, 68;--med-color-aula-dark:#13856e;--med-color-aula-dark-rgb:19, 133, 110;--med-color-aula-medium:#3ab89f;--med-color-aula-medium-rgb:58, 184, 159;--med-color-aula-light:#73e5cf;--med-color-aula-light-rgb:115, 229, 207;--med-color-aula-lightest:#b0f5e7;--med-color-aula-lightest-rgb:176, 245, 231;--med-color-aula-gradient:linear-gradient(to right, #3ab89f, #13856e);--med-color-material-darkest:#552607;--med-color-material-darkest-rgb:85, 38, 7;--med-color-material-dark:#854013;--med-color-material-dark-rgb:133, 64, 19;--med-color-material-medium:#b86d3b;--med-color-material-medium-rgb:184, 109, 59;--med-color-material-light:#e5a173;--med-color-material-light-rgb:229, 161, 115;--med-color-material-lightest:#f5ccb0;--med-color-material-lightest-rgb:245, 204, 176;--med-color-material-gradient:linear-gradient(to right, #b86d3b, #854013);--med-color-questoes-darkest:#073953;--med-color-questoes-darkest-rgb:7, 57, 83;--med-color-questoes-dark:#135f85;--med-color-questoes-dark-rgb:19, 95, 133;--med-color-questoes-medium:#3a8eb8;--med-color-questoes-medium-rgb:58, 142, 184;--med-color-questoes-light:#73bfe5;--med-color-questoes-light-rgb:115, 191, 229;--med-color-questoes-lightest:#b0def5;--med-color-questoes-lightest-rgb:176, 222, 245;--med-color-questoes-gradient:linear-gradient(to right, #3a8eb8, #135f85);--med-color-revalida-darkest:#53071e;--med-color-revalida-darkest-rgb:83, 7, 30;--med-color-revalida-dark:#851335;--med-color-revalida-dark-rgb:133, 19, 53;--med-color-revalida-medium:#b83a60;--med-color-revalida-medium-rgb:184, 58, 96;--med-color-revalida-light:#e57395;--med-color-revalida-light-rgb:229, 115, 149;--med-color-revalida-lightest:#f5b0c5;--med-color-revalida-lightest-rgb:245, 176, 197;--med-color-revalida-gradient:linear-gradient(to right, #b83a60, #851335);--med-color-provaschecklist-darkest:#2b0755;--med-color-provaschecklist-darkest-rgb:43, 7, 85;--med-color-provaschecklist-dark:#481385;--med-color-provaschecklist-dark-rgb:72, 19, 133;--med-color-provaschecklist-medium:#753bb8;--med-color-provaschecklist-medium-rgb:117, 59, 184;--med-color-provaschecklist-light:#a873e5;--med-color-provaschecklist-light-rgb:168, 115, 229;--med-color-provaschecklist-lightest:#d1b2f5;--med-color-provaschecklist-lightest-rgb:209, 178, 245;--med-color-provaschecklist-gradient:linear-gradient(to right, #753bb8, #481385);--med-color-neutral-dark-prime:#141414;--med-color-neutral-dark-prime-rgb:20, 20, 20;--med-color-neutral-dark-40:#292929;--med-color-neutral-dark-40-rgb:41, 41, 41;--med-color-neutral-dark-30:#474747;--med-color-neutral-dark-30-rgb:71, 71, 71;--med-color-neutral-dark-20:#5c5c5c;--med-color-neutral-dark-20-rgb:92, 92, 92;--med-color-neutral-dark-10:#7a7a7a;--med-color-neutral-dark-10-rgb:122, 122, 122;--med-color-neutral-dark-gradient:linear-gradient(to right, #fafafa, #141414);--med-color-neutral-light-prime:#fafafa;--med-color-neutral-light-prime-rgb:250, 250, 250;--med-color-neutral-light-40:#ebebeb;--med-color-neutral-light-40-rgb:235, 235, 235;--med-color-neutral-light-30:#d6d6d6;--med-color-neutral-light-30-rgb:214, 214, 214;--med-color-neutral-light-20:#c2c2c2;--med-color-neutral-light-20-rgb:194, 194, 194;--med-color-neutral-light-10:#adadad;--med-color-neutral-light-10-rgb:173, 173, 173;--med-color-neutral-light-gradient:linear-gradient(to right, #141414, #fafafa);--med-color-feedback-warning-darkest:#504606;--med-color-feedback-warning-darkest-rgb:80, 70, 6;--med-color-feedback-warning-dark:#857513;--med-color-feedback-warning-dark-rgb:133, 117, 19;--med-color-feedback-warning-medium:#b8a73b;--med-color-feedback-warning-medium-rgb:184, 167, 59;--med-color-feedback-warning-light:#e5d673;--med-color-feedback-warning-light-rgb:229, 214, 115;--med-color-feedback-warning-lightest:#f5ecb0;--med-color-feedback-warning-lightest-rgb:245, 236, 176;--med-color-feedback-warning-gradient:linear-gradient(to right, #b8a73b, #857513);--med-color-feedback-error-darkest:#520c07;--med-color-feedback-error-darkest-rgb:82, 12, 7;--med-color-feedback-error-dark:#851a13;--med-color-feedback-error-dark-rgb:133, 26, 19;--med-color-feedback-error-medium:#b8433b;--med-color-feedback-error-medium-rgb:184, 67, 59;--med-color-feedback-error-light:#e57a73;--med-color-feedback-error-light-rgb:229, 122, 115;--med-color-feedback-error-lightest:#f5b5b0;--med-color-feedback-error-lightest-rgb:245, 181, 176;--med-color-feedback-error-gradient:linear-gradient(to right, #b8433b, #851a13);--med-color-feedback-success-darkest:#065010;--med-color-feedback-success-darkest-rgb:6, 80, 16;--med-color-feedback-success-dark:#138522;--med-color-feedback-success-dark-rgb:19, 133, 34;--med-color-feedback-success-medium:#3bb84b;--med-color-feedback-success-medium-rgb:59, 184, 75;--med-color-feedback-success-light:#73e582;--med-color-feedback-success-light-rgb:115, 229, 130;--med-color-feedback-success-lightest:#b0f5b9;--med-color-feedback-success-lightest-rgb:176, 245, 185;--med-color-feedback-success-gradient:linear-gradient(to right, #3bb84b, #138522)}:root{--med-font-family-brand:fsemeric;--med-font-family-base:fsemeric;--med-font-size-nano:10px;--med-font-size-xxxs:12px;--med-font-size-xxs:14px;--med-font-size-xs:16px;--med-font-size-sm:20px;--med-font-size-md:24px;--med-font-size-lg:32px;--med-font-size-xl:40px;--med-font-size-xxl:48px;--med-font-size-xxxl:64px;--med-font-size-huge:96px;--med-font-weight-thin:250;--med-font-weight-light:300;--med-font-weight-regular:400;--med-font-weight-medium:500;--med-font-weight-semibold:600;--med-font-weight-bold:700;--med-font-weight-extrabold:800;--med-font-weight-heavy:900;--med-line-height-compressed:100%;--med-line-height-double:100%}:root{--med-spacing-inset-nano:4px;--med-spacing-inset-xs:8px;--med-spacing-inset-sm:16px;--med-spacing-inset-base:24px;--med-spacing-inset-md:32px;--med-spacing-inset-md:32px;--med-spacing-inset-md:32px;--med-spacing-inset-xxl:64px;--med-spacing-squish-nano:4px 8px;--med-spacing-squish-xs:8px 16px;--med-spacing-squish-sm:8px 24px;--med-spacing-squish-base:8px 32px;--med-spacing-squish-md:16px 24px;--med-spacing-squish-lg:16px 32px;--med-spacing-squish-xl:24px 32px;--med-spacing-squish-xxl:32px 40px;--med-spacing-stretch-nano:8px 4px;--med-spacing-stretch-xs:16px 8px;--med-spacing-stretch-sm:24px 8px;--med-spacing-stretch-base:32px 8px;--med-spacing-stretch-md:24px 16px;--med-spacing-stretch-lg:32px 16px;--med-spacing-stretch-xl:32px 24px;--med-spacing-stretch-xxl:40px 32px;--med-spacing-inline-quark:2px;--med-spacing-inline-nano:4px;--med-spacing-inline-xxxs:8px;--med-spacing-inline-base:16px;--med-spacing-inline-xxs:24px;--med-spacing-inline-xs:32px;--med-spacing-inline-sm:40px;--med-spacing-inline-md:48px;--med-spacing-inline-lg:56px;--med-spacing-inline-xl:64px;--med-spacing-inline-xxl:72px;--med-spacing-inline-xxxl:80px;--med-spacing-inline-huge:120px;--med-spacing-inline-ultra:160px;--med-spacing-stack-quark:2px;--med-spacing-stack-nano:4px;--med-spacing-stack-xxxs:8px;--med-spacing-stack-base:16px;--med-spacing-stack-xxs:24px;--med-spacing-stack-xs:32px;--med-spacing-stack-sm:40px;--med-spacing-stack-md:48px;--med-spacing-stack-lg:56px;--med-spacing-stack-xl:64px;--med-spacing-stack-xxl:72px;--med-spacing-stack-xxxl:80px;--med-spacing-stack-huge:120px;--med-spacing-stack-ultra:160px}:root{--med-border-radius-none:0;--med-border-radius-quark:2px;--med-border-radius-nano:4px;--med-border-radius-sm:8px;--med-border-radius-md:16px;--med-border-radius-lg:24px;--med-border-radius-pill:31.25em;--med-border-radius-full:50%;--med-border-radius-speech-left-down:8px 8px 8px 0;--med-border-radius-speech-right-down:8px 8px 0 8px;--med-border-radius-speech-right-up:8px 0 8px 0px;--med-border-radius-speech-left-up:0 8px 8px 0px;--med-border-radius-table-down-sm:0 0 8px 8px;--med-border-radius-table-up-sm:8px 8px 0 0;--med-border-radius-table-down-md:16px 16px 0 0;--med-border-radius-table-up-md:0 0 16px 16px;--med-border-width-none:0;--med-border-width-quark:0.25px;--med-border-width-nano:0.5px;--med-border-width-hairline:1px;--med-border-width-thin:2px;--med-border-width-thick:4px;--med-border-width-bold:8px;--med-border-width-heavy:16px;--med-opacity-level-semiopaque:0.8;--med-opacity-level-intense:0.64;--med-opacity-level-half:0.5;--med-opacity-level-medium:0.32;--med-opacity-level-light:0.16;--med-opacity-level-semitransparent:0.08;--med-shadow-level-0:none;--med-shadow-level-1:0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 3px rgba(0, 0, 0, 0.2);--med-shadow-level-2:0 2px 4px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-3:0 3px 3px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-4:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-5:0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-6:0 8px 10px rgba(0, 0, 0, 0.14), 0 3px 14px rgba(0, 0, 0, 0.12), 0 4px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-7:0 9px 12px rgba(0, 0, 0, 0.14), 0 3px 16px rgba(0, 0, 0, 0.12), 0 5px 6px rgba(0, 0, 0, 0.2);--med-shadow-level-8:0 12px 17px rgba(0, 0, 0, 0.14), 0 5px 22px rgba(0, 0, 0, 0.12), 0 7px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-9:0 16px 24px rgba(0, 0, 0, 0.14), 0 6px 30px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-10:0 24px 38px rgba(0, 0, 0, 0.14), 0 9px 46px rgba(0, 0, 0, 0.12), 0 11px 15px rgba(0, 0, 0, 0.2)}.reorder-list-active>*{-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}";

const ReorderGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionItemReorder = createEvent(this, "ionItemReorder", 7);
    this.lastToIndex = -1;
    this.cachedHeights = [];
    this.scrollElTop = 0;
    this.scrollElBottom = 0;
    this.scrollElInitial = 0;
    this.containerTop = 0;
    this.containerBottom = 0;
    this.state = 0 /* Idle */;
    /**
     * If `true`, the reorder will be hidden.
     */
    this.disabled = true;
  }
  disabledChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.disabled);
    }
  }
  async connectedCallback() {
    const contentEl = this.el.closest('ion-content');
    if (contentEl) {
      this.scrollEl = await contentEl.getScrollElement();
    }
    this.gesture = (await import('./index-a148eeb5.js')).createGesture({
      el: this.el,
      gestureName: 'reorder',
      gesturePriority: 110,
      threshold: 0,
      direction: 'y',
      passive: false,
      canStart: detail => this.canStart(detail),
      onStart: ev => this.onStart(ev),
      onMove: ev => this.onMove(ev),
      onEnd: () => this.onEnd(),
    });
    this.disabledChanged();
  }
  disconnectedCallback() {
    this.onEnd();
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
  }
  /**
   * Completes the reorder operation. Must be called by the `ionItemReorder` event.
   *
   * If a list of items is passed, the list will be reordered and returned in the
   * proper order.
   *
   * If no parameters are passed or if `true` is passed in, the reorder will complete
   * and the item will remain in the position it was dragged to. If `false` is passed,
   * the reorder will complete and the item will bounce back to its original position.
   *
   * @param listOrReorder A list of items to be sorted and returned in the new order or a
   * boolean of whether or not the reorder should reposition the item.
   */
  complete(listOrReorder) {
    return Promise.resolve(this.completeSync(listOrReorder));
  }
  canStart(ev) {
    if (this.selectedItemEl || this.state !== 0 /* Idle */) {
      return false;
    }
    const target = ev.event.target;
    const reorderEl = target.closest('ion-reorder');
    if (!reorderEl) {
      return false;
    }
    const item = findReorderItem(reorderEl, this.el);
    if (!item) {
      return false;
    }
    ev.data = item;
    return true;
  }
  onStart(ev) {
    ev.event.preventDefault();
    const item = this.selectedItemEl = ev.data;
    const heights = this.cachedHeights;
    heights.length = 0;
    const el = this.el;
    const children = el.children;
    if (!children || children.length === 0) {
      return;
    }
    let sum = 0;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      sum += child.offsetHeight;
      heights.push(sum);
      child.$ionIndex = i;
    }
    const box = el.getBoundingClientRect();
    this.containerTop = box.top;
    this.containerBottom = box.bottom;
    if (this.scrollEl) {
      const scrollBox = this.scrollEl.getBoundingClientRect();
      this.scrollElInitial = this.scrollEl.scrollTop;
      this.scrollElTop = scrollBox.top + AUTO_SCROLL_MARGIN;
      this.scrollElBottom = scrollBox.bottom - AUTO_SCROLL_MARGIN;
    }
    else {
      this.scrollElInitial = 0;
      this.scrollElTop = 0;
      this.scrollElBottom = 0;
    }
    this.lastToIndex = indexForItem(item);
    this.selectedItemHeight = item.offsetHeight;
    this.state = 1 /* Active */;
    item.classList.add(ITEM_REORDER_SELECTED);
    hapticSelectionStart();
  }
  onMove(ev) {
    const selectedItem = this.selectedItemEl;
    if (!selectedItem) {
      return;
    }
    // Scroll if we reach the scroll margins
    const scroll = this.autoscroll(ev.currentY);
    // // Get coordinate
    const top = this.containerTop - scroll;
    const bottom = this.containerBottom - scroll;
    const currentY = Math.max(top, Math.min(ev.currentY, bottom));
    const deltaY = scroll + currentY - ev.startY;
    const normalizedY = currentY - top;
    const toIndex = this.itemIndexForTop(normalizedY);
    if (toIndex !== this.lastToIndex) {
      const fromIndex = indexForItem(selectedItem);
      this.lastToIndex = toIndex;
      hapticSelectionChanged();
      this.reorderMove(fromIndex, toIndex);
    }
    // Update selected item position
    selectedItem.style.transform = `translateY(${deltaY}px)`;
  }
  onEnd() {
    const selectedItemEl = this.selectedItemEl;
    this.state = 2 /* Complete */;
    if (!selectedItemEl) {
      this.state = 0 /* Idle */;
      return;
    }
    const toIndex = this.lastToIndex;
    const fromIndex = indexForItem(selectedItemEl);
    if (toIndex === fromIndex) {
      this.completeSync();
    }
    else {
      this.ionItemReorder.emit({
        from: fromIndex,
        to: toIndex,
        complete: this.completeSync.bind(this)
      });
    }
    hapticSelectionEnd();
  }
  completeSync(listOrReorder) {
    const selectedItemEl = this.selectedItemEl;
    if (selectedItemEl && this.state === 2 /* Complete */) {
      const children = this.el.children;
      const len = children.length;
      const toIndex = this.lastToIndex;
      const fromIndex = indexForItem(selectedItemEl);
      if (toIndex !== fromIndex && (listOrReorder === undefined || listOrReorder === true)) {
        const ref = (fromIndex < toIndex)
          ? children[toIndex + 1]
          : children[toIndex];
        this.el.insertBefore(selectedItemEl, ref);
      }
      if (Array.isArray(listOrReorder)) {
        listOrReorder = reorderArray(listOrReorder, fromIndex, toIndex);
      }
      for (let i = 0; i < len; i++) {
        children[i].style['transform'] = '';
      }
      selectedItemEl.style.transition = '';
      selectedItemEl.classList.remove(ITEM_REORDER_SELECTED);
      this.selectedItemEl = undefined;
      this.state = 0 /* Idle */;
    }
    return listOrReorder;
  }
  itemIndexForTop(deltaY) {
    const heights = this.cachedHeights;
    let i = 0;
    // TODO: since heights is a sorted array of integers, we can do
    // speed up the search using binary search. Remember that linear-search is still
    // faster than binary-search for small arrays (<64) due CPU branch misprediction.
    for (i = 0; i < heights.length; i++) {
      if (heights[i] > deltaY) {
        break;
      }
    }
    return i;
  }
  /********* DOM WRITE ********* */
  reorderMove(fromIndex, toIndex) {
    const itemHeight = this.selectedItemHeight;
    const children = this.el.children;
    for (let i = 0; i < children.length; i++) {
      const style = children[i].style;
      let value = '';
      if (i > fromIndex && i <= toIndex) {
        value = `translateY(${-itemHeight}px)`;
      }
      else if (i < fromIndex && i >= toIndex) {
        value = `translateY(${itemHeight}px)`;
      }
      style['transform'] = value;
    }
  }
  autoscroll(posY) {
    if (!this.scrollEl) {
      return 0;
    }
    let amount = 0;
    if (posY < this.scrollElTop) {
      amount = -SCROLL_JUMP;
    }
    else if (posY > this.scrollElBottom) {
      amount = SCROLL_JUMP;
    }
    if (amount !== 0) {
      this.scrollEl.scrollBy(0, amount);
    }
    return this.scrollEl.scrollTop - this.scrollElInitial;
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { class: {
        [mode]: true,
        'reorder-enabled': !this.disabled,
        'reorder-list-active': this.state !== 0 /* Idle */,
      } }));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "disabled": ["disabledChanged"]
  }; }
};
const indexForItem = (element) => {
  return element['$ionIndex'];
};
const findReorderItem = (node, container) => {
  let parent;
  while (node) {
    parent = node.parentElement;
    if (parent === container) {
      return node;
    }
    node = parent;
  }
  return undefined;
};
const AUTO_SCROLL_MARGIN = 60;
const SCROLL_JUMP = 10;
const ITEM_REORDER_SELECTED = 'reorder-selected';
const reorderArray = (array, from, to) => {
  const element = array[from];
  array.splice(from, 1);
  array.splice(to, 0, element);
  return array.slice();
};
ReorderGroup.style = reorderGroupCss;

export { Reorder as ion_reorder, ReorderGroup as ion_reorder_group };
