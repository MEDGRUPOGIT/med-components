/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
System.register(["./p-67c3a2a8.system.js","./p-e8899538.system.js"],(function(e){"use strict";var a,r,t,d;return{setters:[function(e){a=e.r;r=e.h;t=e.H},function(e){d=e.g}],execute:function(){var o=":host{--border-color:hsl(var(--med-color-fb-warning))}.date{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:48px;cursor:pointer}.date__type{--font-size:12px;--font-weight:600;--line-height:11px;--color:hsl(var(--med-color-neutral-10))}.date__container{border-radius:50%;width:32px;height:32px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background:var(--background)}:host(.med-calendar-day--active){--background:hsl(var(--med-color-brand-3))}:host(.med-calendar-day--outline) .date__container{border:1px solid var(--border-color)}@media (any-hover: hover){:host(.med-calendar-day:hover){--background:hsl(var(--med-color-neutral-3))}}:host(.med-color.med-calendar-day--active){--background:hsl(var(--med-color-3));--color:hsl(var(--med-color-contrast-fixed))}:host(.med-color-neutral.med-calendar-day--active){--background:hsl(var(--med-color-neutral));--color:hsl(var(--med-color-neutral-contrast))}:host(.med-color-feedback.med-calendar-day--active){--background:hsl(var(--med-color-feedback));--color:hsl(var(--med-color-feedback-contrast))}";var n=e("med_calendar_day",function(){function e(e){a(this,e);this.dsColor=undefined;this.active=false;this.fill=undefined}e.prototype.render=function(){var e;var a=this,o=a.dsColor,n=a.active,c=a.fill;return r(t,{class:d(o,(e={"med-calendar-day":true,"med-calendar-day--active":n},e["med-calendar-day--".concat(c)]=c!==undefined,e))},r("div",{class:"date"},r("div",{class:"date__container"},r("med-type",{class:"date__type"},r("slot",null)))))};return e}());n.style=o}}}));