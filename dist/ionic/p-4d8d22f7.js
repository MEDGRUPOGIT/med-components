import{c as i,B as a}from"./p-4d70e85a.js";import{c as e}from"./p-90f9de28.js";const n="ionViewWillEnter",o="ionViewDidEnter",s="ionViewWillLeave",t="ionViewDidLeave",r="ionViewWillUnload",c=a=>new Promise(((e,n)=>{i((()=>{d(a),w(a).then((i=>{i.animation&&i.animation.destroy(),l(a),e(i)}),(i=>{l(a),n(i)}))}))})),d=i=>{const a=i.enteringEl,e=i.leavingEl;E(a,e,i.direction),i.showGoBack?a.classList.add("can-go-back"):a.classList.remove("can-go-back"),P(a,!1),e&&P(e,!1)},w=async i=>{const e=await p(i);return e&&a.isBrowser?m(e,i):b(i)},l=i=>{const a=i.leavingEl;i.enteringEl.classList.remove("ion-page-invisible"),void 0!==a&&a.classList.remove("ion-page-invisible")},p=async i=>{if(i.leavingEl&&i.animated&&0!==i.duration)return i.animationBuilder?i.animationBuilder:"ios"===i.mode?(await __sc_import_ionic("./p-c26bbe5a.js")).iosTransitionAnimation:(await __sc_import_ionic("./p-ed777574.js")).mdTransitionAnimation},m=async(i,a)=>{await u(a,!0);const e=i(a.baseEl,a);V(a.enteringEl,a.leavingEl);const n=await g(e,a);return a.progressCallback&&a.progressCallback(void 0),n&&f(a.enteringEl,a.leavingEl),{hasCompleted:n,animation:e}},b=async i=>{const a=i.enteringEl,e=i.leavingEl;return await u(i,!1),V(a,e),f(a,e),{hasCompleted:!0}},u=async(i,a)=>{const e=(void 0!==i.deepWait?i.deepWait:a)?[h(i.enteringEl),h(i.leavingEl)]:[_(i.enteringEl),_(i.leavingEl)];await Promise.all(e),await v(i.viewIsReady,i.enteringEl)},v=async(i,a)=>{i&&await i(a)},g=(i,a)=>{const e=a.progressCallback,n=new Promise((a=>{i.onFinish((i=>a(1===i)))}));return e?(i.progressStart(!0),e(i)):i.play(),n},V=(i,a)=>{y(a,"ionViewWillLeave"),y(i,"ionViewWillEnter")},f=(i,a)=>{y(i,"ionViewDidEnter"),y(a,"ionViewDidLeave")},y=(i,a)=>{if(i){const e=new CustomEvent(a,{bubbles:!1,cancelable:!1});i.dispatchEvent(e)}},_=i=>i?new Promise((a=>e(i,a))):Promise.resolve(),h=async i=>{const a=i;if(a){if(null!=a.componentOnReady&&null!=await a.componentOnReady())return;await Promise.all(Array.from(a.children).map(h))}},P=(i,a)=>{a?(i.setAttribute("aria-hidden","true"),i.classList.add("ion-page-hidden")):(i.hidden=!1,i.removeAttribute("aria-hidden"),i.classList.remove("ion-page-hidden"))},E=(i,a,e)=>{void 0!==i&&(i.style.zIndex="back"===e?"99":"101"),void 0!==a&&(a.style.zIndex="100")},L=i=>{if(i.classList.contains("ion-page"))return i;return i.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||i};export{n as L,o as a,s as b,t as c,r as d,h as e,L as g,y as l,P as s,c as t}