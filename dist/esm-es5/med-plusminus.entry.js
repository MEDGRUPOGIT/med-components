import{r as registerInstance,e as createEvent,h,H as Host}from"./index-70672e81.js";import{g as generateMedColor}from"./med-theme-83c28ab9.js";var PlusMinusStatus;(function(s){s["MINUS"]="minus";s["PLUS"]="plus"})(PlusMinusStatus||(PlusMinusStatus={}));var medPlusminusCss=".sc-med-plusminus-h{--color:hsl(var(--med-color-neutral-10));--pointer-events:initial}.med-plusminus.sc-med-plusminus-h{font-size:32px;font-weight:600;line-height:32px;color:var(--color);max-height:400px;width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.med-plusminus.sc-med-plusminus-h .med-plusminus__icon-minus.sc-med-plusminus{margin-right:16px;cursor:pointer;stroke:var(--color)}.med-plusminus.sc-med-plusminus-h .med-plusminus__icon-plus.sc-med-plusminus{margin-left:16px;cursor:pointer;stroke:var(--color)}.med-plusminus--disabled-minus.sc-med-plusminus-h .med-plusminus__icon-minus.sc-med-plusminus,.med-plusminus--disabled-plus.sc-med-plusminus-h .med-plusminus__icon-plus.sc-med-plusminus{opacity:0.5;pointer-events:var(--pointer-events)}.med-plusminus--disabled-both.sc-med-plusminus-h .med-plusminus__icon-minus.sc-med-plusminus,.med-plusminus--disabled-both.sc-med-plusminus-h .med-plusminus__icon-plus.sc-med-plusminus{opacity:0.5;pointer-events:var(--pointer-events)}.med-plusminus--lg.sc-med-plusminus-h{font-size:48px}.med-plusminus--lg.sc-med-plusminus-h .med-icon.sc-med-plusminus{font-size:48px}.med-color.sc-med-plusminus-h{--color:hsl(var(--med-color-3));stroke:hsl(var(--med-color-3))}.med-color-neutral.sc-med-plusminus-h{--color:hsl(var(--med-color-neutral));stroke:hsl(var(--med-color-neutral))}.med-color-feedback.sc-med-plusminus-h{--color:hsl(var(--med-color-feedback));stroke:hsl(var(--med-color-feedback))}";var MedPlusminus=function(){function s(s){var e=this;registerInstance(this,s);this.medChange=createEvent(this,"medChange",7);this.onClick=function(s){e.medChange.emit(s)}}s.prototype.render=function(){var s;var e=this;var n=this,u=n.dsSize,i=n.dsColor,m=n.disabled;return h(Host,{"from-stencil":true,class:generateMedColor(i,(s={"med-plusminus":true},s["med-plusminus--disabled-"+m]=m!==undefined,s["med-plusminus--"+u]=u!==undefined,s))},h("ion-icon",{class:"med-icon med-plusminus__icon-minus",name:"med-menos-circulo",onClick:function(){return e.onClick(PlusMinusStatus.MINUS)}}),h("slot",null),h("ion-icon",{class:"med-icon med-plusminus__icon-plus",name:"med-mais-circulo",onClick:function(){return e.onClick(PlusMinusStatus.PLUS)}}))};return s}();MedPlusminus.style=medPlusminusCss;export{MedPlusminus as med_plusminus};