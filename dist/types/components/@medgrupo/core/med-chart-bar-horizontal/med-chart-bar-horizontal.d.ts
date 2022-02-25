import { MedColor } from '../../../../interface';
export declare class MedChartBarHorizontal {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
    * Define a variação de tamanho do componente.
    */
  dsSize?: 'md';
  /**
   * Define a visibilidade do label.
   */
  label: boolean;
  /**
   * Define o valor do componente.
   */
  value: number;
  render(): any;
}
