import { html } from "lit-html";
import { withDesign } from "storybook-addon-designs";
import { MedColors } from "../../../../templarios";

export default {
  title: "Components/Core/Loader",
  decorators: [withDesign],
};

const Template = ({ "ds-color": dsColor, fixed }) => {
  return html`
    <ion-app>
      <ion-content>
        <!-- component markdown -->
        <tp-loader ds-color=${dsColor} fixed=${fixed}></tp-loader>
        <!-- component markdown -->
      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.argTypes = {
  "ds-color": {
    options: Object.values(MedColors),
    control: { type: "select" },
    description: "Define a cor do componente.",
    table: {
      type: { summary: Object.values(MedColors).join(" |") },
      defaultValue: { summary: "undefined" },
    },
  },
  fixed: {
    control: { type: "boolean" },
    description: "Define a posição do componente.",
    defaultValue: false,
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "undefined" },
    },
  },
};
