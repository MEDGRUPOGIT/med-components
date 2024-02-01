import { html } from "lit-html";
import { MedColors } from "../../../../@templarios/templarios";

export default {
  title: "Components/Loader",
};

const Template = ({ "ds-color": dsColor }) => {
  return html`
    <ion-app>
      <ion-content>
        <!-- component markdown -->
        <tp-loader ds-color=${dsColor} ds-name="secondary"></tp-loader>
        <!-- component markdown -->
      </ion-content>
    </ion-app>
  `;
};

export const Secondary = Template.bind({});
Secondary.argTypes = {
  "ds-color": {
    options: Object.values(MedColors),
    control: { type: "select" },
    description: "Define a cor do componente.",
    table: {
      type: { summary: Object.values(MedColors).join(" |") },
      defaultValue: { summary: "undefined" },
    },
  },
};
