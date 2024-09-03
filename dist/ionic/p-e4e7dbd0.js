/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const o=(o,e)=>{if("string"==typeof o&&o.length>0){const r=o.split("-");return Object.assign("neutral"===r[0]?{"med-color-neutral":!0,[`med-color-${o}`]:!0}:"fb"===r[0]?{"med-color-feedback":!0,[`med-color-${o}`]:!0}:{"med-color":!0,[`med-color-${o}`]:!0},e)}return e};export{o as g}