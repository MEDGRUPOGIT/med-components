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
    * TODO.
    */
  downloaded: boolean;
  /**
    * TODO.
    */
  downloading: boolean;
  /**
    * TODO.
    */
  initial: boolean;
  /**
    * TODO.
    */
  medDownloaded: EventEmitter;
  /**
    * TODO.
    */
  medCancelar: EventEmitter;
  downloadedChanged(): void;
  valueChanged(): void;
  toggle(event?: Event): void;
  render(): any;
}
