import { MedColor } from '../../../../interface';
export declare class MedChartBar {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
    * Define a valor do componente.
    */
  value: number;
  /**
    * Define o height em px do componente.
    */
  height: number;
  /**
    * Define o width em px do componente.
    */
  width: number;
  /**
    * Define o token do label do componente.
    */
  token: string;
  render(): any;
}
