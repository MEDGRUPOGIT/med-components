import { r as registerInstance, e as createEvent, h, H as Host } from './index-70672e81.js';
import { c as createColorClasses } from './theme-3b0eafd2.js';

const medAlternativasCss = ":root{--med-font-family-brand:\"fsemeric\";--med-font-family-base:\"fsemeric\";--med-font-size-nano:10px;--med-font-size-xxxs:12px;--med-font-size-xxs:14px;--med-font-size-xs:16px;--med-font-size-sm:20px;--med-font-size-md:24px;--med-font-size-lg:32px;--med-font-size-xl:40px;--med-font-size-xxl:48px;--med-font-size-xxxl:64px;--med-font-size-huge:96px;--med-font-weight-thin:250;--med-font-weight-light:300;--med-font-weight-regular:400;--med-font-weight-medium:500;--med-font-weight-semibold:600;--med-font-weight-bold:700;--med-font-weight-extrabold:800;--med-font-weight-heavy:900;--med-letter-spacing-ultracompressed:-0.04;--med-letter-spacing-compressed:-0.02;--med-letter-spacing-default:0;--med-letter-spacing-medium:0.02;--med-letter-spacing-expanded:0.05;--med-letter-spacing-distant:0.1;--med-letter-spacing-far:0.2;--med-line-height-compressed:100%;--med-line-height-default:24px;--med-line-height-double:200%}:root{--med-spacing-inset-nano:4px;--med-spacing-inset-xs:8px;--med-spacing-inset-sm:16px;--med-spacing-inset-base:24px;--med-spacing-inset-md:32px;--med-spacing-inset-lg:40px;--med-spacing-inset-xl:48px;--med-spacing-inset-xxl:64px;--med-spacing-squish-nano:4px 8px;--med-spacing-squish-xs:8px 16px;--med-spacing-squish-sm:8px 24px;--med-spacing-squish-base:8px 32px;--med-spacing-squish-md:16px 24px;--med-spacing-squish-lg:16px 32px;--med-spacing-squish-xl:24px 32px;--med-spacing-squish-xxl:32px 40px;--med-spacing-stretch-nano:8px 4px;--med-spacing-stretch-xs:16px 8px;--med-spacing-stretch-sm:24px 8px;--med-spacing-stretch-base:32px 8px;--med-spacing-stretch-md:24px 16px;--med-spacing-stretch-lg:32px 16px;--med-spacing-stretch-xl:32px 24px;--med-spacing-stretch-xxl:40px 32px;--med-spacing-inline-quark:2px;--med-spacing-inline-nano:4px;--med-spacing-inline-xxxs:8px;--med-spacing-inline-base:16px;--med-spacing-inline-xxs:24px;--med-spacing-inline-xs:32px;--med-spacing-inline-sm:40px;--med-spacing-inline-md:48px;--med-spacing-inline-lg:56px;--med-spacing-inline-xl:64px;--med-spacing-inline-xxl:72px;--med-spacing-inline-xxxl:80px;--med-spacing-inline-huge:120px;--med-spacing-inline-ultra:160px;--med-spacing-stack-quark:2px;--med-spacing-stack-nano:4px;--med-spacing-stack-xxxs:8px;--med-spacing-stack-base:16px;--med-spacing-stack-xxs:24px;--med-spacing-stack-xs:32px;--med-spacing-stack-sm:40px;--med-spacing-stack-md:48px;--med-spacing-stack-lg:56px;--med-spacing-stack-xl:64px;--med-spacing-stack-xxl:72px;--med-spacing-stack-xxxl:80px;--med-spacing-stack-huge:120px;--med-spacing-stack-ultra:160px}:root{--med-border-radius-none:0;--med-border-radius-quark:2px;--med-border-radius-nano:4px;--med-border-radius-sm:8px;--med-border-radius-md:16px;--med-border-radius-lg:24px;--med-border-radius-pill:31.25em;--med-border-radius-full:50%;--med-border-radius-speech-left-down:8px 8px 8px 0;--med-border-radius-speech-right-down:8px 8px 0 8px;--med-border-radius-speech-right-up:8px 0 8px 0px;--med-border-radius-speech-left-up:0 8px 8px 0px;--med-border-radius-table-down-sm:0 0 8px 8px;--med-border-radius-table-up-sm:8px 8px 0 0;--med-border-radius-table-down-md:16px 16px 0 0;--med-border-radius-table-up-md:0 0 16px 16px;--med-border-width-none:0;--med-border-width-quark:0.25px;--med-border-width-nano:0.5px;--med-border-width-hairline:1px;--med-border-width-thin:2px;--med-border-width-thick:4px;--med-border-width-bold:8px;--med-border-width-heavy:16px;--med-opacity-level-semiopaque:0.8;--med-opacity-level-intense:0.64;--med-opacity-level-half:0.5;--med-opacity-level-medium:0.32;--med-opacity-level-light:0.16;--med-opacity-level-semitransparent:0.08;--med-shadow-level-0:none;--med-shadow-level-1:0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 3px rgba(0, 0, 0, 0.2);--med-shadow-level-2:0 2px 4px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-3:0 3px 3px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-4:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-5:0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-6:0 8px 10px rgba(0, 0, 0, 0.14), 0 3px 14px rgba(0, 0, 0, 0.12), 0 4px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-7:0 9px 12px rgba(0, 0, 0, 0.14), 0 3px 16px rgba(0, 0, 0, 0.12), 0 5px 6px rgba(0, 0, 0, 0.2);--med-shadow-level-8:0 12px 17px rgba(0, 0, 0, 0.14), 0 5px 22px rgba(0, 0, 0, 0.12), 0 7px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-9:0 16px 24px rgba(0, 0, 0, 0.14), 0 6px 30px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-10:0 24px 38px rgba(0, 0, 0, 0.14), 0 9px 46px rgba(0, 0, 0, 0.12), 0 11px 15px rgba(0, 0, 0, 0.2)}:host{--font-size:16px;--riscar-flex-direction:column}:host .alternativas{list-style:none;padding:0;margin:0}@media (min-width: 768px){:host .alternativas--imagem{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}}:host .alternativas--imagem .alternativa{-ms-flex-align:start;align-items:flex-start}:host .alternativas--imagem .alternativa:nth-of-type(odd){margin-right:auto;padding-right:0}@media (min-width: 768px){:host .alternativas--imagem .alternativa:nth-of-type(odd){padding-right:var(--med-spacing-inline-base)}}:host .alternativas--imagem .alternativa:nth-of-type(even){margin-right:auto}:host .alternativas--imagem .alternativa__image{display:block}@media (min-width: 768px){:host .alternativas--imagem .alternativa__image{width:360px}}:host .alternativa-wrapper:last-of-type{padding-bottom:0}:host .alternativa{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:start;padding:var(--med-spacing-stack-base);cursor:pointer;min-height:50px}:host .alternativa .image-container{position:relative}@media (any-hover: hover){:host .alternativa .image-container:hover .overlay{opacity:1;visibility:visible;-webkit-transition:opacity 300ms ease;transition:opacity 300ms ease}}:host .alternativa .overlay{visibility:hidden;opacity:0;position:absolute;top:0;width:100%;height:100%;background:rgba(0, 0, 0, 0.3);cursor:pointer;color:#fff;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host .alternativa .overlay__content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .alternativa .overlay__label{margin:0 10px 0 0}:host .alternativa .overlay ion-icon{font-size:24px}:host .alternativa__right{margin-left:var(--med-spacing-inline-base);-ms-flex:1;flex:1;overflow:hidden}:host .alternativa__text{color:var(--color-neutral-dark-10);font-size:var(--font-size);font-weight:var(--med-font-weight-regular);line-height:24px;text-align:justify;margin:0}:host .alternativa__image{width:100%;height:auto}:host .alternativa__option{position:relative}:host .alternativa__option--riscada{pointer-events:none}:host .alternativa--correta med-option{--background:hsl(var(--med-color-fb-success))}:host .alternativa--incorreto med-option{--background:hsl(var(--med-color-fb-caution))}:host .alternativa--pode-riscar:not(:hover) .riscar{display:none}:host .alternativa--pode-riscar:hover,:host .alternativa--pode-riscar-mobile{background-color:hsl(var(--med-color-neutral-9))}:host .alternativa--pode-riscar:hover .riscar,:host .alternativa--pode-riscar-mobile .riscar{cursor:pointer;-ms-flex-direction:var(--riscar-flex-direction);flex-direction:var(--riscar-flex-direction);margin-left:var(--spacing-inline-md);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .alternativa--pode-riscar:hover .riscar ion-icon,:host .alternativa--pode-riscar-mobile .riscar ion-icon{margin:var(--riscar-icon-margin);color:hsl(var(--med-color-neutral-2));font-size:32px}:host .alternativa--pode-riscar:hover .riscar__label,:host .alternativa--pode-riscar-mobile .riscar__label{font-size:var(--med-font-size-xxs);font-weight:var(--med-font-weight-regular);color:hsl(var(--med-color-neutral-1));line-height:var(--med-line-height-compressed)}:host .alternativa--riscada .alternativa__option{opacity:var(--med-opacity-level-half)}:host .alternativa--riscada .alternativa__text{text-decoration:line-through;opacity:var(--med-opacity-level-half)}:host .alternativa--pressed{background-color:hsl(var(--med-color-neutral-2))}:host .ion-progress-bar{-webkit-transition:all 300ms ease;transition:all 300ms ease;opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}:host .ion-progress-bar--toggle{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}:host .ion-progress-bar--100{--progress-background:hsl(var(--med-color-fb-success))}:host(.alternativa--pode-riscar:hover),:host(.alternativa--pode-riscar-mobile){background:hsl(var(--med-color-2))}";

