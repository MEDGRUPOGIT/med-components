const menu = document.querySelector('.header__menu');
const menuButton = document.querySelector('.header__menu-button');
const menuAnimation = menuButton.querySelector(
  '.header__menu-button-animation'
);
const colorModeTogglers = document.querySelectorAll(
  '.header__color-mode ion-toggle'
);

// abre o menu quando clica no botão
menuButton.addEventListener('click', () => {
  menu.classList.toggle('header__menu--open');
  menuAnimation.classList.toggle('header__menu-button-animation--active');
});

// fecha o menu quando clica fora do menu
window.addEventListener('click', (e) => {
  const { target } = e;

  if (!menu.contains(target) && !menuButton.contains(target)) {
    menu.classList.remove('header__menu--open');
    menuAnimation.classList.remove('header__menu-button-animation--active');
  }
});

// muda esquema de cores
const COLOR_MODE_STORAGE = 'color-scheme';

window.addEventListener('DOMContentLoaded', () => {
  const colorModePrefs = localStorage.getItem(COLOR_MODE_STORAGE);

  if (colorModePrefs) {
    const html = document.querySelector('html');
    html.setAttribute('color-scheme', colorModePrefs);

    colorModeTogglers.forEach((toggler) => {
      toggler.setAttribute('checked', colorModePrefs === 'dark');
    });
  }
});

colorModeTogglers.forEach((toggler) => {
  const html = document.querySelector('html');

  toggler.addEventListener('click', () => {
    const colorScheme = html.getAttribute('color-scheme');

    if (colorScheme === 'dark') {
      html.setAttribute('color-scheme', 'light');
      localStorage.setItem(COLOR_MODE_STORAGE, 'light');
    } else {
      html.setAttribute('color-scheme', 'dark');
      localStorage.setItem(COLOR_MODE_STORAGE, 'dark');
    }

    // sincroniza togglers
    const colorModePrefs = localStorage.getItem(COLOR_MODE_STORAGE);

    colorModeTogglers.forEach((modeToggler) => {
      if (modeToggler !== toggler) {
        modeToggler.setAttribute('checked', colorModePrefs === 'dark');
      }
    });
  });
});
