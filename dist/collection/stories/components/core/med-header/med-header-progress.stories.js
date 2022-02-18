import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Core/Header',
  decorators: [withDesign],
};

const TemplateProgress = ({ platform }) => {
  if (platform === 'Mobile') {
    document.querySelector('html').classList.remove('plt-desktop');
  } else if (platform === 'Desktop') {
    document.querySelector('html').classList.add('plt-desktop');
  }

  return html `
    <ion-app>

    <!-- component -->
    <med-header>

      <med-navbar slot="navbar">
        <ion-button ds-name="tertiary" slot="left">
          <ion-icon slot="icon-only" class="med-icon" name="med-esquerda"></ion-icon>
        </ion-button>

        <span slot="title">header com título muito grande</span>
        <span slot="subtitle">subheader</span>

        <ion-button ds-name="tertiary" slot="right">
          <ion-icon slot="icon-only" class="med-icon" name="med-star-filled"></ion-icon>
        </ion-button>
      </med-navbar>

      <med-toolbar slot="toolbar">
        <ion-button ds-name="tertiary" slot="start">
          <ion-icon class="med-icon" slot="icon-only" name="med-setaesquerda"></ion-icon>
        </ion-button>
        <ul>
          <li>
            <ion-button ds-name="tertiary">
              <ion-icon class="med-icon" slot="icon-only" name="med-duvidas"></ion-icon>
            </ion-button>
            <ion-button ds-name="tertiary">
              <ion-icon class="med-icon" slot="icon-only" name="med-email"></ion-icon>
            </ion-button>
            <ion-button ds-name="tertiary">
              <ion-icon class="med-icon" slot="icon-only" name="med-enviar"></ion-icon>
            </ion-button>
            <ion-button ds-name="tertiary">
              <ion-icon class="med-icon" slot="icon-only" name="med-fonte"></ion-icon>
            </ion-button>
          </li>
        </ul>
        <ion-button ds-name="tertiary" slot="end">
          <ion-icon class="med-icon" slot="icon-only" name="med-setadireita"></ion-icon>
        </ion-button>
      </med-toolbar>

      <ion-progress-bar value="1" slot="progress"></ion-progress-bar>

    </med-header>
    <!-- component -->

  </ion-app>
  `
}

export const Progress = TemplateProgress.bind({});
Progress.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=404%3A0',
  },
  actions: {
    handles: ['medResize'],
  },
}
Progress.argTypes = {
  platform: {
    defaultValue: 'Desktop',
    options: ['Desktop', 'Mobile'],
    control: { type: 'radio' },
    description: 'Muda a visualização do componente entre plataformas. **Usado apenas no storybook para visualização.**'
  },
};
