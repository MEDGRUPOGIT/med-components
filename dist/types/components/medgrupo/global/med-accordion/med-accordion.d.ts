import { Color } from '../../../../interface';
export declare class MedAccordion {
  el: HTMLElement;
  color?: Color;
  size?: 'full';
  collapsed: boolean;
  private contentEl;
  private contentFakeEl;
  private fakeHeight;
  componentDidLoad(): void;
  toggle(): Promise<void>;
  onClick: () => void;
  private expandContent;
  private sleep;
  render(): any;
}
