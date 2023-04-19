const links = document.querySelectorAll('.aside__link');
const sections = document.querySelectorAll('.section');

links.forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();

    const activeSection = e.currentTarget?.dataset?.section;

    if (activeSection) {
      sections.forEach((section) => {
        if (section.id === activeSection) {
          section.setAttribute('data-active', 'true');
        } else {
          section.setAttribute('data-active', 'false');
        }
      });

      links.forEach((link) => {
        const linkSection = link?.dataset?.section;

        if (linkSection === activeSection) {
          link.setAttribute('data-active', 'true');
        } else {
          link.setAttribute('data-active', 'false');
        }
      });

      window.scrollTo(0, 0);
    }
  });
});
