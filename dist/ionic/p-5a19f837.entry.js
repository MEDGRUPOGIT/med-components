import{r as e,e as t,h as i,i as s,H as n}from"./p-4d70e85a.js";import{b as r,c as o}from"./p-2e2691bb.js";import{g as a}from"./p-0acb0177.js";import{l as d}from"./p-90f9de28.js";import{l as p,t as h,s as c,d as m,b as x,c as l}from"./p-4d8d22f7.js";import{a as u}from"./p-bc5c9b27.js";class g{constructor(e,t){this.component=e,this.params=t,this.state=1}async init(e){if(this.state=2,!this.element){const t=this.component;this.element=await u(this.delegate,e,t,["ion-page","ion-page-invisible"],this.params)}}_destroy(){d(3!==this.state,"view state must be ATTACHED");const e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3}}const b=(e,t,i)=>{if(!e)return!1;if(e.component!==t)return!1;const s=e.params;if(s===i)return!0;if(!s&&!i)return!0;if(!s||!i)return!1;const n=Object.keys(s),r=Object.keys(i);if(n.length!==r.length)return!1;for(const o of n)if(s[o]!==i[o])return!1;return!0},f=(e,t)=>e?e instanceof g?e:new g(e,t):null,v=class{constructor(i){e(this,i),this.ionNavWillLoad=t(this,"ionNavWillLoad",7),this.ionNavWillChange=t(this,"ionNavWillChange",3),this.ionNavDidChange=t(this,"ionNavDidChange",3),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}swipeGestureChanged(){this.gesture&&this.gesture.enable(!0===this.swipeGesture)}rootChanged(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))}componentWillLoad(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){const e=r(this);this.swipeGesture=o.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()}async componentDidLoad(){this.rootChanged(),this.gesture=(await __sc_import_ionic("./p-2a4d69a1.js")).createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged()}disconnectedCallback(){for(const e of this.views)p(e.element,m),e._destroy();this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0}push(e,t,i,s){return this.queueTrns({insertStart:-1,insertViews:[{component:e,componentProps:t}],opts:i},s)}insert(e,t,i,s,n){return this.queueTrns({insertStart:e,insertViews:[{component:t,componentProps:i}],opts:s},n)}insertPages(e,t,i,s){return this.queueTrns({insertStart:e,insertViews:t,opts:i},s)}pop(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)}popTo(e,t,i){const s={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(s.removeView=e,s.removeStart=1):"number"==typeof e&&(s.removeStart=e+1),this.queueTrns(s,i)}popToRoot(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)}removeIndex(e,t=1,i,s){return this.queueTrns({removeStart:e,removeCount:t,opts:i},s)}setRoot(e,t,i,s){return this.setPages([{component:e,componentProps:t}],i,s)}setPages(e,t,i){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},i)}setRouteId(e,t,i,s){const n=this.getActiveSync();if(b(n,e,t))return Promise.resolve({changed:!1,element:n.element});let r;const o=new Promise((e=>r=e));let a;const d={updateURL:!1,viewIsReady:e=>{let t;const i=new Promise((e=>t=e));return r({changed:!0,element:e,markVisible:async()=>{t(),await a}}),i}};if("root"===i)a=this.setRoot(e,t,d);else{const n=this.views.find((i=>b(i,e,t)));n?a=this.popTo(n,Object.assign(Object.assign({},d),{direction:"back",animationBuilder:s})):"forward"===i?a=this.push(e,t,Object.assign(Object.assign({},d),{animationBuilder:s})):"back"===i&&(a=this.setRoot(e,t,Object.assign(Object.assign({},d),{direction:"back",animated:!0,animationBuilder:s})))}return o}async getRouteId(){const e=this.getActiveSync();return e?{id:e.element.tagName,params:e.params,element:e.element}:void 0}getActive(){return Promise.resolve(this.getActiveSync())}getByIndex(e){return Promise.resolve(this.views[e])}canGoBack(e){return Promise.resolve(this.canGoBackSync(e))}getPrevious(e){return Promise.resolve(this.getPreviousSync(e))}getLength(){return this.views.length}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(e=this.getActiveSync()){return!(!e||!this.getPreviousSync(e))}getPreviousSync(e=this.getActiveSync()){if(!e)return;const t=this.views,i=t.indexOf(e);return i>0?t[i-1]:void 0}async queueTrns(e,t){if(this.isTransitioning&&null!=e.opts&&e.opts.skipIfBusy)return Promise.resolve(!1);const i=new Promise(((t,i)=>{e.resolve=t,e.reject=i}));if(e.done=t,e.opts&&!1!==e.opts.updateURL&&this.useRouter){const t=document.querySelector("ion-router");if(t){const i=await t.canTransition();if(!1===i)return Promise.resolve(!1);if("string"==typeof i)return t.push(i,e.opts.direction||"back"),Promise.resolve(!1)}}return e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),i}success(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){const t=document.querySelector("ion-router");t&&t.navChanged("back"===e.direction?"back":"forward")}}failed(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))}fireError(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)}async runTransition(e){try{this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e);const t=this.getActiveSync(),i=this.getEnteringView(e,t);if(!t&&!i)throw new Error("no views in the stack to be removed");i&&1===i.state&&await i.init(this.el),this.postViewInit(i,t,e);const s=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&i!==t;s&&e.opts&&t&&("back"===e.opts.direction&&(e.opts.animationBuilder=e.opts.animationBuilder||i&&i.animationBuilder),t.animationBuilder=e.opts.animationBuilder);const n=s?await this.transition(i,t,e):{hasCompleted:!0,requiresTransition:!1};this.success(n,e),this.ionNavDidChange.emit()}catch(t){this.failed(t,e)}this.isTransitioning=!1,this.nextTrns()}prepareTI(e){const t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){d(void 0!==e.removeStart,"removeView needs removeStart"),d(void 0!==e.removeCount,"removeView needs removeCount");const t=this.views.indexOf(e.removeView);if(t<0)throw new Error("removeView was not found");e.removeStart+=t}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);const i=e.insertViews;if(!i)return;d(i.length>0,"length can not be zero");const s=i.map((e=>e instanceof g?e:"component"in e?f(e.component,null===e.componentProps?void 0:e.componentProps):f(e,void 0))).filter((e=>null!==e));if(0===s.length)throw new Error("invalid views to insert");for(const n of s){n.delegate=e.opts.delegate;const t=n.nav;if(t&&t!==this)throw new Error("inserted view was already inserted");if(3===n.state)throw new Error("inserted view was already destroyed")}e.insertViews=s}getEnteringView(e,t){const i=e.insertViews;if(void 0!==i)return i[i.length-1];const s=e.removeStart;if(void 0!==s){const i=this.views,n=s+e.removeCount;for(let e=i.length-1;e>=0;e--){const r=i[e];if((e<s||e>=n)&&r!==t)return r}}}postViewInit(e,t,i){d(t||e,"Both leavingView and enteringView are null"),d(i.resolve,"resolve must be valid"),d(i.reject,"reject must be valid");const s=i.opts,n=i.insertViews,r=i.removeStart,o=i.removeCount;let a;if(void 0!==r&&void 0!==o){d(r>=0,"removeStart can not be negative"),d(o>=0,"removeCount can not be negative"),a=[];for(let i=0;i<o;i++){const s=this.views[i+r];s&&s!==e&&s!==t&&a.push(s)}s.direction=s.direction||"back"}const h=this.views.length+(void 0!==n?n.length:0)-(void 0!==o?o:0);if(d(h>=0,"final balance can not be negative"),0===h)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(n){let e=i.insertStart;for(const t of n)this.insertViewAt(t,e),e++;i.enteringRequiresTransition&&(s.direction=s.direction||"forward")}if(a&&a.length>0){for(const e of a)p(e.element,x),p(e.element,l),p(e.element,m);for(const e of a)this.destroyView(e)}}async transition(e,t,i){const s=i.opts,n=s.progressAnimation?e=>this.sbAni=e:void 0,a=r(this),d=e.element,p=t&&t.element,c=Object.assign({mode:a,showGoBack:this.canGoBackSync(e),baseEl:this.el,animationBuilder:this.animation||s.animationBuilder||o.get("navAnimation"),progressCallback:n,animated:this.animated&&o.getBoolean("animated",!0),enteringEl:d,leavingEl:p},s),{hasCompleted:m}=await h(c);return this.transitionFinish(m,e,t,s)}transitionFinish(e,t,i,s){const n=e?t:i;return n&&this.cleanup(n),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:i,direction:s.direction}}insertViewAt(e,t){const i=this.views,s=i.indexOf(e);s>-1?(d(e.nav===this,"view is not part of the nav"),i.splice(t,0,i.splice(s,1)[0])):(d(!e.nav,"nav is used"),e.nav=this,i.splice(t,0,e))}removeView(e){d(2===e.state||3===e.state,"view state should be loaded or destroyed");const t=this.views,i=t.indexOf(e);d(i>-1,"view must be part of the stack"),i>=0&&t.splice(i,1)}destroyView(e){e._destroy(),this.removeView(e)}cleanup(e){if(this.destroyed)return;const t=this.views,i=t.indexOf(e);for(let s=t.length-1;s>=0;s--){const e=t[s],n=e.element;n&&(s>i?(p(n,m),this.destroyView(e)):s<i&&c(n,!0))}}canStart(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()}onStart(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)}onMove(e){this.sbAni&&this.sbAni.progressStep(e)}onEnd(e,t,i){if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish((()=>{this.animationEnabled=!0}),{oneTimeCallback:!0});let s=e?-.001:.001;e?s+=a([0,0],[.32,.72],[0,1],[1,1],t)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),s+=a([0,0],[1,0],[.68,.28],[1,1],t)[0]),this.sbAni.progressEnd(e?1:0,s,i)}}render(){return i("slot",null)}get el(){return s(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}};v.style=':root{--med-font-family-brand:"fsemeric";--med-font-family-base:"fsemeric";--med-font-size-nano:10px;--med-font-size-xxxs:12px;--med-font-size-xxs:14px;--med-font-size-xs:16px;--med-font-size-sm:20px;--med-font-size-md:24px;--med-font-size-lg:32px;--med-font-size-xl:40px;--med-font-size-xxl:48px;--med-font-size-xxxl:64px;--med-font-size-huge:96px;--med-font-weight-thin:250;--med-font-weight-light:300;--med-font-weight-regular:400;--med-font-weight-medium:500;--med-font-weight-semibold:600;--med-font-weight-bold:700;--med-font-weight-extrabold:800;--med-font-weight-heavy:900;--med-letter-spacing-ultracompressed:-0.04;--med-letter-spacing-compressed:-0.02;--med-letter-spacing-default:0;--med-letter-spacing-medium:0.02;--med-letter-spacing-expanded:0.05;--med-letter-spacing-distant:0.1;--med-letter-spacing-far:0.2;--med-line-height-compressed:100%;--med-line-height-default:24px;--med-line-height-double:200%}:root{--med-spacing-inset-nano:4px;--med-spacing-inset-xs:8px;--med-spacing-inset-sm:16px;--med-spacing-inset-base:24px;--med-spacing-inset-md:32px;--med-spacing-inset-lg:40px;--med-spacing-inset-xl:48px;--med-spacing-inset-xxl:64px;--med-spacing-squish-nano:4px 8px;--med-spacing-squish-xs:8px 16px;--med-spacing-squish-sm:8px 24px;--med-spacing-squish-base:8px 32px;--med-spacing-squish-md:16px 24px;--med-spacing-squish-lg:16px 32px;--med-spacing-squish-xl:24px 32px;--med-spacing-squish-xxl:32px 40px;--med-spacing-stretch-nano:8px 4px;--med-spacing-stretch-xs:16px 8px;--med-spacing-stretch-sm:24px 8px;--med-spacing-stretch-base:32px 8px;--med-spacing-stretch-md:24px 16px;--med-spacing-stretch-lg:32px 16px;--med-spacing-stretch-xl:32px 24px;--med-spacing-stretch-xxl:40px 32px;--med-spacing-inline-quark:2px;--med-spacing-inline-nano:4px;--med-spacing-inline-xxxs:8px;--med-spacing-inline-base:16px;--med-spacing-inline-xxs:24px;--med-spacing-inline-xs:32px;--med-spacing-inline-sm:40px;--med-spacing-inline-md:48px;--med-spacing-inline-lg:56px;--med-spacing-inline-xl:64px;--med-spacing-inline-xxl:72px;--med-spacing-inline-xxxl:80px;--med-spacing-inline-huge:120px;--med-spacing-inline-ultra:160px;--med-spacing-stack-quark:2px;--med-spacing-stack-nano:4px;--med-spacing-stack-xxxs:8px;--med-spacing-stack-base:16px;--med-spacing-stack-xxs:24px;--med-spacing-stack-xs:32px;--med-spacing-stack-sm:40px;--med-spacing-stack-md:48px;--med-spacing-stack-lg:56px;--med-spacing-stack-xl:64px;--med-spacing-stack-xxl:72px;--med-spacing-stack-xxxl:80px;--med-spacing-stack-huge:120px;--med-spacing-stack-ultra:160px}:root{--med-border-radius-none:0;--med-border-radius-quark:2px;--med-border-radius-nano:4px;--med-border-radius-sm:8px;--med-border-radius-md:16px;--med-border-radius-lg:24px;--med-border-radius-pill:31.25em;--med-border-radius-full:50%;--med-border-radius-speech-left-down:8px 8px 8px 0;--med-border-radius-speech-right-down:8px 8px 0 8px;--med-border-radius-speech-right-up:8px 0 8px 0px;--med-border-radius-speech-left-up:0 8px 8px 0px;--med-border-radius-table-down-sm:0 0 8px 8px;--med-border-radius-table-up-sm:8px 8px 0 0;--med-border-radius-table-down-md:16px 16px 0 0;--med-border-radius-table-up-md:0 0 16px 16px;--med-border-width-none:0;--med-border-width-quark:0.25px;--med-border-width-nano:0.5px;--med-border-width-hairline:1px;--med-border-width-thin:2px;--med-border-width-thick:4px;--med-border-width-bold:8px;--med-border-width-heavy:16px;--med-opacity-level-semiopaque:0.8;--med-opacity-level-intense:0.64;--med-opacity-level-half:0.5;--med-opacity-level-medium:0.32;--med-opacity-level-light:0.16;--med-opacity-level-semitransparent:0.08;--med-shadow-level-0:none;--med-shadow-level-1:0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 3px rgba(0, 0, 0, 0.2);--med-shadow-level-2:0 2px 4px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-3:0 3px 3px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-4:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-5:0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-6:0 8px 10px rgba(0, 0, 0, 0.14), 0 3px 14px rgba(0, 0, 0, 0.12), 0 4px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-7:0 9px 12px rgba(0, 0, 0, 0.14), 0 3px 16px rgba(0, 0, 0, 0.12), 0 5px 6px rgba(0, 0, 0, 0.2);--med-shadow-level-8:0 12px 17px rgba(0, 0, 0, 0.14), 0 5px 22px rgba(0, 0, 0, 0.12), 0 7px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-9:0 16px 24px rgba(0, 0, 0, 0.14), 0 6px 30px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-10:0 24px 38px rgba(0, 0, 0, 0.14), 0 9px 46px rgba(0, 0, 0, 0.12), 0 11px 15px rgba(0, 0, 0, 0.2)}:host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}';const w=class{constructor(t){e(this,t),this.routerDirection="forward",this.onClick=()=>((e,t,i,s,n)=>{const r=this.el.closest("ion-nav");if(r)if("forward"===t){if(void 0!==i)return r.push(i,s,{skipIfBusy:!0,animationBuilder:n})}else if("root"===t){if(void 0!==i)return r.setRoot(i,s,{skipIfBusy:!0,animationBuilder:n})}else if("back"===t)return r.pop({skipIfBusy:!0,animationBuilder:n});return Promise.resolve(!1)})(0,this.routerDirection,this.component,this.componentProps,this.routerAnimation)}render(){return i(n,{onClick:this.onClick})}get el(){return s(this)}};export{v as ion_nav,w as ion_nav_link}