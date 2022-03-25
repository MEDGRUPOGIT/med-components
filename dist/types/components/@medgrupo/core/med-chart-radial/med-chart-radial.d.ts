import { MedChartRadiaItem } from './med-chart-radial-interface';
import { MedColor } from '../../../../interface';
export declare class MedChartRadial {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
    * Define a variação do componente.
    */
  dsName?: 'secondary';
  /**
     * Define a variação de tamanho.
     */
  dsSize?: 'xs' | 'sm' | 'md' | 'lg';
  /**
     * Define os valores do gráfico
     */
  valores: MedChartRadiaItem[];
  /**
    * Define o texto primario.
    */
  titulo?: string;
  /**
    * Define o texto secundario.
    */
  subtitulo?: string;
  render(): any;
}
