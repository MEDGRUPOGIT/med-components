import { html } from 'lit-html';

import { MedColors } from '../../../../@templarios/templarios';

const meta = {
  title: 'Components/Alternativas',
  parameters: {
    actions: {
      handles: ['medChange', 'medClick', 'medGalleryRequest', 'medRiscada'],
    },
  },
  argTypes: {
    alternativas: {
      control: { type: 'array' },
      description:
        "Define a listagem de alternativas. **OBS:** paa visualizar as alternativas com imagem basta colocar a string 'https://via.placeholder.com/500' no atributo **alternativas[0]['Imagem']** no objeto ao lado.",
      defaultValue: undefined,
      table: {
        type: { summary: 'MedAlternativasInterface' },
        defaultValue: { summary: 'undefined' },
      },
    },
    dsColor: {
      options: Object.values(MedColors),
      control: { type: 'select' },
      description: 'Define a cor do componente.',
      table: {
        type: { summary: Object.values(MedColors).join(' |') },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    alternativas: {
      alternativas: [
        {
          Alternativa: 'A',
          Enunciado:
            'Enunciado B Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.',
          Imagem: '',
          Porcentagem: 0.55,
          Riscada: true,
        },
        {
          Alternativa: 'B',
          Enunciado:
            'Enunciado B Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.',
          Imagem: null,
          Porcentagem: 0.55,
        },
        {
          Alternativa: 'C',
          Enunciado:
            'Enunciado C Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.',
          Imagem: '',
          Porcentagem: 0.3,
        },
        {
          Alternativa: 'D',
          Enunciado:
            'Enunciado D Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.',
          Imagem: null,
          Porcentagem: 0.05,
        },
        {
          Alternativa: 'E',
          Enunciado:
            'Enunciado E Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.',
          Imagem: '',
          Porcentagem: 0,
        },
      ],
      alternativaSelecionada: null,
      respostaCorreta: 'C',
      mostraResposta: true,
      permiteRiscar: true,
      dsSkinConfig: { alternativas: 'A' },
    },
  },
};

export default meta;

export const Alternativas = {
  render: ({ ...args }) => {
    setTimeout(() => {
      const medAlternativas = document.querySelector('med-alternativas');

      for (const key in args.alternativas) {
        medAlternativas[key] = args.alternativas[key];
      }
    }, 0);

    return html`
      <ion-app>
        <ion-content>
          <!-- component markdown -->
          <med-alternativas ds-color="${args.dsColor}"></med-alternativas>
          <!-- component markdown -->
        </ion-content>
      </ion-app>
    `;
  },
};
