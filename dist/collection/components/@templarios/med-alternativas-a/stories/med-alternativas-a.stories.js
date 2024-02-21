import { html } from 'lit-html';

const meta = {
  title: 'Components/Alternativas Skin A',
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
          Riscada: false,
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
      permiteDesmarcar: false,
    },
  },
};

export default meta;

export const SkinA = {
  render: ({ ...args }) => {
    setTimeout(() => {
      const medAlternativasA = document.querySelector('med-alternativas-a');

      for (const key in args.alternativas) {
        medAlternativasA[key] = args.alternativas[key];
      }
    }, 0);

    return html`
      <ion-app>
        <ion-content>
          <!-- component markdown -->
          <med-alternativas-a></med-alternativas-a>
          <!-- component markdown -->
        </ion-content>
      </ion-app>
    `;
  },
};
