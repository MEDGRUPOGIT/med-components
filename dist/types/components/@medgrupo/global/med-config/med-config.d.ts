import { MedConfigInterface } from './med-config-interface';
export declare class MedConfig {
  /**
   * TODO
   */
  emitter: {
    scheme: (value: string) => void;
    theme: (value: string) => void;
  };
  /**
   * TODO
   */
  opcoes: MedConfigInterface;
  dismiss(): void;
  emitTheme(theme: string): void;
  emitScheme(scheme: any): void;
  render(): any;
}
