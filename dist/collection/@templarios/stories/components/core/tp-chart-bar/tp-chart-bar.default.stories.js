import { html } from "lit-html";
import { withDesign } from "storybook-addon-designs";
import { MedColors } from "../../../../templarios";

export default {
  title: "Components/Core/Chart Bar 2",
  decorators: [withDesign],
};

const Template = ({
  dsColor,
  dsName,
  label,
  labelSize,
  height,
  bar,
  hasMarker,
  marker,
}) => {
  setInterval(() => {
    const chartBar = document.querySelector("tp-chart-bar");

    chartBar.bar = bar.valores;

    chartBar.marker = marker.valores;
  }, 0);

  return html`
    <style>
      .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        padding: 24px;
      }
    </style>

    <ion-app>
      <ion-content>
        <div class="wrapper">
          <!-- component markdown -->
          <tp-chart-bar
            label=${label}
            .labelSize=${labelSize}
            .dsColor=${dsColor}
            .dsName=${dsName}
            .hasMarker=${hasMarker}
            .height=${height}
          >
          </tp-chart-bar>
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
    url: "https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=11906%3A47663",
  },
};
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
  dsName: {
    options: [undefined, "secondary"],
    control: { type: "radio" },
    description: "Define a variação do componente.",
    table: {
      type: { summary: "secondary" },
      defaultValue: { summary: "undefined" },
    },
  },
  label: {
    control: { type: "text" },
    description: "Define o texto descritivo da barra.",
    defaultValue: "label",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "label" },
    },
  },
  labelSize: {
    control: { type: "number" },
    description: "Define o tamanho da fonte do label.",
    defaultValue: 10,
    table: {
      type: { summary: "number" },
      defaultValue: { summary: 10 },
    },
  },
  height: {
    control: { type: "number" },
    description: "Define a altura do componente.",
    defaultValue: 200,
    table: {
      type: { summary: "number" },
      defaultValue: { summary: 200 },
    },
  },
  bar: {
    description: "Define os valores da barra interna.",
    defaultValue: {
      valores: {
        color: "med-color-brand",
        value: 47,
      },
    },
    control: { type: "object" },
    description: "Define os valores...",
    table: {
      type: { summary: "TpChartBarItem" },
      defaultValue: { summary: "undefined" },
    },
  },
  hasMarker: {
    control: { type: "boolean" },
    description:
      "Define se o componente vai mostrar um marcador de comparação.",
    defaultValue: true,
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "undefined" },
    },
  },
  marker: {
    description: "Define os valores do marcador.",
    defaultValue: {
      valores: {
        color: "med-color-fb-caution",
        value: 80,
      },
    },
    control: { type: "object" },
    description: "Define os valores...",
    table: {
      type: { summary: "TpChartBarItem" },
      defaultValue: { summary: "undefined" },
    },
  },
};
