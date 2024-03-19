/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const color = require('./color-c29da9e4.js');

function distanciaEuclidiana(pontoA, pontoB) {
  if (!pontoA || !pontoB)
    return NaN;
  const diffX = pontoA.x - pontoB.x;
  const diffY = pontoA.y - pontoB.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
}
function getPositionFromEvent(event) {
  if (event.touches && event.touches.length > 0) {
    return { x: event.touches[0].screenX, y: event.touches[0].screenY };
  }
  else if (event.changedTouches && event.changedTouches.length > 0) {
    return {
      x: event.changedTouches[0].screenX,
      y: event.changedTouches[0].screenY,
    };
  }
  else if (event.screenX && event.screenY) {
    return { x: event.screenX, y: event.screenY };
  }
  else {
    return undefined;
  }
}

class MedAlternativasBase {
  constructor(parent) {
    this.parent = parent;
    this.distanciaMinimaClick = 50;
    this.tempoLongPress = 1000;
  }
  resetState() {
    this.parent.riscarAtivoIndice = -1;
    this.parent.permiteAlterar = true;
  }
  handleClick(event) {
    if (!event.target.classList.contains('med-alternativas') &&
      event.target.tagName !== 'MED-ALTERNATIVAS') {
      this.resetState();
    }
  }
  onAlternativasChanged(newValue, oldValue) {
    if (newValue != oldValue) {
      this.resetState();
    }
  }
  onTouchStart(event, indice) {
    var _a;
    if (event.type === 'mousedown' && this.parent.blockMouseEvents)
      return;
    if (event.type === 'touchstart') {
      this.parent.blockMouseEvents = true;
    }
    if ((_a = event.target
      .closest('.med-alternativas__riscar')) === null || _a === void 0 ? void 0 : _a.classList.contains('med-alternativas__riscar')) {
      return;
    }
    this.dataStart = new Date();
    this.positionStart = getPositionFromEvent(event);
    this.timer = setTimeout(() => {
      this.dataEnd = new Date();
      const tempoTotal = this.dataEnd.getTime() - this.dataStart.getTime();
      if (tempoTotal >= this.tempoLongPress) {
        this.parent.riscarAtivoIndice = indice;
        this.parent.permiteAlterar = false;
      }
    }, this.tempoLongPress);
  }
  onTouchEnd(event, alternativa) {
    var _a;
    if (event.type === 'mouseup' && this.parent.blockMouseEvents) {
      this.parent.blockMouseEvents = false;
      return;
    }
    if ((_a = event.target
      .closest('.med-alternativas__riscar')) === null || _a === void 0 ? void 0 : _a.classList.contains('med-alternativas__riscar')) {
      return;
    }
    const positionEnd = getPositionFromEvent(event);
    clearTimeout(this.timer);
    if (this.parent.permiteAlterar &&
      distanciaEuclidiana(this.positionStart, positionEnd) <
        this.distanciaMinimaClick) {
      this.parent.riscarAtivoIndice = -1;
      this.alterarAlternativa(alternativa);
    }
    this.parent.permiteAlterar = true;
  }
  alterarAlternativa(item) {
    var _a, _b;
    const alternativa = item;
    if (alternativa.Riscada && this.parent.permiteRiscar) {
      return;
    }
    if (this.parent.alternativaSelecionada === alternativa.Alternativa &&
      this.parent.permiteDesmarcar) {
      this.parent.alternativaSelecionada = '';
      return (_a = this.parent.medChange) === null || _a === void 0 ? void 0 : _a.emit(Object.assign(Object.assign({}, alternativa), { Alternativa: '' }));
    }
    this.parent.alternativaSelecionada = alternativa.Alternativa;
    (_b = this.parent.medChange) === null || _b === void 0 ? void 0 : _b.emit(alternativa);
  }
  riscar(event, alternativa) {
    var _a;
    event.stopPropagation();
    const naoRiscadas = this.parent.alternativas.filter((alt) => !alt.Riscada);
    if (naoRiscadas.length === 1 &&
      naoRiscadas.some((alt) => alternativa.Alternativa === alt.Alternativa))
      return;
    alternativa[this.parent.keyRiscada] = !alternativa[this.parent.keyRiscada];
    this.parent.riscarAtivoIndice = -1;
    (_a = this.parent.medRiscada) === null || _a === void 0 ? void 0 : _a.emit(alternativa);
    this.parent.permiteAlterar = true;
    this.parent.alternativas = [...this.parent.alternativas];
  }
  imageRequest(event, alternativa) {
    var _a;
    event.stopPropagation();
    (_a = this.parent.medGalleryRequest) === null || _a === void 0 ? void 0 : _a.emit(alternativa);
  }
}

