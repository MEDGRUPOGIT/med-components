import { MedColor } from '../../../../interface';
export declare class MedChartCategoria {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
    * Define o valor do componente.
    */
  value: number;
  titulo?: string;
  meta?: string;
  realizado?: string;
  render(): any;
}
