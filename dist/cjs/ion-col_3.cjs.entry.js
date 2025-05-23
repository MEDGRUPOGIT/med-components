/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a17b061b.js');
const ionicGlobal = require('./ionic-global-b146ab44.js');
require('./platform-df0a78a3.js');

const SIZE_TO_MEDIA = {
  'xs': '(min-width: 0px)',
  'sm': '(min-width: 576px)',
  'md': '(min-width: 768px)',
  'lg': '(min-width: 992px)',
  'xl': '(min-width: 1200px)',
};
// Check if the window matches the media query
// at the breakpoint passed
// e.g. matchBreakpoint('sm') => true if screen width exceeds 576px
const matchBreakpoint = (breakpoint) => {
  if (breakpoint === undefined || breakpoint === '') {
    return true;
  }
  if (window.matchMedia) {
    const mediaQuery = SIZE_TO_MEDIA[breakpoint];
    return window.matchMedia(mediaQuery).matches;
  }
  return false;
};

const medColCss = ":host{padding-left:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 8px));padding-right:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 8px));padding-top:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 8px));padding-bottom:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 8px));margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-top:0 !important;padding-bottom:0 !important;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;width:100%;max-width:100%;min-height:1px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 8px));padding-inline-start:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 8px));-webkit-padding-end:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 8px));padding-inline-end:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 8px))}}@media (min-width: 576px){:host{padding-left:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 8px));padding-right:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 8px));padding-top:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 8px));padding-bottom:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 8px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 8px));padding-inline-start:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 8px));-webkit-padding-end:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 8px));padding-inline-end:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 8px))}}}@media (min-width: 768px){:host{padding-left:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 8px));padding-right:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 8px));padding-top:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 8px));padding-bottom:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 8px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 8px));padding-inline-start:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 8px));-webkit-padding-end:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 8px));padding-inline-end:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 8px))}}}@media (min-width: 992px){:host{padding-left:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 8px));padding-right:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 8px));padding-top:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 8px));padding-bottom:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 8px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 8px));padding-inline-start:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 8px));-webkit-padding-end:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 8px));padding-inline-end:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 8px))}}}@media (min-width: 1200px){:host{padding-left:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 8px));padding-right:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 8px));padding-top:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 8px));padding-bottom:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 8px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 8px));padding-inline-start:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 8px));-webkit-padding-end:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 8px));padding-inline-end:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 8px))}}}";

const win = window;
const SUPPORTS_VARS = !!(win.CSS && win.CSS.supports && win.CSS.supports('--a: 0'));
const BREAKPOINTS = ['', 'xs', 'sm', 'md', 'lg', 'xl'];
const Col = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.offset = undefined;
    this.offsetXs = undefined;
    this.offsetSm = undefined;
    this.offsetMd = undefined;
    this.offsetLg = undefined;
    this.offsetXl = undefined;
    this.pull = undefined;
    this.pullXs = undefined;
    this.pullSm = undefined;
    this.pullMd = undefined;
    this.pullLg = undefined;
    this.pullXl = undefined;
    this.push = undefined;
    this.pushXs = undefined;
    this.pushSm = undefined;
    this.pushMd = undefined;
    this.pushLg = undefined;
    this.pushXl = undefined;
    this.size = undefined;
    this.sizeXs = undefined;
    this.sizeSm = undefined;
    this.sizeMd = undefined;
    this.sizeLg = undefined;
    this.sizeXl = undefined;
  }
  onResize() {
    index.forceUpdate(this);
  }
  // Loop through all of the breakpoints to see if the media query
  // matches and grab the column value from the relevant prop if so
  getColumns(property) {
    let matched;
    for (const breakpoint of BREAKPOINTS) {
      const matches = matchBreakpoint(breakpoint);
      // Grab the value of the property, if it exists and our
      // media query matches we return the value
      const columns = this[property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];
      if (matches && columns !== undefined) {
        matched = columns;
      }
    }
    // Return the last matched columns since the breakpoints
    // increase in size and we want to return the largest match
    return matched;
  }
  calculateSize() {
    const columns = this.getColumns('size');
    // If size wasn't set for any breakpoint
    // or if the user set the size without a value
    // it means we need to stick with the default and return
    // e.g. <ion-col size-md>
    if (!columns || columns === '') {
      return;
    }
    // If the size is set to auto then don't calculate a size
    const colSize = (columns === 'auto')
      ? 'auto'
      // If CSS supports variables we should use the grid columns var
      : SUPPORTS_VARS ? `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)`
        // Convert the columns to a percentage by dividing by the total number
        // of columns (12) and then multiplying by 100
        : ((columns / 12) * 100) + '%';
    return {
      'flex': `0 0 ${colSize}`,
      'width': `${colSize}`,
      'max-width': `${colSize}`
    };
  }
  // Called by push, pull, and offset since they use the same calculations
  calculatePosition(property, modifier) {
    const columns = this.getColumns(property);
    if (!columns) {
      return;
    }
    // If the number of columns passed are greater than 0 and less than
    // 12 we can position the column, else default to auto
    const amount = SUPPORTS_VARS
      // If CSS supports variables we should use the grid columns var
      ? `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)`
      // Convert the columns to a percentage by dividing by the total number
      // of columns (12) and then multiplying by 100
      : (columns > 0 && columns < 12) ? (columns / 12 * 100) + '%' : 'auto';
    return {
      [modifier]: amount
    };
  }
  calculateOffset(isRTL) {
    return this.calculatePosition('offset', isRTL ? 'margin-right' : 'margin-left');
  }
  calculatePull(isRTL) {
    return this.calculatePosition('pull', isRTL ? 'left' : 'right');
  }
  calculatePush(isRTL) {
    return this.calculatePosition('push', isRTL ? 'right' : 'left');
  }
  render() {
    const isRTL = document.dir === 'rtl';
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { class: {
        [mode]: true
      }, style: Object.assign(Object.assign(Object.assign(Object.assign({}, this.calculateOffset(isRTL)), this.calculatePull(isRTL)), this.calculatePush(isRTL)), this.calculateSize()) }, index.h("slot", null)));
  }
};
Col.style = medColCss;

