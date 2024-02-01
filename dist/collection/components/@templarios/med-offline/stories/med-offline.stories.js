import { html } from 'lit-html';

export default {
  title: 'Components/Offline',
};

const Template = ({}) => {
  return html`
    <ion-app class="storybook-only">
      <div class="storybook-only__container">

        <!-- component -->
          <med-offline ></med-offline>
        <!-- component -->

      <ion-content>
    </ion-app>
  `
}

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=4440%3A22017',
  },
}
