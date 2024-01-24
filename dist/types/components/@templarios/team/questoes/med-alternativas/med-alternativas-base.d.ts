import { MedAlternativaInterface, MedAlternativasInternoInterface } from "../../../../../@templarios/interfaces/alternativas.interface";
export declare class MedAlternativasBase {
  parent: MedAlternativasInternoInterface;
  private dataStart;
  private dataEnd;
  private positionStart;
  private distanciaMinimaClick;
  private tempoLongPress;
  private timer;
  constructor(parent: MedAlternativasInternoInterface);
  resetState(): void;
  handleClick(event: any): void;
  onAlternativasChanged(newValue: MedAlternativaInterface | any, oldValue: MedAlternativaInterface | any): void;
  onTouchStart(event: any, indice: number): void;
  onTouchEnd(event: any, alternativa: MedAlternativaInterface): void;
  alterarAlternativa(item: any): CustomEvent<MedAlternativaInterface> | undefined;
  riscar(event: any, alternativa: any): void;
  imageRequest(event: any, alternativa: any): void;
}
