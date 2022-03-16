import { MedColor } from "../../../../interface";
import { MedSemanaInterface } from './med-semana.interface';
export declare class MedSemana {
  /**
   * Define a cor do componente.
   */
  dsColor?: MedColor;
  /**
   * Define a variação de tamanho do componente.
   */
  dsSize?: 'sm';
  /**
   * Define o estado active do componente.
   */
  active: boolean;
  /**
   * Define o estado habilitado ou desabilitado do componente.
   */
  disabled: boolean;
  /**
   * Define a skin do componente.
   */
  skin?: 'lista';
  /**
   * Define o conteudo da semana.
   */
  content: MedSemanaInterface;
  flipped: boolean;
  private handleFlip;
  private createTextContainerEl;
  private createPieChartEl;
  render(): any;
}
