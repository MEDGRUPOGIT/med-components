/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, i as h, H as Host } from './index-336c66d9.js';
import { j as MedSkin } from './type.enum-846e5dcb.js';
import './plusminus.enum-6ca17e16.js';
import './rate-like.enum-04fa254a.js';

const medAlternativasCss = ":host{--font-size:16px;display:block}";

const MedAlternativas = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dsColor = undefined;
    this.alternativas = [];
    this.dsSkinConfig = undefined;
    this.keyAlternativa = "Alternativa";
    this.keyEnunciado = "Enunciado";
    this.keyImagem = "Imagem";
    this.keyPorcentagem = "Porcentagem";
    this.keyRiscada = "Riscada";
    this.respostaCorreta = undefined;
    this.mostraResposta = undefined;
    this.alternativaSelecionada = undefined;
    this.permiteRiscar = true;
    this.permiteDesmarcar = false;
    this.mostrarProgressBar = true;
    this.blockMouseEvents = false;
  }
  render() {
    const { dsSkinConfig, dsColor, alternativas, keyAlternativa, keyEnunciado, keyImagem, keyPorcentagem, keyRiscada, respostaCorreta, mostraResposta, alternativaSelecionada, permiteRiscar, permiteDesmarcar, mostrarProgressBar, } = this;
    return (h(Host, { "from-stencil": true }, dsSkinConfig.alternativas === MedSkin.A && (h("med-alternativas-a", { dsSkinConfig: dsSkinConfig, dsColor: dsColor, alternativas: alternativas, keyAlternativa: keyAlternativa, keyEnunciado: keyEnunciado, keyImagem: keyImagem, keyPorcentagem: keyPorcentagem, keyRiscada: keyRiscada, respostaCorreta: respostaCorreta, mostraResposta: mostraResposta, alternativaSelecionada: alternativaSelecionada, permiteRiscar: permiteRiscar, permiteDesmarcar: permiteDesmarcar, mostrarProgressBar: mostrarProgressBar })), dsSkinConfig.alternativas === MedSkin.B && (h("med-alternativas-b", { dsSkinConfig: dsSkinConfig, dsColor: dsColor, alternativas: alternativas, keyAlternativa: keyAlternativa, keyEnunciado: keyEnunciado, keyImagem: keyImagem, keyPorcentagem: keyPorcentagem, keyRiscada: keyRiscada, respostaCorreta: respostaCorreta, mostraResposta: mostraResposta, alternativaSelecionada: alternativaSelecionada, permiteRiscar: permiteRiscar, permiteDesmarcar: permiteDesmarcar, mostrarProgressBar: mostrarProgressBar }))));
  }
};
MedAlternativas.style = medAlternativasCss;

export { MedAlternativas as med_alternativas };
