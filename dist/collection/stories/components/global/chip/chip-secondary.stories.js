import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColor, MedIcons } from '../../../constants';

export default {
  title: 'Components/Global/Chip',
  decorators: [withDesign],
};

const Template = ({ dsColor, neutral, iconLeft, iconRight, slot }) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="flex-center">

          <!-- component -->
          <ion-chip ds-name="secondary" .dsColor=${dsColor}>
            <ion-label>${slot}</ion-label>
          </ion-chip>

          <ion-chip ds-name="secondary" .dsColor=${dsColor}>
            <ion-icon class="med-icon" name=${iconLeft}></ion-icon>
            <ion-label>${slot}</ion-label>
          </ion-chip>

          <ion-chip ds-name="secondary" .dsColor=${dsColor}>
            <ion-icon class="med-icon" name=${iconLeft}></ion-icon>
            <ion-label>${slot}</ion-label>
            <ion-icon class="med-icon" name=${iconRight}></ion-icon>
          </ion-chip>
          <!-- component -->

        </div>
      </ion-content>
    </ion-app>
  `
}

export const Secondary = Template.bind({});
Secondary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=1981%3A4566',
  },
}
Secondary.argTypes = {
  dsColor: {
    options: MedColor,
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: 'MedColor' },
      defaultValue: { summary: 'undefined' },
    },
  },
  iconLeft: {
    options: MedIcons,
    control: { type: 'select'},
    defaultValue: 'med-esquerda',
    description: '**Atributo utilizado apenas no storybook. Não é um atributo do componente!.**',
    table: {
      type:  { summary: ['string'] },
      defaultValue: { summary: 'med-esquerda' },
    },
  },
  iconRight: {
    options: MedIcons,
    control: { type: 'select'},
    defaultValue: 'med-direita',
    description: '**Atributo utilizado apenas no storybook. Não é um atributo do componente!.**',
    table: {
      type:  { summary: ['string'] },
      defaultValue: { summary: 'med-direita' },
    },
  },
  slot: {
    control: { type: 'text' },
    defaultValue: 'UNIFESP 2020',
  },
};
