import { MedColor } from '../../../@templarios/types/color.type';
import { MedAlternativaInterface, MedAlternativasInterface } from '../../../@templarios/interfaces/alternativas.interface';
export declare class MedAlternativas implements MedAlternativasInterface {
    dsColor?: MedColor;
    alternativas: MedAlternativaInterface | any;
    dsSkinConfig: any;
    keyAlternativa: string;
    keyEnunciado: string;
    keyImagem: string;
    keyPorcentagem: string;
    keyRiscada: string;
    respostaCorreta: string;
    mostraResposta: boolean;
    alternativaSelecionada: string;
    permiteRiscar: boolean;
    permiteDesmarcar: boolean;
    render(): any;
}
