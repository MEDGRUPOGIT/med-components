import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class MedAvalicao {
  clicked: 'like' | 'dislike';
  medChange: EventEmitter<'like' | 'dislike'>;
  private onClick;
  render(): any;
}
