import { html } from "lit-html";
import { withDesign } from "storybook-addon-designs";
import { MedColor } from "../../../constants";

export default {
  title: "Components/Global/Piechart",
  decorators: [withDesign],
};

const Template = ({ dsColor, active, progresso, downloadProgresso }) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="flex-center">
          <!-- component -->
          <med-piechart .dsColor=${dsColor} ?active=${active} progresso=${progresso} download-progresso=${downloadProgresso}></med-piechart>
          <!-- component -->
        </div>
      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};
Default.argTypes = {
  active: {
    active: false,
    control: { type: "boolean" },
    description: "Define o estado de active do componente.",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "undefined" },
    },
  },
  dsColor: {
    options: MedColor,
    control: { type: "select" },
    description: "Define a cor do componente.",
    table: {
      type: { summary: "MedColor" },
      defaultValue: { summary: "undefined" },
    },
  },
  progresso: {
    defaultValue: "50",
    control: { type: "range", min: 0, max: 100, step: 1 },
    description: "Define a o progresso a ser mostrado.",
  },
  downloadProgresso: {
    defaultValue: '0',
    control: { type: 'range', min: 0, max: 100, step: 1 },
    description: 'Define a porcentagem de download do botão de download.'
  },
  /* downloading: {
    downloading: false,
    control: { type: "boolean" },
    description: "Define o estado de active do componente.",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "undefined" },
    },
  },
  downloaded: {
    downloaded: false,
    control: { type: "boolean" },
    description: "Define o estado de active do componente.",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "undefined" },
    },
  }, */
};
