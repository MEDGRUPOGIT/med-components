import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { modalController } from '../../../../../../dist/ionic/index.esm.js';

export default {
  title: 'Components/Ionic/Modal/Dialog',
  decorators: [withDesign]
};

const createModal = async () => {
  modalController
    .create({
      component: 'med-alert',
      cssClass: 'tp-dialog',
      componentProps: {
        heading: 'Heading',
        message: 'Content',
        cancelText: 'Cancelar',
        confirmText: 'Confirm'
      }
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
          >Abrir Dialog</ion-button
        >
      </ion-content>
    </ion-app>
  `;
};

export const Dialog = TemplateDefault.bind({});
Dialog.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=10206%3A60167'
  }
};
