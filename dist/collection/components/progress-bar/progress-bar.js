/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { h, Host } from '@stencil/core';
import { config } from '../../global/config';
import { getIonMode } from '../../global/ionic-global';
import { clamp } from '../../utils/helpers';
import { generateMedColor } from '../../@templarios/utilities/color';
import { hostContext } from '../../utils/theme';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @part progress - The progress bar that shows the current value when `type` is `"determinate"` and slides back and forth when `type` is `"indeterminate"`.
 * @part stream - The animated circles that appear while buffering. This only shows when `buffer` is set and `type` is `"determinate"`.
 * @part track - The track bar behind the progress bar. If the `buffer` property is set and `type` is `"determinate"` the track will be the
 * width of the `buffer` value.
 */
export class ProgressBar {
  constructor() {
    this.dsColor = undefined;
    this.type = 'determinate';
    this.reversed = false;
    this.value = 0;
    this.buffer = 1;
    this.color = undefined;
  }
  render() {
    const { dsColor, type, reversed, value, buffer } = this;
    const paused = config.getBoolean('_testing');
    const mode = getIonMode(this);
    return (h(Host, { role: "progressbar", "aria-valuenow": type === 'determinate' ? value : null, "aria-valuemin": "0", "aria-valuemax": "1", class: generateMedColor(dsColor, {
        [mode]: true,
        'med-progress-bar': true,
        [`progress-bar-${type}`]: true,
        'progress-paused': paused,
        'progress-bar-reversed': document.dir === 'rtl' ? !reversed : reversed,
        'in-med-header': hostContext('med-header', this.el),
      }) }, type === 'indeterminate'
      ? renderIndeterminate()
      : renderProgress(value, buffer)));
  }
  static get is() { return "ion-progress-bar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "ios": ["progress-bar.med.scss"],
      "md": ["progress-bar.med.scss"]
    };
  }
  static get styleUrls() {
    return {
      "ios": ["progress-bar.med.css"],
      "md": ["progress-bar.med.css"]
    };
  }
  static get properties() {
    return {
      "dsColor": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "MedColor",
          "resolved": "string | undefined",
          "references": {
            "MedColor": {
              "location": "import",
              "path": "../../@templarios/types/color.type"
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
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'determinate' | 'indeterminate'",
          "resolved": "\"determinate\" | \"indeterminate\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The state of the progress bar, based on if the time the process takes is known or not.\r\nDefault options are: `\"determinate\"` (no animation), `\"indeterminate\"` (animate from left to right)."
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'determinate'"
      },
      "reversed": {
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
          "text": "If true, reverse the progress bar direction."
        },
        "attribute": "reversed",
        "reflect": false,
        "defaultValue": "false"
      },
      "value": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The value determines how much of the active bar should display when the\r\n`type` is `\"determinate\"`.\r\nThe value should be between [0, 1]."
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "0"
      },
      "buffer": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If the buffer and value are smaller than 1, the buffer circles will show.\r\nThe buffer should be between [0, 1]."
        },
        "attribute": "buffer",
        "reflect": false,
        "defaultValue": "1"
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
          "text": "The color to use from your application's color palette.\r\nDefault options are: `\"primary\"`, `\"secondary\"`, `\"tertiary\"`, `\"success\"`, `\"warning\"`, `\"danger\"`, `\"light\"`, `\"medium\"`, and `\"dark\"`.\r\nFor more information on colors, see [theming](/docs/theming/basics)."
        },
        "attribute": "color",
        "reflect": false
      }
    };
  }
  static get elementRef() { return "el"; }
}
const renderIndeterminate = () => {
  return (h("div", { part: "track", class: "progress-buffer-bar" }, h("div", { class: "indeterminate-bar-primary" }, h("span", { part: "progress", class: "progress-indeterminate" })), h("div", { class: "indeterminate-bar-secondary" }, h("span", { part: "progress", class: "progress-indeterminate" }))));
};
const renderProgress = (value, buffer) => {
  const finalValue = value !== 0 ? (value * 100) : 1;
  const unit = value !== 0 ? '%' : 'px';
  const finalBuffer = clamp(0, buffer, 1);
  return [
    h("div", { class: "progress-container" }, h("div", { part: "progress", class: `progress ${finalValue === 100 ? 'progress--correct' : ''}`, style: { width: `${finalValue}${unit}` } })),
    /**
     * Buffer circles with two container to move
     * the circles behind the buffer progress
     * with respecting the animation.
     * When finalBuffer === 1, we use display: none
     * instead of removing the element to avoid flickering.
     */
    h("div", { class: { 'buffer-circles-container': true, 'ion-hide': finalBuffer === 1 }, style: { transform: `translateX(${finalBuffer * 100}%)` } }, h("div", { class: "buffer-circles-container", style: { transform: `translateX(-${finalBuffer * 100}%)` } }, h("div", { part: "stream", class: "buffer-circles" }))),
    h("div", { part: "track", class: "progress-buffer-bar", style: { transform: `translateX(${finalBuffer})` } }),
  ];
};
