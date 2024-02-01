import { html } from 'lit-html';
import { MedColors } from '../../../../@templarios/templarios';

export default {
  title: 'Components/Alert Fixed',
};

const TemplateDefault = ({dsColor, dsName}) => {
  return html`
    <ion-app>
      <ion-content>

        <!-- component markdown -->
        <med-alert-fixed .dsColor=${dsColor} .dsName=${dsName}></med-alert-fixed>
        <!-- component markdown -->

      </ion-content>
    </ion-app>
  `
}

export const Default = TemplateDefault.bind({});
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
