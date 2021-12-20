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
  finalizada?: string;
  iconName?: string;
  render(): any;
}
