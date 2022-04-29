import { html } from "lit-html";
import { withDesign } from "storybook-addon-designs";
import { MedColors } from "../../../../global/templarios/color.enum";

export default {
  title: "Components/Compositions/Piechart (Chart Download)",
  decorators: [withDesign],
};

const Template = ({ dsColor, dsSize , download, downloaded, label, value, downloadProgress, identification, index, hideDownload }) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="full-height-flex">

          <!-- component markdown -->
          <med-piechart
            .dsColor=${dsColor}
            .dsSize=${dsSize}
            ?download=${download}
            ?downloaded=${downloaded}
            label=${label}
            value=${value}
            .downloadProgress=${downloadProgress}
            .index=${index}
            identification=${identification}
            ?hide-download=${hideDownload}
          >
          </med-piechart>
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
  downloadProgress: {
    defaultValue: '40',
    control: { type: 'range', min: 0, max: 100, step: 1 },
    description: 'Define o progresso de download.'
  },
  index: {
    control: { type: 'text' },
    description: 'Define qual a posição do array se encontra esse chart. Opcional.',
    table: {
      type:  { summary: 'number' },
      defaultValue: { summary: 'undefined' },
    },
  },
  identification: {
    control: { type: 'number' },
    description: 'Identificador do pie-chart para emissão de eventos.',
    table: {
      type:  { summary: 'number | string | undefined' },
      defaultValue: { summary: 'undefined' },
    },
  },
  hideDownload: {
    download: false,
    control: { type: "boolean" },
    description: "Esconde o download do pie-chart.",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "undefined" },
    },
  },
};
