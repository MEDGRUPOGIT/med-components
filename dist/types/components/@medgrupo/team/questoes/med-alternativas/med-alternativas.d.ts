import { EventEmitter } from '../../../../../stencil-public-runtime';
import { Color } from '../../../../../interface';
import { MedAlternativaInterface, MedAlternativasInterface } from './med-alternativas-interface';
export declare class MedAlternativas implements MedAlternativasInterface {
  podeRiscar: boolean;
  isDesktop: boolean;
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
  alternativaRiscada: any;
  alternativaPressionada: any;
  /**
   * Define a cor neutra do componente.
   */
  color?: Color;
  dataStart: Date;
  dataEnd: Date;
  tempoLongPress: number;
  timer: any;
  private onTouchStart;
  private onTouchEnd;
  private cssClassAlternativa;
  private cssClassOption;
  private getCssClassAlternativaRiscada;
  private respostaAlterada;
  private imageRequest;
  private riscar;
  permiteRiscar(alternativa: any): any;
  private getAlternativa;
  render(): any;
}
