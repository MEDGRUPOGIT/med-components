import { Component, Event, Prop, Watch } from '@stencil/core';
export class RouteRedirect {
  propDidChange() {
    this.ionRouteRedirectChanged.emit();
  }
  connectedCallback() {
    this.ionRouteRedirectChanged.emit();
  }
  static get is() { return "ion-route-redirect"; }
  static get properties() { return {
    "from": {
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
        "text": "A redirect route, redirects \"from\" a URL \"to\" another URL. This property is that \"from\" URL.\r\nIt needs to be an exact match of the navigated URL in order to apply.\r\n\r\nThe path specified in this value is always an absolute path, even if the initial `/` slash\r\nis not specified."
      },
      "attribute": "from",
      "reflect": false
    },
    "to": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | undefined | null",
        "resolved": "null | string | undefined",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "A redirect route, redirects \"from\" a URL \"to\" another URL. This property is that \"to\" URL.\r\nWhen the defined `ion-route-redirect` rule matches, the router will redirect to the path\r\nspecified in this property.\r\n\r\nThe value of this property is always an absolute path inside the scope of routes defined in\r\n`ion-router` it can't be used with another router or to perform a redirection to a different domain.\r\n\r\nNote that this is a virtual redirect, it will not cause a real browser refresh, again, it's\r\na redirect inside the context of ion-router.\r\n\r\nWhen this property is not specified or his value is `undefined` the whole redirect route is noop,\r\neven if the \"from\" value matches."
      },
      "attribute": "to",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "ionRouteRedirectChanged",
      "name": "ionRouteRedirectChanged",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Internal event that fires when any value of this rule is added/removed from the DOM,\r\nor any of his public properties changes.\r\n\r\n`ion-router` captures this event in order to update his internal registry of router rules."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get watchers() { return [{
      "propName": "from",
      "methodName": "propDidChange"
    }, {
      "propName": "to",
      "methodName": "propDidChange"
    }]; }
}