const medAlternativasACss = ":host(.med-alternativas) .med-alternativas__container{display:-ms-flexbox;display:flex}:host(.med-alternativas) .med-alternativas__item{cursor:pointer;position:relative;-webkit-transition:background-color 300ms;transition:background-color 300ms;min-height:80px}:host(.med-alternativas) .option{background:hsl(var(--med-color-neutral-8));padding:8px;border-radius:8px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer}:host(.med-alternativas) .option__letter{font-size:16px;font-weight:500;line-height:100%;color:hsl(var(--med-color-neutral-1))}:host(.med-alternativas) .option__fake{height:16px;width:16px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background:#fff;border-radius:50%;margin:0 4px 0 0;position:relative}.option__fake:before{content:\"\";display:inline-block;width:8px;height:8px;background:hsl(var(--med-color-brand-3));opacity:0;-webkit-transition:opacity 300ms;transition:opacity 300ms;border-radius:50%}:host(.med-alternativas) .med-alternativas__left{padding:16px 16px 6px 16px}:host(.med-alternativas) .med-alternativas__right{-ms-flex:1 1 0%;flex:1 1 0%;overflow:hidden;text-align:left;padding:16px 16px 6px 16px;font-size:var(--font-size);font-weight:400;line-height:line-height(16px);text-align:justify;color:hsl(var(--med-color-neutral-9));cursor:pointer}:host(.med-alternativas) .med-alternativas__wrapper{min-height:80px}:host(.med-alternativas) .med-alternativas__progress-bar{--height:10px;-webkit-transition:all 300ms ease;transition:all 300ms ease;opacity:0;-webkit-transform:translateX(-120%);transform:translateX(-120%)}:host(.med-alternativas) .med-alternativas__riscar-icon{stroke:hsl(var(--med-color-neutral-10));--ionicon-stroke-width:1px}@media (min-width: 768px){:host(.med-alternativas) .med-alternativas__list--has-image{display:grid;grid-template-columns:1fr 1fr;gap:16px}}:host(.med-alternativas) .med-alternativas__list--has-image .med-alternativas__riscar{position:absolute;top:10px;right:10px;height:auto;z-index:1;background:#000;padding:8px;border-radius:5px;opacity:0.5}:host(.med-alternativas) .image-container__image{max-width:360px;width:100%;height:auto;display:block}:host(.med-alternativas) .med-alternativas__progress-bar--toggle{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host(.med-alternativas) .med-alternativas__item--selecionada .option{background:hsl(var(--med-color-brand-3))}:host(.med-alternativas) .med-alternativas__item--certa .option{background:hsl(var(--med-color-fb-success))}:host(.med-alternativas) .med-alternativas__item--correta .option{background:hsl(var(--med-color-fb-success))}:host(.med-alternativas) .med-alternativas__item--incorreta .option{background:hsl(var(--med-color-fb-warning))}:host(.med-alternativas) .med-alternativas__item--selecionada .option__fake:before,:host(.med-alternativas) .med-alternativas__item--correta .option__fake:before,:host(.med-alternativas) .med-alternativas__item--incorreta .option__fake:before{opacity:1}:host(.med-alternativas) .med-alternativas__item--certa .option__fake:before{opacity:0}:host(.med-alternativas) .med-alternativas__item--show{background:hsl(var(--med-color-neutral-2))}:host(.med-alternativas) .med-alternativas__riscar{color:hsl(var(--med-color-neutral-10));padding:0 16px;font-size:14px;font-weight:400;line-height:100%;display:-ms-flexbox;display:flex;height:100%;visibility:hidden;opacity:0;pointer-events:none;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;position:absolute;right:0px;top:0px;background:hsl(var(--med-color-neutral-2));-webkit-transition:opacity 300ms;transition:opacity 300ms}:host(.med-alternativas) .med-alternativas__item--riscado .med-alternativas__left,:host(.med-alternativas) .med-alternativas__item--riscado .med-alternativas__right,:host(.med-alternativas) .med-alternativas__item--riscado .med-alternativas__progress-bar{opacity:0.5}:host(.med-alternativas) .med-alternativas__item--riscado .med-alternativas__right{text-decoration:line-through}:host(.med-alternativas) .med-alternativas__riscar--show{visibility:visible;opacity:1;pointer-events:all}:host(.med-alternativas) .med-alternativas__riscar-span{display:-ms-flexbox;display:flex}:host(.med-alternativas) .med-alternativas__riscar-desktop{display:none;padding-left:4px}@media (min-width: 768px){:host(.med-alternativas) .med-alternativas__riscar-desktop{display:-ms-flexbox;display:flex}}@media (min-width: 768px){:host(.med-alternativas) .image-container__button{display:none}}@media (any-hover: hover) and (pointer: fine){:host(.med-alternativas) .med-alternativas__item--permite-riscar:hover{background:hsl(var(--med-color-neutral-2))}:host(.med-alternativas) .med-alternativas__item--permite-riscar:hover .med-alternativas__riscar{visibility:visible;opacity:1;pointer-events:all}}";

