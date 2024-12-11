import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { modalController } from '../../../../../../dist/ionic/index.esm.js';

export default {
  title: 'Components/Compositions/Image Zoom',
  decorators: [withDesign],
};

const createModal = async (args) => {
  modalController.create({
    component: 'med-image-zoom',
    cssClass: 'med-image-zoom',
    componentProps:{
      imagens: [
        {
          src: "https://via.placeholder.com/500",
          legenda: "Alternativa A - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo ultrices placerat. Ut quis ante viverra, egestas orci vitae, feugiat velit. Pellentesque luctus sapien eget vulputate dapibus. Donec in leo."
        },
      ],
      marcaAguaSuperior: '1234567890',
      marcaAguaInferior: '1234567890',
      titulo:'Alternativa A',
      maxRatioDesktop: args.maxRatioDesktop,
      maxRatioMobile: args.maxRatioMobile
    }
  }).then((modal)=>{
    modal.present()
  });
}

const TemplateDefault = (args) => {
  return html`
    <div style="text-align: center;">

      <!-- component -->
      <ion-button ds-name="primary" @click="${() => createModal(args)}">Abrir Zoom de Imagens</ion-button>
      <!-- component -->

    </div>
  `
}

export const ImageZoom = TemplateDefault.bind({});
ImageZoom.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=5325%3A44104',
  },
}

ImageZoom.argTypes = {
  maxRatioDesktop: {
    control: { type: 'number' },
    description: "Zoom maximo na imagem em desktop",
    defaultValue: 2,
  },
  maxRatioMobile: {
    control: { type: 'number' },
    description: "Zoom maximo na imagem em mobile",
    defaultValue: 4,
  },
};
