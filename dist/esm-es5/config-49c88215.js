/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var sanitizeDOMString=function(e){try{if(e instanceof IonicSafeString){return e.value}if(!isSanitizerEnabled()||typeof e!=="string"||e===""){return e}if(e.includes("onload=")){return""}var r=document.createDocumentFragment();var n=document.createElement("div");r.appendChild(n);n.innerHTML=e;blockedTags.forEach((function(e){var n=r.querySelectorAll(e);for(var t=n.length-1;t>=0;t--){var i=n[t];if(i.parentNode){i.parentNode.removeChild(i)}else{r.removeChild(i)}var a=getElementChildren(i);for(var o=0;o<a.length;o++){sanitizeElement(a[o])}}}));var t=getElementChildren(r);for(var i=0;i<t.length;i++){sanitizeElement(t[i])}var a=document.createElement("div");a.appendChild(r);var o=a.querySelector("div");return o!==null?o.innerHTML:a.innerHTML}catch(e){console.error(e);return""}};var sanitizeElement=function(e){if(e.nodeType&&e.nodeType!==1){return}if(typeof NamedNodeMap!=="undefined"&&!(e.attributes instanceof NamedNodeMap)){e.remove();return}for(var r=e.attributes.length-1;r>=0;r--){var n=e.attributes.item(r);var t=n.name;if(!allowedAttributes.includes(t.toLowerCase())){e.removeAttribute(t);continue}var i=n.value;var a=e[t];if(i!=null&&i.toLowerCase().includes("javascript:")||a!=null&&a.toLowerCase().includes("javascript:")){e.removeAttribute(t)}}var o=getElementChildren(e);for(var r=0;r<o.length;r++){sanitizeElement(o[r])}};var getElementChildren=function(e){return e.children!=null?e.children:e.childNodes};var isSanitizerEnabled=function(){var e;var r=window;var n=(e=r===null||r===void 0?void 0:r.Ionic)===null||e===void 0?void 0:e.config;if(n){if(n.get){return n.get("sanitizerEnabled",true)}else{return n.sanitizerEnabled===true||n.sanitizerEnabled===undefined}}return true};var allowedAttributes=["class","id","href","src","name","slot"];var blockedTags=["script","style","iframe","meta","link","object","embed"];var IonicSafeString=function(){function e(e){this.value=e}return e}();var setupConfig=function(e){var r=window;var n=r.Ionic;if(n&&n.config&&n.config.constructor.name!=="Object"){return}r.Ionic=r.Ionic||{};r.Ionic.config=Object.assign(Object.assign({},r.Ionic.config),e);return r.Ionic.config};var getMode=function(){var e;var r=window;var n=(e=r===null||r===void 0?void 0:r.Ionic)===null||e===void 0?void 0:e.config;if(n){if(n.mode){return n.mode}else{return n.get("mode")}}return"md"};var ENABLE_HTML_CONTENT_DEFAULT=false;export{ENABLE_HTML_CONTENT_DEFAULT as E,IonicSafeString as I,sanitizeDOMString as a,getMode as g,setupConfig as s};