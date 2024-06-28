/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{h as readTask,e as writeTask}from"./index-336c66d9.js";import{c as componentOnReady}from"./helpers-d6be6e4a.js";var startStatusTap=function(){var n=window;n.addEventListener("statusTap",(function(){readTask((function(){var t=n.innerWidth;var e=n.innerHeight;var r=document.elementFromPoint(t/2,e/2);if(!r){return}var a=r.closest("ion-content");if(a){new Promise((function(n){return componentOnReady(a,n)})).then((function(){writeTask((function(){return a.scrollToTop(300)}))}))}}))}))};export{startStatusTap};