import { MedColor } from '../../../../interface';
export declare class MedRating {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
   * Define a variação do componente.
   */
  dsName?: 'medgrupo' | 'banca';
  /**
    * Define o nome do aluno.
    */
  nome?: string;
  /**
    * Define a data da postagem.
    */
  data?: string;
  /**
    * Define o nome do concurso.
    */
  concurso?: string;
  /**
    * Define o conteúdo de texto.
    */
  texto?: string;
  /**
  * Define o estado cabe ou não cabe recurso.
  */
  cabe: boolean;
  render(): any;
}
