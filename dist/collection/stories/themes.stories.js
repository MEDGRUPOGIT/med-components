import { html, render } from 'lit-html';
import { MedColor } from './constants';

export default {
  title: 'templarios',
};

const Template = ({dsColor, fill}) => {
  let config = {};

  const setSnipet = (config) => {
    return html`
<pre class="language-html">
<code>
<span class="snipet__tag">&lt;</span><span class="snipet__tag">html</span> <span class="snipet__attribute">color-scheme</span><span class="snipet__aux">="</span><span class="snipet__value">${config.scheme}</span><span class="snipet__aux">"</span> <span class="snipet__attribute">class</span><span class="snipet__aux">="</span><span class="snipet__value snipet__value--class"></span><span class="snipet__aux">"</span> <span class="snipet__attribute">style</span><span class="snipet__aux">="</span><span class="snipet__value">${config.customProperties}</span><span class="snipet__aux">"</span><span class="snipet__tag">&gt;&lt;/html&gt</span>
</code>
</pre>
    `
  }

  setTimeout(() => {
    config.scheme= 'dark';
    render(setSnipet(config), document.querySelector('.snipet'));

    // scheme switch
    const setScheme = scheme => document.documentElement.setAttribute('color-scheme', scheme);
    document.querySelector('#scheme-switcher').addEventListener('input', event => {
      if(event.target.value !== 'auto') {
        setScheme(event.target.value);
        config.scheme = event.target.value;
        render(setSnipet(config), document.querySelector('.snipet'));
      } else {
        setScheme('dark');
        config.scheme = 'dark';
        render(setSnipet(config), document.querySelector('.snipet'));
      }
    });

    // scheme system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    toggleDarkScheme(prefersDark.matches);

    prefersDark.addListener(mediaQuery => toggleDarkScheme(mediaQuery.matches));

    function toggleDarkScheme(shouldAdd) {
      if (shouldAdd) {
        document.documentElement.setAttribute('color-scheme', 'dark');
        config.scheme= 'dark';
        render(setSnipet(config), document.querySelector('.snipet'));
      } else {
        document.documentElement.setAttribute('color-scheme', 'light');
        config.scheme= 'light';
        render(setSnipet(config), document.querySelector('.snipet'));
      }
    }

    // controls
    const hueRange = document.querySelector('.hue');
    const saturationRange = document.querySelector('.saturation');
    const luminosityRange = document.querySelector('.luminosity');
    const fontSizeRange = document.querySelector('.font-size');

    // hue
    hueRange.addEventListener('input', (event) => {
      // brand
      document.documentElement.style.setProperty(`--hue-fator`, `${event.target.value}`);

      config.customProperties = document.documentElement.getAttribute('style').toString()
      render(setSnipet(config), document.querySelector('.snipet'));
    });

    // saturation
    saturationRange.addEventListener('input', (event) => {
      document.documentElement.style.setProperty(`--saturation-fator`, `${event.target.value}%`);

      config.customProperties = document.documentElement.getAttribute('style').toString()
      render(setSnipet(config), document.querySelector('.snipet'));
    });

    // luminosity
    luminosityRange.addEventListener('input', (event) => {
      document.documentElement.style.setProperty(`--luminosity-fator-1`, `${event.target.value * -1}%`);
      document.documentElement.style.setProperty(`--luminosity-fator-2`, `${event.target.value}%`);
      document.documentElement.style.setProperty(`--luminosity-fator-3`, `${event.target.value}%`);

      config.customProperties = document.documentElement.getAttribute('style').toString()
      render(setSnipet(config), document.querySelector('.snipet'));
    });

    // font-size
    fontSizeRange.addEventListener('input', (event) => {
      document.documentElement.style.setProperty(`--font-size`, `${event.target.value}px`);

      config.customProperties = document.documentElement.getAttribute('style').toString()
      render(setSnipet(config), document.querySelector('.snipet'));
    });

  }, 1000);

  return html`
    <style>
      .snipet__attribute {
        color: #9bbbdc;
      }

      .snipet__tag {
        color: #5db0d7;
      }

      .snipet__aux {
        color: #5db0d7;
      }

      .snipet__value {
        color: #f29766;
      }

      h2 {
        margin: 0 10px 0 0;
      }

      input {
        margin: 0;
      }

      pre {
        margin: 0 0 10px 0;
        background: rgba(0,0,0,0.8);
        padding: 0 10px;
        border-radius: 5px;
        overflow: auto;
      }

      .switcher__list {
        display: flex;
        padding: 0;
        margin: 0 0 15px 0;
        list-style: none;
        align-items: center;
      }

      .switcher__item {
        display: flex;
        padding: 0;
        list-style: none;
        align-items: center;
      }

      .switcher__item:not(:last-child) {
        margin: 0 10px 0 0;
      }

      .switcher__label {
        padding: 0 0 0 5px;
        cursor: pointer;
      }

      .switcher {
        margin: 0 0 15px 0;
      }
    </style>

    <med-app>
      <div class="snipet"></div>

      <form id="scheme-switcher" class="switcher">
        <ul class="switcher__list">
          <li class="switcher__item">
            <h2>Schemes:</h2>
          </li>
          <li class="switcher__item">
            <input id="auto" class="switcher__input switcher__input--radio" type="radio" name="scheme" value="auto" checked>
            <label class="switcher__label" for="auto">Auto</label>
          </li>
          <li class="switcher__item">
            <input id="light" class="switcher__input switcher__input--radio" type="radio" name="scheme" value="light">
            <label class="switcher__label" for="light">Light</label>
          </li>
          <li class="switcher__item">
            <input id="dark" class="switcher__input switcher__input--radio" type="radio" name="scheme" value="dark">
            <label class="switcher__label" for="dark">Dark</label>
          </li>
        </ul>
      </form>

      <ul class="switcher__list">
        <li class="switcher__item">
          <h2>Configuração:</h2>
        </li>
        <li class="switcher__item">
          <input class="hue" type="range" id="hue" name="hue" min="0" max="360" value="0"/>
          <label class="switcher__label" for="hue">hue</label>
        </li>
        <li class="switcher__item">
          <input class="saturation" type="range" id="saturation" name="saturation" min="0" max="50" value="0"/>
          <label class="switcher__label" for="saturation">saturation</label>
        </li>
        <li class="switcher__item">
          <input class="luminosity" type="range" id="luminosity" name="luminosity" min="0" max="50" value="0"/>
          <label class="switcher__label" for="luminosity">contrast</label>
        </li>
        <li class="switcher__item">
          <input class="font-size" type="range" id="font-size" name="font-size" min="12" max="20" value="16"/>
          <label class="switcher__label" for="font-size">font-size (12px - 20px)</label>
        </li>
      </ul>

      <med-parent .dsColor=${dsColor} .fill=${fill} child>dinâmico</med-parent>

      <div style="margin-bottom: 16px;"></div>

      <med-parent ds-color="neutral-1">neutral 1</med-parent>
      <med-parent ds-color="neutral-2">neutral 2</med-parent>
      <med-parent ds-color="neutral-3">neutral 3</med-parent>
      <med-parent ds-color="neutral-4">neutral 4</med-parent>
      <med-parent ds-color="neutral-5">neutral 5</med-parent>
      <med-parent ds-color="neutral-6">neutral 6</med-parent>
      <med-parent ds-color="neutral-7">neutral 7</med-parent>
      <med-parent ds-color="neutral-8">neutral 8</med-parent>
      <med-parent ds-color="neutral-9">neutral 9</med-parent>
      <med-parent ds-color="neutral-10">neutral 10</med-parent>

      <div style="margin-bottom: 16px;"></div>

      <med-parent ds-color="fb-attention">fb-attention</med-parent>
      <med-parent ds-color="fb-caution">fb-caution</med-parent>
      <med-parent ds-color="fb-warning">fb-warning</med-parent>
      <med-parent ds-color="fb-success">fb-success</med-parent>

      <div style="margin-bottom: 16px;"></div>

      <med-parent class="darkest" ds-color="brand">brand-1</med-parent>
      <med-parent class="dark" ds-color="brand">brand-2</med-parent>
      <med-parent ds-color="brand">brand-3</med-parent>
      <med-parent class="light" ds-color="brand">brand-4</med-parent>
      <med-parent class="lightest" ds-color="brand">brand-5</med-parent>

      <div style="margin-bottom: 16px;"></div>

      <h3>⚠️ Aplicável apenas ao medsoft</h3>

      <med-parent class="darkest" ds-color="aula">aula-1</med-parent>
      <med-parent class="dark" ds-color="aula">aula-2</med-parent>
      <med-parent ds-color="aula">aula-3</med-parent>
      <med-parent class="light" ds-color="aula">aula-4</med-parent>
      <med-parent class="lightest" ds-color="aula">aula-5</med-parent>

      <div style="margin-bottom: 16px;"></div>

      <med-parent class="darkest" ds-color="material">material-1</med-parent>
      <med-parent class="dark" ds-color="material">material-2</med-parent>
      <med-parent ds-color="material">material-3</med-parent>
      <med-parent class="light" ds-color="material">material-4</med-parent>
      <med-parent class="lightest" ds-color="material">material-5</med-parent>

      <div style="margin-bottom: 16px;"></div>

      <med-parent class="darkest" ds-color="questoes">questoes-1</med-parent>
      <med-parent class="dark" ds-color="questoes">questoes-2</med-parent>
      <med-parent ds-color="questoes">questoes-3</med-parent>
      <med-parent class="light" ds-color="questoes">questoes-4</med-parent>
      <med-parent class="lightest" ds-color="questoes">questoes-5</med-parent>

      <div style="margin-bottom: 16px;"></div>

      <med-parent class="darkest" ds-color="revalida">revalida-1</med-parent>
      <med-parent class="dark" ds-color="revalida">revalida-2</med-parent>
      <med-parent ds-color="revalida">revalida-3</med-parent>
      <med-parent class="light" ds-color="revalida">revalida-4</med-parent>
      <med-parent class="lightest" ds-color="revalida">revalida-5</med-parent>

      <div style="margin-bottom: 16px;"></div>

      <med-parent class="darkest" ds-color="provas">provas-1</med-parent>
      <med-parent class="dark" ds-color="provas">provas-2</med-parent>
      <med-parent ds-color="provas">provas-3</med-parent>
      <med-parent class="light" ds-color="provas">provas-4</med-parent>
      <med-parent class="lightest" ds-color="provas">provas-5</med-parent>
    </med-app>
  `;
};

