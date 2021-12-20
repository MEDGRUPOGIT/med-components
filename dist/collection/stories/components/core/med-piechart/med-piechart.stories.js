import { html } from "lit-html";
import { withDesign } from "storybook-addon-designs";
import { MedColor } from "../../../constants";

export default {
  title: "Components/Core/Piechart",
  decorators: [withDesign],
};

const Template = ({ dsColor, active, text, value }) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="flex-center">

          <!-- component -->
          <med-piechart .dsColor=${dsColor} ?active=${active} text=${text}> value=${value}</med-piechart>
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
  dsColor: {
    options: MedColor,
    control: { type: "select" },
    description: "Define a cor do componente.",
    table: {
      type: { summary: "MedColor" },
      defaultValue: { summary: "undefined" },
    },
  },
  active: {
    active: false,
    control: { type: "boolean" },
    description: "Define o estado do componente.",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "undefined" },
    },
  },
  text: {
    control: { type: 'text' },
    defaultValue: 'nef 1',
  },
  value: {
    defaultValue: '50',
    control: { type: 'range', min: 0, max: 100, step: 1 },
    description: 'Define o valor do componente.'
  },
};
