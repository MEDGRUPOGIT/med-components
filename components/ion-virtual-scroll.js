import { readTask, writeTask, forceUpdate, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { c as componentOnReady } from './helpers.js';

const CELL_TYPE_ITEM = 'item';
const CELL_TYPE_HEADER = 'header';
const CELL_TYPE_FOOTER = 'footer';
const NODE_CHANGE_NONE = 0;
const NODE_CHANGE_POSITION = 1;
const NODE_CHANGE_CELL = 2;

const MIN_READS = 2;
const updateVDom = (dom, heightIndex, cells, range) => {
  // reset dom
  for (const node of dom) {
    node.change = NODE_CHANGE_NONE;
    node.d = true;
  }
  // try to match into exisiting dom
  const toMutate = [];
  const end = range.offset + range.length;
  for (let i = range.offset; i < end; i++) {
    const cell = cells[i];
    const node = dom.find(n => n.d && n.cell === cell);
    if (node) {
      const top = heightIndex[i];
      if (top !== node.top) {
        node.top = top;
        node.change = NODE_CHANGE_POSITION;
      }
      node.d = false;
    }
    else {
      toMutate.push(cell);
    }
  }
  // needs to append
  const pool = dom.filter(n => n.d);
  for (const cell of toMutate) {
    const node = pool.find(n => n.d && n.cell.type === cell.type);
    const index = cell.i;
    if (node) {
      node.d = false;
      node.change = NODE_CHANGE_CELL;
      node.cell = cell;
      node.top = heightIndex[index];
    }
    else {
      dom.push({
        d: false,
        cell,
        visible: true,
        change: NODE_CHANGE_CELL,
        top: heightIndex[index],
      });
    }
  }
  dom
    .filter(n => n.d && n.top !== -9999)
    .forEach(n => {
    n.change = NODE_CHANGE_POSITION;
    n.top = -9999;
  });
};
const doRender = (el, nodeRender, dom, updateCellHeight) => {
  const children = Array.from(el.children).filter(n => n.tagName !== 'TEMPLATE');
  const childrenNu = children.length;
  let child;
  for (let i = 0; i < dom.length; i++) {
    const node = dom[i];
    const cell = node.cell;
    // the cell change, the content must be updated
    if (node.change === NODE_CHANGE_CELL) {
      if (i < childrenNu) {
        child = children[i];
        nodeRender(child, cell, i);
      }
      else {
        const newChild = createNode(el, cell.type);
        child = nodeRender(newChild, cell, i) || newChild;
        child.classList.add('virtual-item');
        el.appendChild(child);
      }
      child['$ionCell'] = cell;
    }
    else {
      child = children[i];
    }
    // only update position when it changes
    if (node.change !== NODE_CHANGE_NONE) {
      child.style.transform = `translate3d(0,${node.top}px,0)`;
    }
    // update visibility
    const visible = cell.visible;
    if (node.visible !== visible) {
      if (visible) {
        child.classList.remove('virtual-loading');
      }
      else {
        child.classList.add('virtual-loading');
      }
      node.visible = visible;
    }
    // dynamic height
    if (cell.reads > 0) {
      updateCellHeight(cell, child);
      cell.reads--;
    }
  }
};
const createNode = (el, type) => {
  const template = getTemplate(el, type);
  if (template && el.ownerDocument) {
    return el.ownerDocument.importNode(template.content, true).children[0];
  }
  return null;
};
const getTemplate = (el, type) => {
  switch (type) {
    case CELL_TYPE_ITEM: return el.querySelector('template:not([name])');
    case CELL_TYPE_HEADER: return el.querySelector('template[name=header]');
    case CELL_TYPE_FOOTER: return el.querySelector('template[name=footer]');
  }
};
const getViewport = (scrollTop, vierportHeight, margin) => {
  return {
    top: Math.max(scrollTop - margin, 0),
    bottom: scrollTop + vierportHeight + margin
  };
};
const getRange = (heightIndex, viewport, buffer) => {
  const topPos = viewport.top;
  const bottomPos = viewport.bottom;
  // find top index
  let i = 0;
  for (; i < heightIndex.length; i++) {
    if (heightIndex[i] > topPos) {
      break;
    }
  }
  const offset = Math.max(i - buffer - 1, 0);
  // find bottom index
  for (; i < heightIndex.length; i++) {
    if (heightIndex[i] >= bottomPos) {
      break;
    }
  }
  const end = Math.min(i + buffer, heightIndex.length);
  const length = end - offset;
  return { offset, length };
};
const getShouldUpdate = (dirtyIndex, currentRange, range) => {
  const end = range.offset + range.length;
  return (dirtyIndex <= end ||
    currentRange.offset !== range.offset ||
    currentRange.length !== range.length);
};
const findCellIndex = (cells, index) => {
  const max = cells.length > 0 ? cells[cells.length - 1].index : 0;
  if (index === 0) {
    return 0;
  }
  else if (index === max + 1) {
    return cells.length;
  }
  else {
    return cells.findIndex(c => c.index === index);
  }
};
const inplaceUpdate = (dst, src, offset) => {
  if (offset === 0 && src.length >= dst.length) {
    return src;
  }
  for (let i = 0; i < src.length; i++) {
    dst[i + offset] = src[i];
  }
  return dst;
};
const calcCells = (items, itemHeight, headerHeight, footerHeight, headerFn, footerFn, approxHeaderHeight, approxFooterHeight, approxItemHeight, j, offset, len) => {
  const cells = [];
  const end = len + offset;
  for (let i = offset; i < end; i++) {
    const item = items[i];
    if (headerFn) {
      const value = headerFn(item, i, items);
      if (value != null) {
        cells.push({
          i: j++,
          type: CELL_TYPE_HEADER,
          value,
          index: i,
          height: headerHeight ? headerHeight(value, i) : approxHeaderHeight,
          reads: headerHeight ? 0 : MIN_READS,
          visible: !!headerHeight,
        });
      }
    }
    cells.push({
      i: j++,
      type: CELL_TYPE_ITEM,
      value: item,
      index: i,
      height: itemHeight ? itemHeight(item, i) : approxItemHeight,
      reads: itemHeight ? 0 : MIN_READS,
      visible: !!itemHeight,
    });
    if (footerFn) {
      const value = footerFn(item, i, items);
      if (value != null) {
        cells.push({
          i: j++,
          type: CELL_TYPE_FOOTER,
          value,
          index: i,
          height: footerHeight ? footerHeight(value, i) : approxFooterHeight,
          reads: footerHeight ? 0 : MIN_READS,
          visible: !!footerHeight,
        });
      }
    }
  }
  return cells;
};
const calcHeightIndex = (buf, cells, index) => {
  let acum = buf[index];
  for (let i = index; i < buf.length; i++) {
    buf[i] = acum;
    acum += cells[i].height;
  }
  return acum;
};
const resizeBuffer = (buf, len) => {
  if (!buf) {
    return new Uint32Array(len);
  }
  if (buf.length === len) {
    return buf;
  }
  else if (len > buf.length) {
    const newBuf = new Uint32Array(len);
    newBuf.set(buf);
    return newBuf;
  }
  else {
    return buf.subarray(0, len);
  }
};
const positionForIndex = (index, cells, heightIndex) => {
  const cell = cells.find(c => c.type === CELL_TYPE_ITEM && c.index === index);
  if (cell) {
    return heightIndex[cell.i];
  }
  return -1;
};

const virtualScrollCss = ":root{--med-color-brand-primary-darkest:#074953;--med-color-brand-primary-darkest-rgb:7, 73, 83;--med-color-brand-primary-dark:#137585;--med-color-brand-primary-dark-rgb:19, 117, 133;--med-color-brand-primary-medium:#3aa8b9;--med-color-brand-primary-medium-rgb:58, 168, 185;--med-color-brand-primary-light:#73d6e5;--med-color-brand-primary-light-rgb:115, 214, 229;--med-color-brand-primary-lightest:#b0ecf5;--med-color-brand-primary-lightest-rgb:176, 236, 245;--med-color-brand-primary-gradient:linear-gradient(to right, #3aa8b9, #137585);--med-color-aula-darkest:#075344;--med-color-aula-darkest-rgb:7, 83, 68;--med-color-aula-dark:#13856e;--med-color-aula-dark-rgb:19, 133, 110;--med-color-aula-medium:#3ab89f;--med-color-aula-medium-rgb:58, 184, 159;--med-color-aula-light:#73e5cf;--med-color-aula-light-rgb:115, 229, 207;--med-color-aula-lightest:#b0f5e7;--med-color-aula-lightest-rgb:176, 245, 231;--med-color-aula-gradient:linear-gradient(to right, #3ab89f, #13856e);--med-color-material-darkest:#552607;--med-color-material-darkest-rgb:85, 38, 7;--med-color-material-dark:#854013;--med-color-material-dark-rgb:133, 64, 19;--med-color-material-medium:#b86d3b;--med-color-material-medium-rgb:184, 109, 59;--med-color-material-light:#e5a173;--med-color-material-light-rgb:229, 161, 115;--med-color-material-lightest:#f5ccb0;--med-color-material-lightest-rgb:245, 204, 176;--med-color-material-gradient:linear-gradient(to right, #b86d3b, #854013);--med-color-questoes-darkest:#073953;--med-color-questoes-darkest-rgb:7, 57, 83;--med-color-questoes-dark:#135f85;--med-color-questoes-dark-rgb:19, 95, 133;--med-color-questoes-medium:#3a8eb8;--med-color-questoes-medium-rgb:58, 142, 184;--med-color-questoes-light:#73bfe5;--med-color-questoes-light-rgb:115, 191, 229;--med-color-questoes-lightest:#b0def5;--med-color-questoes-lightest-rgb:176, 222, 245;--med-color-questoes-gradient:linear-gradient(to right, #3a8eb8, #135f85);--med-color-revalida-darkest:#53071e;--med-color-revalida-darkest-rgb:83, 7, 30;--med-color-revalida-dark:#851335;--med-color-revalida-dark-rgb:133, 19, 53;--med-color-revalida-medium:#b83a60;--med-color-revalida-medium-rgb:184, 58, 96;--med-color-revalida-light:#e57395;--med-color-revalida-light-rgb:229, 115, 149;--med-color-revalida-lightest:#f5b0c5;--med-color-revalida-lightest-rgb:245, 176, 197;--med-color-revalida-gradient:linear-gradient(to right, #b83a60, #851335);--med-color-provaschecklist-darkest:#2b0755;--med-color-provaschecklist-darkest-rgb:43, 7, 85;--med-color-provaschecklist-dark:#481385;--med-color-provaschecklist-dark-rgb:72, 19, 133;--med-color-provaschecklist-medium:#753bb8;--med-color-provaschecklist-medium-rgb:117, 59, 184;--med-color-provaschecklist-light:#a873e5;--med-color-provaschecklist-light-rgb:168, 115, 229;--med-color-provaschecklist-lightest:#d1b2f5;--med-color-provaschecklist-lightest-rgb:209, 178, 245;--med-color-provaschecklist-gradient:linear-gradient(to right, #753bb8, #481385);--med-color-neutral-dark-prime:#141414;--med-color-neutral-dark-prime-rgb:20, 20, 20;--med-color-neutral-dark-40:#292929;--med-color-neutral-dark-40-rgb:41, 41, 41;--med-color-neutral-dark-30:#474747;--med-color-neutral-dark-30-rgb:71, 71, 71;--med-color-neutral-dark-20:#5c5c5c;--med-color-neutral-dark-20-rgb:92, 92, 92;--med-color-neutral-dark-10:#7a7a7a;--med-color-neutral-dark-10-rgb:122, 122, 122;--med-color-neutral-dark-gradient:linear-gradient(to right, #fafafa, #141414);--med-color-neutral-light-prime:#fafafa;--med-color-neutral-light-prime-rgb:250, 250, 250;--med-color-neutral-light-40:#ebebeb;--med-color-neutral-light-40-rgb:235, 235, 235;--med-color-neutral-light-30:#d6d6d6;--med-color-neutral-light-30-rgb:214, 214, 214;--med-color-neutral-light-20:#c2c2c2;--med-color-neutral-light-20-rgb:194, 194, 194;--med-color-neutral-light-10:#adadad;--med-color-neutral-light-10-rgb:173, 173, 173;--med-color-neutral-light-gradient:linear-gradient(to right, #141414, #fafafa);--med-color-feedback-warning-darkest:#504606;--med-color-feedback-warning-darkest-rgb:80, 70, 6;--med-color-feedback-warning-dark:#857513;--med-color-feedback-warning-dark-rgb:133, 117, 19;--med-color-feedback-warning-medium:#b8a73b;--med-color-feedback-warning-medium-rgb:184, 167, 59;--med-color-feedback-warning-light:#e5d673;--med-color-feedback-warning-light-rgb:229, 214, 115;--med-color-feedback-warning-lightest:#f5ecb0;--med-color-feedback-warning-lightest-rgb:245, 236, 176;--med-color-feedback-warning-gradient:linear-gradient(to right, #b8a73b, #857513);--med-color-feedback-error-darkest:#520c07;--med-color-feedback-error-darkest-rgb:82, 12, 7;--med-color-feedback-error-dark:#851a13;--med-color-feedback-error-dark-rgb:133, 26, 19;--med-color-feedback-error-medium:#b8433b;--med-color-feedback-error-medium-rgb:184, 67, 59;--med-color-feedback-error-light:#e57a73;--med-color-feedback-error-light-rgb:229, 122, 115;--med-color-feedback-error-lightest:#f5b5b0;--med-color-feedback-error-lightest-rgb:245, 181, 176;--med-color-feedback-error-gradient:linear-gradient(to right, #b8433b, #851a13);--med-color-feedback-success-darkest:#065010;--med-color-feedback-success-darkest-rgb:6, 80, 16;--med-color-feedback-success-dark:#138522;--med-color-feedback-success-dark-rgb:19, 133, 34;--med-color-feedback-success-medium:#3bb84b;--med-color-feedback-success-medium-rgb:59, 184, 75;--med-color-feedback-success-light:#73e582;--med-color-feedback-success-light-rgb:115, 229, 130;--med-color-feedback-success-lightest:#b0f5b9;--med-color-feedback-success-lightest-rgb:176, 245, 185;--med-color-feedback-success-gradient:linear-gradient(to right, #3bb84b, #138522)}:root{--med-font-family-brand:fsemeric;--med-font-family-base:fsemeric;--med-font-size-nano:10px;--med-font-size-xxxs:12px;--med-font-size-xxs:14px;--med-font-size-xs:16px;--med-font-size-sm:20px;--med-font-size-md:24px;--med-font-size-lg:32px;--med-font-size-xl:40px;--med-font-size-xxl:48px;--med-font-size-xxxl:64px;--med-font-size-huge:96px;--med-font-weight-thin:250;--med-font-weight-light:300;--med-font-weight-regular:400;--med-font-weight-medium:500;--med-font-weight-semibold:600;--med-font-weight-bold:700;--med-font-weight-extrabold:800;--med-font-weight-heavy:900;--med-line-height-compressed:100%;--med-line-height-double:100%}:root{--med-spacing-inset-nano:4px;--med-spacing-inset-xs:8px;--med-spacing-inset-sm:16px;--med-spacing-inset-base:24px;--med-spacing-inset-md:32px;--med-spacing-inset-md:32px;--med-spacing-inset-md:32px;--med-spacing-inset-xxl:64px;--med-spacing-squish-nano:4px 8px;--med-spacing-squish-xs:8px 16px;--med-spacing-squish-sm:8px 24px;--med-spacing-squish-base:8px 32px;--med-spacing-squish-md:16px 24px;--med-spacing-squish-lg:16px 32px;--med-spacing-squish-xl:24px 32px;--med-spacing-squish-xxl:32px 40px;--med-spacing-stretch-nano:8px 4px;--med-spacing-stretch-xs:16px 8px;--med-spacing-stretch-sm:24px 8px;--med-spacing-stretch-base:32px 8px;--med-spacing-stretch-md:24px 16px;--med-spacing-stretch-lg:32px 16px;--med-spacing-stretch-xl:32px 24px;--med-spacing-stretch-xxl:40px 32px;--med-spacing-inline-quark:2px;--med-spacing-inline-nano:4px;--med-spacing-inline-xxxs:8px;--med-spacing-inline-base:16px;--med-spacing-inline-xxs:24px;--med-spacing-inline-xs:32px;--med-spacing-inline-sm:40px;--med-spacing-inline-md:48px;--med-spacing-inline-lg:56px;--med-spacing-inline-xl:64px;--med-spacing-inline-xxl:72px;--med-spacing-inline-xxxl:80px;--med-spacing-inline-huge:120px;--med-spacing-inline-ultra:160px;--med-spacing-stack-quark:2px;--med-spacing-stack-nano:4px;--med-spacing-stack-xxxs:8px;--med-spacing-stack-base:16px;--med-spacing-stack-xxs:24px;--med-spacing-stack-xs:32px;--med-spacing-stack-sm:40px;--med-spacing-stack-md:48px;--med-spacing-stack-lg:56px;--med-spacing-stack-xl:64px;--med-spacing-stack-xxl:72px;--med-spacing-stack-xxxl:80px;--med-spacing-stack-huge:120px;--med-spacing-stack-ultra:160px}:root{--med-border-radius-none:0;--med-border-radius-quark:2px;--med-border-radius-nano:4px;--med-border-radius-sm:8px;--med-border-radius-md:16px;--med-border-radius-lg:24px;--med-border-radius-pill:31.25em;--med-border-radius-full:50%;--med-border-radius-speech-left-down:8px 8px 8px 0;--med-border-radius-speech-right-down:8px 8px 0 8px;--med-border-radius-speech-right-up:8px 0 8px 0px;--med-border-radius-speech-left-up:0 8px 8px 0px;--med-border-radius-table-down-sm:0 0 8px 8px;--med-border-radius-table-up-sm:8px 8px 0 0;--med-border-radius-table-down-md:16px 16px 0 0;--med-border-radius-table-up-md:0 0 16px 16px;--med-border-width-none:0;--med-border-width-quark:0.25px;--med-border-width-nano:0.5px;--med-border-width-hairline:1px;--med-border-width-thin:2px;--med-border-width-thick:4px;--med-border-width-bold:8px;--med-border-width-heavy:16px;--med-opacity-level-semiopaque:0.8;--med-opacity-level-intense:0.64;--med-opacity-level-half:0.5;--med-opacity-level-medium:0.32;--med-opacity-level-light:0.16;--med-opacity-level-semitransparent:0.08;--med-shadow-level-0:none;--med-shadow-level-1:0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 3px rgba(0, 0, 0, 0.2);--med-shadow-level-2:0 2px 4px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-3:0 3px 3px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-4:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-5:0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-6:0 8px 10px rgba(0, 0, 0, 0.14), 0 3px 14px rgba(0, 0, 0, 0.12), 0 4px 5px rgba(0, 0, 0, 0.2);--med-shadow-level-7:0 9px 12px rgba(0, 0, 0, 0.14), 0 3px 16px rgba(0, 0, 0, 0.12), 0 5px 6px rgba(0, 0, 0, 0.2);--med-shadow-level-8:0 12px 17px rgba(0, 0, 0, 0.14), 0 5px 22px rgba(0, 0, 0, 0.12), 0 7px 8px rgba(0, 0, 0, 0.2);--med-shadow-level-9:0 16px 24px rgba(0, 0, 0, 0.14), 0 6px 30px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.2);--med-shadow-level-10:0 24px 38px rgba(0, 0, 0, 0.14), 0 9px 46px rgba(0, 0, 0, 0.12), 0 11px 15px rgba(0, 0, 0, 0.2)}ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}";

const VirtualScroll = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.range = { offset: 0, length: 0 };
    this.viewportHeight = 0;
    this.cells = [];
    this.virtualDom = [];
    this.isEnabled = false;
    this.viewportOffset = 0;
    this.currentScrollTop = 0;
    this.indexDirty = 0;
    this.lastItemLen = 0;
    this.totalHeight = 0;
    /**
     * It is important to provide this
     * if virtual item height will be significantly larger than the default
     * The approximate height of each virtual item template's cell.
     * This dimension is used to help determine how many cells should
     * be created when initialized, and to help calculate the height of
     * the scrollable area. This height value can only use `px` units.
     * Note that the actual rendered size of each cell comes from the
     * app's CSS, whereas this approximation is used to help calculate
     * initial dimensions before the item has been rendered.
     */
    this.approxItemHeight = 45;
    /**
     * The approximate height of each header template's cell.
     * This dimension is used to help determine how many cells should
     * be created when initialized, and to help calculate the height of
     * the scrollable area. This height value can only use `px` units.
     * Note that the actual rendered size of each cell comes from the
     * app's CSS, whereas this approximation is used to help calculate
     * initial dimensions before the item has been rendered.
     */
    this.approxHeaderHeight = 30;
    /**
     * The approximate width of each footer template's cell.
     * This dimension is used to help determine how many cells should
     * be created when initialized, and to help calculate the height of
     * the scrollable area. This height value can only use `px` units.
     * Note that the actual rendered size of each cell comes from the
     * app's CSS, whereas this approximation is used to help calculate
     * initial dimensions before the item has been rendered.
     */
    this.approxFooterHeight = 30;
    this.onScroll = () => {
      this.updateVirtualScroll();
    };
  }
  itemsChanged() {
    this.calcCells();
    this.updateVirtualScroll();
  }
  async connectedCallback() {
    const contentEl = this.el.closest('ion-content');
    if (!contentEl) {
      console.error('<ion-virtual-scroll> must be used inside an <ion-content>');
      return;
    }
    this.scrollEl = await contentEl.getScrollElement();
    this.contentEl = contentEl;
    this.calcCells();
    this.updateState();
  }
  componentDidUpdate() {
    this.updateState();
  }
  disconnectedCallback() {
    this.scrollEl = undefined;
  }
  onResize() {
    this.calcCells();
    this.updateVirtualScroll();
  }
  /**
   * Returns the position of the virtual item at the given index.
   */
  positionForItem(index) {
    return Promise.resolve(positionForIndex(index, this.cells, this.getHeightIndex()));
  }
  /**
   * This method marks a subset of items as dirty, so they can be re-rendered. Items should be marked as
   * dirty any time the content or their style changes.
   *
   * The subset of items to be updated can are specifing by an offset and a length.
   */
  async checkRange(offset, len = -1) {
    // TODO: kind of hacky how we do in-place updated of the cells
    // array. this part needs a complete refactor
    if (!this.items) {
      return;
    }
    const length = (len === -1)
      ? this.items.length - offset
      : len;
    const cellIndex = findCellIndex(this.cells, offset);
    const cells = calcCells(this.items, this.itemHeight, this.headerHeight, this.footerHeight, this.headerFn, this.footerFn, this.approxHeaderHeight, this.approxFooterHeight, this.approxItemHeight, cellIndex, offset, length);
    this.cells = inplaceUpdate(this.cells, cells, cellIndex);
    this.lastItemLen = this.items.length;
    this.indexDirty = Math.max(offset - 1, 0);
    this.scheduleUpdate();
  }
  /**
   * This method marks the tail the items array as dirty, so they can be re-rendered.
   *
   * It's equivalent to calling:
   *
   * ```js
   * virtualScroll.checkRange(lastItemLen);
   * ```
   */
  async checkEnd() {
    if (this.items) {
      this.checkRange(this.lastItemLen);
    }
  }
  updateVirtualScroll() {
    // do nothing if virtual-scroll is disabled
    if (!this.isEnabled || !this.scrollEl) {
      return;
    }
    // unschedule future updates
    if (this.timerUpdate) {
      clearTimeout(this.timerUpdate);
      this.timerUpdate = undefined;
    }
    // schedule DOM operations into the stencil queue
    readTask(this.readVS.bind(this));
    writeTask(this.writeVS.bind(this));
  }
  readVS() {
    const { contentEl, scrollEl, el } = this;
    let topOffset = 0;
    let node = el;
    while (node && node !== contentEl) {
      topOffset += node.offsetTop;
      node = node.offsetParent;
    }
    this.viewportOffset = topOffset;
    if (scrollEl) {
      this.viewportHeight = scrollEl.offsetHeight;
      this.currentScrollTop = scrollEl.scrollTop;
    }
  }
  writeVS() {
    const dirtyIndex = this.indexDirty;
    // get visible viewport
    const scrollTop = this.currentScrollTop - this.viewportOffset;
    const viewport = getViewport(scrollTop, this.viewportHeight, 100);
    // compute lazily the height index
    const heightIndex = this.getHeightIndex();
    // get array bounds of visible cells base in the viewport
    const range = getRange(heightIndex, viewport, 2);
    // fast path, do nothing
    const shouldUpdate = getShouldUpdate(dirtyIndex, this.range, range);
    if (!shouldUpdate) {
      return;
    }
    this.range = range;
    // in place mutation of the virtual DOM
    updateVDom(this.virtualDom, heightIndex, this.cells, range);
    // Write DOM
    // Different code paths taken depending of the render API used
    if (this.nodeRender) {
      doRender(this.el, this.nodeRender, this.virtualDom, this.updateCellHeight.bind(this));
    }
    else if (this.domRender) {
      this.domRender(this.virtualDom);
    }
    else if (this.renderItem) {
      forceUpdate(this);
    }
  }
  updateCellHeight(cell, node) {
    const update = () => {
      if (node['$ionCell'] === cell) {
        const style = window.getComputedStyle(node);
        const height = node.offsetHeight + parseFloat(style.getPropertyValue('margin-bottom'));
        this.setCellHeight(cell, height);
      }
    };
    if (node) {
      componentOnReady(node, update);
    }
    else {
      update();
    }
  }
  setCellHeight(cell, height) {
    const index = cell.i;
    // the cell might changed since the height update was scheduled
    if (cell !== this.cells[index]) {
      return;
    }
    if (cell.height !== height || cell.visible !== true) {
      cell.visible = true;
      cell.height = height;
      this.indexDirty = Math.min(this.indexDirty, index);
      this.scheduleUpdate();
    }
  }
  scheduleUpdate() {
    clearTimeout(this.timerUpdate);
    this.timerUpdate = setTimeout(() => this.updateVirtualScroll(), 100);
  }
  updateState() {
    const shouldEnable = !!(this.scrollEl &&
      this.cells);
    if (shouldEnable !== this.isEnabled) {
      this.enableScrollEvents(shouldEnable);
      if (shouldEnable) {
        this.updateVirtualScroll();
      }
    }
  }
  calcCells() {
    if (!this.items) {
      return;
    }
    this.lastItemLen = this.items.length;
    this.cells = calcCells(this.items, this.itemHeight, this.headerHeight, this.footerHeight, this.headerFn, this.footerFn, this.approxHeaderHeight, this.approxFooterHeight, this.approxItemHeight, 0, 0, this.lastItemLen);
    this.indexDirty = 0;
  }
  getHeightIndex() {
    if (this.indexDirty !== Infinity) {
      this.calcHeightIndex(this.indexDirty);
    }
    return this.heightIndex;
  }
  calcHeightIndex(index = 0) {
    // TODO: optimize, we don't need to calculate all the cells
    this.heightIndex = resizeBuffer(this.heightIndex, this.cells.length);
    this.totalHeight = calcHeightIndex(this.heightIndex, this.cells, index);
    this.indexDirty = Infinity;
  }
  enableScrollEvents(shouldListen) {
    if (this.rmEvent) {
      this.rmEvent();
      this.rmEvent = undefined;
    }
    const scrollEl = this.scrollEl;
    if (scrollEl) {
      this.isEnabled = shouldListen;
      scrollEl.addEventListener('scroll', this.onScroll);
      this.rmEvent = () => {
        scrollEl.removeEventListener('scroll', this.onScroll);
      };
    }
  }
  renderVirtualNode(node) {
    const { type, value, index } = node.cell;
    switch (type) {
      case CELL_TYPE_ITEM: return this.renderItem(value, index);
      case CELL_TYPE_HEADER: return this.renderHeader(value, index);
      case CELL_TYPE_FOOTER: return this.renderFooter(value, index);
    }
  }
  render() {
    return (h(Host, { style: {
        height: `${this.totalHeight}px`
      } }, this.renderItem && (h(VirtualProxy, { dom: this.virtualDom }, this.virtualDom.map(node => this.renderVirtualNode(node))))));
  }
  get el() { return this; }
  static get watchers() { return {
    "itemHeight": ["itemsChanged"],
    "headerHeight": ["itemsChanged"],
    "footerHeight": ["itemsChanged"],
    "items": ["itemsChanged"]
  }; }
  static get style() { return virtualScrollCss; }
};
const VirtualProxy = ({ dom }, children, utils) => {
  return utils.map(children, (child, i) => {
    const node = dom[i];
    const vattrs = child.vattrs || {};
    let classes = vattrs.class || '';
    classes += 'virtual-item ';
    if (!node.visible) {
      classes += 'virtual-loading';
    }
    return Object.assign(Object.assign({}, child), { vattrs: Object.assign(Object.assign({}, vattrs), { class: classes, style: Object.assign(Object.assign({}, vattrs.style), { transform: `translate3d(0,${node.top}px,0)` }) }) });
  });
};

const IonVirtualScroll = /*@__PURE__*/proxyCustomElement(VirtualScroll, [0,"ion-virtual-scroll",{"approxItemHeight":[2,"approx-item-height"],"approxHeaderHeight":[2,"approx-header-height"],"approxFooterHeight":[2,"approx-footer-height"],"headerFn":[16],"footerFn":[16],"items":[16],"itemHeight":[16],"headerHeight":[16],"footerHeight":[16],"renderItem":[16],"renderHeader":[16],"renderFooter":[16],"nodeRender":[16],"domRender":[16],"totalHeight":[32]},[[9,"resize","onResize"]]]);

export { IonVirtualScroll };