import{r as t,h as n,H as i,i as o}from"./p-4d70e85a.js";import{g as e}from"./p-e6e1a08f.js";const c=class{constructor(n){t(this,n),this.selectClicked=!1,this.pointerOnSelect=!1,this.selectAndPopoverDiffWidth=2,this.disabled=!1,this.feedback=!1,this.inverted=!1}getTpInputContainerWidth(t){this.disabled||(this.selectClicked=this.host.contains(t.target)&&null!==this.host.querySelector("ion-select"),this.selectClicked&&(this.hostWidth=this.host.clientWidth+this.selectAndPopoverDiffWidth))}catchSelectIconClick(t){const n=t.target;if(this.host.contains(n)&&("ION-ICON"===n.nodeName||"TP-INPUT-CONTAINER"===n.nodeName)){const t=new MouseEvent("click",{view:window,bubbles:!0}),n=this.host.querySelector("ION-SELECT");null==n||n.dispatchEvent(t)}}setPopoverWidthOnResize(){if(!this.selectClicked)return;const t=document.querySelector(".select-popover");null==t||t.style.setProperty("--width",`${this.host.clientWidth+this.selectAndPopoverDiffWidth}px`)}setPopoverCharacteristics(){setTimeout((()=>{if(!this.selectClicked)return;const t=document.querySelector(".select-popover");if(null==t||t.style.setProperty("--width",`${this.hostWidth}px`),"secondary"===this.dsName&&t.classList.add("tp-popover--secondary"),t.classList.contains("popover-bottom")&&(this.inverted=!0),this.inverted){t.classList.add("tp-popover--inverted");const{top:n,left:i}=this.host.getBoundingClientRect();null==t||t.style.setProperty("--left",`${i}px`),null==t||t.style.setProperty("--bottom",window.innerHeight-n+"px")}}),0)}unsetClikedState(){this.selectClicked&&(this.selectClicked=!1)}componentDidLoad(){this.host.querySelector("ION-SELECT")&&(this.pointerOnSelect=!0)}render(){const{dsColor:t,dsName:o,selectClicked:c,pointerOnSelect:r,inverted:s,disabled:p,feedback:a,hasButton:u,hasIcon:l}=this;return n(i,{class:e(t,{"tp-input-container":!0,"tp-input-container--with-select":r,"tp-input-container--select-clicked":c,"tp-input-container--inverted":s,"tp-input-container--disabled":p,"tp-input-container--feedback":a,[`tp-input-container--${o}`]:void 0!==o,[`tp-input-container--has-button-${u}`]:void 0!==u,[`tp-input-container--has-icon-${l}`]:void 0!==l})},n("slot",{name:"start"}),n("slot",null),n("slot",{name:"end"}))}get host(){return o(this)}};c.style=".sc-tp-input-container-h{--background:hsl(var(--med-color-neutral-2))}.sc-tp-input-container-h{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:var(--background);border-radius:8px;height:40px}.sc-tp-input-container-s>ion-button[slot=start],.sc-tp-input-container-s>ion-icon[slot=start],.sc-tp-input-container-s>ion-button[slot=end],.sc-tp-input-container-s>ion-icon[slot=end]{--color:hsl(var(--med-color-neutral-6)) !important;margin:0 8px 0 8px;stroke:hsl(var(--med-color-neutral-6))}.sc-tp-input-container-h.tp-input-container--has-button-start.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.tp-input-container--has-button-start.sc-tp-input-container-s>ion-select,.sc-tp-input-container-h.tp-input-container--has-icon-start.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.tp-input-container--has-icon-start.sc-tp-input-container-s>ion-select{--padding-start:0}.sc-tp-input-container-h.tp--has-button-end.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.tp--has-button-end.sc-tp-input-container-s>ion-select,.sc-tp-input-container-h.tp-input-container--has-icon-end.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.tp-input-container--has-icon-end.sc-tp-input-container-s>ion-select{--padding-end:0}.sc-tp-input-container-h.tp-input-container--has-button-both.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.tp-input-container--has-button-both.sc-tp-input-container-s>ion-select,.sc-tp-input-container-h.tp-input-container--has-icon-both.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.tp-input-container--has-icon-both.sc-tp-input-container-s>ion-select{--padding-start:0;--padding-end:0}.sc-tp-input-container-h.tp-input-container--disabled.sc-tp-input-container-s>ion-button[slot=start],.sc-tp-input-container-h.tp-input-container--disabled.sc-tp-input-container-s>ion-icon[slot=start],.sc-tp-input-container-h.tp-input-container--disabled.sc-tp-input-container-s>ion-button[slot=end],.sc-tp-input-container-h.tp-input-container--disabled.sc-tp-input-container-s>ion-icon[slot=end]{opacity:0.4}.tp-input-container--secondary.sc-tp-input-container-h{--background:hsl(var(--med-color-neutral-3))}.sc-tp-input-container-h.tp-input-container--secondary.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.tp-input-container--secondary.sc-tp-input-container-s>ion-select{--background:hsl(var(--med-color-3))}.tp-input-container.tp-input-container--select-clicked.sc-tp-input-container-h:not(.tp-input-container--disabled){border-radius:8px 8px 0 0 !important;-webkit-transition:border-radius 400ms ease-in-out;transition:border-radius 400ms ease-in-out}.sc-tp-input-container-h.tp-input-container.tp-input-container--inverted.sc-tp-input-container-s>ion-icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.tp-input-container.tp-input-container--inverted.tp-input-container--select-clicked.sc-tp-input-container-h:not(.tp-input-container--disabled){border-radius:0 0 8px 8px !important}.tp-input-container.tp-input-container--with-select.sc-tp-input-container-h{cursor:not-allowed}.tp-input-container.tp-input-container--with-select.sc-tp-input-container-h:not(.tp-input-container--disabled){cursor:pointer}.sc-tp-input-container-h.tp-input-container.tp-input-container--with-select:not(.tp-input-container--disabled).sc-tp-input-container-s>ion-icon{-webkit-transition:-webkit-transform 400ms linear;transition:-webkit-transform 400ms linear;transition:transform 400ms linear;transition:transform 400ms linear, -webkit-transform 400ms linear}.sc-tp-input-container-h.tp-input-container.tp-input-container--with-select.tp-input-container--select-clicked:not(.tp-input-container--disabled).sc-tp-input-container-s>ion-icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.sc-tp-input-container-h.tp-input-container.tp-input-container--with-select.tp-input-container--select-clicked.tp-input-container--inverted:not(.tp-input-container--disabled).sc-tp-input-container-s>ion-icon{-webkit-transform:rotate(0deg);transform:rotate(0deg)}.med-color.sc-tp-input-container-h{--background:hsl(var(--med-color-3))}.sc-tp-input-container-h.med-color.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.med-color.sc-tp-input-container-s>ion-select{--background:hsl(var(--med-color-3));--placeholder-color:hsl(var(--med-color-contrast-fixed));--color:hsl(var(--med-color-contrast-fixed))}.sc-tp-input-container-h.med-color.sc-tp-input-container-s>ion-button,.sc-tp-input-container-h.med-color.sc-tp-input-container-s>ion-icon{--color:hsl(var(--med-color-contrast-fixed)) !important;stroke:hsl(var(--med-color-contrast-fixed)) !important}.med-color-neutral.sc-tp-input-container-h{--background:hsl(var(--med-color-neutral))}.sc-tp-input-container-h.med-color-neutral.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.med-color-neutral.sc-tp-input-container-s>ion-select{--background:hsl(var(--med-color-neutral));--placeholder-color:hsl(var(--med-color-neutral-contrast));--color:hsl(var(--med-color-neutral-contrast))}.sc-tp-input-container-h.med-color-neutral.sc-tp-input-container-s>ion-button,.sc-tp-input-container-h.med-color-neutral.sc-tp-input-container-s>ion-icon{--color:hsl(var(--med-color-neutral-contrast)) !important;stroke:hsl(var(--med-color-neutral-contrast)) !important}.med-color-feedback.sc-tp-input-container-h{--background:hsl(var(--med-color-feedback))}.sc-tp-input-container-h.med-color-feedback.sc-tp-input-container-s>ion-input,.sc-tp-input-container-h.med-color-feedback.sc-tp-input-container-s>ion-select{--background:hsl(var(--med-color-feedback));--placeholder-color:hsl(var(--med-color-feedback-contrast));--color:hsl(var(--med-color-feedback-contrast))}.sc-tp-input-container-h.med-color-feedback.sc-tp-input-container-s>ion-button,.sc-tp-input-container-h.med-color-feedback.sc-tp-input-container-s>ion-icon{--color:hsl(var(--med-color-feedback-contrast)) !important;stroke:hsl(var(--med-color-feedback-contrast)) !important}";export{c as tp_input_container}