import { EventEmitter } from '../../../../../stencil-public-runtime';
import { Color } from '../../../../../interface';
import { Coordenada } from '../../../../../utils/medgrupo';
import { MedAlternativaInterface, MedAlternativasInterface } from '../med-alternativas/med-alternativas-interface';
export declare class MedAlternativasB implements MedAlternativasInterface {
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
  dataStart: Date;
  dataEnd: Date;
  positionStart: Coordenada | undefined;
  distanciaMinimaClick: number;
  tempoLongPress: number;
  timer: any;
  handleClick(event: any): void;
  onAlternativasChanged(newValue: MedAlternativaInterface | any, oldValue: MedAlternativaInterface | any): void;
  private resetState;
  protected onTouchStart(event: any, indice: number): void;
  protected onTouchEnd(event: any, alternativa: MedAlternativaInterface): void;
  protected alterarAlternativa(item: any): void;
  protected riscar(event: any, alternativa: any): void;
  protected imageRequest(event: any, alternativa: any): void;
  render(): any;
}
