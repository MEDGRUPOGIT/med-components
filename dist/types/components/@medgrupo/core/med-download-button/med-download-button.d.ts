import { EventEmitter } from '../../../../stencil-public-runtime';
import { MedColor } from '../../../../interface';
export declare class MedDownloadButton {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
    * Define o valor da progress bar do componente.
    */
  value: number;
  /**
    * Define o estado do componente quando download tiver concluído.
    */
  downloaded: boolean;
  /**
    * Define o estado do componente durante o download.
    */
  downloading: boolean;
  /**
    * Define o estado inicial do componente.
    */
  initial: boolean;
  /**
    * Emitido quando download está concluído.
    */
  medDownloaded: EventEmitter;
  /**
    * Emitido quando download for cancelado.
    */
  medCancelar: EventEmitter;
  downloadedChanged(): void;
  valueChanged(): void;
  toggle(event?: Event): void;
  render(): any;
}
