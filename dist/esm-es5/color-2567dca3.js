/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var generateMedColor=function(e,r){var t,o,n;if(typeof e==="string"&&e.length>0){var c=e.split("-");if(c[0]==="neutral"){return Object.assign((t={"med-color-neutral":true},t["med-color-".concat(e)]=true,t),r)}else if(c[0]==="fb"){return Object.assign((o={"med-color-feedback":true},o["med-color-".concat(e)]=true,o),r)}else{return Object.assign((n={"med-color":true},n["med-color-".concat(e)]=true,n),r)}}else{return r}};export{generateMedColor as g};