/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{h as o,e as t}from"./p-d73a117d.js";import{c as s}from"./p-1aa4f5c6.js";const n=()=>{const n=window;n.addEventListener("statusTap",(()=>{o((()=>{const o=document.elementFromPoint(n.innerWidth/2,n.innerHeight/2);if(!o)return;const a=o.closest("ion-content");a&&new Promise((o=>s(a,o))).then((()=>{t((()=>a.scrollToTop(300)))}))}))}))};export{n as startStatusTap}