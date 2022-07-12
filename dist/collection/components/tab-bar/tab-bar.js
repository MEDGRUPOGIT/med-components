import { Component, Element, Event, Host, Prop, State, Watch, h } from '@stencil/core';
import { getIonMode } from '../../global/ionic-global';
import { generateMedColor } from '../../utils/med-theme';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
export class TabBar {
  constructor() {
    this.hostHeight = 0;
    this.keyboardVisible = false;
    /**
     * If `true`, the tab bar will be translucent.
     * Only applies when the mode is `"ios"` and the device supports
     * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
     */
    this.translucent = false;
  }
  selectedTabChanged() {
    if (this.selectedTab !== undefined) {
      this.ionTabBarChanged.emit({
        tab: this.selectedTab
      });
    }
  }
  componentWillLoad() {
    this.selectedTabChanged();
    this.setSize();
  }
  connectedCallback() {
    this.updateGap();
    if (typeof window !== 'undefined') {
      this.keyboardWillShowHandler = () => {
        if (this.el.getAttribute('slot') !== 'top') {
          this.keyboardVisible = true;
        }
      };
      this.keyboardWillHideHandler = () => {
        setTimeout(() => this.keyboardVisible = false, 50);
      };
      window.addEventListener('keyboardWillShow', this.keyboardWillShowHandler);
      window.addEventListener('keyboardWillHide', this.keyboardWillHideHandler);
    }
  }
  disconnectedCallback() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('keyboardWillShow', this.keyboardWillShowHandler);
      window.removeEventListener('keyboardWillHide', this.keyboardWillHideHandler);
      this.keyboardWillShowHandler = this.keyboardWillHideHandler = undefined;
    }
  }
  /**
  * Med Resize
  */
  updateGap() {
    let gap = '2px';
    if (this.el.children.length <= 3) {
      gap = '8px';
    }
    if (this.el.children.length === 4) {
      gap = '4px';
    }
    this.gap = gap;
  }
  setSize() {
    this.medResize.emit({ height: 1 });
    this.hostResizeObserver = new ResizeObserver(() => {
      let newHostHeight = Number(this.el.getBoundingClientRect().height);
      if (newHostHeight !== this.hostHeight) {
        this.medResize.emit({ height: newHostHeight });
        this.hostHeight = newHostHeight;
      }
    });
    this.hostResizeObserver.observe(this.el);
  }
  render() {
    const { dsColor, translucent, keyboardVisible } = this;
    const mode = getIonMode(this);
    this.medResize.emit({ height: 1 });
    return (h(Host, { "from-stencil": true, role: "tablist", "aria-hidden": keyboardVisible ? 'true' : null, style: { '--gap': `${this.gap}` }, class: generateMedColor(dsColor, {
        [mode]: true,
        'tab-bar-translucent': translucent,
        'tab-bar-hidden': keyboardVisible,
      }) },
      h("slot", null)));
  }
  static get is() { return "ion-tab-bar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "ios": ["tab-bar.md.scss"],
    "md": ["tab-bar.md.scss"]
  }; }
  static get styleUrls() { return {
    "ios": ["tab-bar.md.css"],
    "md": ["tab-bar.md.css"]
  }; }
  static get properties() { return {
    "dsColor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "MedColor",
        "resolved": "string | undefined",
        "references": {
          "MedColor": {
            "location": "import",
            "path": "../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a cor do componente."
      },
      "attribute": "ds-color",
      "reflect": true
    },
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Color",
        "resolved": "string | undefined",
        "references": {
          "Color": {
            "location": "import",
            "path": "../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The color to use from your application's color palette.\nDefault options are: `\"primary\"`, `\"secondary\"`, `\"tertiary\"`, `\"success\"`, `\"warning\"`, `\"danger\"`, `\"light\"`, `\"medium\"`, and `\"dark\"`.\nFor more information on colors, see [theming](/docs/theming/basics)."
      },
      "attribute": "color",
      "reflect": false
    },
    "selectedTab": {
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
        "text": "The selected tab component"
      },
      "attribute": "selected-tab",
      "reflect": false
    },
    "translucent": {
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
        "text": "If `true`, the tab bar will be translucent.\nOnly applies when the mode is `\"ios\"` and the device supports\n[`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility)."
      },
      "attribute": "translucent",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "gap": {},
    "keyboardVisible": {}
  }; }
  static get events() { return [{
      "method": "medResize",
      "name": "medResize",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "TODO"
      },
      "complexType": {
        "original": "TabBarResizeEventDetail",
        "resolved": "TabBarResizeEventDetail",
        "references": {
          "TabBarResizeEventDetail": {
            "location": "import",
            "path": "../../interface"
          }
        }
      }
    }, {
      "method": "ionTabBarChanged",
      "name": "ionTabBarChanged",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "text": undefined,
            "name": "internal"
          }],
        "text": ""
      },
      "complexType": {
        "original": "TabBarChangedEventDetail",
        "resolved": "TabBarChangedEventDetail",
        "references": {
          "TabBarChangedEventDetail": {
            "location": "import",
            "path": "../../interface"
          }
        }
      }
    }]; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "selectedTab",
      "methodName": "selectedTabChanged"
    }]; }
}
