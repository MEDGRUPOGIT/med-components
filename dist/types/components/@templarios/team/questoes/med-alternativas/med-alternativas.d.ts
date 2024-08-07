import { MedAlternativaInterface, MedAlternativasInterface } from "../../../../../@templarios/interfaces/alternativas.interface";
import { MedColor } from "../../../../../@templarios/types/color.type";
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
  /**
   * todo
   */
  permiteDesmarcar: boolean;
  /**
   * todo
   */
  mostrarProgressBar: boolean;
  /**
   * todo
   */
  blockMouseEvents: boolean;
  render(): any;
}
