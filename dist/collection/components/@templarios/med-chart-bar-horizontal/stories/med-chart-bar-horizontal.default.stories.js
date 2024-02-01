import { html } from "lit-html";
import { MedColors } from '../../../../@templarios/templarios';

export default {
  title: "Components/Chart Bar Horizontal",
};

const Template = ({
  dsColor,
  hideValue,
  dsSize,
  label,
  value,
  labelContent,
}) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="full-height-grid">
          <!-- component markdown -->
          <med-chart-bar-horizontal
            .dsColor=${dsColor}
            ?hide-value=${hideValue}
            .dsSize=${dsSize}
            .label=${label}
            value=${value}
            .labelContent=${labelContent}
          >
          </med-chart-bar-horizontal>
          <!-- component -->
        </div>
      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.argTypes = {
  dsColor: {
    options: Object.values(MedColors),
    control: { type: "select" },
    description: "Define a cor do componente.",
    table: {
      type: { summary: Object.values(MedColors).join(" |") },
      defaultValue: { summary: "undefined" },
    },
  },
  hideValue: {
    control: { type: "boolean" },
    description: "Define a visibilidade do do valor da porcentagem.",
    defaultValue: false,
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "undefined" },
    },
  },
  label: {
    control: { type: "boolean" },
    description: "Define a visibilidade do label.",
    defaultValue: true,
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "undefined" },
    },
  },
  value: {
    defaultValue: 150,
    control: { type: "range", min: 0, max: 150, step: 1 },
    description: "Define a porcentagem a ser mostrada.",
    table: {
      type: { summary: "number" },
      defaultValue: { summary: "undefined" },
    },
  },
  labelContent: {
    control: { type: "text" },
    description: "Define a url da imagem, se existir.",
    defaultValue: "",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "undefined" },
    },
  },
};
