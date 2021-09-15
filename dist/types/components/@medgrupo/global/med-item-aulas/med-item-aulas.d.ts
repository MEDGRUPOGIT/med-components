import { MedColor } from '../../../../interface';
/**
 * @slot avatar - Slot destinado ao avatar.
 * @slot rate - Slot destinado ao componete de rate.
 */
export declare class MedItemAulas {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
    * Define o nome do professor.
    */
  professor: string;
  /**
    * Define a porcentagem de visualização de vídeos.
    */
  porcentagem: number;
  /**
    * Define a quantidade de vídeos.
    */
  videos: string;
  render(): any;
}
