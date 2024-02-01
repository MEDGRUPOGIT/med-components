/// <reference types="node" />
export declare class MedAutocomplete {
    /**
     * O estado do dropdown (aberto ou fechado)
     */
    open: boolean;
    /**
     * O tamanho da altura mínima do autocomplete, representada
     * pelo tamanho do searchbar
     */
    baseHeight: number;
    /**
     * Indica se o componente deve ser renderizado mostrando o dropdown ou não
     */
    dropdown: boolean;
    /**
     * Se a pesquisa por items possuir debounce time até o item ser inserido
     *  no dom, deve ser indicado por essa propriedade (defaults to 0)
     */
    debounceTime: number;
    /**
     * Referência ao host
     */
    host: HTMLElement;
    /**
     * Referência ao elemento de dropdown
     */
    dropdownElement: any;
    /**
     * Refêrencia a função de polling que vai buscar um valor base de altura
     * não nulo, e usar essa referência para cancelar a função de polling
     */
    pollTrigger: NodeJS.Timeout;
    closeOnOutsideClick(e: MouseEvent): void;
    handleInput(): void;
    handleFocus(): void;
    handleOpenChange(): void;
    toggleDropdown(): Promise<void>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    render(): any;
}
