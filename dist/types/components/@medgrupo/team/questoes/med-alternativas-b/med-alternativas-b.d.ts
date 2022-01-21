import { EventEmitter } from '../../../../../stencil-public-runtime';
import { Color } from '../../../../../interface';
import { MedAlternativasBase } from '../med-alternativas/med-alternativas-base';
import { MedAlternativaInterface, MedAlternativasInternoInterface } from '../med-alternativas/med-alternativas-interface';
export declare class MedAlternativasB implements MedAlternativasInternoInterface {
  hostElement: HTMLElement;
  /**
   * TODO
   */
  dsColor?: Color;
  /**
   * TODO
   */
  dsSkin?: any;
  /**
   * TODO
   */
  dsSkinConfig?: any;
  /**
   * TODO
   */
  alternativas: MedAlternativaInterface | any;
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
  permiteAlterar: boolean;
  riscarAtivoIndice: number;
  baseClass: MedAlternativasBase;
  handleClick(event: any): void;
  onAlternativasChanged(newValue: MedAlternativaInterface | any, oldValue: MedAlternativaInterface | any): void;
  render(): any;
}
