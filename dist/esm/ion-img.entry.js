/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, f as createEvent, i as h, H as Host, j as getElement } from './index-336c66d9.js';
import { g as getIonMode } from './ionic-global-908d8380.js';
import './platform-a3776365.js';

const imgCss = ":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}";

const Img = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionImgWillLoad = createEvent(this, "ionImgWillLoad", 7);
    this.ionImgDidLoad = createEvent(this, "ionImgDidLoad", 7);
    this.ionError = createEvent(this, "ionError", 7);
    this.onLoad = () => {
      this.ionImgDidLoad.emit();
    };
    this.onError = () => {
      this.ionError.emit();
    };
    this.loadSrc = undefined;
    this.loadError = undefined;
    this.alt = undefined;
    this.src = undefined;
  }
  srcChanged() {
    this.addIO();
  }
  componentDidLoad() {
    this.addIO();
  }
  addIO() {
    if (this.src === undefined) {
      return;
    }
    if (typeof window !== 'undefined' &&
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'isIntersecting' in window.IntersectionObserverEntry.prototype) {
      this.removeIO();
      this.io = new IntersectionObserver(data => {
        // because there will only ever be one instance
        // of the element we are observing
        // we can just use data[0]
        if (data[0].isIntersecting) {
          this.load();
          this.removeIO();
        }
      });
      this.io.observe(this.el);
    }
    else {
      // fall back to setTimeout for Safari and IE
      setTimeout(() => this.load(), 200);
    }
  }
  load() {
    this.loadError = this.onError;
    this.loadSrc = this.src;
    this.ionImgWillLoad.emit();
  }
  removeIO() {
    if (this.io) {
      this.io.disconnect();
      this.io = undefined;
    }
  }
  render() {
    return (h(Host, { class: getIonMode(this) }, h("img", { decoding: "async", src: this.loadSrc, alt: this.alt, onLoad: this.onLoad, onError: this.loadError, part: "image" })));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "src": ["srcChanged"]
  }; }
};
Img.style = imgCss;

export { Img as ion_img };
