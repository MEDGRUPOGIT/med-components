export declare class MedVote {
  /**
    * Define o conteúdo de texto do componente.
    */
  titulo?: string;
  /**
    * Define o conteúdo de texto do componente.
    */
  cabe?: number;
  /**
    * Define o conteúdo de texto do componente.
    */
  naoCabe?: number;
  validarValores(_cabe: any, _naoCabe: any): {
    valueCabe: any;
    valueNaoCabe: any;
  };
  render(): any;
}
