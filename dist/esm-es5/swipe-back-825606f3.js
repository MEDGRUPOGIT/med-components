/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{j as clamp}from"./helpers-7c8ceac4.js";import{createGesture}from"./index-50c5db1b.js";import"./gesture-controller-635d3a2b.js";var createSwipeBackGesture=function(r,e,a,t,n){var o=r.ownerDocument.defaultView;var c=function(r){return r.startX<=50&&e()};var i=function(r){var e=r.deltaX;var a=e/o.innerWidth;t(a)};var v=function(r){var e=r.deltaX;var a=o.innerWidth;var t=e/a;var c=r.velocityX;var i=a/2;var v=c>=0&&(c>.2||r.deltaX>i);var s=v?1-t:t;var u=s*a;var l=0;if(u>5){var d=u/Math.abs(c);l=Math.min(d,540)}n(v,t<=0?.01:clamp(0,t,.9999),l)};return createGesture({el:r,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:c,onStart:a,onMove:i,onEnd:v})};export{createSwipeBackGesture};