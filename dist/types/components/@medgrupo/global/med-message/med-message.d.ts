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
    * Define o avatar com letra.
    */
  avatarLetter?: string;
  /**
    * Define o avatar com imagem.
    */
  avatarImage?: string;
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