const MedAlternativasA = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.medChange = index.createEvent(this, "medChange", 7);
    this.medRiscada = index.createEvent(this, "medRiscada", 7);
    this.medGalleryRequest = index.createEvent(this, "medGalleryRequest", 7);
    this.baseClass = new MedAlternativasBase(this);
    this.dsSkin = undefined;
    this.dsSkinConfig = undefined;
    this.dsColor = undefined;
    this.alternativas = [];
    this.keyAlternativa = 'Alternativa';
    this.keyEnunciado = 'Enunciado';
    this.keyImagem = 'Imagem';
    this.keyPorcentagem = 'Porcentagem';
    this.keyRiscada = 'Riscada';
    this.respostaCorreta = undefined;
    this.mostraResposta = undefined;
    this.alternativaSelecionada = undefined;
    this.permiteRiscar = true;
    this.permiteDesmarcar = false;
    this.blockMouseEvents = false;
    this.permiteAlterar = true;
    this.riscarAtivoIndice = -1;
  }
  handleClick(event) {
    this.baseClass.handleClick(event);
  }
  onAlternativasChanged(newValue, oldValue) {
    this.baseClass.onAlternativasChanged(newValue, oldValue);
  }
  render() {
    const { dsColor, permiteRiscar, mostraResposta, alternativaSelecionada } = this;
    const exibeAcerto = this.alternativaSelecionada && mostraResposta;
    let hasImage = false;
    if (this.alternativas) {
      this.alternativas.forEach((element) => {
        if (element.Imagem)
          hasImage = true;
      });
    }
    return (index.h(index.Host, { "from-stencil": true, class: color.generateMedColor(dsColor, {
        'med-alternativas': true
      }) }, index.h("div", { class: `
           med-alternativas__list
           ${hasImage ? 'med-alternativas__list--has-image' : ''}
           `, role: 'list' }, this.alternativas.map((alternativa, indice) => (index.h("div", { role: 'listitem', onTouchStart: (event) => this.baseClass.onTouchStart(event, indice), onTouchEnd: (event) => this.baseClass.onTouchEnd(event, alternativa), onMouseDown: (event) => this.baseClass.onTouchStart(event, indice), onMouseUp: (event) => this.baseClass.onTouchEnd(event, alternativa), class: `
                med-alternativas__item med-alternativas__item--${alternativa[this.keyAlternativa]}
                ${permiteRiscar ? 'med-alternativas__item--permite-riscar' : ''}
                ${indice === this.riscarAtivoIndice && permiteRiscar
        ? 'med-alternativas__item--show'
        : ''}
                ${alternativa[this.keyRiscada] && permiteRiscar
        ? 'med-alternativas__item--riscado'
        : ''}
                ${exibeAcerto &&
        alternativa[this.keyAlternativa] === this.respostaCorreta &&
        this.respostaCorreta === this.alternativaSelecionada
        ? 'med-alternativas__item--correta'
        : ''}
                ${exibeAcerto &&
        alternativa[this.keyAlternativa] === this.respostaCorreta &&
        this.respostaCorreta !== this.alternativaSelecionada
        ? 'med-alternativas__item--certa'
        : ''}
                ${exibeAcerto &&
        alternativa[this.keyAlternativa] !== this.respostaCorreta &&
        alternativa[this.keyAlternativa] ===
          this.alternativaSelecionada
        ? 'med-alternativas__item--incorreta'
        : ''}
                ${!exibeAcerto &&
        alternativa[this.keyAlternativa] ===
          this.alternativaSelecionada
        ? 'med-alternativas__item--selecionada'
        : ''}
              ` }, index.h("div", { class: 'med-alternativas__wrapper' }, index.h("div", { class: 'med-alternativas__container' }, index.h("div", { class: 'med-alternativas__left' }, index.h("div", { class: 'option' }, index.h("span", { class: 'option__fake' }), index.h("span", { class: 'option__letter' }, alternativa[this.keyAlternativa]))), index.h("div", { class: 'med-alternativas__right' }, index.h("span", { class: 'med-alternativas__span', innerHTML: alternativa[this.keyEnunciado] }), alternativa[this.keyImagem] && (index.h("div", { class: `image-container ${alternativa[this.keyEnunciado]
        ? 'image-container--margin'
        : ''}`, onClick: (event) => this.baseClass.imageRequest(event, alternativa) }, index.h("div", { class: 'image-container__wrapper' }, index.h("img", { class: 'image-container__image', src: alternativa[this.keyImagem] })))), index.h("med-chart-bar-horizontal", { label: true, class: `
                      med-alternativas__progress-bar
                      ${mostraResposta && alternativaSelecionada
        ? 'med-alternativas__progress-bar--toggle'
        : ''}
                    `, value: Math.round(alternativa[this.keyPorcentagem] * 100) })), index.h("div", { class: `med-alternativas__riscar ${indice === this.riscarAtivoIndice && permiteRiscar
        ? 'med-alternativas__riscar--show'
        : ''}`, onClick: (event) => {
        this.baseClass.riscar(event, alternativa);
      } }, index.h("ion-icon", { class: 'med-alternativas__riscar-icon med-icon', name: 'med-riscar' }), index.h("div", { class: 'med-alternativas__riscar-span' }, alternativa[this.keyRiscada] ? 'Restaurar ' : 'Riscar ', index.h("span", { class: 'med-alternativas__riscar-desktop' }, ' ', "alternativa")))))))))));
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "alternativas": ["onAlternativasChanged"]
  }; }
};
MedAlternativasA.style = medAlternativasACss;

