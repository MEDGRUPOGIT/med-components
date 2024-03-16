import { MedColor } from '../../../../../@templarios/types/color.type';
import { MedAlternativaInterface, MedAlternativasInterface } from '../../../../../@templarios/interfaces/alternativas.interface';
export declare class MedAlternativas implements MedAlternativasInterface {
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
  dsSkinConfig: any;
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
  render(): any;
}
