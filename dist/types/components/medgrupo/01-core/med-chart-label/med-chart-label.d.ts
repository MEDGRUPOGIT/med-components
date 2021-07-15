export interface MedRadialItem {
  cor: string;
  label: string;
  quantia: number;
  ignoreBarra: boolean;
}
export declare class MedChartLabel {
  valores: MedRadialItem[];
  render(): any;
}
