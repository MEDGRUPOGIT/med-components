'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const skin_enum = require('./skin.enum-0657adcf.js');

const medAlternativasCss = ":host{display:block;--font-size:var(--med-font-size-xs)}";

const MedAlternativas = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.medChange = index.createEvent(this, "medChange", 7);
    this.medRiscada = index.createEvent(this, "medRiscada", 7);
    this.medGalleryRequest = index.createEvent(this, "medGalleryRequest", 7);
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
    return (index.h(index.Host, { "from-stencil": true }, dsSkinConfig.alternativas === skin_enum.MedSkin.A && index.h("med-alternativas-a", { dsSkinConfig: dsSkinConfig, dsColor: dsColor, alternativas: alternativas, keyAlternativa: keyAlternativa, keyEnunciado: keyEnunciado, keyImagem: keyImagem, keyPorcentagem: keyPorcentagem, keyRiscada: keyRiscada, respostaCorreta: respostaCorreta, mostraResposta: mostraResposta, alternativaSelecionada: alternativaSelecionada, permiteRiscar: permiteRiscar, onMedChange: ev => this.medChange.emit(ev.detail), onMedRiscada: (ev) => { this.medRiscada.emit(ev.detail), console.log('para ricar'); }, onMedGalleryRequest: ev => this.medGalleryRequest.emit(ev.detail) }), dsSkinConfig.alternativas === skin_enum.MedSkin.B && index.h("med-alternativas-b", { dsSkinConfig: dsSkinConfig, dsColor: dsColor, alternativas: alternativas, keyAlternativa: keyAlternativa, keyEnunciado: keyEnunciado, keyImagem: keyImagem, keyPorcentagem: keyPorcentagem, keyRiscada: keyRiscada, respostaCorreta: respostaCorreta, mostraResposta: mostraResposta, alternativaSelecionada: alternativaSelecionada, permiteRiscar: permiteRiscar, onMedChange: ev => this.medChange.emit(ev.detail), onMedRiscada: ev => this.medRiscada.emit(ev.detail), onMedGalleryRequest: ev => this.medGalleryRequest.emit(ev.detail) })));
  }
};
MedAlternativas.style = medAlternativasCss;

exports.med_alternativas = MedAlternativas;
