import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { modalController } from '../../../../../../dist/ionic/index.esm.js';

export default {
  title: 'Components/Compositions/Image Zoom',
  decorators: [withDesign],
};

const createModalArrayIMG = async () => {
  modalController.create({
    component: 'med-image-zoom',
    cssClass: 'med-image-zoom',
    componentProps:{
      imagens: [
        {src: "https://via.placeholder.com/500", legenda: "1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo ultrices placerat. Ut quis ante viverra, egestas orci vitae, feugiat velit. Pellentesque luctus sapien eget vulputate dapibus. Donec in leo." },
        {src: "https://via.placeholder.com/500", legenda: "2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo ultrices placerat. Ut quis ante viverra, egestas orci vitae, feugiat velit. Pellentesque luctus sapien eget vulputate dapibus. Donec in leo." },
        {src: "https://via.placeholder.com/500", legenda: "3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo ultrices placerat. Ut quis ante viverra, egestas orci vitae, feugiat velit. Pellentesque luctus sapien eget vulputate dapibus. Donec in leo." },
        {src: "https://via.placeholder.com/500", legenda: "4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo ultrices placerat. Ut quis ante viverra, egestas orci vitae, feugiat velit. Pellentesque luctus sapien eget vulputate dapibus. Donec in leo." },
        {src: "https://via.placeholder.com/500", legenda: "5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo ultrices placerat. Ut quis ante viverra, egestas orci vitae, feugiat velit. Pellentesque luctus sapien eget vulputate dapibus. Donec in leo." },
      ],

      marcaAguaSuperior: '123456',
      marcaAguaInferior: '1234567890',
      titulo:'Alternativas',
    }
  }).then((modal)=>{
    modal.present()
  });
}

const TemplateMultiImagem = () => {
  return html`
    <div style="text-align: center;">

      <!-- component -->
      <ion-button ds-name="primary" @click="${createModalArrayIMG}">Abrir Zoom de Imagens</ion-button>
      <!-- component -->

    </div>
  `
}

export const ImageZoomMultiImagem = TemplateMultiImagem.bind({});
ImageZoomMultiImagem.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=5325%3A44104',
  },
}
