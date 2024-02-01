/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var generateMedColor=function(e,r){var t,o,l;if(typeof e==="string"&&e.length>0){var u=e.split("-");if(u[0]==="neutral"){return Object.assign((t={"med-color-neutral":true},t["med-color-".concat(e)]=true,t),r)}else if(u[0]==="fb"){return Object.assign((o={"med-color-feedback":true},o["med-color-".concat(e)]=true,o),r)}else{return Object.assign((l={"med-color":true},l["med-color-".concat(e)]=true,l),r)}}else{return r}};export{generateMedColor as g};