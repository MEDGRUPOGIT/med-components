import { MedColor } from '../../../../interface';
export declare class MedBase {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
    * Define a borda do componente.
    */
  radius?: string | undefined;
  /**
   * Define a borda do componente.
   */
  spacingV?: string | undefined;
  /**
    * Define a borda do componente.
    */
  spacingH?: string | undefined;
  render(): any;
}
