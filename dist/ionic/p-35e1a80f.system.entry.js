/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
System.register(["./p-67c3a2a8.system.js","./p-32ad210f.system.js","./p-ff4b7e40.system.js","./p-4609d030.system.js","./p-ef3a6b51.system.js"],(function(o){"use strict";var t,n,r,i,e,a,s,c,l,d,u,b,h;return{setters:[function(o){t=o.j;n=o.r;r=o.d;i=o.h;e=o.H;a=o.f},function(o){s=o.n;c=o.i},function(o){l=o.p},function(o){d=o.o;u=o.c;b=o.h},function(o){h=o.b}],execute:function(){var f;var v=function(){if(typeof window==="undefined"){return new Map}else{if(!f){var o=window;o.Ionicons=o.Ionicons||{};f=o.Ionicons.map=o.Ionicons.map||new Map}return f}};var p=function(o){var t=k(o.src);if(t){return t}t=m(o.name,o.icon,o.mode,o.ios,o.md);if(t){return g(t,o)}if(o.icon){t=k(o.icon);if(t){return t}t=k(o.icon[o.mode]);if(t){return t}}return null};var g=function(o,n){var r=v().get(o);if(r){return r}try{return t("svg/".concat(o,".svg"))}catch(t){console.warn('[Ionicons Warning]: Could not load icon with name "'.concat(o,'". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.'),n)}};var m=function(o,t,n,r,i){n=(n&&y(n))==="ios"?"ios":"md";if(r&&n==="ios"){o=y(r)}else if(i&&n==="md"){o=y(i)}else{if(!o&&t&&!x(t)){o=t}if(w(o)){o=y(o)}}if(!w(o)||o.trim()===""){return null}var e=o.replace(/[a-z]|-|\d/gi,"");if(e!==""){return null}return o};var k=function(o){if(w(o)){o=o.trim();if(x(o)){return o}}return null};var x=function(o){return o.length>0&&/(\/|\.)/.test(o)};var w=function(o){return typeof o==="string"};var y=function(o){return o.toLowerCase()};var z=function(o,t){if(t===void 0){t=[]}var n={};t.forEach((function(t){if(o.hasAttribute(t)){var r=o.getAttribute(t);if(r!==null){n[t]=o.getAttribute(t)}o.removeAttribute(t)}}));return n};var j=function(o){if(o){if(o.dir!==""){return o.dir.toLowerCase()==="rtl"}}return(document===null||document===void 0?void 0:document.dir.toLowerCase())==="rtl"};var O=':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted(ion-icon){font-size:1.35em;pointer-events:none}::slotted(ion-icon[slot=start]){-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=end]){-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host(.button-outline.ion-activated.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--color));color:var(--ion-toolbar-background, var(--background), var(--ion-color-primary-contrast, #fff))}:host{--border-radius:14px;--padding-top:13px;--padding-bottom:13px;--padding-start:1em;--padding-end:1em;--transition:background-color, opacity 100ms linear;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:4px;margin-bottom:4px;min-height:3.1em;font-size:min(1rem, 48px);font-weight:500;letter-spacing:0}:host(.button-solid){--background-activated:var(--ion-color-primary-shade, #3171e0);--background-focused:var(--ion-color-primary-shade, #3171e0);--background-hover:var(--ion-color-primary-tint, #4c8dff);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1}:host(.button-outline){--border-radius:14px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary, #3880ff);--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;--color-activated:var(--ion-color-primary-contrast, #fff)}:host(.button-clear){--background-activated:transparent;--background-activated-opacity:0;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;font-size:min(1.0625rem, 51px);font-weight:normal}:host(.in-buttons){font-size:clamp(17px, 1.0625rem, 21.08px);font-weight:400}:host(.button-large){--border-radius:16px;--padding-top:17px;--padding-start:1em;--padding-end:1em;--padding-bottom:17px;min-height:3.1em;font-size:min(1.25rem, 60px)}:host(.button-small){--border-radius:6px;--padding-top:4px;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:4px;min-height:2.1em;font-size:min(0.8125rem, 39px)}:host(.button-has-icon-only){--padding-top:0;--padding-bottom:0}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-strong){font-weight:600}:host(.button-outline.ion-focused.ion-color) .button-native,:host(.button-clear.ion-focused.ion-color) .button-native{color:var(--ion-color-base)}:host(.button-outline.ion-focused.ion-color) .button-native::after,:host(.button-clear.ion-focused.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-shade)}@media (any-hover: hover){:host(.button-clear:not(.ion-activated):hover),:host(.button-outline:not(.ion-activated):hover){opacity:0.6}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:transparent}:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-tint)}:host(:hover.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color):not(.ion-activated)) .button-native::after{background:#fff;opacity:0.1}}:host(.button-clear.ion-activated){opacity:0.4}:host(.button-outline.ion-activated.ion-color) .button-native{color:var(--ion-color-contrast)}:host(.button-outline.ion-activated.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-activated) .button-native::after{background:var(--ion-color-shade)}';var M=':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted(ion-icon){font-size:1.35em;pointer-events:none}::slotted(ion-icon[slot=start]){-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=end]){-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host(.button-outline.ion-activated.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--color));color:var(--ion-toolbar-background, var(--background), var(--ion-color-primary-contrast, #fff))}:host{--border-radius:4px;--padding-top:8px;--padding-bottom:8px;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1),\n                background-color 15ms linear,\n                color 15ms linear;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:4px;margin-bottom:4px;min-height:36px;font-size:0.875rem;font-weight:500;letter-spacing:0.06em;text-transform:uppercase}:host(.button-solid){--background-activated:transparent;--background-hover:var(--ion-color-primary-contrast, #fff);--background-focused:var(--ion-color-primary-contrast, #fff);--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.button-solid.ion-activated){--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}:host(.button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-outline.ion-activated.ion-color) .button-native{background:transparent}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:14px;--padding-start:1em;--padding-end:1em;--padding-bottom:14px;min-height:2.8em;font-size:1.25rem}:host(.button-small){--padding-top:4px;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:4px;min-height:2.1em;font-size:0.8125rem}:host(.button-has-icon-only){--padding-top:0;--padding-bottom:0}:host(.button-strong){font-weight:bold}::slotted(ion-icon[slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color.ion-focused) .button-native::after,:host(.button-outline.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}';var X=o("ion_button",function(){function o(o){var t=this;n(this,o);this.ionFocus=r(this,"ionFocus",7);this.ionBlur=r(this,"ionBlur",7);this.inItem=false;this.inListHeader=false;this.inToolbar=false;this.formButtonEl=null;this.formEl=null;this.inheritedAttributes={};this.handleClick=function(o){var n=t.el;if(t.type==="button"){d(t.href,o,t.routerDirection,t.routerAnimation)}else if(s(n)){t.submitForm(o)}};this.onFocus=function(){t.ionFocus.emit()};this.onBlur=function(){t.ionBlur.emit()};this.color=undefined;this.buttonType="button";this.disabled=false;this.expand=undefined;this.fill=undefined;this.routerDirection="forward";this.routerAnimation=undefined;this.download=undefined;this.href=undefined;this.rel=undefined;this.shape=undefined;this.size=undefined;this.strong=false;this.target=undefined;this.type="button";this.form=undefined}o.prototype.disabledChanged=function(){var o=this.disabled;if(this.formButtonEl){this.formButtonEl.disabled=o}};o.prototype.renderHiddenButton=function(){var o=this.formEl=this.findForm();if(o){var t=this.formButtonEl;if(t!==null&&o.contains(t)){return}var n=this.formButtonEl=document.createElement("button");n.type=this.type;n.style.display="none";n.disabled=this.disabled;o.appendChild(n)}};o.prototype.componentWillLoad=function(){this.inToolbar=!!this.el.closest("ion-buttons");this.inListHeader=!!this.el.closest("ion-list-header");this.inItem=!!this.el.closest("ion-item")||!!this.el.closest("ion-item-divider");this.inheritedAttributes=c(this.el)};Object.defineProperty(o.prototype,"hasIconOnly",{get:function(){return!!this.el.querySelector('[slot="icon-only"]')},enumerable:false,configurable:true});Object.defineProperty(o.prototype,"rippleType",{get:function(){var o=this.fill===undefined||this.fill==="clear";if(o&&this.hasIconOnly&&this.inToolbar){return"unbounded"}return"bounded"},enumerable:false,configurable:true});o.prototype.findForm=function(){var o=this.form;if(o instanceof HTMLFormElement){return o}if(typeof o==="string"){var t=document.getElementById(o);if(t){if(t instanceof HTMLFormElement){return t}else{l('Form with selector: "#'.concat(o,'" could not be found. Verify that the id is attached to a <form> element.'),this.el);return null}}else{l('Form with selector: "#'.concat(o,'" could not be found. Verify that the id is correct and the form is rendered in the DOM.'),this.el);return null}}if(o!==undefined){l('The provided "form" element is invalid. Verify that the form is a HTMLFormElement and rendered in the DOM.',this.el);return null}return this.el.closest("form")};o.prototype.submitForm=function(o){if(this.formEl&&this.formButtonEl){o.preventDefault();this.formButtonEl.click()}};o.prototype.render=function(){var o;var t=h(this);var n=this,r=n.buttonType,a=n.type,s=n.disabled,c=n.rel,l=n.target,d=n.size,f=n.href,v=n.color,p=n.expand,g=n.hasIconOnly,m=n.shape,k=n.strong,x=n.inheritedAttributes;var w=d===undefined&&this.inItem?"small":d;var y=f===undefined?"button":"a";var z=y==="button"?{type:a}:{download:this.download,href:f,rel:c,target:l};var j=this.fill;if(j==null){j=this.inToolbar||this.inListHeader?"clear":"solid"}{a!=="button"&&this.renderHiddenButton()}return i(e,{onClick:this.handleClick,"aria-disabled":s?"true":null,class:u(v,(o={},o[t]=true,o[r]=true,o["".concat(r,"-").concat(p)]=p!==undefined,o["".concat(r,"-").concat(w)]=w!==undefined,o["".concat(r,"-").concat(m)]=m!==undefined,o["".concat(r,"-").concat(j)]=true,o["".concat(r,"-strong")]=k,o["in-toolbar"]=b("ion-toolbar",this.el),o["in-toolbar-color"]=b("ion-toolbar[color]",this.el),o["in-buttons"]=b("ion-buttons",this.el),o["button-has-icon-only"]=g,o["button-disabled"]=s,o["ion-activatable"]=true,o["ion-focusable"]=true,o))},i(y,Object.assign({},z,{class:"button-native",part:"native",disabled:s,onFocus:this.onFocus,onBlur:this.onBlur},x),i("span",{class:"button-inner"},i("slot",{name:"icon-only"}),i("slot",{name:"start"}),i("slot",null),i("slot",{name:"end"})),t==="md"&&i("ion-ripple-effect",{type:this.rippleType})))};Object.defineProperty(o.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(o,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:false,configurable:true});return o}());X.style={ios:O,md:M};var I=function(o){var t=document.createElement("div");t.innerHTML=o;for(var n=t.childNodes.length-1;n>=0;n--){if(t.childNodes[n].nodeName.toLowerCase()!=="svg"){t.removeChild(t.childNodes[n])}}var r=t.firstElementChild;if(r&&r.nodeName.toLowerCase()==="svg"){var i=r.getAttribute("class")||"";r.setAttribute("class",(i+" s-ion-icon").trim());if(C(r)){return t.innerHTML}}return""};var C=function(o){if(o.nodeType===1){if(o.nodeName.toLowerCase()==="script"){return false}for(var t=0;t<o.attributes.length;t++){var n=o.attributes[t].name;if(w(n)&&n.toLowerCase().indexOf("on")===0){return false}}for(var t=0;t<o.childNodes.length;t++){if(!C(o.childNodes[t])){return false}}}return true};var F=function(o){return o.startsWith("data:image/svg+xml")};var T=function(o){return o.indexOf(";utf8,")!==-1};var D=new Map;var E=new Map;var H;var L=function(o,t){var n=E.get(o);if(!n){if(typeof fetch!=="undefined"&&typeof document!=="undefined"){if(F(o)&&T(o)){if(!H){H=new DOMParser}var r=H.parseFromString(o,"text/html");var i=r.querySelector("svg");if(i){D.set(o,i.outerHTML)}return Promise.resolve()}else{n=fetch(o).then((function(n){if(n.ok){return n.text().then((function(n){if(n&&t!==false){n=I(n)}D.set(o,n||"")}))}D.set(o,"")}));E.set(o,n)}}else{D.set(o,"");return Promise.resolve()}}return n};var V=":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";var P=o("ion_icon",function(){function o(o){n(this,o);this.iconName=null;this.inheritedAttributes={};this.didLoadIcon=false;this.svgContent=undefined;this.isVisible=false;this.mode=B();this.color=undefined;this.ios=undefined;this.md=undefined;this.flipRtl=undefined;this.name=undefined;this.src=undefined;this.icon=undefined;this.size=undefined;this.lazy=false;this.sanitize=true}o.prototype.componentWillLoad=function(){this.inheritedAttributes=z(this.el,["aria-label"])};o.prototype.connectedCallback=function(){var o=this;this.waitUntilVisible(this.el,"50px",(function(){o.isVisible=true;o.loadIcon()}))};o.prototype.componentDidLoad=function(){if(!this.didLoadIcon){this.loadIcon()}};o.prototype.disconnectedCallback=function(){if(this.io){this.io.disconnect();this.io=undefined}};o.prototype.waitUntilVisible=function(o,t,n){var r=this;if(this.lazy&&typeof window!=="undefined"&&window.IntersectionObserver){var i=this.io=new window.IntersectionObserver((function(o){if(o[0].isIntersecting){i.disconnect();r.io=undefined;n()}}),{rootMargin:t});i.observe(o)}else{n()}};o.prototype.loadIcon=function(){var o=this;if(this.isVisible){var t=p(this);if(t){if(D.has(t)){this.svgContent=D.get(t)}else{L(t,this.sanitize).then((function(){return o.svgContent=D.get(t)}))}this.didLoadIcon=true}}this.iconName=m(this.name,this.icon,this.mode,this.ios,this.md)};o.prototype.render=function(){var o,t;var n=this,r=n.flipRtl,a=n.iconName,s=n.inheritedAttributes,c=n.el;var l=this.mode||"md";var d=a?(a.includes("arrow")||a.includes("chevron"))&&r!==false:false;var u=r||d;return i(e,Object.assign({role:"img",class:Object.assign(Object.assign((o={},o[l]=true,o),S(this.color)),(t={},t["icon-".concat(this.size)]=!!this.size,t["flip-rtl"]=u,t["icon-rtl"]=u&&j(c),t))},s),this.svgContent?i("div",{class:"icon-inner",innerHTML:this.svgContent}):i("div",{class:"icon-inner"}))};Object.defineProperty(o,"assetsDirs",{get:function(){return["svg"]},enumerable:false,configurable:true});Object.defineProperty(o.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(o,"watchers",{get:function(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"],ios:["loadIcon"],md:["loadIcon"]}},enumerable:false,configurable:true});return o}());var B=function(){return typeof document!=="undefined"&&document.documentElement.getAttribute("mode")||"md"};var S=function(o){var t;return o?(t={"ion-color":true},t["ion-color-".concat(o)]=true,t):null};P.style=V}}}));