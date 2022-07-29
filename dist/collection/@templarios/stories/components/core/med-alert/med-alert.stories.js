import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { modalController } from '../../../../../../dist/ionic/index.esm.js';

export default {
  title: 'Components/Core/Alert',
  decorators: [withDesign],
};

const createModal = async () => {
  modalController.create({
    component: 'med-alert',
    cssClass: 'tp-dialog',
    componentProps:{
      heading: 'Heading',
      message: 'Content',
      cancelText: 'Cancelar',
      confirmText: 'Confirm'
    }
  }).then((modal)=>{
    modal.present()
  });
}

const TemplateDefault = () => {
  return html`
    <div style="text-align: center;">

      <!-- component -->
      <ion-button ds-name="primary" @click="${createModal}">Abrir Zoom de Imagens</ion-button>
      <!-- component -->

    </div>
  `
}

export const ImageZoom = TemplateDefault.bind({});
ImageZoom.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}
