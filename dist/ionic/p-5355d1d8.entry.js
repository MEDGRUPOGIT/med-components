import{r as e,e as a,h as t,H as i,i as s}from"./p-4d70e85a.js";import{g as r}from"./p-06394cd8.js";function n(e,a){if(!e||!a)return NaN;const t=e.x-a.x,i=e.y-a.y;return Math.sqrt(t*t+i*i)}function d(e){return e.touches&&e.touches.length>0?{x:e.touches[0].screenX,y:e.touches[0].screenY}:e.changedTouches&&e.changedTouches.length>0?{x:e.changedTouches[0].screenX,y:e.changedTouches[0].screenY}:e.screenX&&e.screenY?{x:e.screenX,y:e.screenY}:void 0}const m=class{constructor(t){e(this,t),this.medChange=a(this,"medChange",7),this.medRiscada=a(this,"medRiscada",7),this.medGalleryRequest=a(this,"medGalleryRequest",7),this.alternativas=[],this.keyAlternativa="Alternativa",this.keyEnunciado="Enunciado",this.keyImagem="Imagem",this.keyPorcentagem="Porcentagem",this.keyRiscada="Riscada",this.permiteRiscar=!0,this.permiteAlterar=!0,this.riscarAtivoIndice=-1,this.distanciaMinimaClick=50,this.tempoLongPress=1e3}handleClick(e){e.target.classList.contains("med-alternativas")||this.resetState()}onAlternativasChanged(e,a){e!=a&&this.resetState()}resetState(){this.riscarAtivoIndice=-1,this.permiteAlterar=!0}onTouchStart(e,a){var t;(null===(t=e.target.closest(".med-alternativas__riscar"))||void 0===t?void 0:t.classList.contains("med-alternativas__riscar"))||(this.dataStart=new Date,this.positionStart=d(e),this.timer=setTimeout((()=>{this.dataEnd=new Date,this.dataEnd.getTime()-this.dataStart.getTime()>=this.tempoLongPress&&(this.riscarAtivoIndice=a,this.permiteAlterar=!1)}),this.tempoLongPress))}onTouchEnd(e,a){var t;if(null===(t=e.target.closest(".med-alternativas__riscar"))||void 0===t?void 0:t.classList.contains("med-alternativas__riscar"))return;const i=d(e);clearTimeout(this.timer),this.permiteAlterar&&n(this.positionStart,i)<this.distanciaMinimaClick&&(this.riscarAtivoIndice=-1,this.alterarAlternativa(a)),this.permiteAlterar=!0}alterarAlternativa(e){const a=e;a.Riscada&&this.permiteRiscar||(this.alternativaSelecionada=a.Alternativa,this.medChange.emit(a))}riscar(e,a){e.stopPropagation(),a[this.keyRiscada]=!a[this.keyRiscada],this.riscarAtivoIndice=-1,this.medRiscada.emit(a),this.permiteAlterar=!0,this.alternativas=[...this.alternativas]}imageRequest(e,a){e.stopPropagation(),this.medGalleryRequest.emit(a)}render(){const{dsColor:e,permiteRiscar:a,mostraResposta:s,alternativaSelecionada:n}=this,d=this.alternativaSelecionada&&s;let m=!1;return this.alternativas&&this.alternativas.forEach((e=>{e.Imagem&&(m=!0)})),t(i,{"from-stencil":!0,class:r(e,{"med-alternativas":!0})},t("div",{class:`\n           med-alternativas__list\n           ${m?"med-alternativas__list--has-image":""}\n           `,role:"list"},this.alternativas.map(((e,i)=>t("div",{role:"listitem",onTouchStart:e=>this.onTouchStart(e,i),onTouchEnd:a=>this.onTouchEnd(a,e),onMouseDown:e=>this.onTouchStart(e,i),onMouseUp:a=>this.onTouchEnd(a,e),class:`\n                med-alternativas__item med-alternativas__item--${e[this.keyAlternativa]}\n                ${a?"med-alternativas__item--permite-riscar":""}\n                ${i===this.riscarAtivoIndice&&a?"med-alternativas__item--show":""}\n                ${e[this.keyRiscada]&&a?"med-alternativas__item--riscado":""}\n                ${d&&e[this.keyAlternativa]===this.respostaCorreta&&this.respostaCorreta===this.alternativaSelecionada?"med-alternativas__item--correta":""}\n                ${d&&e[this.keyAlternativa]===this.respostaCorreta&&this.respostaCorreta!==this.alternativaSelecionada?"med-alternativas__item--certa":""}\n                ${d&&e[this.keyAlternativa]!==this.respostaCorreta&&e[this.keyAlternativa]===this.alternativaSelecionada?"med-alternativas__item--incorreta":""}\n                ${d||e[this.keyAlternativa]!==this.alternativaSelecionada?"":"med-alternativas__item--selecionada"}\n              `},t("div",{class:"med-alternativas__wrapper"},t("div",{class:"med-alternativas__container"},t("div",{class:"med-alternativas__left"},t("div",{class:"option"},t("span",{class:"option__fake"}),t("span",{class:"option__letter"},e[this.keyAlternativa]))),t("div",{class:"med-alternativas__right",innerHTML:e[this.keyEnunciado]},e[this.keyImagem]&&t("div",{class:"image-container "+(e[this.keyEnunciado]?"image-container--margin":""),onClick:a=>this.imageRequest(a,e)},t("div",{class:"image-container__wrapper"},t("img",{class:"image-container__image",src:e[this.keyImagem]}),t("div",{class:"image-container__button"},t("ion-icon",{name:"med-expand image-container__icon"}))))),t("div",{class:"med-alternativas__riscar "+(i===this.riscarAtivoIndice&&a?"med-alternativas__riscar--show":""),onClick:a=>this.riscar(a,e)},t("ion-icon",{class:"med-alternativas__riscar-icon med-icon",name:"med-riscar"}),t("div",{class:"med-alternativas__riscar-span"},e[this.keyRiscada]?"Restaurar ":"Riscar ",t("span",{class:"med-alternativas__riscar-desktop"}," alternativa"))))),t("ion-progress-bar",{percentage:!0,class:`\n                med-alternativas__progress-bar\n                ${s&&n?"med-alternativas__progress-bar--toggle":""}\n              `,value:e[this.keyPorcentagem]}))))))}get hostElement(){return s(this)}static get watchers(){return{alternativas:["onAlternativasChanged"]}}};m.style=':root{--med-font-family-brand:"fsemeric";--med-font-family-base:"fsemeric";--med-font-size-nano:10px;--med-font-size-xxxs:12px;--med-font-size-xxs:14px;--med-font-size-xs:16px;--med-font-size-sm:20px;--med-font-size-md:24px;--med-font-size-lg:32px;--med-font-size-xl:40px;--med-font-size-xxl:48px;--med-font-size-xxxl:64px;--med-font-size-huge:96px;--med-font-weight-thin:250;--med-font-weight-light:300;--med-font-weight-regular:400;--med-font-weight-medium:500;--med-font-weight-semibold:600;--med-font-weight-bold:700;--med-font-weight-extrabold:800;--med-font-weight-heavy:900;--med-letter-spacing-ultracompressed:-0.04;--med-letter-spacing-compressed:-0.02;--med-letter-spacing-default:0;--med-letter-spacing-medium:0.02;--med-letter-spacing-expanded:0.05;--med-letter-spacing-distant:0.1;--med-letter-spacing-far:0.2;--med-line-height-compressed:100%;--med-line-height-default:24px;--med-line-height-double:200%}:root{--med-spacing-inset-nano:4px;--med-spacing-inset-xs:8px;--med-spacing-inset-sm:16px;--med-spacing-inset-base:24px;--med-spacing-inset-md:32px;--med-spacing-inset-lg:40px;--med-spacing-inset-xl:48px;--med-spacing-inset-xxl:64px;--med-spacing-squish-nano:4px 8px;--med-spacing-squish-xs:8px 16px;--med-spacing-squish-sm:8px 24px;--med-spacing-squish-base:8px 32px;--med-spacing-squish-md:16px 24px;--med-spacing-squish-lg:16px 32px;--med-spacing-squish-xl:24px 32px;--med-spacing-squish-xxl:32px 40px;--med-spacing-stretch-nano:8px 4px;--med-spacing-stretch-xs:16px 8px;--med-spacing-stretch-sm:24px 8px;--med-spacing-stretch-base:32px 8px;--med-spacing-stretch-md:24px 16px;--med-spacing-stretch-lg:32px 16px;--med-spacing-stretch-xl:32px 24px;--med-spacing-stretch-xxl:40px 32px;--med-spacing-inline-quark:2px;--med-spacing-inline-nano:4px;--med-spacing-inline-xxxs:8px;--med-spacing-inline-base:16px;--med-spacing-inline-xxs:24px;--med-spacing-inline-xs:32px;--med-spacing-inline-sm:40px;--med-spacing-inline-md:48px;--med-spacing-inline-lg:56px;--med-spacing-inline-xl:64px;--med-spacing-inline-xxl:72px;--med-spacing-inline-xxxl:80px;--med-spacing-inline-huge:120px;--med-spacing-inline-ultra:160px;--med-spacing-stack-quark:2px;--med-spacing-stack-nano:4px;--med-spacing-stack-xxxs:8px;--med-spacing-stack-base:16px;--med-spacing-stack-xxs:24px;--med-spacing-stack-xs:32px;--med-spacing-stack-sm:40px;--med-spacing-stack-md:48px;--med-spacing-stack-lg:56px;--med-spacing-stack-xl:64px;--med-spacing-stack-xxl:72px;--med-spacing-stack-xxxl:80px;--med-spacing-stack-huge:120px;--med-spacing-stack-ultra:160px}:root{--med-border-radius-none:0;--med-border-radius-quark:2px;--med-border-radius-nano:4px;--med-border-radius-sm:8px;--med-border-radius-md:16px;--med-border-radius-lg:24px;--med-border-radius-pill:31.25em;--med-border-radius-full:50%;--med-border-radius-speech-left-down:8px 8px 8px 0;--med-border-radius-speech-right-down:8px 8px 0 8px;--med-border-radius-speech-right-up:8px 0 8px 0px;--med-border-radius-speech-left-up:0 8px 8px 0px;--med-border-radius-table-down-sm:0 0 8px 8px;--med-border-radius-table-up-sm:8px 8px 0 0;--med-border-radius-table-down-md:16px 16px 0 0;--med-border-radius-table-up-md:0 0 16px 16px;--med-border-width-none:0;--med-border-width-quark:0.25px;--med-border-width-nano:0.5px;--med-border-width-hairline:1px;--med-border-width-thin:2px;--med-border-width-thick:4px;--med-border-width-bold:8px;--med-border-width-heavy:16px;--med-opacity-level-semiopaque:0.8;--med-opacity-level-intense:0.64;--med-opacity-level-half:0.5;--med-opacity-level-medium:0.32;--med-opacity-level-light:0.16;--med-opacity-level-semitransparent:0.08;--med-shadow-level-0:none;--med-shadow-level-1:0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 3px rgba(0, 0, 0, 0.2);--med-shadow-level-2:0 2px 4px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-3:0 3px 3px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-4:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-5:0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-6:0 8px 10px rgba(0, 0, 0, 0.14), 0 3px 14px rgba(0, 0, 0, 0.12), 0 4px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-7:0 9px 12px rgba(0, 0, 0, 0.14), 0 3px 16px rgba(0, 0, 0, 0.12), 0 5px 6px rgba(0, 0, 0, 0.2);--med-shadow-level-8:0 12px 17px rgba(0, 0, 0, 0.14), 0 5px 22px rgba(0, 0, 0, 0.12), 0 7px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-9:0 16px 24px rgba(0, 0, 0, 0.14), 0 6px 30px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-10:0 24px 38px rgba(0, 0, 0, 0.14), 0 9px 46px rgba(0, 0, 0, 0.12), 0 11px 15px rgba(0, 0, 0, 0.2)}:host(.med-alternativas) .med-alternativas__container{display:-ms-flexbox;display:flex}:host(.med-alternativas) .med-alternativas__item{cursor:pointer;position:relative;-webkit-transition:background-color 300ms;transition:background-color 300ms;min-height:80px}:host(.med-alternativas) .option{background:hsl(var(--med-color-neutral-8));padding:var(--med-spacing-inset-xs);border-radius:var(--med-border-radius-sm);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer}:host(.med-alternativas) .option__letter{font-size:var(--med-font-size-xs);font-weight:var(--med-font-weight-medium);line-height:var(--med-line-height-compressed);color:hsl(var(--med-color-neutral-1))}:host(.med-alternativas) .option__fake{height:16px;width:16px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background:#fff;border-radius:var(--med-border-radius-full);margin:0 var(--med-spacing-inline-nano) 0 0;position:relative}.option__fake:before{content:"";display:inline-block;width:8px;height:8px;background:hsl(var(--med-color-brand-3));opacity:0;-webkit-transition:opacity 300ms;transition:opacity 300ms;border-radius:var(--med-border-radius-full)}:host(.med-alternativas) .med-alternativas__left{padding:var(--med-spacing-stack-base) var(--med-spacing-stack-base) calc(var(--med-spacing-stack-base) - 10px) var(--med-spacing-stack-base)}:host(.med-alternativas) .med-alternativas__right{-ms-flex:1 1 0%;flex:1 1 0%;overflow:hidden;text-align:left;padding:var(--med-spacing-stack-base) var(--med-spacing-stack-base) calc(var(--med-spacing-stack-base) - 10px) 0;font-size:var(--med-font-size-xs);font-weight:var(--med-font-weight-regular);line-height:24px;text-align:justify;color:hsl(var(--med-color-neutral-9));cursor:pointer}:host(.med-alternativas) .med-alternativas__wrapper{min-height:80px}:host(.med-alternativas) .med-alternativas__progress-bar{--height:10px;-webkit-transition:all 300ms ease;transition:all 300ms ease;opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}:host(.med-alternativas) .med-alternativas__riscar-icon{stroke:hsl(var(--med-color-neutral-10));--ionicon-stroke-width:1px}@media (min-width: 768px){:host(.med-alternativas) .med-alternativas__list--has-image{display:grid;grid-template-columns:1fr 1fr;gap:16px}}:host(.med-alternativas) .med-alternativas__list--has-image .med-alternativas__riscar{position:absolute;top:10px;right:10px;height:auto;z-index:1;background:#000;padding:var(--med-spacing-inset-xs);border-radius:5px;opacity:0.5}:host(.med-alternativas) .image-container__image{max-width:360px;width:100%;height:auto;display:block}:host(.med-alternativas) .med-alternativas__progress-bar--toggle{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}:host(.med-alternativas) .med-alternativas__item--selecionada .option{background:hsl(var(--med-color-brand-4))}:host(.med-alternativas) .med-alternativas__item--certa .option{background:hsl(var(--med-color-fb-success))}:host(.med-alternativas) .med-alternativas__item--correta .option{background:hsl(var(--med-color-fb-success))}:host(.med-alternativas) .med-alternativas__item--incorreta .option{background:hsl(var(--med-color-fb-warning))}:host(.med-alternativas) .med-alternativas__item--selecionada .option__fake:before,:host(.med-alternativas) .med-alternativas__item--correta .option__fake:before,:host(.med-alternativas) .med-alternativas__item--incorreta .option__fake:before{opacity:1}:host(.med-alternativas) .med-alternativas__item--certa .option__fake:before{opacity:0}:host(.med-alternativas) .med-alternativas__item--show{background:hsl(var(--med-color-neutral-2))}:host(.med-alternativas) .med-alternativas__riscar{color:hsl(var(--med-color-neutral-10));padding:var(--med-spacing-inline-base);font-size:var(--med-font-size-xxs);font-weight:var(--med-font-weight-regular);line-height:var(--med-line-height-compressed);height:100%;display:none;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}:host(.med-alternativas) .med-alternativas__item--riscado .med-alternativas__left,:host(.med-alternativas) .med-alternativas__item--riscado .med-alternativas__right,:host(.med-alternativas) .med-alternativas__item--riscado .med-alternativas__progress-bar{opacity:0.5}:host(.med-alternativas) .med-alternativas__item--riscado .med-alternativas__right{text-decoration:line-through}:host(.med-alternativas) .med-alternativas__riscar--show{display:-ms-flexbox;display:flex}:host(.med-alternativas) .med-alternativas__riscar-span{display:-ms-flexbox;display:flex}:host(.med-alternativas) .med-alternativas__riscar-desktop{display:none;padding-left:var(--med-spacing-inline-nano)}@media (min-width: 768px){:host(.med-alternativas) .med-alternativas__riscar-desktop{display:-ms-flexbox;display:flex}}@media (any-hover: hover){:host(.med-alternativas) .med-alternativas__item--permite-riscar:hover{background:hsl(var(--med-color-neutral-2))}:host(.med-alternativas) .med-alternativas__item--permite-riscar:hover .med-alternativas__riscar{display:-ms-flexbox;display:flex}}';const o=class{constructor(t){e(this,t),this.medChange=a(this,"medChange",7),this.medRiscada=a(this,"medRiscada",7),this.medGalleryRequest=a(this,"medGalleryRequest",7),this.alternativas=[],this.keyAlternativa="Alternativa",this.keyEnunciado="Enunciado",this.keyImagem="Imagem",this.keyPorcentagem="Porcentagem",this.keyRiscada="Riscada",this.permiteRiscar=!0,this.permiteAlterar=!0,this.riscarAtivoIndice=-1,this.distanciaMinimaClick=50,this.tempoLongPress=1e3}handleClick(e){e.target.classList.contains("med-alternativas")||this.resetState()}onAlternativasChanged(e,a){e!=a&&this.resetState()}resetState(){this.riscarAtivoIndice=-1,this.permiteAlterar=!0}onTouchStart(e,a){var t;(null===(t=e.target.closest(".med-alternativas__riscar"))||void 0===t?void 0:t.classList.contains("med-alternativas__riscar"))||(this.dataStart=new Date,this.positionStart=d(e),this.timer=setTimeout((()=>{this.dataEnd=new Date,this.dataEnd.getTime()-this.dataStart.getTime()>=this.tempoLongPress&&(this.riscarAtivoIndice=a,this.permiteAlterar=!1)}),this.tempoLongPress))}onTouchEnd(e,a){var t;if(null===(t=e.target.closest(".med-alternativas__riscar"))||void 0===t?void 0:t.classList.contains("med-alternativas__riscar"))return;const i=d(e);clearTimeout(this.timer),this.permiteAlterar&&n(this.positionStart,i)<this.distanciaMinimaClick&&(this.riscarAtivoIndice=-1,this.alterarAlternativa(a)),this.permiteAlterar=!0}alterarAlternativa(e){const a=e;a.Riscada&&this.permiteRiscar||(this.alternativaSelecionada=a.Alternativa,this.medChange.emit(a))}riscar(e,a){e.stopPropagation(),a[this.keyRiscada]=!a[this.keyRiscada],this.riscarAtivoIndice=-1,this.medRiscada.emit(a),this.permiteAlterar=!0,this.alternativas=[...this.alternativas]}imageRequest(e,a){e.stopPropagation(),this.medGalleryRequest.emit(a)}render(){console.log("eeeeeeeeeeeeeeeeeeeeeeeeee");const{dsColor:e,permiteRiscar:a,mostraResposta:s,alternativaSelecionada:n}=this,d=this.alternativaSelecionada&&s;return t(i,{"from-stencil":!0,class:r(e,{"med-alternativas":!0})},t("div",{class:"med-alternativas__list",role:"list"},this.alternativas.map(((e,i)=>t("div",{role:"listitem",onTouchStart:e=>this.onTouchStart(e,i),onTouchEnd:a=>this.onTouchEnd(a,e),onMouseDown:e=>this.onTouchStart(e,i),onMouseUp:a=>this.onTouchEnd(a,e),class:`\n                med-alternativas__item med-alternativas__item--${e[this.keyAlternativa]}\n                ${a?"med-alternativas__item--permite-riscar":""}\n                ${e[this.keyRiscada]&&a?"med-alternativas__item--riscado":""}\n                ${d&&e[this.keyAlternativa]===this.respostaCorreta&&this.respostaCorreta===this.alternativaSelecionada?"med-alternativas__item--correta":""}\n                ${d&&e[this.keyAlternativa]===this.respostaCorreta&&this.respostaCorreta!==this.alternativaSelecionada?"med-alternativas__item--certa":""}\n                ${d&&e[this.keyAlternativa]!==this.respostaCorreta&&e[this.keyAlternativa]===this.alternativaSelecionada?"med-alternativas__item--incorreta":""}\n                ${d||e[this.keyAlternativa]!==this.alternativaSelecionada?"":"med-alternativas__item--selecionada"}\n              `},t("div",{class:"med-alternativas__wrapper"},t("div",{class:"med-alternativas__container"},t("div",{class:"med-alternativas__left"},e[this.keyAlternativa]),t("div",{class:"med-alternativas__right",innerHTML:e[this.keyEnunciado]},e[this.keyImagem]&&t("div",{class:"image-container "+(e[this.keyEnunciado]?"image-container--margin":""),onClick:a=>this.imageRequest(a,e)},t("div",{class:"image-container__wrapper"},t("img",{class:"image-container__image",src:e[this.keyImagem]}),t("div",{class:"image-container__button"},t("ion-icon",{name:"med-expand image-container__icon"}))))),t("div",{class:"med-alternativas__riscar "+(i===this.riscarAtivoIndice&&a?"med-alternativas__riscar--show":""),onClick:a=>this.riscar(a,e)},(e[this.keyRiscada]?"Retomar":"Riscar")+" alternativa"))),t("ion-progress-bar",{"ds-name":"skin",percentage:!0,class:`\n                med-alternativas__progress-bar\n                ${s&&n?"med-alternativas__progress-bar--toggle":""}\n              `,value:e[this.keyPorcentagem]}))))))}get hostElement(){return s(this)}static get watchers(){return{alternativas:["onAlternativasChanged"]}}};o.style=':root{--med-font-family-brand:"fsemeric";--med-font-family-base:"fsemeric";--med-font-size-nano:10px;--med-font-size-xxxs:12px;--med-font-size-xxs:14px;--med-font-size-xs:16px;--med-font-size-sm:20px;--med-font-size-md:24px;--med-font-size-lg:32px;--med-font-size-xl:40px;--med-font-size-xxl:48px;--med-font-size-xxxl:64px;--med-font-size-huge:96px;--med-font-weight-thin:250;--med-font-weight-light:300;--med-font-weight-regular:400;--med-font-weight-medium:500;--med-font-weight-semibold:600;--med-font-weight-bold:700;--med-font-weight-extrabold:800;--med-font-weight-heavy:900;--med-letter-spacing-ultracompressed:-0.04;--med-letter-spacing-compressed:-0.02;--med-letter-spacing-default:0;--med-letter-spacing-medium:0.02;--med-letter-spacing-expanded:0.05;--med-letter-spacing-distant:0.1;--med-letter-spacing-far:0.2;--med-line-height-compressed:100%;--med-line-height-default:24px;--med-line-height-double:200%}:root{--med-spacing-inset-nano:4px;--med-spacing-inset-xs:8px;--med-spacing-inset-sm:16px;--med-spacing-inset-base:24px;--med-spacing-inset-md:32px;--med-spacing-inset-lg:40px;--med-spacing-inset-xl:48px;--med-spacing-inset-xxl:64px;--med-spacing-squish-nano:4px 8px;--med-spacing-squish-xs:8px 16px;--med-spacing-squish-sm:8px 24px;--med-spacing-squish-base:8px 32px;--med-spacing-squish-md:16px 24px;--med-spacing-squish-lg:16px 32px;--med-spacing-squish-xl:24px 32px;--med-spacing-squish-xxl:32px 40px;--med-spacing-stretch-nano:8px 4px;--med-spacing-stretch-xs:16px 8px;--med-spacing-stretch-sm:24px 8px;--med-spacing-stretch-base:32px 8px;--med-spacing-stretch-md:24px 16px;--med-spacing-stretch-lg:32px 16px;--med-spacing-stretch-xl:32px 24px;--med-spacing-stretch-xxl:40px 32px;--med-spacing-inline-quark:2px;--med-spacing-inline-nano:4px;--med-spacing-inline-xxxs:8px;--med-spacing-inline-base:16px;--med-spacing-inline-xxs:24px;--med-spacing-inline-xs:32px;--med-spacing-inline-sm:40px;--med-spacing-inline-md:48px;--med-spacing-inline-lg:56px;--med-spacing-inline-xl:64px;--med-spacing-inline-xxl:72px;--med-spacing-inline-xxxl:80px;--med-spacing-inline-huge:120px;--med-spacing-inline-ultra:160px;--med-spacing-stack-quark:2px;--med-spacing-stack-nano:4px;--med-spacing-stack-xxxs:8px;--med-spacing-stack-base:16px;--med-spacing-stack-xxs:24px;--med-spacing-stack-xs:32px;--med-spacing-stack-sm:40px;--med-spacing-stack-md:48px;--med-spacing-stack-lg:56px;--med-spacing-stack-xl:64px;--med-spacing-stack-xxl:72px;--med-spacing-stack-xxxl:80px;--med-spacing-stack-huge:120px;--med-spacing-stack-ultra:160px}:root{--med-border-radius-none:0;--med-border-radius-quark:2px;--med-border-radius-nano:4px;--med-border-radius-sm:8px;--med-border-radius-md:16px;--med-border-radius-lg:24px;--med-border-radius-pill:31.25em;--med-border-radius-full:50%;--med-border-radius-speech-left-down:8px 8px 8px 0;--med-border-radius-speech-right-down:8px 8px 0 8px;--med-border-radius-speech-right-up:8px 0 8px 0px;--med-border-radius-speech-left-up:0 8px 8px 0px;--med-border-radius-table-down-sm:0 0 8px 8px;--med-border-radius-table-up-sm:8px 8px 0 0;--med-border-radius-table-down-md:16px 16px 0 0;--med-border-radius-table-up-md:0 0 16px 16px;--med-border-width-none:0;--med-border-width-quark:0.25px;--med-border-width-nano:0.5px;--med-border-width-hairline:1px;--med-border-width-thin:2px;--med-border-width-thick:4px;--med-border-width-bold:8px;--med-border-width-heavy:16px;--med-opacity-level-semiopaque:0.8;--med-opacity-level-intense:0.64;--med-opacity-level-half:0.5;--med-opacity-level-medium:0.32;--med-opacity-level-light:0.16;--med-opacity-level-semitransparent:0.08;--med-shadow-level-0:none;--med-shadow-level-1:0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 3px rgba(0, 0, 0, 0.2);--med-shadow-level-2:0 2px 4px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-3:0 3px 3px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-4:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-5:0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-6:0 8px 10px rgba(0, 0, 0, 0.14), 0 3px 14px rgba(0, 0, 0, 0.12), 0 4px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-7:0 9px 12px rgba(0, 0, 0, 0.14), 0 3px 16px rgba(0, 0, 0, 0.12), 0 5px 6px rgba(0, 0, 0, 0.2);--med-shadow-level-8:0 12px 17px rgba(0, 0, 0, 0.14), 0 5px 22px rgba(0, 0, 0, 0.12), 0 7px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-9:0 16px 24px rgba(0, 0, 0, 0.14), 0 6px 30px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-10:0 24px 38px rgba(0, 0, 0, 0.14), 0 9px 46px rgba(0, 0, 0, 0.12), 0 11px 15px rgba(0, 0, 0, 0.2)}:host{--background:hsl(var(--med-color-brand-1));--background-selecionada:hsl(var(--med-color-brand-1));--font-size:var(--med-font-size-xxs);--color-alternativa:hsl(var(--med-color-brand-3))}:host(.med-alternativas){display:block}:host(.med-alternativas) .med-alternativas__container{position:relative;display:-ms-flexbox;display:flex}:host(.med-alternativas) .med-alternativas__wrapper{min-height:68px;background:hsl(var(--med-color-neutral-2));border-radius:var(--med-border-radius-sm);cursor:pointer;overflow:hidden;position:relative}:host(.med-alternativas) .med-alternativas__left{background:var(--background);min-width:40px;text-align:center;padding-top:var(--med-spacing-stack-base);font-size:var(--med-font-size-md);line-height:var(--med-line-height-compressed);font-weight:var(--med-font-weight-medium);color:var(--color-alternativa);border-top-left-radius:var(--med-border-radius-sm);border-bottom-left-radius:var(--med-border-radius-sm)}:host(.med-alternativas) .med-alternativas__right{-ms-flex:1;flex:1;text-align:left;overflow:hidden;padding:var(--med-spacing-inset-sm);font-size:var(--font-size);line-height:var(--med-line-height-default);font-weight:var(--med-font-weight-regular);color:hsl(var(--med-color-neutral-10));border-top-right-radius:var(--med-border-radius-sm);border-bottom-right-radius:var(--med-border-radius-sm)}:host(.med-alternativas) .med-alternativas__wrapper{min-height:unset}:host(.med-alternativas) .med-alternativas__progress-bar{--background:hsl(var(--med-color-neutral-2));--height:10px;margin-top:var(--med-spacing-stack-xxxs);margin-bottom:var(--med-spacing-stack-base);-webkit-transition:all 300ms ease;transition:all 300ms ease;opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}:host(.med-alternativas) .image-container{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}:host(.med-alternativas) .image-container--margin{margin-top:var(--med-spacing-stack-base)}:host(.med-alternativas) .image-container__wrapper{position:relative;display:-ms-flexbox;display:flex}:host(.med-alternativas) .image-container__image{width:auto;max-height:100px;display:block;display:inline-block}:host(.med-alternativas) .image-container__button{width:24px;height:24px;display:-ms-flexbox;display:flex;background:hsl(var(--med-color-brand-1));position:absolute;bottom:4px;right:4px;pointer-events:none}:host(.med-alternativas) .image-container__icon{stroke:hsl(var(--med-color-neutral-10));pointer-events:none}:host(.med-alternativas) .med-alternativas__progress-bar--toggle{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}:host(.med-alternativas) .med-alternativas__item--selecionada .med-alternativas__wrapper{background:hsl(var(--med-color-brand-1))}:host(.med-alternativas) .med-alternativas__item--certa{--background:hsl(var(--med-color-fb-success))}:host(.med-alternativas) .med-alternativas__item--certa .med-alternativas__left{color:hsl(var(--med-color-neutral-1));font-weight:var(--med-font-weight-medium)}:host(.med-alternativas) .med-alternativas__item--correta{--background:hsl(var(--med-color-fb-success))}:host(.med-alternativas) .med-alternativas__item--correta .med-alternativas__wrapper{background:hsl(var(--med-color-fb-success))}:host(.med-alternativas) .med-alternativas__item--correta .med-alternativas__left,:host(.med-alternativas) .med-alternativas__item--correta .med-alternativas__right{color:hsl(var(--med-color-neutral-1));font-weight:var(--med-font-weight-medium)}:host(.med-alternativas) .med-alternativas__item--incorreta{--background:hsl(var(--med-color-fb-warning))}:host(.med-alternativas) .med-alternativas__item--incorreta .med-alternativas__wrapper{background:hsl(var(--med-color-fb-warning))}:host(.med-alternativas) .med-alternativas__item--incorreta .med-alternativas__left,:host(.med-alternativas) .med-alternativas__item--incorreta .med-alternativas__right{color:hsl(var(--med-color-neutral-1));font-weight:var(--med-font-weight-medium)}:host(.med-alternativas) .med-alternativas__item--riscado .med-alternativas__left,:host(.med-alternativas) .med-alternativas__item--riscado .med-alternativas__right{opacity:0.5}:host(.med-alternativas) .med-alternativas__item--riscado .med-alternativas__right{text-decoration:line-through}:host(.med-alternativas) .med-alternativas__riscar{background-color:hsl(var(--med-color-fb-attention));color:hsl(var(--med-color-neutral-1));padding:0 var(--med-spacing-inline-base);border-top-right-radius:var(--med-border-radius-sm);border-bottom-right-radius:var(--med-border-radius-sm);font-size:var(--med-font-size-xxs);font-weight:var(--med-font-weight-medium);line-height:var(--med-line-height-compressed);position:absolute;top:0;right:0;width:85px;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateX(120px);transform:translateX(120px);-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms}:host(.med-alternativas) .med-alternativas__riscar--show{-webkit-transform:translateX(0);transform:translateX(0)}@media (any-hover: hover){:host(.med-alternativas) .med-alternativas__item--permite-riscar .med-alternativas__wrapper:hover .med-alternativas__riscar{-webkit-transform:translateX(0);transform:translateX(0)}}:host(.med-color){--background:hsl(var(--med-color-1));--background-selecionada:hsl(var(--med-color-1));--color-alternativa:hsl(var(--med-color-3))}:host(.med-color) .med-alternativas__progress-bar{--progress-background:hsl(var(--med-color-4))}';export{m as med_alternativas_a,o as med_alternativas_b}