const medAlternativasBCss = ":host{--background:hsl(var(--med-color-brand-1));--background-selecionada:hsl(var(--med-color-brand-1));--font-size:14px;--color-alternativa:hsl(var(--med-color-brand-3))}:host(.med-alternativas){display:block}:host(.med-alternativas) .med-alternativas__container{position:relative;display:-ms-flexbox;display:flex}:host(.med-alternativas) .med-alternativas__wrapper{min-height:68px;background:hsl(var(--med-color-neutral-2));border-radius:8px;cursor:pointer;overflow:hidden;position:relative}:host(.med-alternativas) .med-alternativas__left{background:var(--background);min-width:40px;text-align:center;padding-top:16px;font-size:24px;line-height:20px;font-weight:500;color:var(--color-alternativa);border-top-left-radius:8px;border-bottom-left-radius:8px}:host(.med-alternativas) .med-alternativas__right{-ms-flex:1;flex:1;text-align:left;overflow:hidden;padding:16px;font-size:var(--font-size);line-height:line-height(14px);font-weight:400;color:hsl(var(--med-color-neutral-10));border-top-right-radius:8px;border-bottom-right-radius:8px}:host(.med-alternativas) .med-alternativas__wrapper{min-height:unset}:host(.med-alternativas) .med-alternativas__progress-bar{--background:hsl(var(--med-color-neutral-2));--height:10px;margin-top:8px;margin-bottom:16px;-webkit-transition:all 300ms ease;transition:all 300ms ease;opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}:host(.med-alternativas) .image-container{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}:host(.med-alternativas) .image-container--margin{margin-top:16px}:host(.med-alternativas) .image-container__wrapper{position:relative;display:-ms-flexbox;display:flex}:host(.med-alternativas) .image-container__image{width:auto;max-height:100px;display:block;display:inline-block}:host(.med-alternativas) .image-container__button{width:24px;height:24px;display:-ms-flexbox;display:flex;background:hsl(var(--med-color-brand-1));position:absolute;bottom:4px;right:4px;pointer-events:none;border-radius:50%;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host(.med-alternativas) .image-container__icon{stroke:hsl(var(--med-color-neutral-10));pointer-events:none;font-size:16px}:host(.med-alternativas) .med-alternativas__progress-bar--toggle{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host(.med-alternativas) .med-alternativas__item--selecionada .med-alternativas__wrapper{background:hsl(var(--med-color-brand-1))}:host(.med-alternativas) .med-alternativas__item--certa{--background:hsl(var(--med-color-fb-success))}:host(.med-alternativas) .med-alternativas__item--certa .med-alternativas__left{color:hsl(var(--med-color-neutral-1));font-weight:500}:host(.med-alternativas) .med-alternativas__item--correta{--background:hsl(var(--med-color-fb-success))}:host(.med-alternativas) .med-alternativas__item--correta .med-alternativas__wrapper{background:hsl(var(--med-color-fb-success))}:host(.med-alternativas) .med-alternativas__item--correta .med-alternativas__left,:host(.med-alternativas) .med-alternativas__item--correta .med-alternativas__right{color:hsl(var(--med-color-neutral-1));font-weight:500}:host(.med-alternativas) .med-alternativas__item--incorreta{--background:hsl(var(--med-color-fb-warning))}:host(.med-alternativas) .med-alternativas__item--incorreta .med-alternativas__wrapper{background:hsl(var(--med-color-fb-warning))}:host(.med-alternativas) .med-alternativas__item--incorreta .med-alternativas__left,:host(.med-alternativas) .med-alternativas__item--incorreta .med-alternativas__right{color:hsl(var(--med-color-neutral-1));font-weight:500}:host(.med-alternativas) .med-alternativas__item--riscado .med-alternativas__left,:host(.med-alternativas) .med-alternativas__item--riscado .med-alternativas__right{opacity:0.5}:host(.med-alternativas) .med-alternativas__item--riscado .med-alternativas__right{text-decoration:line-through}:host(.med-alternativas) .med-alternativas__riscar{background-color:hsl(var(--med-color-fb-attention));color:hsl(var(--med-color-neutral-1));padding:0 16px;border-top-right-radius:8px;border-bottom-right-radius:8px;font-size:14px;font-weight:500;line-height:100%;position:absolute;top:0;right:0;width:85px;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateX(120px);transform:translateX(120px);-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms}:host(.med-alternativas) .med-alternativas__riscar--show{-webkit-transform:translateX(0);transform:translateX(0)}@media (any-hover: hover) and (pointer: fine){:host(.med-alternativas) .med-alternativas__item--permite-riscar .med-alternativas__wrapper:hover .med-alternativas__riscar{-webkit-transform:translateX(0);transform:translateX(0)}}:host(.med-color){--background:hsl(var(--med-color-1));--background-selecionada:hsl(var(--med-color-1));--color-alternativa:hsl(var(--med-color-3))}:host(.med-color) .med-alternativas__progress-bar{--progress-background:hsl(var(--med-color-4))}";

