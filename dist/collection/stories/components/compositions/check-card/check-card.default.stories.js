import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColor } from "../../../constants";

export default {
  title: 'Components/Compositions/Check Card',
  decorators: [withDesign],
};

const Template = ({ dsColor, data }) => {
  setTimeout(() => {
    document.querySelector('med-check-card').data = data;
  }, 1);

  return html`
    <ion-app>
      <ion-content>
        <div class="flex-center flex-center--xs">

          <!-- component -->
          <med-check-card .dsColor=${dsColor}></med-check-card>
          <!-- component -->

        </div>
      </ion-content>
    </ion-app>
    `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/1YvPOL5j7kW9Btmgkh2YzA/MEDSmart?node-id=6430%3A32282',
  },
};
Default.argTypes = {
  dsColor: {
    options: MedColor,
    control: { type: "select" },
    description: "Define a cor do componente.",
    table: {
      type: { summary: "MedColor" },
      defaultValue: { summary: "undefined" },
    },
  },
  data: {
    defaultValue: {
      titulo: 'Título',
      categoria: 'Categoria',
      horaInicial: '21h00',
      horaFinal: '23h00',
      finalizada: false,
      iconName: 'med-marcar',
      alert: false,
    }
  },
};

