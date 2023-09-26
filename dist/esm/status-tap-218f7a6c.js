import { f as readTask, c as writeTask } from './index-70672e81.js';
import { c as componentOnReady } from './helpers-43f61e58.js';

const startStatusTap = () => {
  const win = window;
  win.addEventListener('statusTap', () => {
    readTask(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = el.closest('ion-content');
      if (contentEl) {
        new Promise(resolve => componentOnReady(contentEl, resolve)).then(() => {
          writeTask(() => contentEl.scrollToTop(300));
        });
      }
    });
  });
};

export { startStatusTap };
