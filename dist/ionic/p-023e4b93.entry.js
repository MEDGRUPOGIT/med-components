/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r as i,i as e,H as o}from"./p-d73a117d.js";import{g as t}from"./p-716fc783.js";const c=class{constructor(e){i(this,e),this.titulo=void 0,this.label=void 0,this.dsColor=void 0,this.selected=!1,this.dsSize=void 0,this.margin=void 0,this.border=!1,this.collapsed=!0,this.disabled=!1}async toggle(i){null==i||i.stopPropagation(),this.collapsed=!this.collapsed}render(){const{dsColor:i,titulo:c,label:d,selected:m,dsSize:s,border:l,margin:r,collapsed:a,disabled:n}=this;return e(o,{"from-stencil":!0,class:t(i,{"med-list-item-accordion":!0,"med-list-item-accordion--disabled":n,"med-list-item-accordion--selected":m,"med-list-item-accordion--border-radius":l,[`med-list-item-accordion--${s}`]:void 0!==s,[`med-list-item-accordion--${r}`]:void 0!==r,"med-list-item-accordion--collapsed":a})},e("div",{class:"med-list-item-accordion__item"},e("slot",{name:"start"}),e("div",{class:"med-list-item-accordion__content"},e("h3",{class:"med-list-item-accordion__title"},c),e("h4",{class:"med-list-item-accordion__label"},d)),e("ion-button",{mode:"ios","icon-only":!0,class:"med-list-item-accordion__button","ds-color":i,fill:"clear","ds-size":"xs",slot:"left",onClick:i=>{this.toggle(i)}},e("ion-icon",{slot:"icon-only",class:"med-icon",name:"med-cima"}))),e("div",{class:"med-list-item-accordion__sub-item"},e("slot",{name:"end"})))}};c.style=".sc-med-list-item-accordion-h{--padding:6px 16px;--background:transparent;--border-radius:8px;--font-size-title:14px;--color-title:hsl(var(--med-color-neutral-10));--font-size-label:12px;--color-label:hsl(var(--med-color-brand-4));--margin:0;--button-margin:auto}.med-list-item-accordion.sc-med-list-item-accordion-h{background-image:-webkit-gradient(linear, left top, right top, from(hsl(var(--med-color-neutral-2), 1)), color-stop(hsl(var(--med-color-neutral-2), 0.1)), to(hsl(var(--med-color-neutral-2), 0)));background-image:linear-gradient(to right, hsl(var(--med-color-neutral-2), 1), hsl(var(--med-color-neutral-2), 0.1), hsl(var(--med-color-neutral-2), 0));background-size:200% 100%;background-position:100% 0;-webkit-transition:background-image 0.5s linear;transition:background-image 0.5s linear;display:-ms-flexbox;display:flex;padding:var(--padding);-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column}.med-list-item-accordion.sc-med-list-item-accordion-h .med-list-item-accordion__button.sc-med-list-item-accordion{margin-left:var(--button-margin)}.med-list-item-accordion.sc-med-list-item-accordion-h .med-list-item-accordion__item.sc-med-list-item-accordion{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;margin:var(--margin)}.med-list-item-accordion.sc-med-list-item-accordion-h .med-list-item-accordion__sub-item.sc-med-list-item-accordion{width:100%;overflow:auto;height:auto;opacity:1;-webkit-transition:500ms opacity ease;transition:500ms opacity ease}.med-list-item-accordion.sc-med-list-item-accordion-h .med-list-item-accordion__content.sc-med-list-item-accordion{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;text-align:left}.med-list-item-accordion.sc-med-list-item-accordion-h .med-list-item-accordion__title.sc-med-list-item-accordion{margin:0;padding:0;font-size:var(--font-size-title);font-weight:300;line-height:100%;color:var(--color-title)}.med-list-item-accordion.sc-med-list-item-accordion-h .med-list-item-accordion__label.sc-med-list-item-accordion{margin:0;padding:0;font-size:var(--font-size-label);font-weight:400;line-height:100%;color:var(--color-label)}.med-list-item-accordion.sc-med-list-item-accordion-h .med-list-item-accordion__border-radius.sc-med-list-item-accordion{border-radius:var(--border-radius)}.med-list-item-accordion--collapsed.sc-med-list-item-accordion-h .med-list-item-accordion__item.sc-med-list-item-accordion{margin:0}.med-list-item-accordion--collapsed.sc-med-list-item-accordion-h .med-list-item-accordion__sub-item.sc-med-list-item-accordion{overflow:hidden;opacity:0;height:0}.med-list-item-accordion--collapsed.sc-med-list-item-accordion-h .med-icon.sc-med-list-item-accordion{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.med-list-item-accordion--selected.sc-med-list-item-accordion-h{background-position:0 0}.sc-med-list-item-accordion-s>[slot=start]{margin-right:16px}.sc-med-list-item-accordion-s>[slot=end]{margin-left:16px}.med-list-item-accordion--xs.sc-med-list-item-accordion-h{--padding:8px 16px}.med-list-item-accordion--sm.sc-med-list-item-accordion-h{--padding:16px}.med-list-item-accordion--md.sc-med-list-item-accordion-h{--padding:24px 16px}.med-list-item-accordion--disabled.sc-med-list-item-accordion-h{opacity:0.5;pointer-events:none}.med-list-item-accordion.med-color.sc-med-list-item-accordion-h{--border-background-selected:hsl(var(--med-color-3));--color-label:hsl(var(--med-color-4))}.sc-med-list-item-accordion-h.med-list-item-accordion.med-color .sc-med-list-item-accordion-s>*{--border-color:hsl(var(--med-color-4))}.med-list-item-accordion.med-color-neutral.sc-med-list-item-accordion-h{--border-background-selected:hsl(var(--med-color-neutral));--color-label:hsl(var(--med-color-neutral))}.sc-med-list-item-accordion-h.med-list-item-accordion.med-color-neutral .sc-med-list-item-accordion-s>*{--border-color:hsl(var(--med-color-neutral))}.med-list-item-accordion.med-color-feedback.sc-med-list-item-accordion-h{--border-background-selected:hsl(var(--med-color-feedback));--color-label:hsl(var(--med-color-feedback))}.sc-med-list-item-accordion-h.med-list-item-accordion.med-color-feedback .sc-med-list-item-accordion-s>*{--border-color:hsl(var(--med-color-feedback))}.sc-med-list-item-accordion-h.med-list-item-accordion .sc-med-list-item-accordion-s>med-list-item{margin:var(--margin)}.sc-med-list-item-accordion-h.med-list-item-accordion .sc-med-list-item-accordion-s>med-list-item:last-child{margin-bottom:0 !important}.med-list-item-accordion--xs.sc-med-list-item-accordion-h .med-list-item-accordion__item.sc-med-list-item-accordion,.sc-med-list-item-accordion-h.med-list-item-accordion--xs .sc-med-list-item-accordion-s>med-list-item{--margin:0 0 4px 0}.med-list-item-accordion--sm.sc-med-list-item-accordion-h .med-list-item-accordion__item.sc-med-list-item-accordion,.sc-med-list-item-accordion-h.med-list-item-accordion--sm .sc-med-list-item-accordion-s>med-list-item{--margin:0 0 8px 0}.med-list-item-accordion--md.sc-med-list-item-accordion-h .med-list-item-accordion__item.sc-med-list-item-accordion,.sc-med-list-item-accordion-h.med-list-item-accordion--md .sc-med-list-item-accordion-s>med-list-item{--margin:0 0 16px 0}.med-list-item-accordion--lg.sc-med-list-item-accordion-h .med-list-item-accordion__item.sc-med-list-item-accordion,.sc-med-list-item-accordion-h.med-list-item-accordion--lg .sc-med-list-item-accordion-s>med-list-item{--margin:0 0 24px 0}";export{c as med_list_item_accordion}