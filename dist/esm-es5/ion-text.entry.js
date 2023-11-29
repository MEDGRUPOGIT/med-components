/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r as registerInstance,i as h,H as Host}from"./index-336c66d9.js";import{b as getIonMode}from"./ionic-global-e35a57a3.js";import{c as createColorClasses}from"./theme-a24ff1ad.js";var textCss=":host(.ion-color){color:var(--ion-color-base)}";var Text=function(){function o(o){registerInstance(this,o);this.color=undefined}o.prototype.render=function(){var o;var t=getIonMode(this);return h(Host,{class:createColorClasses(this.color,(o={},o[t]=true,o))},h("slot",null))};return o}();Text.style=textCss;export{Text as ion_text};