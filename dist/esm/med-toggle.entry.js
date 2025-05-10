/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, i as h, H as Host, j as getElement } from './index-336c66d9.js';
import { g as generateMedColor } from './color-1d14c71a.js';

const medToggleCss = ".sc-med-toggle-h{--background:hsl(var(--med-color-neutral-2));--color:hsl(var(--med-color-neutral-10));--padding:24px;--border-radius:0;--initial-max-height:20px}.sc-med-toggle-h{background:var(--background);color:var(--color);padding:var(--padding);border-radius:var(--border-radius);width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;cursor:pointer}.sc-med-toggle-h .med-toggle__content.sc-med-toggle{max-height:var(--initial-max-height);overflow:hidden;-webkit-transition:all 0.3s;transition:all 0.3s}.sc-med-toggle-h .med-toggle__bottom.sc-med-toggle{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}.sc-med-toggle-h .med-toggle__icon.sc-med-toggle{-ms-flex-item-align:center;align-self:center;margin-top:8px;font-size:24px;stroke:var(--color);-webkit-transition:0.3s -webkit-transform ease;transition:0.3s -webkit-transform ease;transition:0.3s transform ease;transition:0.3s transform ease, 0.3s -webkit-transform ease}.med-toggle--collapsed.sc-med-toggle-h .med-toggle__icon.sc-med-toggle{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.med-toggle--icon-click.sc-med-toggle-h{cursor:unset}.med-toggle--icon-click.sc-med-toggle-h .med-toggle__bottom.sc-med-toggle{cursor:pointer}.med-color.sc-med-toggle-h{--color:fuck!;--background:hsl(var(--med-color-1))}.med-color-neutral.sc-med-toggle-h{--color:hsl(var(--med-color-neutral-contrast));--background:hsl(var(--med-color-neutral))}.med-color-feedback.sc-med-toggle-h{--color:hsl(var(--med-color-feedback-contrast));--background:hsl(var(--med-color-feedback))}";

const MedToggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dsColor = undefined;
    this.collapsed = true;
    this.iconClick = false;
  }
  componentDidLoad() {
    this.element = this.host.querySelector('.med-toggle__content');
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
  onClickComponent() {
    if (!this.iconClick) {
      this.collapsed = !this.collapsed;
    }
  }
  onClickIcon() {
    if (this.iconClick) {
      this.collapsed = !this.collapsed;
    }
  }
  render() {
    const { collapsed, dsColor, iconClick } = this;
    return (h(Host, { class: generateMedColor(dsColor, {
        'med-toggle': true,
        'med-toggle--collapsed': collapsed,
        'med-toggle--icon-click': iconClick
      }), onClick: () => { this.onClickComponent(); } }, h("div", { class: "med-toggle__content" }, h("slot", null)), h("div", { class: "med-toggle__bottom", onClick: () => { this.onClickIcon(); } }, h("ion-icon", { class: "med-icon med-toggle__icon", name: "med-cima" }))));
  }
  get host() { return getElement(this); }
  static get watchers() { return {
    "collapsed": ["toggle"]
  }; }
};
MedToggle.style = medToggleCss;

export { MedToggle as med_toggle };
