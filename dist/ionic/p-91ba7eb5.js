/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{c as r}from"./p-750d3f3f.js";const e=async(e,t,n,s,i)=>{if(e)return e.attachViewToDom(t,n,i,s);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n;return s&&s.forEach((r=>o.classList.add(r))),i&&Object.assign(o,i),t.appendChild(o),await new Promise((e=>r(o,e))),o},t=(r,e)=>{if(e){if(r)return r.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()};export{e as a,t as d}