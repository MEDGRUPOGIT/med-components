'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');
const color = require('./color-4ca1bfd7.js');

const medToggleCss = ":host{--background:hsl(var(--med-color-neutral-2));--color:hsl(var(--med-color-neutral-10));--padding:24px;--border-radius:0;--initial-max-height:20px}:host{background:var(--background);color:var(--color);padding:var(--padding);border-radius:var(--border-radius);width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;cursor:pointer}:host .med-toggle__content{max-height:var(--initial-max-height);overflow:hidden;-webkit-transition:all 0.3s;transition:all 0.3s}:host .med-toggle__icon{-ms-flex-item-align:center;align-self:center;margin-top:8px;font-size:24px;stroke:var(--color);-webkit-transition:0.3s -webkit-transform ease;transition:0.3s -webkit-transform ease;transition:0.3s transform ease;transition:0.3s transform ease, 0.3s -webkit-transform ease}:host(.med-toggle--collapsed) .med-toggle__icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.med-color){--color:fuck!;--background:hsl(var(--med-color-1))}:host(.med-color-neutral){--color:hsl(var(--med-color-neutral-contrast));--background:hsl(var(--med-color-neutral))}:host(.med-color-feedback){--color:hsl(var(--med-color-feedback-contrast));--background:hsl(var(--med-color-feedback))}";

const MedToggle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
   * todo
   */
    this.collapsed = true;
  }
  componentDidLoad() {
    var _a;
    this.element = (_a = this.host.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.med-toggle__content');
  }
  setHeight() {
    var _a;
    const elementHeight = (_a = this.element) === null || _a === void 0 ? void 0 : _a.scrollHeight;
    this.element.style.maxHeight = `${elementHeight}px`;
  }
  open() {
    this.setHeight();
    setTimeout(() => {
      this.element.style.maxHeight = '100%';
    }, 300);
  }
  close() {
    this.setHeight();
    setTimeout(() => {
      this.element.style.maxHeight = 'var(--initial-max-height)';
    }, 350);
  }
  toggle() {
    if (!this.collapsed) {
      this.open();
    }
    else {
      this.close();
    }
  }
  render() {
    const { collapsed, dsColor } = this;
    return (index.h(index.Host, { class: color.generateMedColor(dsColor, {
        'med-toggle': true,
        'med-toggle--collapsed': collapsed
      }), onClick: () => { this.collapsed = !this.collapsed; } }, index.h("div", { class: "med-toggle__content" }, index.h("slot", null)), index.h("ion-icon", { class: "med-icon med-toggle__icon", name: "med-cima" })));
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "collapsed": ["toggle"]
  }; }
};
MedToggle.style = medToggleCss;

exports.med_toggle = MedToggle;
