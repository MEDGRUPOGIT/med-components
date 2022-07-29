import { EventEmitter } from '../../../../../stencil-public-runtime';
import { MedColor } from '../../../../../@templarios/types/color.type';
import { MedAlternativasBase } from '../med-alternativas/med-alternativas-base';
import { MedAlternativaInterface, MedAlternativasInternoInterface } from '../../../../../@templarios/interfaces/alternativas.interface';
export declare class MedAlternativasA implements MedAlternativasInternoInterface {
  hostElement: HTMLElement;
  /**
   * todo
   */
  dsSkin?: any;
  /**
   * todo
   */
  dsSkinConfig?: any;
  /**
   * todo
   */
  dsColor?: MedColor;
  /**
   * todo
   */
  alternativas: MedAlternativaInterface | any;
  /**
   * todo
   */
  keyAlternativa: string;
  /**
   * todo
   */
  keyEnunciado: string;
  /**
   * todo
   */
  keyImagem: string;
  /**
   * todo
   */
  keyPorcentagem: string;
  /**
   * todo
   */
  keyRiscada: string;
  /**
   * todo
   */
  respostaCorreta: string;
  /**
   * todo
   */
  mostraResposta: boolean;
  /**
   * todo
   */
  alternativaSelecionada: string;
  /**
   * todo
   */
  permiteRiscar: boolean;
  /**
   * todo
   */
  medChange: EventEmitter<MedAlternativaInterface>;
  /**
   * todo
   */
  medRiscada: EventEmitter<MedAlternativaInterface>;
  /**
   * todo
   */
  medGalleryRequest: EventEmitter<MedAlternativaInterface>;
  permiteAlterar: boolean;
  riscarAtivoIndice: number;
  baseClass: MedAlternativasBase;
  handleClick(event: any): void;
  onAlternativasChanged(newValue: MedAlternativaInterface | any, oldValue: MedAlternativaInterface | any): void;
  render(): any;
}
