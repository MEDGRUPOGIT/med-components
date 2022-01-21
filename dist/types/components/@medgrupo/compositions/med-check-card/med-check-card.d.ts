import { EventEmitter } from '../../../../stencil-public-runtime';
import { MedColor } from '../../../../interface';
export declare class MedCheckCard {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  alert: boolean;
  titulo?: string;
  categoria?: string;
  horaInicial?: string;
  horaFinal?: string;
  dataInicial?: string;
  dataFinal?: string;
  finalizada?: string;
  iconName?: string;
  medClick: EventEmitter;
  medTooltipClose: EventEmitter;
  onClick(): void;
  onTooltipCloseClick(): void;
  render(): any;
}
