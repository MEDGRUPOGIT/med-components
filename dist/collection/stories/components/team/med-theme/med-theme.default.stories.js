import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Team/Theme',
  decorators: [withDesign],
};

let anteriorTheme = document.querySelector('html').classList.contains('theme-gold') ? 'theme-gold' : null;

const changeTheme = {
  'theme-gold': () => {
    anteriorTheme = 'theme-gold';
    if (
      !document.querySelector('html').classList.contains('theme-gold')
    ) {
      document.querySelector('html').classList.add('theme-gold');
    }
  },
  'theme-default': () => {
    document.querySelector('html').classList.remove(anteriorTheme);
  }
};

const trocaTema = (ev) =>{
  console.log('troca tema')
  const fun = changeTheme[ev.detail];
  
  if (fun) {
    fun();
  }
}

const TemplateMedConig = () => {
  setTimeout(() => {
    document.querySelector('med-themes').temas = [{value:'theme-default',label:'Padrão'},{value:'theme-gold',label:'gold'}];
  }, 1000);

  return html`
    <style>
      .med-theme--theme-gold {
        --border-color: hsla(46, 65%, 60%, 1);
      }

      .med-theme--theme-gold .med-theme__left {
        --background-left: hsla(46, 65%, 20%, 1);
      }

      .med-theme--theme-gold .med-theme__circle {
        --background-circle: hsla(46, 65%, 40%, 1);
      }

      .med-theme--theme-gold .med-theme__bar {
        background: hsla(46, 10%, 58%, 1);
      }

      .med-theme--theme-gold ion-radio {
        --color: hsla(46, 65%, 60%, 1);
        --color-checked: hsla(46, 65%, 60%, 1);
      }
    </style>
    <div style="text-align: center;">

      <!-- component -->
      <med-themes @medChange="${trocaTema}" class="med-config__theme"></med-themes>
      <!-- component -->

    </div>
  `
}

export const Default = TemplateMedConig.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=6990%3A52772',
  },
}
