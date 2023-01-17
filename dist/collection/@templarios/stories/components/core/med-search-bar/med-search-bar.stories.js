import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Core/Search Bar',
  decorators: [withDesign],
};

const TemplateDefault = ({color}) => {
  return html`
  <ion-app>

    <!-- component markdown-->
    <med-search-bar>
      <ion-searchbar tp-search-bar placeholder="Buscar Conteúdo"  mode="md"></ion-searchbar>
    </med-search-bar>
    <!-- component markdown-->

  </ion-app>
  `
}

export const Default = TemplateDefault.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}
