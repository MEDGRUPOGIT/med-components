import { EventEmitter } from '../../../../stencil-public-runtime';
import { MedColor } from '../../../../interface';
export declare class MedCheckCard {
  /**
    * Define a cor.
    */
  dsColor?: MedColor;
  /**
    * Define o estado.
    */
  alert: boolean;
  /**
    * Define o titulo.
    */
  titulo?: string;
  /**
    * Define a categoria.
    */
  categoria?: string;
  /**
    * Define a hora de inicio.
    */
  horaInicial?: string;
  /**
    * Define a hora de termino.
    */
  horaFinal?: string;
  /**
    * Define a data de inicio.
    */
  dataInicial?: string;
  /**
    * Define a data de termino.
    */
  dataFinal?: string;
  /**
    * Define se a task foi finalizada.
    */
  finalizada?: string;
  /**
    * Define o icone.
    */
  iconName?: string;
  medClick: EventEmitter;
  medTooltipClose: EventEmitter;
  onClick(): void;
  onTooltipCloseClick(): void;
  render(): any;
}
