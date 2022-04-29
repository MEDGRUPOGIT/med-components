import { EventEmitter } from '../../../../stencil-public-runtime';
import { MedTema } from './med-themes-interface';
export declare class MedThemes {
  /**
    * Define a variação do componente.
    */
  ativo?: 'theme-gold' | 'theme-recursos';
  /**
    * Define quais os temas
    */
  temas?: MedTema[];
  /**
   * Retornar a cor selecionada
   */
  medChange: EventEmitter<string>;
  temaSelecionado(temaAtivo: any): void;
  render(): any;
}
