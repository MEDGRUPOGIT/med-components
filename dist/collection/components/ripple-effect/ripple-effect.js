/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h, readTask, writeTask } from '@stencil/core';
import { getIonMode } from '../../global/ionic-global';
export class RippleEffect {
  constructor() {
    this.type = 'bounded';
  }
  /**
   * Adds the ripple effect to the parent element.
   *
   * @param x The horizontal coordinate of where the ripple should start.
   * @param y The vertical coordinate of where the ripple should start.
   */
  async addRipple(x, y) {
    return new Promise(resolve => {
      readTask(() => {
        const rect = this.el.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const hypotenuse = Math.sqrt(width * width + height * height);
        const maxDim = Math.max(height, width);
        const maxRadius = this.unbounded ? maxDim : hypotenuse + PADDING;
        const initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
        const finalScale = maxRadius / initialSize;
        let posX = x - rect.left;
        let posY = y - rect.top;
        if (this.unbounded) {
          posX = width * 0.5;
          posY = height * 0.5;
        }
        const styleX = posX - initialSize * 0.5;
        const styleY = posY - initialSize * 0.5;
        const moveX = width * 0.5 - posX;
        const moveY = height * 0.5 - posY;
        writeTask(() => {
          const div = document.createElement('div');
          div.classList.add('ripple-effect');
          const style = div.style;
          style.top = styleY + 'px';
          style.left = styleX + 'px';
          style.width = style.height = initialSize + 'px';
          style.setProperty('--final-scale', `${finalScale}`);
          style.setProperty('--translate-end', `${moveX}px, ${moveY}px`);
          const container = this.el.shadowRoot || this.el;
          container.appendChild(div);
          setTimeout(() => {
            resolve(() => {
              removeRipple(div);
            });
          }, 225 + 100);
        });
      });
    });
  }
  get unbounded() {
    return this.type === 'unbounded';
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { role: "presentation", class: {
        [mode]: true,
        'unbounded': this.unbounded
      } }));
  }
  static get is() { return "ion-ripple-effect"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["./ripple-effect.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ripple-effect.css"]
    };
  }
  static get properties() {
    return {
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'bounded' | 'unbounded'",
          "resolved": "\"bounded\" | \"unbounded\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Sets the type of ripple-effect:\r\n\r\n- `bounded`: the ripple effect expands from the user's click position\r\n- `unbounded`: the ripple effect expands from the center of the button and overflows the container.\r\n\r\nNOTE: Surfaces for bounded ripples should have the overflow property set to hidden,\r\nwhile surfaces for unbounded ripples should have it set to visible."
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'bounded'"
      }
    };
  }
  static get methods() {
    return {
      "addRipple": {
        "complexType": {
          "signature": "(x: number, y: number) => Promise<() => void>",
          "parameters": [{
              "tags": [{
                  "name": "param",
                  "text": "x The horizontal coordinate of where the ripple should start."
                }],
              "text": "The horizontal coordinate of where the ripple should start."
            }, {
              "tags": [{
                  "name": "param",
                  "text": "y The vertical coordinate of where the ripple should start."
                }],
              "text": "The vertical coordinate of where the ripple should start."
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<() => void>"
        },
        "docs": {
          "text": "Adds the ripple effect to the parent element.",
          "tags": [{
              "name": "param",
              "text": "x The horizontal coordinate of where the ripple should start."
            }, {
              "name": "param",
              "text": "y The vertical coordinate of where the ripple should start."
            }]
        }
      }
    };
  }
  static get elementRef() { return "el"; }
}
const removeRipple = (ripple) => {
  ripple.classList.add('fade-out');
  setTimeout(() => {
    ripple.remove();
  }, 200);
};
const PADDING = 10;
const INITIAL_ORIGIN_SCALE = 0.5;
