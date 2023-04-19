const tabLinks = document.querySelectorAll('.tab__link');

tabLinks.forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const activeSection = document.querySelector(
      '.section[data-active="true"]'
    );
    const tabs = activeSection.querySelectorAll('.tab__content');
    const sectionTabLinks = activeSection.querySelectorAll('.tab__link');

    const activeTab = e.currentTarget?.dataset?.tab;

    if (activeTab) {
      tabs.forEach((tab) => {
        if (tab.id === activeTab) {
          tab.setAttribute('data-active', 'true');
        } else {
          tab.setAttribute('data-active', 'false');
        }
      });

      sectionTabLinks.forEach((link) => {
        const linkTab = link?.dataset?.tab;

        if (linkTab === activeTab) {
          link.setAttribute('data-active', 'true');
        } else {
          link.setAttribute('data-active', 'false');
        }
      });
    }
  });
});
