import { EventEmitter } from '../../../../stencil-public-runtime';
import { MedAlternativaInterface, MedAlternativasInterface } from './med-alternativas-interface';
export declare class MedAlternativas implements MedAlternativasInterface {
  alternativas: MedAlternativaInterface | any;
  keyAlternativa: string;
  keyEnunciado: string;
  keyImagem: string;
  keyPorcentagem: string;
  respostaCorreta: string;
  mostraResposta: boolean;
  alternativaSelecionada: string;
  medChange: EventEmitter<MedAlternativaInterface>;
  medGalleryRequest: EventEmitter<MedAlternativaInterface>;
  private cssClassAlternativa;
  private respostaAlterada;
  private imageRequest;
  render(): any;
}
