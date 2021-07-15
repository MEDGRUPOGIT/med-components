export interface MedDonutItem {
  cor: string;
  label: string;
  quantia: number;
  ignoreBarra: boolean;
}
export declare class MedChartDonut {
  valores: MedDonutItem[];
  private getTotal;
  render(): any;
}
