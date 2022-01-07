import { r as registerInstance, e as createEvent, h, H as Host } from './index-70672e81.js';
import { M as MedSkin } from './skin.enum-baf4fd5b.js';

const medAlternativasCss = ":host{display:block;--font-size:var(--med-font-size-xs)}";

const MedAlternativas = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.medChange = createEvent(this, "medChange", 7);
    this.medRiscada = createEvent(this, "medRiscada", 7);
    this.medGalleryRequest = createEvent(this, "medGalleryRequest", 7);
    /**
     * TODO
     */
    this.alternativas = [];
    /**
     * TODO
     */
    this.keyAlternativa = 'Alternativa';
    /**
     * TODO
     */
    this.keyEnunciado = 'Enunciado';
    /**
     * TODO
     */
    this.keyImagem = 'Imagem';
    /**
     * TODO
     */
    this.keyPorcentagem = 'Porcentagem';
    /**
     * TODO
     */
    this.keyRiscada = 'Riscada';
    /**
     * TODO
     */
    this.permiteRiscar = true;
  }
  render() {
    const { dsSkinConfig, dsColor, alternativas, keyAlternativa, keyEnunciado, keyImagem, keyPorcentagem, keyRiscada, respostaCorreta, mostraResposta, alternativaSelecionada, permiteRiscar } = this;
    return (h(Host, { "from-stencil": true }, dsSkinConfig.alternativas === MedSkin.A && h("med-alternativas-a", { dsSkinConfig: dsSkinConfig, dsColor: dsColor, alternativas: alternativas, keyAlternativa: keyAlternativa, keyEnunciado: keyEnunciado, keyImagem: keyImagem, keyPorcentagem: keyPorcentagem, keyRiscada: keyRiscada, respostaCorreta: respostaCorreta, mostraResposta: mostraResposta, alternativaSelecionada: alternativaSelecionada, permiteRiscar: permiteRiscar, onMedChange: ev => this.medChange.emit(ev.detail), onMedRiscada: (ev) => { this.medRiscada.emit(ev.detail), console.log('para ricar'); }, onMedGalleryRequest: ev => this.medGalleryRequest.emit(ev.detail) }), dsSkinConfig.alternativas === MedSkin.B && h("med-alternativas-b", { dsSkinConfig: dsSkinConfig, dsColor: dsColor, alternativas: alternativas, keyAlternativa: keyAlternativa, keyEnunciado: keyEnunciado, keyImagem: keyImagem, keyPorcentagem: keyPorcentagem, keyRiscada: keyRiscada, respostaCorreta: respostaCorreta, mostraResposta: mostraResposta, alternativaSelecionada: alternativaSelecionada, permiteRiscar: permiteRiscar, onMedChange: ev => this.medChange.emit(ev.detail), onMedRiscada: ev => this.medRiscada.emit(ev.detail), onMedGalleryRequest: ev => this.medGalleryRequest.emit(ev.detail) })));
  }
};
MedAlternativas.style = medAlternativasCss;

export { MedAlternativas as med_alternativas };
