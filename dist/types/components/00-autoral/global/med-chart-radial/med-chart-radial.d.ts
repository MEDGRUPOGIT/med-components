export interface MedRadialItem {
  cor: string;
  label: string;
  quantia: number;
  ignoreBarra: boolean;
}
export declare class MedChartRadial {
  valores: MedRadialItem[];
  private getTotal;
  render(): any;
}
