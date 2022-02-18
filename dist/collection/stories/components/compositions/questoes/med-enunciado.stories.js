import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Compositions/Questões/Enunciado',
  decorators: [withDesign],
};

const Template = ({dsName, imagens, slot}) => {
  return html`
    <ion-app>
      <ion-content>

        <!-- component markdown -->
        <med-enunciado ds-name=${dsName} imagens=${imagens}> ${slot} </med-enunciado>
        <!-- component markdown -->

      <ion-content>
    </ion-app>
  `
}

export const Enunciado = Template.bind({});
Enunciado.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
  actions: {
    handles: ['medGalleryRequest'],
  },
}
Enunciado.argTypes = {
  dsName: {
    options: ['skin'],
    control: { type: 'inline-check'},
    description: "Define a variação do componente.",
    table: {
      type:  { summary: 'String' },
      defaultValue: { summary: 'undefined' },
    },
  },
  imagens: {
    control: { type: 'text' },
    description: "Define as imagens do enunciado.",
    defaultValue: '["https://via.placeholder.com/500", "https://via.placeholder.com/500", "https://via.placeholder.com/500"]',
    table: {
      type:  { summary: 'String[]' },
      defaultValue: { summary: 'undefined' },
    },
  },
  slot: {
    control: { type: 'text' },
    defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae leo egestas, maximus elit eget, auctor dui. Nunc quis pulvinar magna, at dapibus est. Suspendisse volutpat euismod ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris malesuada semper purus non vehicula. Integer convallis sollicitudin.',
  },
};
