import { r as registerInstance, e as createEvent, h, H as Host } from './index-70672e81.js';
import { j as MedSkin } from './type.enum-1531bbdb.js';
import './plusminus.enum-a0ce4fb8.js';
import './rate-like.enum-403a54dc.js';

const medAlternativasCss = ":host{--font-size:16px;display:block}";

const MedAlternativas = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.medChange = createEvent(this, "medChange", 7);
    this.medRiscada = createEvent(this, "medRiscada", 7);
    this.medGalleryRequest = createEvent(this, "medGalleryRequest", 7);
    /**
     * todo
     */
    this.alternativas = [];
    /**
     * todo
     */
    this.keyAlternativa = 'Alternativa';
    /**
     * todo
     */
    this.keyEnunciado = 'Enunciado';
    /**
     * todo
     */
    this.keyImagem = 'Imagem';
    /**
     * todo
     */
    this.keyPorcentagem = 'Porcentagem';
    /**
     * todo
     */
    this.keyRiscada = 'Riscada';
    /**
     * todo
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
