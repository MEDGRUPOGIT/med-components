import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Legado/Header',
  decorators: [withDesign],
};

const TemplateNavbar = () => {
  return html `
    <style>
      .med-tollbar__button {
        margin: 0 4px;
      }
    </style>
    <ion-app>
      <!-- component -->
      <med-header>
        <med-navbar slot="navbar" >
          <ion-back-button slot="left" ds-name="tertiary" ds-size="xxs">
            <ion-icon slot="icon-only" class="med-icon"></ion-icon>
          </ion-back-button>

          <med-type slot="title">Page Title</med-type>
          <med-type slot="subtitle">Page Title</med-type>

          <ion-button mode="ios" icon-only fill="clear" slot="right" ds-size="xxs">
            <ion-icon slot="icon-only" class="med-icon" name="med-star-filled"></ion-icon>
          </ion-button>
        </med-navbar>

        <med-toolbar slot="toolbar">
          <ion-button mode="ios" icon-only fill="clear" slot="start" ds-size="xxs">
            <ion-icon class="med-icon" slot="icon-only" name="med-setaesquerda"></ion-icon>
          </ion-button>

          <ion-button mode="ios" icon-only fill="clear" class="med-tollbar__button" ds-size="xs">
            <ion-icon class="med-icon" slot="icon-only" color="brand" name="med-editar"></ion-icon>
          </ion-button>
          <ion-button mode="ios" icon-only fill="clear" class="med-tollbar__button" ds-size="xxs">
            <ion-icon class="med-icon" slot="icon-only" name="med-estrela"></ion-icon>
          </ion-button>
          <ion-button mode="ios" icon-only fill="clear" class="med-tollbar__button" ds-size="xxs">
            <ion-icon class="med-icon" slot="icon-only" name="med-visivel"></ion-icon>
          </ion-button>
          <ion-button mode="ios" icon-only fill="clear" class="med-tollbar__button" ds-size="xs">
            <ion-icon class="med-icon" slot="icon-only" name="med-fonte"></ion-icon>
          </ion-button>

          <ion-button mode="ios" icon-only fill="clear" slot="end" ds-size="xxs">
            <ion-icon class="med-icon" slot="icon-only" name="med-setadireita"></ion-icon>
          </ion-button>
        </med-toolbar>

        <ion-progress-bar value="0.5" slot="progress"></ion-progress-bar>

      </med-header>
      <!-- component -->
    </ion-app>
  `
}

export const Default = TemplateNavbar.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=404%3A0',
  },
  actions: {
    handles: ['medResize'],
  },
}
