import { EventEmitter } from '../../../../stencil-public-runtime';
import { MedColor } from '../../../../interface';
export declare class MedNavSimple {
  /**
    * Define a cor do componente.
    */
  dsColor?: MedColor;
  /**
  * TODO.
  */
  close: EventEmitter;
  private clickHandle;
  render(): any;
}
