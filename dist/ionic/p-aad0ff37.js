/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{h as o,e as t}from"./p-d73a117d.js";import{c as s}from"./p-750d3f3f.js";const n=()=>{const n=window;n.addEventListener("statusTap",(()=>{o((()=>{const o=document.elementFromPoint(n.innerWidth/2,n.innerHeight/2);if(!o)return;const r=o.closest("ion-content");r&&new Promise((o=>s(r,o))).then((()=>{t((()=>r.scrollToTop(300)))}))}))}))};export{n as startStatusTap}