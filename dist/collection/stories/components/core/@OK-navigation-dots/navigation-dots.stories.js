import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Core/@OK Navigation Dots',
  decorators: [withDesign],
};

const TemplateDefault = ({color}) => {
  return html`
  <ion-app>
    <div class="flex-center">

        <!-- component markdown-->
        <ion-slides pager="true">

          <ion-slide>&nbsp;</ion-slide>
          <ion-slide>&nbsp;</ion-slide>
          <ion-slide>&nbsp;</ion-slide>
          <ion-slide>&nbsp;</ion-slide>

        </ion-slides>
        <!-- component markdown-->
    </div>
  </ion-app>
  `
}

export const Default = TemplateDefault.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=12821%3A45289',
  },
}
