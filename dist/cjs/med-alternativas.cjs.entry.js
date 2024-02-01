/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-71f41461.js');
const type_enum = require('./type.enum-2381dd49.js');
require('./plusminus.enum-9f20406a.js');
require('./rate-like.enum-cbcc78e5.js');

const medAlternativasCss = ":host{--font-size:16px;display:block}";

const MedAlternativas = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { "from-stencil": true }, dsSkinConfig.alternativas === type_enum.MedSkin.A && (index.h("med-alternativas-a", { dsSkinConfig: dsSkinConfig, dsColor: dsColor, alternativas: alternativas, keyAlternativa: keyAlternativa, keyEnunciado: keyEnunciado, keyImagem: keyImagem, keyPorcentagem: keyPorcentagem, keyRiscada: keyRiscada, respostaCorreta: respostaCorreta, mostraResposta: mostraResposta, alternativaSelecionada: alternativaSelecionada, permiteRiscar: permiteRiscar, permiteDesmarcar: permiteDesmarcar })), dsSkinConfig.alternativas === type_enum.MedSkin.B && (index.h("med-alternativas-b", { dsSkinConfig: dsSkinConfig, dsColor: dsColor, alternativas: alternativas, keyAlternativa: keyAlternativa, keyEnunciado: keyEnunciado, keyImagem: keyImagem, keyPorcentagem: keyPorcentagem, keyRiscada: keyRiscada, respostaCorreta: respostaCorreta, mostraResposta: mostraResposta, alternativaSelecionada: alternativaSelecionada, permiteRiscar: permiteRiscar, permiteDesmarcar: permiteDesmarcar }))));
    }
};
MedAlternativas.style = medAlternativasCss;

exports.med_alternativas = MedAlternativas;
