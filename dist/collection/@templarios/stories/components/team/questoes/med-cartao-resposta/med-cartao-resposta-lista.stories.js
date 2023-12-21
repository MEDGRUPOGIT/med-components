import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Team/Questões/Cartão Resposta/Lista',
  decorators: [withDesign],
};

const Template = ({isFlex}) => {
  const generateCartaoResposta = () => {
    let cartaoResposta = [];

    cartaoResposta = [
      { index: '01'},
      { index: '02', ativa: true },
      { index: '03', color: 'fb-success' },
      { index: '04', color: 'fb-caution' },
      { index: '05', color: 'fb-warning', anulada: true },
      { index: '06', impressa: true },
    ];

    for (let index = 6; index < 100; index++) {
      if(index < 10) {
        cartaoResposta.push({
          index: '0' + index
        })
      } else {
        cartaoResposta.push({
          index: index
        })
      }
    }

    return cartaoResposta;
  };

  const items = generateCartaoResposta();

  const itemTemplates = [];
  for (const item of items) {
    itemTemplates.push(html`<med-cartao-resposta-item .dsColor=${item.color} ?ativa=${item.ativa} ?impressa=${item.impressa} ?anulada=${item.anulada}>${item.index}</med-cartao-resposta-item>`);
  }

  return html`
    <ion-app>
      <ion-content>

        <!-- component markdown -->
        <med-cartao-resposta-lista ?is-flex=${isFlex}> ${itemTemplates} </med-cartao-resposta-lista>
        <!-- component markdown -->

      </ion-content>
    </ion-app>
  `
}

export const Lista = Template.bind({});
Lista.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}
Lista.argTypes = {
  isFlex: {
    control: { type: 'boolean' },
    description: 'Define a estilização do componente',
    defaultValue: false,
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
};
