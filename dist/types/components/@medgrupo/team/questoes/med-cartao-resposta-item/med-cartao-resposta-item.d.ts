import { MedColor } from '../../../../../interface';
export declare class MedCartaoRespostaItem {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
   * Define o estado do componente para anulado.
   */
  anulada: boolean;
  /**
    * Define o estado do componente para impresso.
    */
  impressa: boolean;
  /**
    * Define o estado do componente para ativo.
    */
  ativa: boolean;
  render(): any;
}
