import{__awaiter,__generator}from"tslib";import{r as registerInstance,h,H as Host,i as getElement}from"./index-70672e81.js";import{b as getIonMode}from"./ionic-global-10d9ffcf.js";import{g as generateMedColor}from"./med-theme-33df6a63.js";var iosMedListaCss=':host{--border-radius:8px;--border:1px solid color("neutral", "2")}:host{display:block;background:var(--background);border-radius:var(--border-radius)}:host(.list-padding) ::slotted(med-item){--padding:12px 16px}::slotted(med-item:not(:last-child)){border-bottom:var(--border)}:host(.med-color){--background:hsl(var(--med-color-3))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback))}';var mdMedListaCss=':host{--border-radius:8px;--border:1px solid color("neutral", "2")}:host{display:block;background:var(--background);border-radius:var(--border-radius)}:host(.list-padding) ::slotted(med-item){--padding:12px 16px}::slotted(med-item:not(:last-child)){border-bottom:var(--border)}:host(.med-color){--background:hsl(var(--med-color-3))}:host(.med-color-neutral){--background:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--background:hsl(var(--med-color-feedback))}';var List=function(){function e(e){registerInstance(this,e);this.padding=false;this.inset=false}e.prototype.closeSlidingItems=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(r){e=this.el.querySelector("ion-item-sliding");if(e&&e.closeOpened){return[2,e.closeOpened()]}return[2,false]}))}))};e.prototype.render=function(){var e;var r=getIonMode(this);var o=this,t=o.lines,s=o.inset,d=o.dsColor,i=o.padding;return h(Host,{class:generateMedColor(d,(e={},e[r]=true,e["list-inset"]=s,e["list-lines-"+t]=t!==undefined,e["list-"+r+"-lines-"+t]=t!==undefined,e["list-padding"]=i,e))},h("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();List.style={ios:iosMedListaCss,md:mdMedListaCss};export{List as med_lista};