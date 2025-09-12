import { EventEmitter } from '../../../../stencil-public-runtime';
import { MedColor } from '../../../../@templarios/types/color.type';
import { TpMultiSelectDropdownOption } from './utils/multi-select-dropdown.types';
export declare class TpMultiSelectDropdown {
  host: HTMLElement;
  /**
   * Define a variação de cor do componente.
   */
  color?: MedColor;
  /**
   * Define o valor do componente.
   */
  value: Array<string | number>;
  /**
   * Define as opções de seleção do componente.
   */
  options: TpMultiSelectDropdownOption[];
  /**
   * Define o placeholder do componente.
   */
  placeholder?: string;
  /**
   * Define a representação do valor selecionado caso o usuário do componente deseja não utilizar o default.
   */
  valueLabel?: string;
  /**
   * Define se o componente representa valores numéricos.
   */
  numeric: boolean;
  /**
   * Evento emitido quando há mudança no valor do componente.
   */
  valueChange: EventEmitter<Array<string | number>>;
  open: boolean;
  selectedOptions: TpMultiSelectDropdownOption[];
  selectedOptionsMap: Map<string | number, boolean>;
  closeOnOutsideClick(event: MouseEvent): void;
  closeOnEscapeKey(event: KeyboardEvent): void;
  onValueChange(): void;
  change(event: CustomEvent): void;
  getUpdatedValue(selectedValue: string | number, checked: boolean): (string | number)[];
  getSelectedOptions(): TpMultiSelectDropdownOption[];
  componentWillLoad(): void;
  render(): any;
}
