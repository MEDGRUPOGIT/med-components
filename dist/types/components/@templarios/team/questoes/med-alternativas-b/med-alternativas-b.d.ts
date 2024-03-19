import { EventEmitter } from '../../../../../stencil-public-runtime';
import { MedAlternativaInterface, MedAlternativasInternoInterface } from '../../../../../@templarios/interfaces/alternativas.interface';
import { MedColor } from '../../../../../@templarios/types/color.type';
import { MedAlternativasBase } from '../med-alternativas/med-alternativas-base';
export declare class MedAlternativasB implements MedAlternativasInternoInterface {
  hostElement: HTMLElement;
  /**
   * todo
   */
  dsColor?: MedColor;
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
  permiteDesmarcar: boolean;
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
  /**
   * todo
   */
  blockMouseEvents: boolean;
  /**
   * todo
   */
  permiteAlterar: boolean;
  /**
   * todo
   */
  riscarAtivoIndice: number;
  baseClass: MedAlternativasBase;
  handleClick(event: any): void;
  onAlternativasChanged(newValue: MedAlternativaInterface | any, oldValue: MedAlternativaInterface | any): void;
  render(): any;
}
