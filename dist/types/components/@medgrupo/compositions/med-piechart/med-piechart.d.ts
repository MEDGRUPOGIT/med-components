import { MedColor } from '../../../../interface';
export declare class MedPiechart {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
    * Define a variação de tamanho do componente.
    */
  dsSize?: 'sm';
  /**
    * Define o estado de download do componente.
    */
  download: boolean;
  /**
    * Define o estado de downloaded do componente.
    */
  downloaded: boolean;
  /**
    * Define a porcentagem a ser mostrada.
    */
  label?: string;
  /**
    * Define o valor do progresso do componente do piechart.
    */
  value: number;
  /**
  * Define o valor do progresso do componente de download.
  */
  downloadProgress: number;
  /**
    * Define qual a posição do array se encontra esse chart. Opcional.
    */
  index?: number;
  /**
    * Identificador do pie-chart para emissão de eventos.
    */
  identification?: string | number | undefined;
  /**
    * Esconde o download do pie-chart.
    */
  hideDownload: boolean;
  /**
   * Define o estado habilitado ou desabilitado do componente.
   */
  disabled: boolean;
  /**
    * Define o estado do componente programaticamente.
    */
  toggle(event?: Event): Promise<void>;
  Isdownloaded(event?: CustomEvent): void;
  render(): any;
}
