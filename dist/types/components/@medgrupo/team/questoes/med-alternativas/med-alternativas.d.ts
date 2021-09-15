import { EventEmitter } from '../../../../../stencil-public-runtime';
import { Color } from '../../../../../interface';
import { MedAlternativaInterface, MedAlternativasInterface } from './med-alternativas-interface';
export declare class MedAlternativas implements MedAlternativasInterface {
  /**
   * TODO
   */
  dsColor?: Color;
  /**
   * TODO
   */
  alternativas: MedAlternativaInterface | any;
  /**
   * TODO
   */
  dsSkinConfig: any;
  /**
   * TODO
   */
  keyAlternativa: string;
  /**
   * TODO
   */
  keyEnunciado: string;
  /**
   * TODO
   */
  keyImagem: string;
  /**
   * TODO
   */
  keyPorcentagem: string;
  /**
   * TODO
   */
  keyRiscada: string;
  /**
   * TODO
   */
  respostaCorreta: string;
  /**
   * TODO
   */
  mostraResposta: boolean;
  /**
   * TODO
   */
  alternativaSelecionada: string;
  /**
   * TODO
   */
  permiteRiscar: boolean;
  /**
   * TODO
   */
  medChange: EventEmitter<MedAlternativaInterface>;
  /**
   * TODO
   */
  medRiscada: EventEmitter<MedAlternativaInterface>;
  /**
   * TODO
   */
  medGalleryRequest: EventEmitter<MedAlternativaInterface>;
  render(): any;
}
