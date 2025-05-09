/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from '@stencil/core';
import { config } from '../../global/config';
import { getIonMode } from '../../global/ionic-global';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @part native - The native HTML anchor element that wraps all child elements.
 */
export class TabButton {
  constructor() {
    this.onKeyUp = (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        this.selectTab(ev);
      }
    };
    this.onClick = (ev) => {
      this.selectTab(ev);
    };
    this.disabled = false;
    this.download = undefined;
    this.href = undefined;
    this.rel = undefined;
    this.layout = undefined;
    this.selected = false;
    this.tab = undefined;
    this.target = undefined;
  }
  onTabBarChanged(ev) {
    const dispatchedFrom = ev.target;
    const parent = this.el.parentElement;
    if ((ev.composedPath && ev.composedPath().includes(parent)) || (dispatchedFrom && dispatchedFrom.contains(this.el))) {
      this.selected = this.tab === ev.detail.tab;
    }
  }
  componentWillLoad() {
    if (this.layout === undefined) {
      this.layout = config.get('tabButtonLayout', 'icon-top');
    }
  }
  selectTab(ev) {
    if (this.tab !== undefined) {
      if (!this.disabled) {
        this.ionTabButtonClick.emit({
          tab: this.tab,
          href: this.href,
          selected: this.selected
        });
      }
      ev.preventDefault();
    }
  }
  get hasLabel() {
    return !!this.el.querySelector('ion-label');
  }
  get hasIcon() {
    return !!this.el.querySelector('ion-icon');
  }
  get tabIndex() {
    if (this.disabled) {
      return -1;
    }
    const hasTabIndex = this.el.hasAttribute('tabindex');
    if (hasTabIndex) {
      return this.el.getAttribute('tabindex');
    }
    return 0;
  }
  render() {
    const { disabled, hasIcon, hasLabel, tabIndex, href, rel, target, layout, selected, tab } = this;
    const mode = getIonMode(this);
    const attrs = {
      download: this.download,
      href,
      rel,
      target
    };
    return (h(Host, { onClick: this.onClick, onKeyup: this.onKeyUp, role: "tab", tabindex: tabIndex, "aria-selected": selected ? 'true' : null, id: tab !== undefined ? `tab-button-${tab}` : null, class: {
        [mode]: true,
        'tab-selected': selected,
        'tab-disabled': disabled,
        'tab-has-label': hasLabel,
        'tab-has-icon': hasIcon,
        'tab-has-label-only': hasLabel && !hasIcon,
        'tab-has-icon-only': hasIcon && !hasLabel,
        [`tab-layout-${layout}`]: true,
        'ion-activatable': true,
        'ion-selectable': true,
        'ion-focusable': true
      } }, h("a", Object.assign({}, attrs, { tabIndex: -1, class: "button-native", part: "native" }), h("span", { class: "button-inner" }, h("slot", null)), mode === 'md' && h("ion-ripple-effect", { type: "unbounded" }))));
  }
  static get is() { return "ion-tab-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "ios": ["tab-button.ios.scss"],
      "md": ["tab-button.md.scss"]
    };
  }
  static get styleUrls() {
    return {
      "ios": ["tab-button.ios.css"],
      "md": ["tab-button.md.css"]
    };
  }
  static get properties() {
    return {
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true`, the user cannot interact with the tab button."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "download": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | undefined",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "This attribute instructs browsers to download a URL instead of navigating to\r\nit, so the user will be prompted to save it as a local file. If the attribute\r\nhas a value, it is used as the pre-filled file name in the Save prompt\r\n(the user can still change the file name if they want)."
        },
        "attribute": "download",
        "reflect": false
      },
      "href": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | undefined",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Contains a URL or a URL fragment that the hyperlink points to.\r\nIf this property is set, an anchor tag will be rendered."
        },
        "attribute": "href",
        "reflect": false
      },
      "rel": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | undefined",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specifies the relationship of the target object to the link object.\r\nThe value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types)."
        },
        "attribute": "rel",
        "reflect": false
      },
      "layout": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "TabButtonLayout",
          "resolved": "\"icon-bottom\" | \"icon-end\" | \"icon-hide\" | \"icon-start\" | \"icon-top\" | \"label-hide\" | undefined",
          "references": {
            "TabButtonLayout": {
              "location": "import",
              "path": "../../interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Set the layout of the text and icon in the tab bar.\r\nIt defaults to `'icon-top'`."
        },
        "attribute": "layout",
        "reflect": false
      },
      "selected": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The selected tab component"
        },
        "attribute": "selected",
        "reflect": false,
        "defaultValue": "false"
      },
      "tab": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "A tab id must be provided for each `ion-tab`. It's used internally to reference\r\nthe selected tab or by the router to switch between them."
        },
        "attribute": "tab",
        "reflect": false
      },
      "target": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | undefined",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specifies where to display the linked URL.\r\nOnly applies when an `href` is provided.\r\nSpecial keywords: `\"_blank\"`, `\"_self\"`, `\"_parent\"`, `\"_top\"`."
        },
        "attribute": "target",
        "reflect": false
      }
    };
  }
  static get events() {
    return [{
        "method": "ionTabButtonClick",
        "name": "ionTabButtonClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": undefined
            }],
          "text": "Emitted when the tab bar is clicked"
        },
        "complexType": {
          "original": "TabButtonClickEventDetail",
          "resolved": "TabButtonClickEventDetail",
          "references": {
            "TabButtonClickEventDetail": {
              "location": "import",
              "path": "../../interface"
            }
          }
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
        "name": "ionTabBarChanged",
        "method": "onTabBarChanged",
        "target": "window",
        "capture": false,
        "passive": false
      }];
  }
}
