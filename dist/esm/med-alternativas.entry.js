import { r as registerInstance, e as createEvent, h, H as Host } from './index-70672e81.js';
import { j as MedSkin } from './type.enum-b1689c26.js';
import './plusminus.enum-87dfaf79.js';
import './rate-like.enum-01831b55.js';

const medAlternativasCss = ":host{--font-size:16px;display:block}";

const MedAlternativas = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, { "from-stencil": true }, dsSkinConfig.alternativas === MedSkin.A && (h("med-alternativas-a", { dsSkinConfig: dsSkinConfig, dsColor: dsColor, alternativas: alternativas, keyAlternativa: keyAlternativa, keyEnunciado: keyEnunciado, keyImagem: keyImagem, keyPorcentagem: keyPorcentagem, keyRiscada: keyRiscada, respostaCorreta: respostaCorreta, mostraResposta: mostraResposta, alternativaSelecionada: alternativaSelecionada, permiteRiscar: permiteRiscar, onMedGalleryRequest: (ev) => this.medGalleryRequest.emit(ev.detail) })), dsSkinConfig.alternativas === MedSkin.B && (h("med-alternativas-b", { dsSkinConfig: dsSkinConfig, dsColor: dsColor, alternativas: alternativas, keyAlternativa: keyAlternativa, keyEnunciado: keyEnunciado, keyImagem: keyImagem, keyPorcentagem: keyPorcentagem, keyRiscada: keyRiscada, respostaCorreta: respostaCorreta, mostraResposta: mostraResposta, alternativaSelecionada: alternativaSelecionada, permiteRiscar: permiteRiscar, onMedGalleryRequest: (ev) => this.medGalleryRequest.emit(ev.detail) }))));
  }
};
MedAlternativas.style = medAlternativasCss;

export { MedAlternativas as med_alternativas };
