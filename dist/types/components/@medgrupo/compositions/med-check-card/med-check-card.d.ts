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
  tooltipPlacement: "top" | "bottom" | "left" | "right" | undefined;
  tooltipCollapsed: boolean;
  tooltipHeading?: string;
  tooltipContent?: string;
  render(): any;
}
