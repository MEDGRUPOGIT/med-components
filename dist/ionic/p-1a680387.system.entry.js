System.register(["./p-cc3b12d0.system.js"],(function(t){"use strict";var i,e,s,n;return{setters:[function(t){i=t.r;e=t.e;s=t.h;n=t.H}],execute:function(){var o=":host{--font-size:var(--med-font-size-xs);--font-weight:var(--med-font-weight-regular);--line-height:var(--med-line-height-double);--color:var(--med-theme-color, var(--med-color-neutral-dark-20));--text-align:justify;--image-list-padding-top:var(--med-spacing-stack-base);display:block;font-size:var(--font-size);font-weight:var(--font-weight);line-height:var(--line-height);color:var(--color);text-align:var(--text-align)}:host .list{padding:0;margin:0;list-style:none;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;padding-top:var(--image-list-padding-top);-ms-flex-direction:column;flex-direction:column}@media (min-width: 768px){:host .list{-ms-flex-direction:row;flex-direction:row}}@media (min-width: 992px){:host .list{-ms-flex-direction:row;flex-direction:row}}:host .list__item{max-width:100%;cursor:pointer}:host .list__item:not(:last-child){padding-right:0;padding-bottom:16px}@media (min-width: 768px){:host .list__item{max-width:50%;padding-bottom:0}:host .list__item:not(:last-child){padding-right:16px}}@media (min-width: 992px){:host .list__item{max-width:33.33%;padding-bottom:0}:host .list__item:not(:last-child){padding-right:16px}}:host .list__image{width:100%;height:auto;display:block}:host .number{font-weight:var(--med-font-weight-bold);color:var(--med-color-questoes-medium)}";var a=t("med_enunciado_discursiva",function(){function t(t){i(this,t);this.medGalleryRequest=e(this,"medGalleryRequest",7)}t.prototype.imageRequest=function(t){this.medGalleryRequest.emit(t)};t.prototype.render=function(){var t=this;var i;if(this.imagens){this.imagens=typeof this.imagens==="string"?JSON.parse(this.imagens):this.imagens;i=s("ul",{class:"list"},this.imagens.map((function(i){return s("li",{class:"list__item",onClick:function(){return t.imageRequest(i)}},s("img",{class:"list__image",src:i,alt:""}))})))}return s(n,{"from-stencil":true},s("span",{class:"number"},"01 -"),s("slot",null),i)};return t}());a.style=o}}}));