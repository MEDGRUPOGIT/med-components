import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { medColors } from '../../../med-colors';

export default {
  title: 'Components/Core/Context Menu',
  decorators: [withDesign],
};

const TemplateDefault = ({color}) => {
  return html`
    <ion-app class="storybook-only">
      <div class="storybook-only__container">

        <!-- component -->
          <med-context-menu .color=${color}></med-context-menu>
        <!-- component -->

      </div>
    </ion-app>
  `
}

export const ContextMenu = TemplateDefault.bind({});
ContextMenu.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=2781%3A8634',
  },
}
ContextMenu.argTypes = {
  color: {
    options: medColors,
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: 'Color' },
      defaultValue: { summary: 'undefined' },
    },
  }
};
