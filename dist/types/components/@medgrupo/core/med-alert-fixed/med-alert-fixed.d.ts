import { MedColor } from '../../../../interface';
export declare class MedAlertFixed {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
    * Define a variação do componente.
    */
  dsName?: 'offline' | 'atualizar';
  /**
    * Define o texto no estado active.
    */
  labelOffline: string;
  /**
   * Define o texto no estado active.
   */
  labelAtualizar: string;
  render(): any;
}
