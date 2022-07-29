import { EventEmitter } from '../../../../stencil-public-runtime';
import { MedTema } from '../../../../@templarios/interfaces/themes.interface';
export declare class MedThemes {
  /**
   * todo
   */
  ativo?: 'theme-gold' | 'theme-recursos' | string;
  /**
   * todo
   */
  temas?: MedTema[];
  /**
   * todo
   */
  medChange: EventEmitter<string>;
  temaSelecionado(temaAtivo: any): void;
  render(): any;
}
