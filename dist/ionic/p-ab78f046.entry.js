import{r as o,e as i,h as t,H as e,i as r}from"./p-4d70e85a.js";import{g as d}from"./p-06394cd8.js";import{c as s}from"./p-810b6bf2.js";import"./p-90f9de28.js";const a=class{constructor(t){o(this,t),this.toggle=i(this,"toggle",7),this.opened=i(this,"opened",7),this.medClick=i(this,"medClick",7),this.noBorder=!1,this.background=!1,this.canCollapse=!0,this.isOpened=!1,this.slotsToggle=[],this.isOpen=!1,this.isTransitioning=!1,this.onClick=o=>{this.canCollapse&&(!this.slotsToggle.length||this.slotsToggle.indexOf(o)>=0)&&this.toggleOpen()}}watchPropHandler(o){this.toggleOpen()}componentDidLoad(){this.isOpened&&this.toggleOpen()}toggleOpen(){this.isTransitioning||(this.isOpen=!this.isOpen,this.opened.emit(this.isOpen),this.isTransitioning=!0,this.toggle.emit({element:this.hostElement,content:this.content,header:this.header,shouldOpen:this.isOpen,startTransition:()=>{this.isTransitioning=!0},endTransition:()=>{this.isTransitioning=!1},setClosed:()=>{this.isOpen=!1,this.opened.emit(this.isOpen)}}))}onHeaderClick(){this.medClick.emit()}render(){const{dsColor:o,noBorder:i,isOpen:r,background:s}=this;return t(e,{"from-stencil":!0,class:d(o,{"med-accordion-item":!0,"med-accordion-item--no-border":i,"med-accordion-item--open":r,"med-accordion-item--background":s})},t("div",{class:"med-accordion-item__header",onClick:()=>this.onHeaderClick(),ref:o=>this.header=o},t("div",{class:"med-accordion-item__header-container"},t("div",{class:"header-container__start",onClick:()=>this.onClick("start")},t("slot",{name:"start"})),t("div",{class:"header-container__middle",onClick:()=>this.onClick("middle")},t("slot",{name:"middle"})),t("div",{class:"header-container__end",onClick:()=>this.onClick("end")},t("slot",{name:"end"}))),t("div",null,t("slot",{name:"auxiliar"})),t("div",{onClick:()=>this.onClick("middle")},t("slot",{name:"full-header"}))),t("div",{class:"med-accordion-item__content",ref:o=>this.content=o},t("slot",{name:"content"})))}get hostElement(){return r(this)}static get watchers(){return{isOpened:["watchPropHandler"]}}};a.style=":host{--background-header:linear-gradient(to right, hsl(var(--med-color-brand-1)), hsl(var(--med-color-neutral-2)), hsl(var(--med-color-neutral-2)));--background-content:hsl(var(--med-color-neutral-2));--icon-color:hsl(var(--med-color-neutral-10));--border-radius:var(--med-border-radius-sm);--padding:var(--med-spacing-inset-sm);--icon-font-size:24px;--align-items:initial}:host(.med-accordion-item){display:block;border-radius:var(--border-radius)}:host(.med-accordion-item) .med-accordion-item__header-container{width:100%;cursor:pointer;z-index:1;display:-ms-flexbox;display:flex;-ms-flex-align:var(--align-items);align-items:var(--align-items)}:host(.med-accordion-item) .med-accordion-item__header{-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--padding);background:var(--background-header);border-radius:var(--border-radius);position:relative;width:100%;-webkit-transition:background 0.5s linear;transition:background 0.5s linear;background-size:200% 100%;background-position:100% 0}:host(.med-accordion-item) .med-accordion-item__heading{width:100%}:host(.med-accordion-item) .med-accordion-item__icon-container{display:-ms-flexbox;display:flex}:host(.med-accordion-item) .med-accordion-item__icon-container--left{padding-right:var(--med-spacing-inline-xxxs)}:host(.med-accordion-item) .med-accordion-item__icon-container--right{padding-left:var(--med-spacing-inline-xxxs);margin-left:auto}:host(.med-accordion-item) .med-accordion-item__content{display:none;overflow:auto;background:var(--background-content);border-bottom-left-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);z-index:0}:host(.med-accordion-item) .header-container__end{margin-left:auto}:host(.med-accordion-item) .header-container__middle{width:var(--middle-width)}:host(.med-accordion-item--no-border){--border-radius:0}:host(.med-accordion-item--keep-border) .med-accordion-item__header{border-bottom-left-radius:var(--med-border-radius-sm) !important;border-bottom-right-radius:var(--med-border-radius-sm) !important}::slotted(ion-progress-bar){position:absolute;left:0;bottom:0;border-bottom-left-radius:4px;border-bottom-right-radius:4px}:host(.med-accordion-item--open.med-accordion-item--background) .med-accordion-item__header{background-position:0 0}:host(.med-accordion-item--open) ::slotted(ion-progress-bar){border-bottom-left-radius:0;border-bottom-right-radius:0}:host(.med-color.med-accordion-item--background){--background-header:linear-gradient(to right, hsl(var(--med-color-1)), hsl(var(--med-color-neutral-2)), hsl(var(--med-color-neutral-2)))}";const n=class{constructor(i){o(this,i),this.singleOpen=!0,this.noBorder=!1,this.noAnimation=!1,this.currentlyOpen=null}async handleToggle(o){o.detail.shouldOpen?await this.animateOpen(o):await this.animateClose(o),o.detail.endTransition()}async closeOpenItem(){if(null!==this.currentlyOpen){const o=this.currentlyOpen.detail;o.startTransition(),await this.animateClose(this.currentlyOpen),o.endTransition(),o.setClosed()}}getElementsToShift(o){const i=Array.from(this.hostElement.children);let t=0;return i.forEach(((i,e)=>{i===o&&(t=e)})),[...i].splice(t+1,i.length-(t+1))}createOpenAnimation(o,i,t){const e=this.noAnimation?0:300,r={transform:`translateY(-${i}px)`,position:"relative","z-index":"1"},d={transform:"none","z-index":null};return t&&(r.height=`${i}px`,d.height="0px"),s().addElement(o).delay(20).beforeStyles(r).afterClearStyles(["position","z-index"]).afterStyles(d).to("transform","translateY(0)").duration(e).easing("cubic-bezier(0.32,0.72,0,1)")}async animateOpen(o){this.singleOpen&&await this.closeOpenItem(),this.currentlyOpen=o;const i=this.getElementsToShift(o.detail.element);o.detail.content.style.display="block",o.detail.header.style.borderBottomLeftRadius="0",o.detail.header.style.borderBottomRightRadius="0";const t=o.detail.content.clientHeight,e=this.createOpenAnimation(i,t,!1),r=this.createOpenAnimation(this.blocker,t,!0);await Promise.all([e.play(),r.play()]),e.destroy(),r.destroy()}createCloseAnimation(o,i){const t=this.noAnimation?0:300;return s().addElement(o).afterStyles({transform:"none",zIndex:"0"}).to("transform",`translateY(-${i}px)`).duration(t).easing("cubic-bezier(0.32,0.72,0,1)")}async animateClose(o){const i=this.getElementsToShift(o.detail.element);o.detail.header.style="",o.detail.element.style.overflow="hidden",o.detail.header.style.zIndex="1",this.currentlyOpen=null;const t=o.detail.content.clientHeight,e=this.createCloseAnimation(i,t),r=this.createCloseAnimation(this.blocker,t),d=this.createCloseAnimation(o.detail.content,t);await Promise.all([e.play(),r.play(),d.play()]),o.detail.element.style.overflow="initial",o.detail.header.style.zIndex="initial",o.detail.content.style.display="none",e.destroy(),r.destroy(),d.destroy()}render(){const{noBorder:o,margin:i}=this;return t(e,{"from-stencil":!0,class:d(null,{"med-accordion-list":!0,"med-accordion-list--no-border":o,[`med-accordion-list--${i}`]:void 0!==i})},t("slot",null),t("div",{class:"med-accordion-list__blocker",ref:o=>this.blocker=o}))}get hostElement(){return r(this)}};n.style=":host{--background:hsl(var(--med-color-neutral-1));--border:var(--med-spacing-stack-xxxs) solid hsl(var(--med-color-neutral-1));--border-radius:var(--med-border-radius-sm)}:host(.med-accordion-list){display:block}:host(.med-accordion-list) .med-accordion-list__blocker{background-color:var(--background);will-change:transform;border-radius:var(--border-radius)}:host(.med-accordion-list) ::slotted(med-accordion-item){border-bottom:var(--border)}:host(.med-accordion-list) ::slotted(med-accordion-item:last-child){border-bottom:none !important}:host(.med-accordion-list--xs) ::slotted(med-accordion-item){--border:var(--med-spacing-stack-nano) solid hsl(var(--med-color-neutral-1))}:host(.med-accordion-list--sm) ::slotted(med-accordion-item){--border:var(--med-spacing-stack-xxxs) solid hsl(var(--med-color-neutral-1))}:host(.med-accordion-list--md) ::slotted(med-accordion-item){--border:var(--med-spacing-stack-base) solid hsl(var(--med-color-neutral-1))}:host(.med-accordion-list--lg) ::slotted(med-accordion-item){--border:var(--med-spacing-stack-xxs) solid hsl(var(--med-color-neutral-1))}:host(.med-accordion-list--no-border) .med-accordion-list__blocker{--border-radius:0}";export{a as med_accordion_item,n as med_accordion_list}