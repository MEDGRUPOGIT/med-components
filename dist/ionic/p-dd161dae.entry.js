import{r as t,h as o,H as i,i as n}from"./p-4d70e85a.js";import{c as e,b as s}from"./p-2e2691bb.js";import{r as a,t as c,a as r,b as d,g as h}from"./p-321563f9.js";const l=class{constructor(o){t(this,o),this.updateListener=()=>this.updateState(!1),this.state=1,this.isNext=!1,this.isPrevious=!1,this.value="ion-accordion-"+p++,this.disabled=!1,this.readonly=!1,this.toggleIcon="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",this.toggleIconSlot="end",this.setItemDefaults=()=>{const t=this.getSlottedHeaderIonItem();t&&(t.button=!0,t.detail=!1,void 0===t.lines&&(t.lines="full"))},this.getSlottedHeaderIonItem=()=>{const{headerEl:t}=this;if(!t)return;const o=t.querySelector("slot");return o&&void 0!==o.assignedElements?o.assignedElements().find((t=>"ION-ITEM"===t.tagName)):void 0},this.setAria=(t=!1)=>{const o=this.getSlottedHeaderIonItem();if(!o)return;const i=h(o).querySelector("button");i&&i.setAttribute("aria-expanded",`${t}`)},this.slotToggleIcon=()=>{const t=this.getSlottedHeaderIonItem();if(!t)return;const{toggleIconSlot:o,toggleIcon:i}=this;if(t.querySelector(".ion-accordion-toggle-icon"))return;const n=document.createElement("ion-icon");n.slot=o,n.lazy=!1,n.classList.add("ion-accordion-toggle-icon"),n.icon=i,n.setAttribute("aria-hidden","true")},this.expandAccordion=(t=!1)=>{const{contentEl:o,contentElWrapper:i}=this;t||void 0===o||void 0===i?this.state=4:4!==this.state&&(void 0!==this.currentRaf&&cancelAnimationFrame(this.currentRaf),this.shouldAnimate()?a((()=>{this.state=8,this.currentRaf=a((async()=>{const t=i.offsetHeight,n=c(o,2e3);o.style.setProperty("max-height",`${t}px`),await n,this.state=4,o.style.removeProperty("max-height")}))})):this.state=4)},this.collapseAccordion=(t=!1)=>{const{contentEl:o}=this;t||void 0===o?this.state=1:1!==this.state&&(void 0!==this.currentRaf&&cancelAnimationFrame(this.currentRaf),this.shouldAnimate()?this.currentRaf=a((async()=>{o.style.setProperty("max-height",`${o.offsetHeight}px`),a((async()=>{const t=c(o,2e3);this.state=2,await t,this.state=1,o.style.removeProperty("max-height")}))})):this.state=1)},this.shouldAnimate=()=>"undefined"!=typeof window&&(!matchMedia("(prefers-reduced-motion: reduce)").matches&&!(!e.get("animated",!0)||this.accordionGroupEl&&!this.accordionGroupEl.animated)),this.updateState=async(t=!1)=>{const o=this.accordionGroupEl,i=this.value;if(!o)return;const n=o.value;if(Array.isArray(n)?n.includes(i):n===i)this.expandAccordion(t),this.isNext=this.isPrevious=!1;else{this.collapseAccordion(t);const o=this.getNextSibling(),i=null==o?void 0:o.value;void 0!==i&&(this.isPrevious=Array.isArray(n)?n.includes(i):n===i);const e=this.getPreviousSibling(),s=null==e?void 0:e.value;void 0!==s&&(this.isNext=Array.isArray(n)?n.includes(s):n===s)}},this.getNextSibling=()=>{if(!this.el)return;const t=this.el.nextElementSibling;return"ION-ACCORDION"===(null==t?void 0:t.tagName)?t:void 0},this.getPreviousSibling=()=>{if(!this.el)return;const t=this.el.previousElementSibling;return"ION-ACCORDION"===(null==t?void 0:t.tagName)?t:void 0}}valueChanged(){this.updateState()}connectedCallback(){var t;const o=this.accordionGroupEl=null===(t=this.el)||void 0===t?void 0:t.closest("tp-accordion-group");o&&(this.updateState(!0),r(o,"ionValueChange",this.updateListener))}disconnectedCallback(){const t=this.accordionGroupEl;t&&d(t,"ionValueChange",this.updateListener)}componentDidLoad(){this.setItemDefaults(),this.slotToggleIcon(),a((()=>{this.setAria(4===this.state||8===this.state)}))}toggleExpanded(){const{accordionGroupEl:t,value:o,state:i}=this;t&&t.requestAccordionToggle(o,1===i||2===i)}render(){const{disabled:t,readonly:n}=this,e=s(this),a=4===this.state||8===this.state,c=a?"header expanded":"header",r=a?"content expanded":"content";return this.setAria(a),o(i,{class:{[e]:!0,"accordion-expanding":8===this.state,"accordion-expanded":4===this.state,"accordion-collapsing":2===this.state,"accordion-collapsed":1===this.state,"accordion-next":this.isNext,"accordion-previous":this.isPrevious,"accordion-disabled":t,"accordion-readonly":n,"accordion-animated":this.shouldAnimate()}},o("div",{onClick:()=>this.toggleExpanded(),id:"header",part:c,"aria-controls":"content",ref:t=>this.headerEl=t},o("slot",{name:"header"})),o("div",{id:"content",part:r,role:"region","aria-labelledby":"header",ref:t=>this.contentEl=t},o("div",{id:"content-wrapper",ref:t=>this.contentElWrapper=t},o("slot",{name:"content"}))))}static get delegatesFocus(){return!0}get el(){return n(this)}static get watchers(){return{value:["valueChanged"]}}};let p=0;l.style={ios:":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}:host(.accordion-next) ::slotted(ion-item[slot=header]){--border-width:0.55px 0px 0.55px 0px}",md:":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}"};export{l as tp_accordion}