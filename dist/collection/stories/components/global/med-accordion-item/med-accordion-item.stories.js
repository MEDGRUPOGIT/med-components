import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColor } from '../../../constants';

export default {
  title: 'Components/Core/Accordion Item',
  decorators: [withDesign],
};

const Template = ({dsColor, background, icon, noBorder}) => {
  return html`
    <style>

      .med-accordion-item__middle {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
      }

      .med-accordion-item__end {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }

    </style>

    <ion-app>
      <ion-content>

        <!-- component -->

        <med-accordion-list single-open="false">

          <med-accordion-item slots-toggle=[middle,end]" .dsColor=${dsColor} .background=${background} .icon=${icon} ?no-border=${noBorder}>

            <ion-icon slot="start" name="med-video" class="med-icon med-accordion-aulas__start"></ion-icon>

            <div class="med-accordion-item__middle" slot="middle">
              <med-caption ds-size="xxs" ds-color="neutral-5">
                <h3>84% concluído</h3>
              </med-caption>
            </div>

            <div class="med-accordion-item__end" slot="end">
              <ion-button class="med-list-item-accordion__button" ds-color="aula" ds-name="tertiary" ds-size="xs">
                <ion-icon slot="icon-only" class="med-icon med-rotate" name="med-cima"></ion-icon>
              </ion-button>
            </div>


            <div slot="content" class="med-accordion__content">

            </div>

          </med-accordion-item>

        </med-accordion-list>
        <!-- component -->

      </ion-content>
    </ion-app>
  `
}

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=2808%3A8916',
  },
}
Default.argTypes = {
  dsColor: {
    options: MedColor,
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: 'MedColor' },
      defaultValue: { summary: 'undefined' },
    },
  },
  icon: {
    options: [undefined, 'left', 'right'],
    control: { type: 'radio'},
    description: "Define a posição do ícone de abertura do componente.",
    defaultValue: undefined,
    table: {
      type:  { summary: 'left | right' },
      defaultValue: { summary: 'undefined' },
    },
  },
  noBorder: {
    control: { type: 'boolean' },
    description: 'Define a variação da borda do componente.',
    defaultValue: false,
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  background: {
    control: { type: 'boolean' },
    description: 'Define se o componente irá ter background quando aberto.',
    defaultValue: false,
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
};
