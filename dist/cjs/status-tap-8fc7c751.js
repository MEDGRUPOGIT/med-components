'use strict';

const index = require('./index-2a75be79.js');
const helpers = require('./helpers-ab0db03b.js');

const startStatusTap = () => {
  const win = window;
  win.addEventListener('statusTap', () => {
    index.readTask(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = el.closest('ion-content');
      if (contentEl) {
        new Promise(resolve => helpers.componentOnReady(contentEl, resolve)).then(() => {
          index.writeTask(() => contentEl.scrollToTop(300));
        });
      }
    });
  });
};

exports.startStatusTap = startStatusTap;