/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h, writeTask } from '@stencil/core';
import { getIonMode } from '../../global/ionic-global';
import { cloneElement, createHeaderIndex, handleContentScroll, handleToolbarIntersection, setHeaderActive, setToolbarBackgroundOpacity } from './header.utils';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
export class Header {
  constructor() {
    this.collapsibleHeaderInitialized = false;
    this.collapse = undefined;
    this.translucent = false;
  }
  async componentDidLoad() {
    await this.checkCollapsibleHeader();
  }
  async componentDidUpdate() {
    await this.checkCollapsibleHeader();
  }
  disconnectedCallback() {
    this.destroyCollapsibleHeader();
  }
  async checkCollapsibleHeader() {
    // Determine if the header can collapse
    const hasCollapse = this.collapse === 'condense';
    const canCollapse = (hasCollapse && getIonMode(this) === 'ios') ? hasCollapse : false;
    if (!canCollapse && this.collapsibleHeaderInitialized) {
      this.destroyCollapsibleHeader();
    }
    else if (canCollapse && !this.collapsibleHeaderInitialized) {
      const pageEl = this.el.closest('ion-app,ion-page,.ion-page,page-inner');
      const contentEl = (pageEl) ? pageEl.querySelector('ion-content') : null;
      // Cloned elements are always needed in iOS transition
      writeTask(() => {
        const title = cloneElement('ion-title');
        title.size = 'large';
        cloneElement('ion-back-button');
      });
      await this.setupCollapsibleHeader(contentEl, pageEl);
    }
  }
  destroyCollapsibleHeader() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.intersectionObserver = undefined;
    }
    if (this.scrollEl && this.contentScrollCallback) {
      this.scrollEl.removeEventListener('scroll', this.contentScrollCallback);
      this.contentScrollCallback = undefined;
    }
    if (this.collapsibleMainHeader) {
      this.collapsibleMainHeader.classList.remove('header-collapse-main');
      this.collapsibleMainHeader = undefined;
    }
  }
  async setupCollapsibleHeader(contentEl, pageEl) {
    if (!contentEl || !pageEl) {
      console.error('ion-header requires a content to collapse, make sure there is an ion-content.');
      return;
    }
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }
    this.scrollEl = await contentEl.getScrollElement();
    const headers = pageEl.querySelectorAll('ion-header');
    this.collapsibleMainHeader = Array.from(headers).find((header) => header.collapse !== 'condense');
    if (!this.collapsibleMainHeader) {
      return;
    }
    const mainHeaderIndex = createHeaderIndex(this.collapsibleMainHeader);
    const scrollHeaderIndex = createHeaderIndex(this.el);
    if (!mainHeaderIndex || !scrollHeaderIndex) {
      return;
    }
    setHeaderActive(mainHeaderIndex, false);
    mainHeaderIndex.toolbars.forEach(toolbar => {
      setToolbarBackgroundOpacity(toolbar, 0);
    });
    /**
     * Handle interaction between toolbar collapse and
     * showing/hiding content in the primary ion-header
     * as well as progressively showing/hiding the main header
     * border as the top-most toolbar collapses or expands.
     */
    const toolbarIntersection = (ev) => { handleToolbarIntersection(ev, mainHeaderIndex, scrollHeaderIndex, this.scrollEl); };
    this.intersectionObserver = new IntersectionObserver(toolbarIntersection, { root: contentEl, threshold: [0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] });
    this.intersectionObserver.observe(scrollHeaderIndex.toolbars[scrollHeaderIndex.toolbars.length - 1].el);
    /**
     * Handle scaling of large iOS titles and
     * showing/hiding border on last toolbar
     * in primary header
     */
    this.contentScrollCallback = () => { handleContentScroll(this.scrollEl, scrollHeaderIndex, contentEl); };
    this.scrollEl.addEventListener('scroll', this.contentScrollCallback);
    writeTask(() => {
      if (this.collapsibleMainHeader !== undefined) {
        this.collapsibleMainHeader.classList.add('header-collapse-main');
      }
    });
    this.collapsibleHeaderInitialized = true;
  }
  render() {
    const { translucent } = this;
    const mode = getIonMode(this);
    const collapse = this.collapse || 'none';
    return (h(Host, { role: "banner", class: {
        [mode]: true,
        // Used internally for styling
        [`header-${mode}`]: true,
        [`header-translucent`]: this.translucent,
        [`header-collapse-${collapse}`]: true,
        [`header-translucent-${mode}`]: this.translucent,
      } }, mode === 'ios' && translucent &&
      h("div", { class: "header-background" }), h("slot", null)));
  }
  static get is() { return "ion-header"; }
  static get originalStyleUrls() {
    return {
      "ios": ["header.ios.scss"],
      "md": ["header.md.scss"]
    };
  }
  static get styleUrls() {
    return {
      "ios": ["header.ios.css"],
      "md": ["header.md.css"]
    };
  }
  static get properties() {
    return {
      "collapse": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'condense'",
          "resolved": "\"condense\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Describes the scroll effect that will be applied to the header\r\n`condense` only applies in iOS mode.\r\n\r\nTypically used for [Collapsible Large Titles](https://ionicframework.com/docs/api/title#collapsible-large-titles)"
        },
        "attribute": "collapse",
        "reflect": false
      },
      "translucent": {
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
          "text": "If `true`, the header will be translucent.\r\nOnly applies when the mode is `\"ios\"` and the device supports\r\n[`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).\r\n\r\nNote: In order to scroll content behind the header, the `fullscreen`\r\nattribute needs to be set on the content."
        },
        "attribute": "translucent",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get elementRef() { return "el"; }
}
