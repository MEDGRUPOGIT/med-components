import{r as e,h as r,H as o}from"./p-4d70e85a.js";import{g as d}from"./p-b87b9a9f.js";const l=class{constructor(r){e(this,r),this.solid=!1,this.selected=!1}render(){const{dsColor:e,titulo:l,label:t,selected:s,solid:a}=this;return r(o,{class:d(e,{"med-tiles":!0,"med-solid":a,"med-tiles--selected":s})},r("div",{class:"med-tiles__border"}),r("div",{class:"med-tiles__content"},r("h3",{class:"med-tiles__title",innerHTML:l}),r("h4",{class:"med-tiles__label",innerHTML:t}),r("slot",null)))}};l.style=":host{--padding:var(--med-spacing-inset-sm);--background:hsl(var(--med-color-neutral-2));--border-radius:var(--med-border-radius-sm);--border-background:hsl(var(--med-color-neutral-5));--border-background-selected:hsl(var(--med-color-brand-3));--font-size-title:var(--med-font-size-sm);--color-title:hsl(var(--med-color-neutral-10));--font-size-label:var(--med-font-size-xs);--color-label:hsl(var(--med-color-brand-3))}:host(.med-tiles){display:-ms-flexbox;display:flex;background:var(--background);border-radius:var(--border-radius)}:host(.med-tiles) .med-tiles__content{padding:var(--padding);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;text-align:left;width:100%}:host(.med-tiles) .med-tiles__border{border-top-left-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius);width:8px;min-height:100%;background:var(--border-background)}:host(.med-tiles) .med-tiles__title{margin:0;padding:0;font-size:var(--font-size-title);font-weight:var(--med-font-weight-semibold);line-height:var(--med-line-height-compressed);color:var(--color-title);padding-bottom:var(--med-spacing-stack-nano)}:host(.med-tiles) .med-tiles__label{margin:0;padding:0;font-size:var(--font-size-label);font-weight:var(--med-font-weight-regular);line-height:var(--med-line-height-compressed);color:var(--color-label);padding-bottom:var(--med-spacing-stack-base)}::slotted(*){margin-left:auto}:host(.med-tiles--selected) .med-tiles__border{background:var(--border-background-selected)}:host(.med-color){--color-label:hsl(var(--med-color-3));--border-background-selected:hsl(var(--med-color-3))}:host(.med-color-neutral){--color-label:hsl(var(--med-color-neutral));--border-background-selected:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--color-label:hsl(var(--med-color-feedback));--border-background-selected:hsl(var(--med-color-feedback))}:host(.med-tiles.med-solid){--background:hsl(var(--med-color-brand-3));--border-background-selected:hsl(var(--med-color-contrast-fixed));--color-label:hsl(var(--med-color-contrast-fixed))}:host(.med-tiles.med-solid) .med-tiles__badge{--background:hsl(var(--med-color-brand-3))}:host(.med-tiles.med-solid.ion-color){--background:hsl(var(--med-color-3));--border-background-selected:hsl(var(--med-color-contrast-fixed));--color-label:hsl(var(--med-color-contrast-fixed))}:host(.med-tiles.med-solid.ion-color) .med-tiles__badge{--background:hsl(var(--med-color-1)) !important}:host(.med-tiles.med-solid.med-neutral){--background:var(--med-neutral);--border-background-selected:var(--med-neutral-contrast);--color-label:var(--med-neutral-contrast)}:host(.med-tiles.med-solid.med-neutral) .med-tiles__badge{--background:var(--med-neutral-contrast)}";export{l as med_tiles}