const MedAlternativasB = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.medChange = index.createEvent(this, "medChange", 7);
    this.medRiscada = index.createEvent(this, "medRiscada", 7);
    this.medGalleryRequest = index.createEvent(this, "medGalleryRequest", 7);
    this.baseClass = new MedAlternativasBase(this);
    this.dsColor = undefined;
    this.dsSkin = undefined;
    this.dsSkinConfig = undefined;
    this.alternativas = [];
    this.keyAlternativa = 'Alternativa';
    this.keyEnunciado = 'Enunciado';
    this.keyImagem = 'Imagem';
    this.keyPorcentagem = 'Porcentagem';
    this.keyRiscada = 'Riscada';
    this.respostaCorreta = undefined;
    this.mostraResposta = undefined;
    this.alternativaSelecionada = undefined;
    this.permiteRiscar = true;
    this.permiteDesmarcar = false;
    this.blockMouseEvents = false;
    this.permiteAlterar = true;
    this.riscarAtivoIndice = -1;
  }
  handleClick(event) {
    this.baseClass.handleClick(event);
  }
  onAlternativasChanged(newValue, oldValue) {
    this.baseClass.onAlternativasChanged(newValue, oldValue);
  }
  render() {
    const { dsColor, permiteRiscar, mostraResposta, alternativaSelecionada } = this;
    const exibeAcerto = this.alternativaSelecionada && mostraResposta;
    return (index.h(index.Host, { "from-stencil": true, class: color.generateMedColor(dsColor, {
        'med-alternativas': true
      }) }, index.h("div", { class: 'med-alternativas__list', role: 'list' }, this.alternativas.map((alternativa, indice) => (index.h("div", { role: 'listitem', onTouchStart: (event) => this.baseClass.onTouchStart(event, indice), onTouchEnd: (event) => this.baseClass.onTouchEnd(event, alternativa), onMouseDown: (event) => this.baseClass.onTouchStart(event, indice), onMouseUp: (event) => this.baseClass.onTouchEnd(event, alternativa), class: `
                med-alternativas__item med-alternativas__item--${alternativa[this.keyAlternativa]}
                ${permiteRiscar ? 'med-alternativas__item--permite-riscar' : ''}
                ${alternativa[this.keyRiscada] && permiteRiscar
        ? 'med-alternativas__item--riscado'
        : ''}
                ${exibeAcerto &&
        alternativa[this.keyAlternativa] === this.respostaCorreta &&
        this.respostaCorreta === this.alternativaSelecionada
        ? 'med-alternativas__item--correta'
        : ''}
                ${exibeAcerto &&
        alternativa[this.keyAlternativa] === this.respostaCorreta &&
        this.respostaCorreta !== this.alternativaSelecionada
        ? 'med-alternativas__item--certa'
        : ''}
                ${exibeAcerto &&
        alternativa[this.keyAlternativa] !== this.respostaCorreta &&
        alternativa[this.keyAlternativa] ===
          this.alternativaSelecionada
        ? 'med-alternativas__item--incorreta'
        : ''}
                ${!exibeAcerto &&
        alternativa[this.keyAlternativa] ===
          this.alternativaSelecionada
        ? 'med-alternativas__item--selecionada'
        : ''}
              ` }, index.h("div", { class: 'med-alternativas__wrapper' }, index.h("div", { class: 'med-alternativas__container' }, index.h("div", { class: 'med-alternativas__left' }, alternativa[this.keyAlternativa]), index.h("div", { class: 'med-alternativas__right', innerHTML: alternativa[this.keyEnunciado] }, alternativa[this.keyImagem] && (index.h("div", { class: `image-container ${alternativa[this.keyEnunciado]
        ? 'image-container--margin'
        : ''}`, onClick: (event) => this.baseClass.imageRequest(event, alternativa) }, index.h("div", { class: 'image-container__wrapper' }, index.h("img", { class: 'image-container__image', src: alternativa[this.keyImagem] }), index.h("div", { class: 'image-container__button' }, index.h("ion-icon", { class: 'med-icon image-container__icon', name: 'med-busca' })))))), index.h("div", { class: `med-alternativas__riscar ${indice === this.riscarAtivoIndice && permiteRiscar
        ? 'med-alternativas__riscar--show'
        : ''}`, onClick: (event) => this.baseClass.riscar(event, alternativa) }, (alternativa[this.keyRiscada] ? 'Retomar' : 'Riscar') +
      ' alternativa'))), index.h("med-chart-bar-horizontal", { label: true, class: `
                med-alternativas__progress-bar
                ${mostraResposta && alternativaSelecionada
        ? 'med-alternativas__progress-bar--toggle'
        : ''}
              `, value: Math.round(alternativa[this.keyPorcentagem] * 100) })))))));
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "alternativas": ["onAlternativasChanged"]
  }; }
};
MedAlternativasB.style = medAlternativasBCss;

exports.med_alternativas_a = MedAlternativasA;
exports.med_alternativas_b = MedAlternativasB;
