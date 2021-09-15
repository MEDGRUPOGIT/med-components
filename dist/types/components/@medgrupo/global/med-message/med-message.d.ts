/**
 * @slot - Slot destinado a listagem de badges
 * @slot avatar - Slot destinado ao avatar.
 * @slot menu - Slot destinado ao componete med-context-menu.
 * @slot footer - Slot destinado a listagem de botões.
 */
export declare class MedMessage {
  /**
    * Define a variação do componente.
    */
  dsName?: 'medgrupo' | 'response' | 'comment' | 'user-message';
  /**
    * Define o nome do aluno.
    */
  nome?: string;
  /**
    * Define o nome do concurso.
    */
  concurso?: string;
  /**
    * Define o conteúdo de texto.
    */
  texto?: string;
  /**
    * Define o id da mensagem.
    */
  messageId?: string;
  render(): any;
}
