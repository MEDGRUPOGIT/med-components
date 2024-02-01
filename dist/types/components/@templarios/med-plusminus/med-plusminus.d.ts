import { EventEmitter } from '../../../stencil-public-runtime';
import { MedColor } from '../../../@templarios/types/color.type';
import { PlusMinusStatus } from '../../../@templarios/enums/plusminus.enum';
export declare class MedPlusminus {
    dsColor?: MedColor;
    dsSize?: 'xl';
    medChange: EventEmitter<PlusMinusStatus>;
    medChangeAlt: EventEmitter<number>;
    disabled?: 'minus' | 'plus' | 'both';
    /**
     * true se deve desabilitar os controles automaticamente
     */
    automaticDisabled: boolean;
    /**
     * Deverá ser true se o valor atual vai ser passado por slot, false se vai ser passado por prop
     */
    useSlot: boolean;
    /**
     * O valor atual (apenas se useSlot é false)
     */
    value?: number;
    /**
     * O valor mínimo
     */
    min?: number;
    /**
     * O valor máximo
     */
    max?: number;
    disabledHandler(newValue: number, _: number): "both" | "minus" | "plus" | undefined;
    private onClick;
    componentDidLoad(): void;
    render(): any;
}
