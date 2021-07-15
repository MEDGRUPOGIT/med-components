import { Color } from '../../../../interface';
export declare class MedAccordion {
  el: HTMLElement;
  color?: Color;
  size?: 'full';
  icon?: 'left' | 'right';
  collapsed: boolean;
  collapsedState: boolean;
  private contentEl;
  private contentFakeEl;
  private fakeHeight;
  componentDidLoad(): void;
  toggle(): Promise<void>;
  collapsedChanged(): void;
  onClick: () => void;
  private expandContent;
  private sleep;
  render(): any;
}
