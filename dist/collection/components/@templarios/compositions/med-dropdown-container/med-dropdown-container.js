/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
export class MedDropdownContainer {
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "med-dropdown-container"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["med-dropdown-container.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["med-dropdown-container.css"]
    };
  }
}
