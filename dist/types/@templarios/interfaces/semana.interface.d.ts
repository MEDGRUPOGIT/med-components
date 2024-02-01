export interface MedSemanaInterface {
    Title: string;
    Numero: string | number;
    DataInicio: string;
    DataFim: string;
    Itens: ItensInterface[];
}
export interface ItensInterface {
    Nome: string;
    PercentLido: number;
    Downloaded: boolean;
    DownloadProgress: number;
    Time: string;
    Descricao: string;
    Id?: string | number | undefined;
}
