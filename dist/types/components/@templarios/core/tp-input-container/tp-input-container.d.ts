import { MedColor } from "../../../../@templarios/types/color.type";
export declare class TpInputContainer {
  /**
   * Quando usado em conjunto com Select, representa a largura
   * do Select definida dinamicamente
   */
  hostWidth: number | undefined;
  /**
   * Acrescimo ao hostWidth necessário para contabilizar as bordas
   */
  readonly selectAndPopoverDiffWidth: number;
  /**
   * Referência ao componente no DOM
   */
  host: HTMLElement;
  /**
   * Alvo do evento de click. Evita bugs nos casos em que há mais de um
   * Select na mesma página
   */
  clickTarget: Node;
  /**
   * Monitoria se o Select foi clicado e está ativo. A propriedade é usada para
   * aplicar estilização e evitar processamentos desnecessários em alguns métodos
   */
  selectWithPopoverClicked: boolean;
  /**
   * todo
   */
  pointerOnSelect: boolean;
  /**
   * todo
   */
  dsColor?: MedColor;
  /**
   * todo
   */
  dsName?: "secondary";
  /**
   * todo
   */
  disabled: boolean;
  /**
   * todo
   */
  feedback: boolean;
  /**
   * todo
   */
  inverted: boolean;
  /**
   * todo
   */
  hasButton?: "start" | "end" | "both";
  /**
   * todo
   */
  hasIcon?: "start" | "end" | "both";
  setClickTarget(e: MouseEvent): void;
  catchSelectIconClick(e: MouseEvent): void;
  setPopoverWidthOnResize(): void;
  setPopoverCharacteristics(): void;
  unsetClikedState(): void;
  componentDidLoad(): void;
  render(): any;
}