const medGridCss = ":host{padding-left:var(--ion-grid-padding-xs, var(--ion-grid-padding, 8px));padding-right:var(--ion-grid-padding-xs, var(--ion-grid-padding, 8px));padding-top:var(--ion-grid-padding-xs, var(--ion-grid-padding, 8px));padding-bottom:var(--ion-grid-padding-xs, var(--ion-grid-padding, 8px));margin-left:auto;margin-right:auto;display:block;padding-top:0;padding-bottom:0;-ms-flex:1;flex:1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-xs, var(--ion-grid-padding, 8px));padding-inline-start:var(--ion-grid-padding-xs, var(--ion-grid-padding, 8px));-webkit-padding-end:var(--ion-grid-padding-xs, var(--ion-grid-padding, 8px));padding-inline-end:var(--ion-grid-padding-xs, var(--ion-grid-padding, 8px))}}@media (min-width: 576px){:host{padding-left:var(--ion-grid-padding-sm, var(--ion-grid-padding, 8px));padding-right:var(--ion-grid-padding-sm, var(--ion-grid-padding, 8px));padding-top:var(--ion-grid-padding-sm, var(--ion-grid-padding, 8px));padding-bottom:var(--ion-grid-padding-sm, var(--ion-grid-padding, 8px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-sm, var(--ion-grid-padding, 8px));padding-inline-start:var(--ion-grid-padding-sm, var(--ion-grid-padding, 8px));-webkit-padding-end:var(--ion-grid-padding-sm, var(--ion-grid-padding, 8px));padding-inline-end:var(--ion-grid-padding-sm, var(--ion-grid-padding, 8px))}}}@media (min-width: 768px){:host{padding-left:var(--ion-grid-padding-md, var(--ion-grid-padding, 8px));padding-right:var(--ion-grid-padding-md, var(--ion-grid-padding, 8px));padding-top:var(--ion-grid-padding-md, var(--ion-grid-padding, 8px));padding-bottom:var(--ion-grid-padding-md, var(--ion-grid-padding, 8px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-md, var(--ion-grid-padding, 8px));padding-inline-start:var(--ion-grid-padding-md, var(--ion-grid-padding, 8px));-webkit-padding-end:var(--ion-grid-padding-md, var(--ion-grid-padding, 8px));padding-inline-end:var(--ion-grid-padding-md, var(--ion-grid-padding, 8px))}}}@media (min-width: 992px){:host{padding-left:var(--ion-grid-padding-lg, var(--ion-grid-padding, 8px));padding-right:var(--ion-grid-padding-lg, var(--ion-grid-padding, 8px));padding-top:var(--ion-grid-padding-lg, var(--ion-grid-padding, 8px));padding-bottom:var(--ion-grid-padding-lg, var(--ion-grid-padding, 8px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-lg, var(--ion-grid-padding, 8px));padding-inline-start:var(--ion-grid-padding-lg, var(--ion-grid-padding, 8px));-webkit-padding-end:var(--ion-grid-padding-lg, var(--ion-grid-padding, 8px));padding-inline-end:var(--ion-grid-padding-lg, var(--ion-grid-padding, 8px))}}}@media (min-width: 1200px){:host{padding-left:var(--ion-grid-padding-xl, var(--ion-grid-padding, 8px));padding-right:var(--ion-grid-padding-xl, var(--ion-grid-padding, 8px));padding-top:var(--ion-grid-padding-xl, var(--ion-grid-padding, 8px));padding-bottom:var(--ion-grid-padding-xl, var(--ion-grid-padding, 8px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-xl, var(--ion-grid-padding, 8px));padding-inline-start:var(--ion-grid-padding-xl, var(--ion-grid-padding, 8px));-webkit-padding-end:var(--ion-grid-padding-xl, var(--ion-grid-padding, 8px));padding-inline-end:var(--ion-grid-padding-xl, var(--ion-grid-padding, 8px))}}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.grid-fixed){width:var(--ion-grid-width-xs, var(--ion-grid-width, 100%));max-width:100%}@media (min-width: 576px){:host(.grid-fixed){width:var(--ion-grid-width-sm, var(--ion-grid-width, 540px))}}@media (min-width: 768px){:host(.grid-fixed){width:var(--ion-grid-width-md, var(--ion-grid-width, 720px))}}@media (min-width: 992px){:host(.grid-fixed){width:var(--ion-grid-width-lg, var(--ion-grid-width, 960px))}}@media (min-width: 1200px){:host(.grid-fixed){width:var(--ion-grid-width-xl, var(--ion-grid-width, 1140px))}}:host(.ion-no-padding){--ion-grid-column-padding:0;--ion-grid-column-padding-xs:0;--ion-grid-column-padding-sm:0;--ion-grid-column-padding-md:0;--ion-grid-column-padding-lg:0;--ion-grid-column-padding-xl:0}";

const Grid = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.fixed = false;
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { class: {
        [mode]: true,
        'grid-fixed': this.fixed
      } }, index.h("slot", null)));
  }
};
Grid.style = medGridCss;

const rowCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}";

const Row = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: ionicGlobal.getIonMode(this) }, index.h("slot", null)));
  }
};
Row.style = rowCss;

exports.ion_col = Col;
exports.ion_grid = Grid;
exports.ion_row = Row;
