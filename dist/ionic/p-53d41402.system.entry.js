System.register(["./p-cc3b12d0.system.js","./p-304fa3e0.system.js","./p-6b5ccca2.system.js","./p-b5b01e2c.system.js","./p-ff3c9f7a.system.js"],(function(o){"use strict";var e,i,m,n;return{setters:[function(o){e=o.r;i=o.h;m=o.H},function(o){n=o.m},function(){},function(){},function(){}],execute:function(){var s=".sc-med-image-zoom-h{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;background-color:hsl(var(--med-color-neutral-1))}.sc-med-image-zoom-h .zoom-header.sc-med-image-zoom{position:fixed;width:100%;z-index:1;top:0}.sc-med-image-zoom-h .zoom-header__title.sc-med-image-zoom{color:hsl(var(--med-color-neutral-10));font-size:var(--med-font-size-xs);line-height:var(--med-line-height-compressed);font-weight:var(--med-font-weight-semibold)}.sc-med-image-zoom-h .zoom-header.sc-med-image-zoom .med-icon.sc-med-image-zoom{stroke:hsl(var(--med-color-neutral-10))}.sc-med-image-zoom-h .zoom-content.sc-med-image-zoom{--background:hsl(var(--med-color-neutral-1));height:100%;overflow-y:hidden}.sc-med-image-zoom-h ion-slides.sc-med-image-zoom{--bullet-background-active:hsl(var(--med-color-brand-3));display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;height:100%}.sc-med-image-zoom-h ion-slides.sc-med-image-zoom .swiper-pagination-bullet-active.sc-med-image-zoom{border:2px solid hsl(var(--med-color-brand-3))}.sc-med-image-zoom-h .swiper-zoom-container.sc-med-image-zoom{-ms-flex-direction:column;flex-direction:column}.sc-med-image-zoom-h .zoom-imagem.sc-med-image-zoom{width:auto;max-width:calc(100% - 50px);height:auto;max-height:calc(100% - 100px);-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;user-drag:none}.sc-med-image-zoom-h .swiper-slide-zoomed.sc-med-image-zoom .zoom-legenda-container.sc-med-image-zoom{display:none !important}.sc-med-image-zoom-h .zoom-legenda-container.sc-med-image-zoom{padding:16px 52px;text-align:justify}@media (max-width: 992px){.sc-med-image-zoom-h .zoom-legenda-container.sc-med-image-zoom{padding:16px 52px;padding-right:70px;text-align:justify}}.sc-med-image-zoom-h .zoom-legenda.sc-med-image-zoom{display:inline-block;color:hsl(var(--med-color-neutral-10));font-size:14px;max-width:992px;overflow-y:auto;max-height:60px}.sc-med-image-zoom-h .marca-agua-superior.sc-med-image-zoom{position:absolute;top:29%;z-index:1;width:100%;text-align:center;font-size:2.5em;opacity:0.01;color:hsl(var(--med-color-brand-3));pointer-events:none}.sc-med-image-zoom-h .marca-agua-inferior.sc-med-image-zoom{position:absolute;top:52%;z-index:1;width:100%;text-align:center;font-size:2.5em;opacity:0.02;color:hsl(var(--med-color-brand-3));pointer-events:none}.sc-med-image-zoom-h .zoom-button-container.sc-med-image-zoom{position:fixed;bottom:var(--med-spacing-stack-md);right:15px;height:175px;width:48px}.sc-med-image-zoom-h .zoom-button.sc-med-image-zoom{width:48px;height:48px;border:none;border-radius:50%;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;background-color:hsl(var(--med-color-neutral-6))}.sc-med-image-zoom-h .zoom-button.sc-med-image-zoom ion-icon.sc-med-image-zoom{font-size:24px;stroke:hsl(var(--med-color-neutral-10))}.sc-med-image-zoom-h .zoom-button.sc-med-image-zoom:not(:last-child){margin-bottom:var(--med-spacing-stack-base)}.sc-med-image-zoom-h .zoom-button--close.sc-med-image-zoom{background-color:hsl(var(--med-color-neutral-5))}.sc-med-image-zoom-h .zoom-button--close.sc-med-image-zoom ion-icon.sc-med-image-zoom{stroke:hsl(var(--med-color-neutral-10))}";var t=o("med_image_zoom",function(){function o(o){e(this,o);this.imagens=[];this.sliderOpts={zoom:{maxRation:5},intialSlide:1}}o.prototype.zoom=function(o){var e=this.slider.swiper.zoom;if(o){e.in()}else{e.out()}};o.prototype.dismiss=function(){n.dismiss()};o.prototype.render=function(){var o=this;return i(m,{"from-stencil":true},i("med-header",{class:"zoom-header"},i("med-navbar",{slot:"navbar","ds-name":"transparent","ds-theme":"light"},i("span",{slot:"title",innerHTML:this.titulo}),i("ion-button",{"ds-name":"tertiary",slot:"right",onClick:function(){return o.dismiss()}},i("ion-icon",{class:"med-icon",slot:"icon-only",name:"med-fechar"})))),i("ion-content",{class:"zoom-content"},i("ion-slides",{ref:function(e){o.slider=e;e.options=o.sliderOpts},pager:this.imagens&&this.imagens.length>1},this.imagens.map((function(e){return i("ion-slide",null,i("span",{class:"marca-agua-superior"},o.marcaAguaSuperior),i("div",{class:"swiper-zoom-container"},i("img",{class:"zoom-imagem",src:e===null||e===void 0?void 0:e.src}),i("div",{class:"zoom-legenda-container"},i("div",{class:"zoom-legenda",innerHTML:e===null||e===void 0?void 0:e.legenda}))))}))),i("span",{class:"marca-agua-inferior"},this.marcaAguaInferior)),i("div",{class:"zoom-button-container"},i("button",{class:"zoom-button",onClick:function(){return o.zoom(true)}},i("ion-icon",{class:"med-icon",name:"med-mais"})),i("button",{class:"zoom-button",onClick:function(){return o.zoom(false)}},i("ion-icon",{class:"med-icon",name:"med-menos"})),i("button",{class:"zoom-button zoom-button--close",onClick:function(){return o.dismiss()}},i("ion-icon",{class:"med-icon",name:"med-fechar"}))))};return o}());t.style=s}}}));