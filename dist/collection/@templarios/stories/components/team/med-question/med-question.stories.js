import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from '../../../../templarios';

export default {
  title: 'Components/Team/Question',
  decorators: [withDesign],
};

const Template = ({ dsColor, texto, collapsed }) => {
  return html`
  <ion-app>
    <ion-content>
      <div class="ion-padding">

        <!-- component markdown -->
          <med-question .dsColor=${dsColor} .texto=${texto} ?collapsed=${collapsed}></med-question>
        <!-- component markdown -->

      </div>
    </ion-content>
  </ion-app>
  `
}

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=13983%3A32314',
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
  texto: {
    control: { type: 'text' },
    description: "Define o conteúdo de texto do componente.",
    defaultValue: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, esse. Porro excepturi provident et, laborum quas libero odio sunt ab in odit. Error officiis, omnis in excepturi assumenda cupiditate voluptate dolorum! Dolor dolore veritatis officia tempora architecto eius quidem pariatur facilis vitae, ab eos nemo deserunt numquam illo nam natus! Quae quo voluptate sequi rerum blanditiis odit neque libero tempora excepturi soluta ullam iure, iste minima, ex optio voluptatibus repudiandae magnam velit id sapiente autem distinctio. Voluptatibus accusamus rem deserunt sapiente quasi tenetur sed suscipit ratione, hic soluta ullam, impedit consequuntur provident? Ea, pariatur autem! Veniam doloribus facere vel! Ad saepe odit nam quisquam, voluptatem fugiat dignissimos. Quod cupiditate quibusdam quam modi, sint tempora. Voluptatum omnis tempore accusantium libero odio exercitationem dolorum sequi eligendi perspiciatis voluptas mollitia minus culpa, atque maiores dolores repellendus recusandae ad facere? Doloribus maxime cupiditate neque earum voluptates, inventore quod eveniet quae quisquam natus enim veritatis.',
  },
  collapsed: {
    collapsed: false,
    control: { type: 'boolean' },
    description: 'Define o estado do componente.',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
};
