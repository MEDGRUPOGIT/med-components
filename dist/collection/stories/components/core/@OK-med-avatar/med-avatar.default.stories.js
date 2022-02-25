import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../global/templarios/color.enum";

export default {
  title: 'Components/Core/@OK Avatar',
  decorators: [withDesign],
};

const TemplateDefault = ({dsColor, dsSize, image}) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="full-height-flex">

        <!-- component markdown -->
        <med-avatar letter="A" .dsColor=${dsColor} .dsSize=${dsSize} image=${image}></med-avatar>
        <!-- component markdown -->

        </div>
      </ion-content>
    </ion-app>
  `
}

export const Default = TemplateDefault.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=5248%3A39909',
  },
}
Default.argTypes = {
  dsColor: {
    options: Object.values(MedColors),
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  dsSize: {
    options: [undefined, 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    control: { type: 'radio'},
    description: "Define a variação de tamanho componente.",
    table: {
      type:  { summary: 'xxs | xs | sm | md | lg | xl | xxl' },
      defaultValue: { summary: 'undefined' },
    },
  },
  image: {
    control: { type: 'text' },
    description: 'Define a url da imagem, se existir.',
    defaultValue: 'static/media/src/stories/assets/image-test.png',
    table: {
      type:  { summary: 'string' },
      defaultValue: { summary: 'undefined' },
    },
  },
};
