import { MedConfigInterface } from './med-config-interface';
export declare class MedConfig {
  /**
   * todo
   */
  emitter: {
    scheme: (value: string) => void;
    theme: (value: string) => void;
  };
  /**
   * todo
   */
  opcoes: MedConfigInterface;
  dismiss(): void;
  emitTheme(theme: string): void;
  emitScheme(scheme: any): void;
  render(): any;
}
