import{r as e,h as o,H as t}from"./p-4d70e85a.js";import{c as s}from"./p-8519437c.js";const a=class{constructor(o){e(this,o),this.titulo="Cabe recurso?",this.like=0,this.unlike=0}render(){const e=this.titulo,a=isNaN(this.like)?0:+this.like,d=isNaN(this.unlike)?0:+this.unlike,c=a+d,i=0===d&&0===a?50:100*a/c,n=0===d&&0===a?50:100*d/c;return o(t,{"from-stencil":!0,class:s(null,{"med-vote":!0},null)},o("div",{class:"med-vote__row"},o("div",{class:"med-vote__icon-container"},o("ion-icon",{class:"med-icon med-vote__icon med-vote__icon--cabe",name:"med-positivo"}),o("div",{class:"med-vote__badge med-vote__badge--cabe"},a)),o("h3",{class:"med-vote__heading",innerHTML:e}),o("div",{class:"med-vote__icon-container"},o("div",{class:"med-vote__badge med-vote__badge--nao-cabe"},d),o("ion-icon",{class:"med-icon med-vote__icon med-vote__icon--nao-cabe",name:"med-negativo"}))),o("div",{class:"med-vote__row"},o("div",{class:"med-vote__chart med-vote__chart--cabe",style:{width:`${i}%`}}),o("div",{class:"med-vote__chart med-vote__chart--nao-cabe",style:{width:`${n}%`}})))}};a.style=":host(.med-vote){display:block;padding-top:16px}:host(.med-vote) .med-vote__row{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:16px;-ms-flex-align:center;align-items:center}:host(.med-vote) .med-vote__icon-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.med-vote) .med-vote__icon{min-width:24px}:host(.med-vote) .med-vote__icon--cabe{stroke:hsl(var(--med-color-fb-success))}:host(.med-vote) .med-vote__icon--nao-cabe{stroke:hsl(var(--med-color-warning-warning))}:host(.med-vote) .med-vote__heading{font-size:20px;line-height:100%;font-weight:600;color:hsl(var(--med-color-neutral-10));margin:0}:host(.med-vote) .med-vote__badge{display:-ms-flexbox;display:flex;height:26px;border-radius:16px;font-size:16px;line-height:100%;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-weight:600;width:100%;padding:0 8px}:host(.med-vote) .med-vote__badge--cabe{background-color:hsl(var(--med-color-fb-success));color:hsl(var(--med-color-neutral-1));margin-left:8px}:host(.med-vote) .med-vote__badge--nao-cabe{background-color:hsl(var(--med-color-fb-warning));color:hsl(var(--med-color-neutral-1));margin-right:8px}:host(.med-vote) .med-vote__chart{height:2px}:host(.med-vote) .med-vote__chart--cabe{background-color:hsl(var(--med-color-fb-success));margin-right:4px}:host(.med-vote) .med-vote__chart--nao-cabe{background-color:hsl(var(--med-color-fb-warning));margin-left:4px}";export{a as med_vote}