export interface MedDonutItem {
  cor: string;
  label: string;
  quantia: number;
  ignoreBarra: boolean;
}
export declare class MedChartLabel {
  valores: MedDonutItem[];
  render(): any;
}