const MedAlternativas = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.medChange = createEvent(this, "medChange", 7);
    this.medGalleryRequest = createEvent(this, "medGalleryRequest", 7);
    this.alternativas = [];
    this.keyAlternativa = 'Alternativa';
    this.keyEnunciado = 'Enunciado';
    this.keyImagem = 'Imagem';
    this.keyPorcentagem = 'Porcentagem';
    this.tempoLongPress = 1000;
  }
  onTouchStart(alternativaPressionada) {
    if (!this.isDesktop) {
      this.dataStart = new Date();
      this.timer = setTimeout(() => {
        this.dataEnd = new Date();
        const tempoTotal = this.dataEnd.getTime() - this.dataStart.getTime();
        if (tempoTotal >= this.tempoLongPress) {
          if (this.permiteRiscar(alternativaPressionada)) {
            for (const alternativa of this.alternativas) {
              if (alternativa.Alternativa != alternativaPressionada.Alternativa) {
                alternativa.Pressionada = false;
              }
            }
            alternativaPressionada.Pressionada = !alternativaPressionada.Pressionada;
            this.alternativaPressionada = { alternativaPressionada };
          }
        }
      }, this.tempoLongPress);
    }
  }
  onTouchEnd() {
    clearTimeout(this.timer);
  }
  cssClassAlternativa(alternativa) {
    this.podeRiscar = true;
    let objAlternativa = this.getAlternativa(alternativa);
    let classe = 'alternativa';
    if (!objAlternativa.Riscada) {
      if (this.mostraResposta && this.alternativaSelecionada) {
        if (alternativa === this.respostaCorreta) {
          classe += ' alternativa--correta';
        }
        else if (alternativa === this.alternativaSelecionada) {
          classe += ' alternativa--incorreto';
        }
      }
    }
    classe += this.getCssClassAlternativaRiscada(objAlternativa);
    return classe;
  }
  cssClassOption(alternativa) {
    let classe = 'alternativa__option';
    if (alternativa.Riscada) {
      classe += ' alternativa__option--riscada';
    }
    return classe;
  }
  getCssClassAlternativaRiscada(objAlternativa) {
    let classe = '';
    if (this.podeRiscar && objAlternativa) {
      if (!this.isDesktop && objAlternativa.Pressionada) {
        classe += ' alternativa--pode-riscar-mobile';
      }
      else if (this.isDesktop) {
        classe += ' alternativa--pode-riscar';
      }
      if (objAlternativa && objAlternativa.Riscada) {
        classe += ' alternativa--riscada';
      }
    }
    return classe;
  }
  respostaAlterada(alternativa) {
    this.alternativaSelecionada = alternativa;
    let objAlternativa = this.getAlternativa(alternativa);
    if (objAlternativa && !objAlternativa.Riscada) {
      this.medChange.emit(objAlternativa);
    }
  }
  imageRequest(alternativa) {
    this.medGalleryRequest.emit(alternativa);
  }
  riscar(alternativa) {
    if (this.permiteRiscar(alternativa)) {
      alternativa.Riscada = !alternativa.Riscada;
      if (alternativa.Alternativa === this.alternativaSelecionada) {
        this.respostaAlterada('');
      }
      this.alternativaRiscada = { alternativa };
      if (!this.isDesktop) {
        alternativa.Pressionada = !alternativa.Pressionada;
      }
    }
  }
  permiteRiscar(alternativa) {
    let countNaoRiscadas = 0;
    for (const alternativa of this.alternativas) {
      countNaoRiscadas += !alternativa.Riscada ? 1 : 0;
    }
    return alternativa.Riscada || (!alternativa.Riscada && countNaoRiscadas > 1);
  }
  getAlternativa(key) {
    let objAlternativa;
    for (const item of this.alternativas) {
      if (item[this.keyAlternativa] === key) {
        objAlternativa = item;
        break;
      }
    }
    return objAlternativa;
  }
  render() {
    let hasImage = false;
    for (const alternativa of this.alternativas) {
      if (alternativa[this.keyImagem]) {
        hasImage = true;
        break;
      }
    }
    const { color } = this;
    return (h(Host, { "from-stencil": true, class: createColorClasses(color, {
        'med-alternativas': true,
      }, null) }, h("ion-radio-group", { onIonChange: ev => this.respostaAlterada(ev.detail.value), value: this.alternativaSelecionada }, h("ul", { class: `alternativas ${hasImage ? 'alternativas--imagem' : ''}` }, this.alternativas.map((alternativa) => (h("div", { class: "alternativa-wrapper", onPointerDown: () => this.onTouchStart(alternativa), onPointerUp: () => this.onTouchEnd() }, h("li", { class: this.cssClassAlternativa(alternativa[this.keyAlternativa]) + (alternativa.Pressionada ? ' alternativa--pode-riscar-mobile' : '') }, h("med-option", { class: this.cssClassOption(alternativa) }, h("ion-radio", { value: alternativa[this.keyAlternativa] }), h("label", { slot: "label" }, alternativa[this.keyAlternativa])), h("div", { class: 'alternativa__right' }, alternativa[this.keyEnunciado] && h("div", { class: 'alternativa__text', innerHTML: alternativa[this.keyEnunciado] }), h("div", { class: 'image-container', onClick: () => this.imageRequest(alternativa) }, alternativa[this.keyImagem] && h("img", { class: 'alternativa__image', src: alternativa[this.keyImagem] }), h("div", { class: 'overlay' }, h("div", { class: "overlay__content" }, h("p", { class: "overlay__label" }, "clique para ampliar"), h("ion-icon", { name: "med-expand" })))), !alternativa.Riscada &&
      h("ion-progress-bar", { percentage: true, class: `
                        ion-progress-bar
                        ${this.mostraResposta && this.alternativaSelecionada ? 'ion-progress-bar--toggle' : ''}
                        ${alternativa[this.keyPorcentagem] === 1 ? 'ion-progress-bar--100' : ''}`, value: alternativa[this.keyPorcentagem] })), this.podeRiscar && (alternativa.Pressionada || this.isDesktop) &&
      h("div", { class: "riscar", onClick: () => this.riscar(alternativa) }, h("ion-icon", { name: "med-riscar" }), h("span", { class: "riscar__label" }, (alternativa.Riscada ? 'Retomar' : 'Riscar') + (this.isDesktop ? ' alternativa' : '')))))))))));
  }
};
MedAlternativas.style = medAlternativasCss;

export { MedAlternativas as med_alternativas };