export const Templarios = Template.bind({});
Templarios.argTypes = {
  dsColor: {
    options: MedColor,
    control: { type: 'inline-radio'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: 'Color' },
      defaultValue: { summary: 'undefined' },
    },
  },
  fill: {
    options: [undefined, 'outline', 'gradient'],
    control: { type: 'inline-radio' },
    description: 'Defines the component fill.',
    table: {
      type: { summary: 'outline | clear' },
      defaultValue: { summary: 'undefined' },
    },
  },
};

//theme switch
/* const themeCheckboxes = document.querySelectorAll('.switcher__input--checkbox');
  themeCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', event => {
      if(event.target.checked) {
        document.documentElement.classList.add(event.target.value);
      } else {
        document.documentElement.classList.remove(event.target.value);
      }

      config.theme = document.documentElement.classList.toString().replace('hydrated ', '').replace('hydrated', '');
      render(setSnipet(config), document.querySelector('.snipet'));
    });
  });
*/

{/*
<form id="theme-switcher" class="switcher">
  <ul class="switcher__list">
    <li class="switcher__item">
      <h2>Themes:</h2>
    </li>
    <li class="switcher__item">
      <input id="medsoft" class="switcher__input switcher__input--checkbox" type="checkbox" name="theme" value="theme-medsoft">
      <label class="switcher__label" for="medsoft">Medsoft</label>
    </li>
    <li class="switcher__item">
      <input id="gold" class="switcher__input switcher__input--checkbox" type="checkbox" name="theme" value="theme-gold">
      <label class="switcher__label" for="gold">Gold</label>
    </li>
    <li class="switcher__item">
      <input id="recursos" class="switcher__input switcher__input--checkbox" type="checkbox" name="theme" value="theme-recursos">
      <label class="switcher__label" for="recursos">Recursos</label>
    </li>
  </ul>
</form>
*/}
