/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from '@stencil/core';
/**
 * @slot - Content is placed between the named slots if provided without a slot.
 * @slot top - Content is placed at the top of the screen.
 * @slot bottom - Content is placed at the bottom of the screen.
 */
export class Tabs {
  constructor() {
    this.transitioning = false;
    this.onTabClicked = (ev) => {
      const { href, tab } = ev.detail;
      if (this.useRouter && href !== undefined) {
        const router = document.querySelector('ion-router');
        if (router) {
          router.push(href);
        }
      }
      else {
        this.select(tab);
      }
    };
    this.selectedTab = undefined;
    this.useRouter = false;
  }
  async componentWillLoad() {
    if (!this.useRouter) {
      this.useRouter = !!document.querySelector('ion-router') && !this.el.closest('[no-router]');
    }
    if (!this.useRouter) {
      const tabs = this.tabs;
      if (tabs.length > 0) {
        await this.select(tabs[0]);
      }
    }
    this.ionNavWillLoad.emit();
  }
  componentWillRender() {
    const tabBar = this.el.querySelector('ion-tab-bar');
    if (tabBar) {
      const tab = this.selectedTab ? this.selectedTab.tab : undefined;
      tabBar.selectedTab = tab;
    }
  }
  /**
   * Select a tab by the value of its `tab` property or an element reference.
   *
   * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
   */
  async select(tab) {
    const selectedTab = getTab(this.tabs, tab);
    if (!this.shouldSwitch(selectedTab)) {
      return false;
    }
    await this.setActive(selectedTab);
    await this.notifyRouter();
    this.tabSwitch();
    return true;
  }
  /**
   * Get a specific tab by the value of its `tab` property or an element reference.
   *
   * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
   */
  async getTab(tab) {
    return getTab(this.tabs, tab);
  }
  /**
   * Get the currently selected tab.
   */
  getSelected() {
    return Promise.resolve(this.selectedTab ? this.selectedTab.tab : undefined);
  }
  /** @internal */
  async setRouteId(id) {
    const selectedTab = getTab(this.tabs, id);
    if (!this.shouldSwitch(selectedTab)) {
      return { changed: false, element: this.selectedTab };
    }
    await this.setActive(selectedTab);
    return {
      changed: true,
      element: this.selectedTab,
      markVisible: () => this.tabSwitch(),
    };
  }
  /** @internal */
  async getRouteId() {
    const tabId = this.selectedTab && this.selectedTab.tab;
    return tabId !== undefined ? { id: tabId, element: this.selectedTab } : undefined;
  }
  setActive(selectedTab) {
    if (this.transitioning) {
      return Promise.reject('transitioning already happening');
    }
    this.transitioning = true;
    this.leavingTab = this.selectedTab;
    this.selectedTab = selectedTab;
    this.ionTabsWillChange.emit({ tab: selectedTab.tab });
    selectedTab.active = true;
    return Promise.resolve();
  }
  tabSwitch() {
    const selectedTab = this.selectedTab;
    const leavingTab = this.leavingTab;
    this.leavingTab = undefined;
    this.transitioning = false;
    if (!selectedTab) {
      return;
    }
    if (leavingTab !== selectedTab) {
      if (leavingTab) {
        leavingTab.active = false;
      }
      this.ionTabsDidChange.emit({ tab: selectedTab.tab });
    }
  }
  notifyRouter() {
    if (this.useRouter) {
      const router = document.querySelector('ion-router');
      if (router) {
        return router.navChanged('forward');
      }
    }
    return Promise.resolve(false);
  }
  shouldSwitch(selectedTab) {
    const leavingTab = this.selectedTab;
    return selectedTab !== undefined && selectedTab !== leavingTab && !this.transitioning;
  }
  get tabs() {
    return Array.from(this.el.querySelectorAll('ion-tab'));
  }
  render() {
    return (h(Host, { onIonTabButtonClick: this.onTabClicked }, h("slot", { name: "top" }), h("div", { class: "tabs-inner" }, h("slot", null)), h("slot", { name: "bottom" })));
  }
  static get is() { return "ion-tabs"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["tabs.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["tabs.css"]
    };
  }
  static get properties() {
    return {
      "useRouter": {
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
          "tags": [{
              "name": "internal",
              "text": undefined
            }],
          "text": ""
        },
        "attribute": "use-router",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "selectedTab": {}
    };
  }
  static get events() {
    return [{
        "method": "ionNavWillLoad",
        "name": "ionNavWillLoad",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": undefined
            }],
          "text": "Emitted when the navigation will load a component."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }, {
        "method": "ionTabsWillChange",
        "name": "ionTabsWillChange",
        "bubbles": false,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the navigation is about to transition to a new component."
        },
        "complexType": {
          "original": "{tab: string}",
          "resolved": "{ tab: string; }",
          "references": {}
        }
      }, {
        "method": "ionTabsDidChange",
        "name": "ionTabsDidChange",
        "bubbles": false,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the navigation has finished transitioning to a new component."
        },
        "complexType": {
          "original": "{tab: string}",
          "resolved": "{ tab: string; }",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "select": {
        "complexType": {
          "signature": "(tab: string | HTMLIonTabElement) => Promise<boolean>",
          "parameters": [{
              "tags": [{
                  "name": "param",
                  "text": "tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property."
                }],
              "text": "The tab instance to select. If passed a string, it should be the value of the tab's `tab` property."
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "HTMLIonTabElement": {
              "location": "global"
            }
          },
          "return": "Promise<boolean>"
        },
        "docs": {
          "text": "Select a tab by the value of its `tab` property or an element reference.",
          "tags": [{
              "name": "param",
              "text": "tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property."
            }]
        }
      },
      "getTab": {
        "complexType": {
          "signature": "(tab: string | HTMLIonTabElement) => Promise<HTMLIonTabElement | undefined>",
          "parameters": [{
              "tags": [{
                  "name": "param",
                  "text": "tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property."
                }],
              "text": "The tab instance to select. If passed a string, it should be the value of the tab's `tab` property."
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "HTMLIonTabElement": {
              "location": "global"
            }
          },
          "return": "Promise<HTMLIonTabElement | undefined>"
        },
        "docs": {
          "text": "Get a specific tab by the value of its `tab` property or an element reference.",
          "tags": [{
              "name": "param",
              "text": "tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property."
            }]
        }
      },
      "getSelected": {
        "complexType": {
          "signature": "() => Promise<string | undefined>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<string | undefined>"
        },
        "docs": {
          "text": "Get the currently selected tab.",
          "tags": []
        }
      },
      "setRouteId": {
        "complexType": {
          "signature": "(id: string) => Promise<RouteWrite>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "RouteWrite": {
              "location": "import",
              "path": "../../interface"
            }
          },
          "return": "Promise<RouteWrite>"
        },
        "docs": {
          "text": "",
          "tags": [{
              "name": "internal",
              "text": undefined
            }]
        }
      },
      "getRouteId": {
        "complexType": {
          "signature": "() => Promise<RouteID | undefined>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "RouteID": {
              "location": "import",
              "path": "../../interface"
            }
          },
          "return": "Promise<RouteID | undefined>"
        },
        "docs": {
          "text": "",
          "tags": [{
              "name": "internal",
              "text": undefined
            }]
        }
      }
    };
  }
  static get elementRef() { return "el"; }
}
const getTab = (tabs, tab) => {
  const tabEl = (typeof tab === 'string')
    ? tabs.find(t => t.tab === tab)
    : tab;
  if (!tabEl) {
    console.error(`tab with id: "${tabEl}" does not exist`);
  }
  return tabEl;
};
