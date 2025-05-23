import { EventEmitter } from "../../../../stencil-public-runtime";
import { TpSelectDropdownOption } from "./utils/select-dropdown.types";
import { MedColor } from "../../../../@templarios/types/color.type";
export declare class TpSelectDropdown {
  host: HTMLElement;
  /**
   * Define a variação de cor do componente.
   */
  color?: MedColor;
  /**
   * Define o nome do componente, agrupando as opções.
   */
  name: string;
  /**
   * Define o valor do componente.
   */
  value: string | number | null;
  /**
   * Define as opções de seleção do componente.
   */
  options: TpSelectDropdownOption[];
  /**
   * Define o placeholder do componente.
   */
  placeholder?: string;
  /**
   * Define se o componente representa valores numéricos.
   */
  numeric: boolean;
  /**
   * Define o estado disabled do componente.
   */
  disabled: boolean;
  /**
   * Evento emitido quando há mudança no valor do componente.
   */
  valueChange: EventEmitter<string | number>;
  open: boolean;
  selectedOption: TpSelectDropdownOption | null;
  closeOnOutsideClick(event: MouseEvent): void;
  closeOnEscapeKey(event: KeyboardEvent): void;
  handleChange(event: any): void;
  componentWillLoad(): void;
  render(): any;
}
