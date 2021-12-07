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
   * Define o progresso a ser mostrado.
   */
  progresso: number;
  /**
    * Define a porcentagem de download do botão de download.
    */
  downloadProgresso: number;
  /**
    * Define o estado do componente.
    */
  downloading: boolean;
  /**
    * Define o estado do componente.
    */
  downloaded: boolean;
  firstFlip: boolean;
  teste: boolean;
  /**
    * TODO
    */
  toggle(event?: Event): Promise<void>;
  activeChanged(): void;
  render(): any;
}
