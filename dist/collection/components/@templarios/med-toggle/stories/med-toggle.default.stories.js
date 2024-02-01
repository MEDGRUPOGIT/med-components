import { html } from 'lit-html';
import { MedColors } from '../../../../@templarios/templarios';

export default {
  title: 'Components/Toggle',
};

const Template = ({ dsColor, collapsed, iconClick }) => {
  return html`
  <ion-app>
    <ion-content>
      <div class="ion-padding">

        <!-- component markdown -->
          <med-toggle .dsColor=${dsColor} ?collapsed=${collapsed} ?icon-click=${iconClick}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, esse. Porro excepturi provident et, laborum quas libero odio sunt ab in odit. Error officiis, omnis in excepturi assumenda cupiditate voluptate dolorum! Dolor dolore veritatis officia tempora architecto eius quidem pariatur facilis vitae, ab eos nemo deserunt numquam illo nam natus! Quae quo voluptate sequi rerum blanditiis odit neque libero tempora excepturi soluta ullam iure, iste minima, ex optio voluptatibus repudiandae magnam velit id sapiente autem distinctio. Voluptatibus accusamus rem deserunt sapiente quasi tenetur sed suscipit ratione, hic soluta ullam, impedit consequuntur provident? Ea, pariatur autem! Veniam doloribus facere vel! Ad saepe odit nam quisquam, voluptatem fugiat dignissimos. Quod cupiditate quibusdam quam modi, sint tempora. Voluptatum omnis tempore accusantium libero odio exercitationem dolorum sequi eligendi perspiciatis voluptas mollitia minus culpa, atque maiores dolores repellendus recusandae ad facere? Doloribus maxime cupiditate neque earum voluptates, inventore quod eveniet quae quisquam natus enim veritatis.
          </med-toggle>
        <!-- component markdown -->

      </div>
    </ion-content>
  </ion-app>
  `
}

export const Default = Template.bind({});
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
  collapsed: {
    collapsed: true,
    control: { type: 'boolean' },
    description: 'Define o estado do componente.',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  iconClick: {
    iconClick: false,
    control: { type: 'boolean' },
    description: 'Define o se o click para abrir/fechar deve ser somente no ícone.',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
};
