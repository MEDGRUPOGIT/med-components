import { html } from "lit-html";
import { withDesign } from "storybook-addon-designs";
import { MedColors } from "../../../../global/templarios/color.enum";

export default {
  title: "Components/Compositions/@OK Piechart (Chart Download)",
  decorators: [withDesign],
};

const Template = ({ dsColor, dsSize , download, downloaded, label, value }) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="full-height-flex">

          <!-- component markdown -->
          <med-piechart .dsColor=${dsColor} .dsSize=${dsSize} ?download=${download} ?downloaded=${downloaded} label=${label} value=${value}></med-piechart>
          <!-- component markdown -->

        </div>
      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=12147%3A42985",
  },
};
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
    options: [undefined, 'sm'],
    control: { type: 'radio'},
    description: "Define a variação de tamanho componente.",
    table: {
      type:  { summary: 'sm' },
      defaultValue: { summary: 'undefined' },
    },
  },
  download: {
    download: false,
    control: { type: "boolean" },
    description: "Define o estado de download do componente.",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "undefined" },
    },
  },
  downloaded: {
    downloaded: false,
    control: { type: "boolean" },
    description: "Define o estado de downloaded do componente.",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "undefined" },
    },
  },
  label: {
    control: { type: 'text' },
    description: 'Define o texto do componente',
    defaultValue: 'nef 1',
    table: {
      type:  { summary: 'string' },
      defaultValue: { summary: 'undefined' },
    },
  },
  value: {
    defaultValue: '50',
    control: { type: 'range', min: 0, max: 100, step: 1 },
    description: 'Define a porcentagem a ser mostrada.'
  },
};
