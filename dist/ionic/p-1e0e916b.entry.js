import{r as e,h as n,H as t}from"./p-4d70e85a.js";import{c as o}from"./p-a45b0972.js";const c=class{constructor(n){e(this,n),this.collapsed=!0}async toggle(e){null==e||e.stopPropagation(),this.collapsed=!this.collapsed}handleClick(e){this.collapsed||this.toggle(e)}render(){return n(t,{"from-stencil":!0,class:o(null,{"med-context-menu":!0,"med-context-menu--collapsed":this.collapsed},null)},n("ion-button",{mode:"ios","icon-only":!0,onClick:e=>{this.toggle(e)},class:"med-context-menu__button",fill:"clear","ds-size":"sm"},n("ion-icon",{slot:"icon-only",class:"med-icon med-context-menu__icon",name:"med-context-menu"})),n("div",{class:"med-context-menu__content"},n("ion-button",{mode:"ios","icon-only":!0,onClick:e=>{this.toggle(e)},class:"med-context-menu__inner-button",fill:"clear","ds-size":"sm"},n("ion-icon",{slot:"icon-only",class:"med-icon med-context-menu__inner-icon",name:"med-context-menu"})),n("slot",null)))}};c.style=".sc-med-context-menu-h{--background:hsl(var(--med-color-neutral-3));--color:hsl(var(--med-color-neutral-10));--z-index:1}.med-context-menu.sc-med-context-menu-h{display:block;position:relative}.med-context-menu.sc-med-context-menu-h .med-context-menu__content.sc-med-context-menu{z-index:var(--z-index);position:absolute;background:var(--background);right:-8px;top:-8px;min-width:264px;max-width:264px;width:100%;-webkit-box-shadow:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);box-shadow:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);border-radius:4px;padding:16px;visibility:visible;opacity:1;-webkit-transition:opacity 300ms ease-in-out;transition:opacity 300ms ease-in-out}.med-context-menu.sc-med-context-menu-h .med-context-menu__button.sc-med-context-menu{--font-size:24px}.med-context-menu.sc-med-context-menu-h .med-context-menu__icon.sc-med-context-menu{margin-right:0}.med-context-menu.sc-med-context-menu-h .med-context-menu__inner-button.sc-med-context-menu{position:absolute;right:8px;top:9px;--font-size:24px}.med-context-menu.sc-med-context-menu-h .med-context-menu__inner-icon.sc-med-context-menu{stroke:hsl(var(--med-color-neutral-10));font-size:24px}.med-context-menu--collapsed.sc-med-context-menu-h .med-context-menu__content.sc-med-context-menu{visibility:hidden;opacity:0;-webkit-transition:opacity 300ms ease-in-out;transition:opacity 300ms ease-in-out;--z-index:0}";export{c as med_context_menu}