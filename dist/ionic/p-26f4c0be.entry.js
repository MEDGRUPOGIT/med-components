import{r as t,h as s,H as a,i}from"./p-4d70e85a.js";import{c as r}from"./p-613c0939.js";import"./p-f4d641a6.js";const n=class{constructor(s){t(this,s),this.singleOpen=!0,this.noAnimation=!1,this.currentlyOpen=null,this.openAnimationTime=this.noAnimation?0:300,this.closeAnimationTime=this.noAnimation?0:300}async handleToggle(t){t.detail.shouldOpen?await this.animateOpen(t):await this.animateClose(t),t.detail.endTransition()}async closeOpenItem(){if(null!==this.currentlyOpen){const t=this.currentlyOpen.detail;return t.startTransition(),await this.animateClose(this.currentlyOpen),t.endTransition(),t.setClosed(),!0}}async animateOpen(t){const s=t.detail.content;this.singleOpen&&await this.closeOpenItem(),this.currentlyOpen=t;const a=Array.from(this.hostElement.children);let i=0;a.forEach(((s,a)=>{s===t.detail.element&&(i=a)})),this.itemsToShift=[...a].splice(i+1,a.length-(i+1)),s.style.display="block";const n=s.clientHeight;return s.style.translateY=`-${n}px`,this.shiftDownAnimation=r().addElement(this.itemsToShift).delay(20).beforeStyles({transform:`translateY(-${n}px)`,position:"relative","z-index":"1"}).afterClearStyles(["position","z-index"]).to("transform","translateY(0)").duration(this.openAnimationTime).easing("linear"),this.contentDownAnimation=r().addElement(s).delay(20).beforeStyles({transform:`translateY(-${n}px)`,height:`${n}px`}).to("transform","translateY(0)").duration(this.openAnimationTime).easing("linear"),await Promise.all([this.shiftDownAnimation.play(),this.contentDownAnimation.play()])}async animateClose(t){const s=t.detail.content;this.currentlyOpen=null;const a=s.clientHeight,i=r().addElement(this.itemsToShift).afterStyles({transform:"translateY(0)"}).to("transform",`translateY(-${a}px)`).duration(this.closeAnimationTime).easing("linear"),n=r().addElement(s).afterStyles({transform:"translateY(0)"}).to("transform",`translateY(-${a}px)`).afterAddWrite((()=>{this.shiftDownAnimation.destroy(),this.contentDownAnimation.destroy()})).duration(this.closeAnimationTime).easing("linear");return await Promise.all([i.play(),n.play()]),s.style.display="none",i.destroy(),n.destroy(),!0}render(){return s(a,null,s("slot",null))}get hostElement(){return i(this)}};n.style=":host{--margin:10px;--background-page:hsl(var(--med-color-neutral-1))}:host{display:block}";export{n as accordion_group}