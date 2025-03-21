export class Route {
  constructor() {
    this.url = '';
    this.component = undefined;
    this.componentProps = undefined;
    this.beforeLeave = undefined;
    this.beforeEnter = undefined;
  }
  onUpdate(newValue) {
    this.ionRouteDataChanged.emit(newValue);
  }
  onComponentProps(newValue, oldValue) {
    if (newValue === oldValue) {
      return;
    }
    const keys1 = newValue ? Object.keys(newValue) : [];
    const keys2 = oldValue ? Object.keys(oldValue) : [];
    if (keys1.length !== keys2.length) {
      this.onUpdate(newValue);
      return;
    }
    for (const key of keys1) {
      if (newValue[key] !== oldValue[key]) {
        this.onUpdate(newValue);
        return;
      }
    }
  }
  connectedCallback() {
    this.ionRouteDataChanged.emit();
  }
  static get is() { return "ion-route"; }
  static get properties() {
    return {
      "url": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Relative path that needs to match in order for this route to apply.\r\n\r\nAccepts paths similar to expressjs so that you can define parameters\r\nin the url /foo/:bar where bar would be available in incoming props."
        },
        "attribute": "url",
        "reflect": false,
        "defaultValue": "''"
      },
      "component": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Name of the component to load/select in the navigation outlet (`ion-tabs`, `ion-nav`)\r\nwhen the route matches.\r\n\r\nThe value of this property is not always the tagname of the component to load,\r\nin `ion-tabs` it actually refers to the name of the `ion-tab` to select."
        },
        "attribute": "component",
        "reflect": false
      },
      "componentProps": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "{[key: string]: any}",
          "resolved": "undefined | { [key: string]: any; }",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "A key value `{ 'red': true, 'blue': 'white'}` containing props that should be passed\r\nto the defined component when rendered."
        }
      },
      "beforeLeave": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "NavigationHookCallback",
          "resolved": "(() => NavigationHookResult | Promise<NavigationHookResult>) | undefined",
          "references": {
            "NavigationHookCallback": {
              "location": "import",
              "path": "./route-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "A navigation hook that is fired when the route tries to leave.\r\nReturning `true` allows the navigation to proceed, while returning\r\n`false` causes it to be cancelled. Returning a `NavigationHookOptions`\r\nobject causes the router to redirect to the path specified."
        }
      },
      "beforeEnter": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "NavigationHookCallback",
          "resolved": "(() => NavigationHookResult | Promise<NavigationHookResult>) | undefined",
          "references": {
            "NavigationHookCallback": {
              "location": "import",
              "path": "./route-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "A navigation hook that is fired when the route tries to enter.\r\nReturning `true` allows the navigation to proceed, while returning\r\n`false` causes it to be cancelled. Returning a `NavigationHookOptions`\r\nobject causes the router to redirect to the path specified."
        }
      }
    };
  }
  static get events() {
    return [{
        "method": "ionRouteDataChanged",
        "name": "ionRouteDataChanged",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Used internally by `ion-router` to know when this route did change."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "url",
        "methodName": "onUpdate"
      }, {
        "propName": "component",
        "methodName": "onUpdate"
      }, {
        "propName": "componentProps",
        "methodName": "onComponentProps"
      }];
  }
}
