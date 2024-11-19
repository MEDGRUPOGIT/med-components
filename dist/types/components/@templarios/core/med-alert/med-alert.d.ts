export declare class MedAlert {
  /**
   * todo
   */
  heading?: string;
  /**
   * todo
   */
  message?: string;
  /**
   * todo
   */
  cancelText?: string;
  /**
   * todo
   */
  confirmText?: string;
  /**
   * todo
   */
  disableSanitize: boolean;
  /**
  * todo
  */
  canClose: boolean;
  dismiss(role: string): void;
  render(): any;
}
