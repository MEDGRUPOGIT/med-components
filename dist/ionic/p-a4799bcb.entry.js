import{r as t,f as i,c as a,h as n,i as e,H as o}from"./p-4d70e85a.js";import{b as r}from"./p-5b7c63a3.js";const s=class{constructor(i){t(this,i),this.type="bounded"}async addRipple(t,n){return new Promise((e=>{i((()=>{const i=this.el.getBoundingClientRect(),o=i.width,r=i.height,s=Math.sqrt(o*o+r*r),f=Math.max(r,o),p=this.unbounded?f:s+m,u=Math.floor(f*l),d=p/u;let b=t-i.left,w=n-i.top;this.unbounded&&(b=.5*o,w=.5*r);const y=b-.5*u,k=w-.5*u,v=.5*o-b,h=.5*r-w;a((()=>{const t=document.createElement("div");t.classList.add("ripple-effect");const i=t.style;i.top=k+"px",i.left=y+"px",i.width=i.height=u+"px",i.setProperty("--final-scale",`${d}`),i.setProperty("--translate-end",`${v}px, ${h}px`),(this.el.shadowRoot||this.el).appendChild(t),setTimeout((()=>{e((()=>{c(t)}))}),325)}))}))}))}get unbounded(){return"unbounded"===this.type}render(){const t=r(this);return n(o,{role:"presentation",class:{[t]:!0,unbounded:this.unbounded}})}get el(){return e(this)}},c=t=>{t.classList.add("fade-out"),setTimeout((()=>{t.remove()}),200)},m=10,l=.5;s.style=":host{--ripple-opacity:0.16;--ripple-color:currentColor;left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:var(--ripple-color);color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--ripple-opacity)}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--ripple-opacity)}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--ripple-opacity)}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--ripple-opacity)}to{opacity:0}}";export{s as ion_ripple_effect}