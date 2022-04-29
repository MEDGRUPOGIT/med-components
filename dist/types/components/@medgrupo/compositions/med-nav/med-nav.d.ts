import { MedColor } from '../../../../interface';
export declare class MedNav {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
    * TODO.
    */
  active: boolean;
  watchClick(): Promise<void>;
  private clickHandle;
  render(): any;
}
