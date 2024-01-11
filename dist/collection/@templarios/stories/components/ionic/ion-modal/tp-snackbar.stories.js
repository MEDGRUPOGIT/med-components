import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { modalController } from '../../../../../../dist/ionic/index.esm.js';

export default {
  title: 'Components/Ionic/Modal/Snackbar',
  decorators: [withDesign]
};

const createModal = async () => {
  modalController
    .create({
      component: 'snackbar-test',
      cssClass: 'tp-snackbar tp-color-aula',
    })
    .then((modal) => {
      modal.present();
    });
};

const TemplateDefault = () => {
  return html`
    <ion-app>
      <ion-content>
        <ion-button ds-name="primary" @click="${createModal}"
          >Abrir Snackbar</ion-button
        >
      </ion-content>
    </ion-app>
  `;
};

export const Snackbar = TemplateDefault.bind({});
Snackbar.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=10206%3A60167'
  }
};
