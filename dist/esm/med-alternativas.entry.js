/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, h, H as Host } from './index-27668d5b.js';
import { j as MedSkin } from './type.enum-9506b4e9.js';
import './plusminus.enum-b366e045.js';
import './rate-like.enum-b8140ae9.js';

const medAlternativasCss = ":host{--font-size:16px;display:block}";

const MedAlternativas = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dsColor = undefined;
        this.alternativas = [];
        this.dsSkinConfig = undefined;
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
    }
    render() {
        const { dsSkinConfig, dsColor, alternativas, keyAlternativa, keyEnunciado, keyImagem, keyPorcentagem, keyRiscada, respostaCorreta, mostraResposta, alternativaSelecionada, permiteRiscar, permiteDesmarcar } = this;
        return (h(Host, { "from-stencil": true }, dsSkinConfig.alternativas === MedSkin.A && (h("med-alternativas-a", { dsSkinConfig: dsSkinConfig, dsColor: dsColor, alternativas: alternativas, keyAlternativa: keyAlternativa, keyEnunciado: keyEnunciado, keyImagem: keyImagem, keyPorcentagem: keyPorcentagem, keyRiscada: keyRiscada, respostaCorreta: respostaCorreta, mostraResposta: mostraResposta, alternativaSelecionada: alternativaSelecionada, permiteRiscar: permiteRiscar, permiteDesmarcar: permiteDesmarcar })), dsSkinConfig.alternativas === MedSkin.B && (h("med-alternativas-b", { dsSkinConfig: dsSkinConfig, dsColor: dsColor, alternativas: alternativas, keyAlternativa: keyAlternativa, keyEnunciado: keyEnunciado, keyImagem: keyImagem, keyPorcentagem: keyPorcentagem, keyRiscada: keyRiscada, respostaCorreta: respostaCorreta, mostraResposta: mostraResposta, alternativaSelecionada: alternativaSelecionada, permiteRiscar: permiteRiscar, permiteDesmarcar: permiteDesmarcar }))));
    }
};
MedAlternativas.style = medAlternativasCss;

export { MedAlternativas as med_alternativas };
