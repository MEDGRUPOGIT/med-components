import { MedColor } from '../../../../interface';
export declare class MedPiechart {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
    * Define o estado do componente.
    */
  active: boolean;
  /**
    * Define o value do componente.
    */
  value: number;
  /**
    * Define o texto do componente.
    */
  text?: string;
  toggle(event?: Event): Promise<void>;
  render(): any;
}
