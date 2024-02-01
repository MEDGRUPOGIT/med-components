import { html } from 'lit-html';
import { MedColors } from '../../../../@templarios/templarios';

export default {
  title: 'Components/Cartão Resposta',
};

const Template = ({dsColor, ativa, impressa, anulada, slot}) => {
  return html`
    <ion-app>
      <ion-content>
        <!-- component -->
          <med-cartao-resposta-item .dsColor=${dsColor} ?ativa=${ativa} ?impressa=${impressa} ?anulada=${anulada}>
            ${slot}
          </med-cartao-resposta-item>
        </med-cartao-resposta-lista>
        <!-- component -->
      </ion-content>
    </ion-app>
  `
}

export const AnswerCard = Template.bind({});
AnswerCard.argTypes = {
  dsColor: {
    options: Object.values(MedColors),
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  anulada: {
    control: { type: 'boolean' },
    description: 'Define o estado do componente para anulado.',
    defaultValue: false,
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  impressa: {
    control: { type: 'boolean' },
    description: 'Define o estado do componente para impresso.',
    defaultValue: false,
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  ativa: {
    control: { type: 'boolean' },
    description: 'Define o estado do componente para ativo.',
    defaultValue: false,
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  slot: {
    control: { type: 'text' },
    defaultValue: '01',
  },
};
