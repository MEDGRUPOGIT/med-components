import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../global/templarios/color.enum";

export default {
  title: 'Components/Core (Revisado: abril 2022)/Alert Fixed',
  decorators: [withDesign],
};

const TemplateDefault = ({dsColor, dsName}) => {
  return html`
    <ion-app>
      <ion-content>

        <!-- component markdown -->
        <med-alert-fixed .dsColor=${dsColor} .dsName=${dsName}></med-avatar>
        <!-- component markdown -->

      </ion-content>
    </ion-app>
  `
}

export const Default = TemplateDefault.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=13882%3A55350',
  },
}
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
  dsName: {
    options: ['offline', 'atualizar'],
    control: { type: 'radio'},
    defaultValue: 'offline',
    description: "Define a variação do componente.",
    table: {
      type:  { summary: 'offline | atualizar' },
      defaultValue: { summary: 'base' },
    },
  },
  labelOffline: {
    control: { type: 'text' },
    description: 'Define o texto da variação offline.',
    defaultValue: 'Você está offline. Conecte-se para acessar o conteúdo.',
    table: {
      type:  { summary: 'string' },
      defaultValue: { summary: 'Você está offline. Conecte-se para acessar o conteúdo.' },
    },
  },
  labelAtualizar: {
    control: { type: 'text' },
    description: 'Define o texto da variação atualizar.',
    defaultValue: 'Versão desatualizada',
    table: {
      type:  { summary: 'string' },
      defaultValue: { summary: 'Versão desatualizada' },
    },
  },
};
