import { MedColor } from '../../../@templarios/types/color.type';
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
    pointerOnSelect: boolean;
    dsColor?: MedColor;
    dsName?: 'secondary';
    disabled: boolean;
    feedback: boolean;
    inverted: boolean;
    hasButton?: 'start' | 'end' | 'both';
    hasIcon?: 'start' | 'end' | 'both';
    setClickTarget(e: MouseEvent): void;
    catchSelectIconClick(e: MouseEvent): void;
    setPopoverWidthOnResize(): void;
    setPopoverCharacteristics(): void;
    fixPopover(): void;
    unsetClikedState(): void;
    componentDidLoad(): void;
    setPopoverPosition(): void;
    render(): any;
}
