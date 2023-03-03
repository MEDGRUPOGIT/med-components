import { Component, h, Host, Prop, Element, Listen, State, } from "@stencil/core";
import { generateMedColor } from "../../../../@templarios/utilities/color";
export class TpInputContainer {
  constructor() {
    this.selectClicked = false;
    /**
     * todo
     */
    this.disabled = false;
    /**
     * todo
     */
    this.feedback = false;
  }
  getTpInputContainerWidth(e) {
    const target = e.target;
    this.selectClicked =
      this.host.contains(target) && target.nodeName === "ION-SELECT";
    this.hostWidth = this.host.clientWidth + 2;
  }
  setPopoverWidthOnResize() {
    if (!this.selectClicked)
      return;
    const popoverElement = document.querySelector(".select-popover");
    popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty("--width", `${this.host.clientWidth + 2}px`);
  }
  setPopoverWidth() {
    if (!this.selectClicked)
      return;
    const popoverElement = document.querySelector(".select-popover");
    popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty("--width", `${this.hostWidth}px`);
    if (this.dsName === "secondary") {
      popoverElement.classList.add("tp-popover--secondary");
    }
  }
  unsetClikedState() {
    if (!this.selectClicked)
      return;
    this.selectClicked = false;
  }
  render() {
    const { dsColor, dsName, disabled, feedback, hasButton, hasIcon } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        "tp-input-container": true,
        [`tp-input-container--select-clicked`]: this.selectClicked,
        "tp-input-container--disabled": disabled,
        "tp-input-container--feedback": feedback,
        [`tp-input-container--${dsName}`]: dsName !== undefined,
        [`tp-input-container--has-button-${hasButton}`]: hasButton !== undefined,
        [`tp-input-container--has-icon-${hasIcon}`]: hasIcon !== undefined,
      }) },
      h("slot", { name: "start" }),
      h("slot", null),
      h("slot", { name: "end" })));
  }
  static get is() { return "tp-input-container"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["tp-input-container.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["tp-input-container.css"]
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
            "path": "../../../../@templarios/types/color.type"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "attribute": "ds-color",
      "reflect": true
    },
    "dsName": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"secondary\"",
        "resolved": "\"secondary\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "attribute": "ds-name",
      "reflect": true
    },
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
        "text": "todo"
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "feedback": {
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
        "text": "todo"
      },
      "attribute": "feedback",
      "reflect": true,
      "defaultValue": "false"
    },
    "hasButton": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"start\" | \"end\" | \"both\"",
        "resolved": "\"both\" | \"end\" | \"start\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "attribute": "has-button",
      "reflect": true
    },
    "hasIcon": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"start\" | \"end\" | \"both\"",
        "resolved": "\"both\" | \"end\" | \"start\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "todo"
      },
      "attribute": "has-icon",
      "reflect": true
    }
  }; }
  static get states() { return {
    "selectClicked": {}
  }; }
  static get elementRef() { return "host"; }
  static get listeners() { return [{
      "name": "click",
      "method": "getTpInputContainerWidth",
      "target": "body",
      "capture": false,
      "passive": false
    }, {
      "name": "resize",
      "method": "setPopoverWidthOnResize",
      "target": "window",
      "capture": false,
      "passive": true
    }, {
      "name": "ionPopoverWillPresent",
      "method": "setPopoverWidth",
      "target": "body",
      "capture": false,
      "passive": false
    }, {
      "name": "ionPopoverWillDismiss",
      "method": "unsetClikedState",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
