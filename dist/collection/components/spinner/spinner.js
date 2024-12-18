/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from '@stencil/core';
import { config } from '../../global/config';
import { getIonMode } from '../../global/ionic-global';
import { createColorClasses } from '../../utils/theme';
import { SPINNERS } from './spinner-configs';
export class Spinner {
  constructor() {
    this.color = undefined;
    this.duration = undefined;
    this.name = undefined;
    this.paused = false;
  }
  getName() {
    const spinnerName = this.name || config.get('spinner');
    const mode = getIonMode(this);
    if (spinnerName) {
      return spinnerName;
    }
    return (mode === 'ios') ? 'lines' : 'circular';
  }
  render() {
    const self = this;
    const mode = getIonMode(self);
    const spinnerName = self.getName();
    const spinner = SPINNERS[spinnerName] || SPINNERS['lines'];
    const duration = (typeof self.duration === 'number' && self.duration > 10 ? self.duration : spinner.dur);
    const svgs = [];
    if (spinner.circles !== undefined) {
      for (let i = 0; i < spinner.circles; i++) {
        svgs.push(buildCircle(spinner, duration, i, spinner.circles));
      }
    }
    else if (spinner.lines !== undefined) {
      for (let i = 0; i < spinner.lines; i++) {
        svgs.push(buildLine(spinner, duration, i, spinner.lines));
      }
    }
    return (h(Host, { class: createColorClasses(self.color, {
        [mode]: true,
        [`spinner-${spinnerName}`]: true,
        'spinner-paused': !!self.paused || config.getBoolean('_testing')
      }), role: "progressbar", style: spinner.elmDuration ? { animationDuration: duration + 'ms' } : {} }, svgs));
  }
  static get is() { return "ion-spinner"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["spinner.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["spinner.css"]
    };
  }
  static get properties() {
    return {
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
      },
      "duration": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Duration of the spinner animation in milliseconds. The default varies based on the spinner."
        },
        "attribute": "duration",
        "reflect": false
      },
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "SpinnerTypes",
          "resolved": "\"bubbles\" | \"circles\" | \"circular\" | \"crescent\" | \"dots\" | \"lines\" | \"lines-small\" | undefined",
          "references": {
            "SpinnerTypes": {
              "location": "import",
              "path": "../../interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The name of the SVG spinner to use. If a name is not provided, the platform's default\r\nspinner will be used."
        },
        "attribute": "name",
        "reflect": false
      },
      "paused": {
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
          "text": "If `true`, the spinner's animation will be paused."
        },
        "attribute": "paused",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
const buildCircle = (spinner, duration, index, total) => {
  const data = spinner.fn(duration, index, total);
  data.style['animation-duration'] = duration + 'ms';
  return (h("svg", { viewBox: data.viewBox || '0 0 64 64', style: data.style }, h("circle", { transform: data.transform || 'translate(32,32)', cx: data.cx, cy: data.cy, r: data.r, style: spinner.elmDuration ? { animationDuration: duration + 'ms' } : {} })));
};
const buildLine = (spinner, duration, index, total) => {
  const data = spinner.fn(duration, index, total);
  data.style['animation-duration'] = duration + 'ms';
  return (h("svg", { viewBox: data.viewBox || '0 0 64 64', style: data.style }, h("line", { transform: "translate(32,32)", y1: data.y1, y2: data.y2 })));
};
