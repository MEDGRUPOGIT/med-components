var __awaiter=this&&this.__awaiter||function(o,t,r,n){function e(o){return o instanceof r?o:new r((function(t){t(o)}))}return new(r||(r=Promise))((function(r,a){function i(o){try{d(n.next(o))}catch(t){a(t)}}function c(o){try{d(n["throw"](o))}catch(t){a(t)}}function d(o){o.done?r(o.value):e(o.value).then(i,c)}d((n=n.apply(o,t||[])).next())}))};var __generator=this&&this.__generator||function(o,t){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,e,a,i;return i={next:c(0),throw:c(1),return:c(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function c(o){return function(t){return d([o,t])}}function d(i){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,e&&(a=i[0]&2?e["return"]:i[0]?e["throw"]||((a=e["return"])&&a.call(e),0):e.next)&&!(a=a.call(e,i[1])).done)return a;if(e=0,a)i=[i[0]&2,a.value];switch(i[0]){case 0:case 1:a=i;break;case 4:r.label++;return{value:i[1],done:false};case 5:r.label++;e=i[1];i=[0];continue;case 7:i=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!a||i[1]>a[0]&&i[1]<a[3])){r.label=i[1];break}if(i[0]===6&&r.label<a[1]){r.label=a[1];a=i;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(i);break}if(a[2])r.ops.pop();r.trys.pop();continue}i=t.call(o,r)}catch(c){i=[6,c];e=0}finally{n=a=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};System.register(["./p-cc3b12d0.system.js","./p-1ceaabb2.system.js","./p-27c73f6b.system.js","./p-456080eb.system.js"],(function(o){"use strict";var t,r,n,e,a,i,c,d,l;return{setters:[function(o){t=o.r;r=o.h;n=o.H;e=o.i},function(o){a=o.c;i=o.b},function(o){c=o.o;d=o.h},function(o){l=o.g}],execute:function(){var s=':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}:host(.med-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.med-button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.med-button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.med-button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-0.3em;margin-right:0.3em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}::slotted(ion-icon[slot=end]){margin-left:0.3em;margin-right:-0.2em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.med-button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.med-button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.med-button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.med-button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.med-button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:4px;--padding-top:0;--padding-bottom:0;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1),\n                  background-color 15ms linear,\n                  color 15ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:36px;font-size:14px;font-weight:500;letter-spacing:0.06em;text-transform:uppercase}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.med-button-solid){--background-activated:transparent;--background-hover:var(--ion-color-primary-contrast, #fff);--background-focused:var(--ion-color-primary-contrast, #fff);--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.med-button-solid.ion-activated){--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}:host(.med-button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.med-button-outline.ion-activated.ion-color) .button-native{background:transparent}:host(.med-button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-strong){font-weight:bold}::slotted(ion-icon[slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host(.med-button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast);opacity:0.24}:host(.med-button-clear.ion-color.ion-focused) .button-native::after,:host(.med-button-outline.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base);opacity:0.12}@media (any-hover: hover){:host(.med-button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-contrast);opacity:0.08}:host(.med-button-clear.ion-color:hover) .button-native::after,:host(.med-button-outline.ion-color:hover) .button-native::after{background:var(--ion-color-base);opacity:0.04}}:host{--background:hsl(var(--med-color-brand-3));--border-color:hsl(var(--med-color-brand-3));--color:hsl(var(--med-color-contrast-fixed));--bg-hover:hsl(var(--med-color-brand-1));--bg-hover-opacity:1;--border-color-hover:transparent;--color-hover:hsl(var(--med-color-neutral-10));--bg-focused:hsl(var(--med-color-brand-1));--bg-focused-opacity:1;--border-color-focused:transparent;--color-focused:hsl(var(--med-color-neutral-10));--bg-activated:transparent;--bg-activated-opacity:0;--border-color-activated:transparent;--color-activated:hsl(var(--med-color-contrast-fixed));--border-radius:500px;--min-height:48px;--min-width:48px;--transition:background 300ms ease-out, color 300ms ease-out, border-color 300ms ease-out, opacity 300ms ease-out;--icon-font-size:24px}:host{min-height:var(--min-height);min-width:var(--min-width);height:auto;font-size:var(--font-size);font-weight:var(--font-weight);text-transform:uppercase;margin:0}:host .button-native::after{display:none}:host .button-native::before{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0;-webkit-transition:var(--transition);transition:var(--transition)}:host .button-native{padding:0 var(--padding);min-height:var(--min-height);line-height:var(--line-height);-webkit-box-shadow:none;box-shadow:none}:host(.med-button--tertiary){--background:transparent;--border-color:transparent;--color:hsl(var(--med-color-neutral-10));--padding:0;--min-height:24px;--min-width:24px;--border-radius:500px}ion-icon{min-width:var(--icon-font-size);font-size:var(--icon-font-size);stroke:var(--color);-webkit-transition:stroke 300ms ease-out;transition:stroke 300ms ease-out}:host(.med-button--tertiary.button-has-icon-only) ion-ripple-effect{--ripple-color:hsl(var(--med-color-neutral-10));--ripple-opacity:0.16}:host(.med-button--tertiary.back-button-has-icon-only){--color-hover:hsl(var(--med-color-neutral-10));--bg-hover:hsl(var(--med-color-neutral-10));--bg-hover-opacity:0.08;--bg-activated:hsl(var(--med-color-neutral-10));--bg-activated-opacity:0.16;--color-activated:hsl(var(--med-color-neutral-10));--min-height:48px;--min-width:48px;--icon-font-size:32px;--padding:0;--padding-text:0;--border-radius:50%;--min-height:32px;--min-width:32px;--icon-font-size:24px}:host(.med-button--tertiary.button-disabled){--bg-hover:transparent;--color:hsl(var(--med-color-neutral-5));cursor:initial;pointer-events:none}@media (any-hover: hover){:host(.med-button:hover){color:var(--color-hover)}:host(.med-button:hover) .button-native{border-color:var(--border-color-hover)}:host(.med-button:hover) .button-native::before{background:var(--bg-hover);opacity:var(--bg-hover-opacity)}:host(.med-button:hover) ::slotted(ion-icon){stroke:var(--color-hover)}}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native{border-color:var(--border-color-focused)}:host(.ion-focused) .button-native::before{background:var(--bg-focused);opacity:var(--bg-focused-opacity);border-color:var(--border-color-focused)}:host(.ion-focused) ::slotted(ion-icon){stroke:var(--color-focused)}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native{border-color:var(--border-color-activated)}:host(.ion-activated) .button-native::before{background:var(--bg-activated);opacity:var(--bg-activated-opacity)}:host(.ion-activated) ::slotted(ion-icon){stroke:var(--color-activated)}:host(.med-button--tertiary.back-button-has-icon-only.med-color){--color-hover:hsl(var(--med-color-3));--bg-hover:hsl(var(--med-color-3));--bg-activated:hsl(var(--med-color-3));--color-activated:hsl(var(--med-color-3))}:host(.med-button--tertiary.back-button-has-icon-only.med-color) ion-ripple-effect{--ripple-color:hsl(var(--med-color-3));--ripple-opacity:0.16}:host(.med-button--tertiary.back-button-has-icon-only.med-color.button-disabled){--background:transparent !important}:host(.med-button--tertiary.back-button-has-icon-only.med-color-neutral){--color-hover:hsl(var(--med-color-neutral));--bg-hover:hsl(var(--med-color-neutral));--bg-hover-opacity:0.08;--bg-activated:hsl(var(--med-color-neutral));--bg-activated-opacity:0.16;--color-activated:hsl(var(--med-color-neutral))}:host(.med-button--tertiary.back-button-has-icon-only.med-color-neutral) ion-ripple-effect{--ripple-color:hsl(var(--med-color-neutral-));--ripple-opacity:0.16}:host(.med-button--tertiary.back-button-has-icon-only.med-color-neutral.button-disabled){--background:transparent !important}:host(.med-button--tertiary.back-button-has-icon-only.med-color-feedback){--color-hover:hsl(var(--med-color-feedback));--bg-hover:hsl(var(--med-color-feedback));--bg-hover-opacity:0.08;--bg-activated:hsl(var(--med-color-feedback));--bg-activated-opacity:0.16;--color-activated:hsl(var(--med-color-feedback))}:host(.med-button--tertiary.back-button-has-icon-only.med-color-feedback) ion-ripple-effect{--ripple-color:hsl(var(--med-color-feedback));--ripple-opacity:0.16}:host(.med-button--tertiary.back-button-has-icon-only.med-color-feedback.button-disabled){--background:transparent !important}:host(.med-button--tertiary.med-button--lg.back-button-has-icon-only){--min-height:64px;--min-width:64px;--icon-font-size:48px}:host(.med-button--tertiary.med-button--md.back-button-has-icon-only){--min-height:48px;--min-width:48px;--icon-font-size:32px}:host(.med-button--tertiary.med-button--sm.back-button-has-icon-only){--min-height:40px;--min-width:40px;--icon-font-size:24px}:host(.med-button--tertiary.med-button--xs.back-button-has-icon-only){--min-height:32px;--min-width:32px;--icon-font-size:24px}:host(.med-button--tertiary.med-button--xxs.back-button-has-icon-only){--min-height:24px;--min-width:24px;--icon-font-size:24px}:host(.med-button--tertiary.med-button--xxxs.back-button-has-icon-only){--min-height:16px;--min-width:16px;--icon-font-size:16px}';var b=':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}:host(.med-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.med-button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.med-button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.med-button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-0.3em;margin-right:0.3em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}::slotted(ion-icon[slot=end]){margin-left:0.3em;margin-right:-0.2em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.med-button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.med-button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.med-button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.med-button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.med-button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:4px;--padding-top:0;--padding-bottom:0;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1),\n                  background-color 15ms linear,\n                  color 15ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:36px;font-size:14px;font-weight:500;letter-spacing:0.06em;text-transform:uppercase}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.med-button-solid){--background-activated:transparent;--background-hover:var(--ion-color-primary-contrast, #fff);--background-focused:var(--ion-color-primary-contrast, #fff);--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.med-button-solid.ion-activated){--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}:host(.med-button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.med-button-outline.ion-activated.ion-color) .button-native{background:transparent}:host(.med-button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-strong){font-weight:bold}::slotted(ion-icon[slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host(.med-button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast);opacity:0.24}:host(.med-button-clear.ion-color.ion-focused) .button-native::after,:host(.med-button-outline.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base);opacity:0.12}@media (any-hover: hover){:host(.med-button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-contrast);opacity:0.08}:host(.med-button-clear.ion-color:hover) .button-native::after,:host(.med-button-outline.ion-color:hover) .button-native::after{background:var(--ion-color-base);opacity:0.04}}:host{--background:hsl(var(--med-color-brand-3));--border-color:hsl(var(--med-color-brand-3));--color:hsl(var(--med-color-contrast-fixed));--bg-hover:hsl(var(--med-color-brand-1));--bg-hover-opacity:1;--border-color-hover:transparent;--color-hover:hsl(var(--med-color-neutral-10));--bg-focused:hsl(var(--med-color-brand-1));--bg-focused-opacity:1;--border-color-focused:transparent;--color-focused:hsl(var(--med-color-neutral-10));--bg-activated:transparent;--bg-activated-opacity:0;--border-color-activated:transparent;--color-activated:hsl(var(--med-color-contrast-fixed));--border-radius:500px;--min-height:48px;--min-width:48px;--transition:background 300ms ease-out, color 300ms ease-out, border-color 300ms ease-out, opacity 300ms ease-out;--icon-font-size:24px}:host{min-height:var(--min-height);min-width:var(--min-width);height:auto;font-size:var(--font-size);font-weight:var(--font-weight);text-transform:uppercase;margin:0}:host .button-native::after{display:none}:host .button-native::before{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0;-webkit-transition:var(--transition);transition:var(--transition)}:host .button-native{padding:0 var(--padding);min-height:var(--min-height);line-height:var(--line-height);-webkit-box-shadow:none;box-shadow:none}:host(.med-button--tertiary){--background:transparent;--border-color:transparent;--color:hsl(var(--med-color-neutral-10));--padding:0;--min-height:24px;--min-width:24px;--border-radius:500px}ion-icon{min-width:var(--icon-font-size);font-size:var(--icon-font-size);stroke:var(--color);-webkit-transition:stroke 300ms ease-out;transition:stroke 300ms ease-out}:host(.med-button--tertiary.button-has-icon-only) ion-ripple-effect{--ripple-color:hsl(var(--med-color-neutral-10));--ripple-opacity:0.16}:host(.med-button--tertiary.back-button-has-icon-only){--color-hover:hsl(var(--med-color-neutral-10));--bg-hover:hsl(var(--med-color-neutral-10));--bg-hover-opacity:0.08;--bg-activated:hsl(var(--med-color-neutral-10));--bg-activated-opacity:0.16;--color-activated:hsl(var(--med-color-neutral-10));--min-height:48px;--min-width:48px;--icon-font-size:32px;--padding:0;--padding-text:0;--border-radius:50%;--min-height:32px;--min-width:32px;--icon-font-size:24px}:host(.med-button--tertiary.button-disabled){--bg-hover:transparent;--color:hsl(var(--med-color-neutral-5));cursor:initial;pointer-events:none}@media (any-hover: hover){:host(.med-button:hover){color:var(--color-hover)}:host(.med-button:hover) .button-native{border-color:var(--border-color-hover)}:host(.med-button:hover) .button-native::before{background:var(--bg-hover);opacity:var(--bg-hover-opacity)}:host(.med-button:hover) ::slotted(ion-icon){stroke:var(--color-hover)}}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native{border-color:var(--border-color-focused)}:host(.ion-focused) .button-native::before{background:var(--bg-focused);opacity:var(--bg-focused-opacity);border-color:var(--border-color-focused)}:host(.ion-focused) ::slotted(ion-icon){stroke:var(--color-focused)}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native{border-color:var(--border-color-activated)}:host(.ion-activated) .button-native::before{background:var(--bg-activated);opacity:var(--bg-activated-opacity)}:host(.ion-activated) ::slotted(ion-icon){stroke:var(--color-activated)}:host(.med-button--tertiary.back-button-has-icon-only.med-color){--color-hover:hsl(var(--med-color-3));--bg-hover:hsl(var(--med-color-3));--bg-activated:hsl(var(--med-color-3));--color-activated:hsl(var(--med-color-3))}:host(.med-button--tertiary.back-button-has-icon-only.med-color) ion-ripple-effect{--ripple-color:hsl(var(--med-color-3));--ripple-opacity:0.16}:host(.med-button--tertiary.back-button-has-icon-only.med-color.button-disabled){--background:transparent !important}:host(.med-button--tertiary.back-button-has-icon-only.med-color-neutral){--color-hover:hsl(var(--med-color-neutral));--bg-hover:hsl(var(--med-color-neutral));--bg-hover-opacity:0.08;--bg-activated:hsl(var(--med-color-neutral));--bg-activated-opacity:0.16;--color-activated:hsl(var(--med-color-neutral))}:host(.med-button--tertiary.back-button-has-icon-only.med-color-neutral) ion-ripple-effect{--ripple-color:hsl(var(--med-color-neutral-));--ripple-opacity:0.16}:host(.med-button--tertiary.back-button-has-icon-only.med-color-neutral.button-disabled){--background:transparent !important}:host(.med-button--tertiary.back-button-has-icon-only.med-color-feedback){--color-hover:hsl(var(--med-color-feedback));--bg-hover:hsl(var(--med-color-feedback));--bg-hover-opacity:0.08;--bg-activated:hsl(var(--med-color-feedback));--bg-activated-opacity:0.16;--color-activated:hsl(var(--med-color-feedback))}:host(.med-button--tertiary.back-button-has-icon-only.med-color-feedback) ion-ripple-effect{--ripple-color:hsl(var(--med-color-feedback));--ripple-opacity:0.16}:host(.med-button--tertiary.back-button-has-icon-only.med-color-feedback.button-disabled){--background:transparent !important}:host(.med-button--tertiary.med-button--lg.back-button-has-icon-only){--min-height:64px;--min-width:64px;--icon-font-size:48px}:host(.med-button--tertiary.med-button--md.back-button-has-icon-only){--min-height:48px;--min-width:48px;--icon-font-size:32px}:host(.med-button--tertiary.med-button--sm.back-button-has-icon-only){--min-height:40px;--min-width:40px;--icon-font-size:24px}:host(.med-button--tertiary.med-button--xs.back-button-has-icon-only){--min-height:32px;--min-width:32px;--icon-font-size:24px}:host(.med-button--tertiary.med-button--xxs.back-button-has-icon-only){--min-height:24px;--min-width:24px;--icon-font-size:24px}:host(.med-button--tertiary.med-button--xxxs.back-button-has-icon-only){--min-height:16px;--min-width:16px;--icon-font-size:16px}';var u=o("ion_back_button",function(){function o(o){var r=this;t(this,o);this.disabled=false;this.type="button";this.onClick=function(o){return __awaiter(r,void 0,void 0,(function(){var t,r;return __generator(this,(function(n){switch(n.label){case 0:t=this.el.closest("ion-nav");o.preventDefault();r=t;if(!r)return[3,2];return[4,t.canGoBack()];case 1:r=n.sent();n.label=2;case 2:if(r){return[2,t.pop({animationBuilder:this.routerAnimation,skipIfBusy:true})]}return[2,c(this.defaultHref,o,"back",this.routerAnimation)]}}))}))}}o.prototype.componentWillLoad=function(){if(this.defaultHref===undefined){this.defaultHref=a.get("backButtonDefaultHref")}};Object.defineProperty(o.prototype,"backButtonIcon",{get:function(){var o=this.icon;if(o!=null){return o}if(i(this)==="ios"){return a.get("backButtonIcon","med-esquerda")}return a.get("backButtonIcon","med-esquerda")},enumerable:false,configurable:true});Object.defineProperty(o.prototype,"backButtonText",{get:function(){var o=i(this)==="ios"?"Back":null;return this.text!=null?this.text:a.get("backButtonText",o)},enumerable:false,configurable:true});Object.defineProperty(o.prototype,"hasIconOnly",{get:function(){return this.backButtonIcon&&!this.backButtonText},enumerable:false,configurable:true});Object.defineProperty(o.prototype,"rippleType",{get:function(){if(this.hasIconOnly){return"unbounded"}return"bounded"},enumerable:false,configurable:true});o.prototype.render=function(){var o;var t=this,e=t.dsName,a=t.dsColor,c=t.dsSize,s=t.defaultHref,b=t.disabled,u=t.type,h=t.hasIconOnly,p=t.backButtonIcon,v=t.backButtonText;var m=s!==undefined;var g=i(this);return r(n,{onClick:this.onClick,class:l(a,(o={},o[g]=true,o["back-button-disabled"]=b,o["back-button-has-icon-only"]=h,o["in-toolbar"]=d("ion-toolbar",this.el),o["in-toolbar-color"]=d("ion-toolbar[color]",this.el),o["ion-activatable"]=true,o["ion-focusable"]=true,o["show-back-button"]=m,o["med-button"]=true,o["med-button--"+e]=e!==undefined,o["med-button--"+c]=c!==undefined,o))},r("button",{type:u,disabled:b,class:"button-native",part:"native","aria-label":v||"back"},r("span",{class:"button-inner"},p&&r("ion-icon",{class:"med-icon",part:"icon",icon:p,"aria-hidden":"true",lazy:false})),r("ion-ripple-effect",{type:this.rippleType})))};Object.defineProperty(o.prototype,"el",{get:function(){return e(this)},enumerable:false,configurable:true});return o}());u.style={ios:s,md:b}}}}));