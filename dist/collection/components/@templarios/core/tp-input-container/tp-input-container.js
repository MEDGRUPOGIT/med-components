import { Component, h, Host, Prop, Element, Listen, State, } from "@stencil/core";
import { generateMedColor } from "../../../../@templarios/utilities/color";
export class TpInputContainer {
  constructor() {
    this.selectWithPopoverClicked = false;
    this.pointerOnSelect = false;
    this.selectAndPopoverDiffWidth = 2;
    /**
     * todo
     */
    this.disabled = false;
    /**
     * todo
     */
    this.feedback = false;
    /**
     * todo
     */
    this.inverted = false;
  }
  getTpInputContainerWidth(e) {
    if (this.disabled)
      return;
    const target = e.target;
    const ionSelect = this.host.querySelector("ion-select");
    this.selectWithPopoverClicked =
      this.host.contains(target) &&
        ionSelect !== null &&
        ionSelect.interface === "popover";
    // querySelector vai garantir que só seja afetado o tp-input-container usado como container de um ion-select
    if (this.selectWithPopoverClicked) {
      this.hostWidth = this.host.clientWidth + this.selectAndPopoverDiffWidth;
    }
  }
  catchSelectIconClick(e) {
    const target = e.target;
    const ionSelect = this.host.querySelector("ion-select");
    const shouldOpenOverlay = this.host.contains(target) &&
      ionSelect.hasAttribute("interface") &&
      (target.nodeName === "ION-ICON" ||
        target.nodeName === "TP-INPUT-CONTAINER");
    if (shouldOpenOverlay) {
      ionSelect.open(e);
    }
  }
  setPopoverWidthOnResize() {
    if (!this.selectWithPopoverClicked)
      return;
    const popoverElement = document.querySelector(".select-popover");
    popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty("--width", `${this.host.clientWidth + this.selectAndPopoverDiffWidth}px`);
  }
  setPopoverCharacteristics() {
    // setTimeout para animação acontecer de forma suave
    setTimeout(() => {
      if (!this.selectWithPopoverClicked)
        return;
      const popoverElement = document.querySelector(".select-popover");
      popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty("--width", `${this.hostWidth}px`);
      if (this.dsName === "secondary") {
        popoverElement.classList.add("tp-popover--secondary");
      }
      if (popoverElement.classList.contains("popover-bottom")) {
        this.inverted = true;
      }
      const { top, left } = this.host.getBoundingClientRect();
      if (this.inverted) {
        popoverElement.classList.add("tp-popover--inverted");
        popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty("--left", `${left}px`);
        popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty("--bottom", `${window.innerHeight - top}px`);
      }
      else {
        popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty("--left", `${left + 1}px`);
      }
    }, 0);
  }
  unsetClikedState() {
    if (!this.selectWithPopoverClicked)
      return;
    this.selectWithPopoverClicked = false;
  }
  componentDidLoad() {
    const ionSelect = this.host.querySelector("ION-SELECT");
    if (ionSelect) {
      this.pointerOnSelect = true;
      if (!ionSelect.hasAttribute("interface")) {
        ionSelect.interfaceOptions = { cssClass: "tp-hide" };
      }
    }
  }
  render() {
    const { dsColor, dsName, selectWithPopoverClicked, pointerOnSelect, inverted, disabled, feedback, hasButton, hasIcon, } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        "tp-input-container": true,
        "tp-input-container--with-select": pointerOnSelect,
        [`tp-input-container--select-popover-clicked`]: selectWithPopoverClicked,
        [`tp-input-container--inverted`]: inverted,
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
    "inverted": {
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
      "attribute": "inverted",
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
    "selectWithPopoverClicked": {},
    "pointerOnSelect": {}
  }; }
  static get elementRef() { return "host"; }
  static get listeners() { return [{
      "name": "click",
      "method": "getTpInputContainerWidth",
      "target": "body",
      "capture": false,
      "passive": false
    }, {
      "name": "click",
      "method": "catchSelectIconClick",
      "target": undefined,
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
      "method": "setPopoverCharacteristics",
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
