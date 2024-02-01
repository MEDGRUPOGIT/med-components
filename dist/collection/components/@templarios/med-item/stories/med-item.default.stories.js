import { html } from 'lit-html';
import { MedColors } from '../../../../@templarios/templarios';
import { MedIcons } from '../../assets/constants';

export default {
  title: 'Components/Item',
};

const Template = ({ dsColor, disabled, noPadding, contain, icon }) => {
  return html`
    <ion-app>
      <ion-content>

        <div class="ion-padding">
          <!-- component markdown -->
          <med-item .dsColor=${dsColor} ?disabled=${disabled} ?no-padding=${noPadding} ?contain=${contain} router-link="asaasa">
            <med-type token="p14">Lorem ipsum Dolor</med-type>
          </med-item>
          <!-- component markdown -->
        </div>

        <div class="ion-padding">
          <!-- component markdown -->
          <ion-radio-group value="value1">
            <med-item .dsColor=${dsColor} ?disabled=${disabled} ?no-padding=${noPadding} ?contain=${contain}>
              <ion-radio slot="start" value="value1"></ion-radio>
              <med-type token="p14">Lorem ipsum Dolor</med-type>
            </med-item>
            <med-item .dsColor=${dsColor} ?disabled=${disabled} ?no-padding=${noPadding} ?contain=${contain}>
              <med-type token="p14">Lorem ipsum Dolor</med-type>
              <ion-radio slot="end" value="value2"></ion-radio>
            </med-item>
          </ion-radio-group>
          <!-- component markdown -->
        </div>

        <div class="ion-padding">
          <!-- component markdown -->
          <med-item .dsColor=${dsColor} ?disabled=${disabled} ?no-padding=${noPadding} ?contain=${contain}>
            <ion-checkbox slot="start"></ion-checkbox>
            <med-type token="p14">Lorem ipsum Dolor</med-type>
          </med-item>
          <med-item .dsColor=${dsColor} ?disabled=${disabled} ?no-padding=${noPadding} ?contain=${contain}>
            <med-type token="p14">Lorem ipsum Dolor</med-type>
            <ion-checkbox slot="end"></ion-checkbox>
          </med-item>
          <!-- component markdown -->
        </div>

        <div class="ion-padding">
          <!-- component markdown -->
          <med-item .dsColor=${dsColor} ?disabled=${disabled} ?no-padding=${noPadding} ?contain=${contain}>
            <ion-toggle slot="start"></ion-toggle>
            <med-type token="p14">Lorem ipsum Dolor</med-type>
          </med-item>
          <med-item .dsColor=${dsColor} ?disabled=${disabled} ?no-padding=${noPadding} ?contain=${contain}>
            <med-type token="p14">Lorem ipsum Dolor</med-type>
            <ion-toggle slot="end"></ion-toggle>
          </med-item>
          <!-- component markdown -->
        </div>

        <div class="ion-padding">
          <!-- component markdown -->
          <med-item .dsColor=${dsColor} ?disabled=${disabled} ?no-padding=${noPadding} ?contain=${contain}>
            <ion-icon class="med-icon" slot="start" name=${icon}></ion-icon>
            <med-type token="p14">Lorem ipsum Dolor</med-type>
          </med-item>
          <med-item button .dsColor=${dsColor} ?disabled=${disabled} ?no-padding=${noPadding} ?contain=${contain}>
            <med-type token="p14">Lorem ipsum Dolor</med-type>
            <med-type token="p14" slot="end">Lorem ipsum Dolor</med-type>
            <ion-icon class="med-icon" slot="end" name=${icon}></ion-icon>
          </med-item>
          <!-- component markdown -->
        </div>

        <div class="ion-padding">
          <!-- component markdown -->
          <med-item .dsColor=${dsColor} ?disabled=${disabled} ?no-padding=${noPadding} ?contain=${contain}>
            <ion-button ds-name="tertiary" ds-size="xxs" slot="start">
              <ion-icon slot="icon-only" class="med-icon" name=${icon}></ion-icon>
            </ion-button>
            <med-type token="p14">Lorem ipsum Dolor</med-type>
          </med-item>
          <med-item .dsColor=${dsColor} ?disabled=${disabled} ?no-padding=${noPadding} ?contain=${contain}>
            <med-type token="p14">Lorem ipsum Dolor</med-type>
            <ion-button ds-name="tertiary" ds-size="xxs" slot="end">
              <ion-icon slot="icon-only" class="med-icon" name=${icon}></ion-icon>
            </ion-button>
          </med-item>
          <!-- component markdown -->
        </div>

      </ion-content>
    </ion-app>
  `
}

export const Default = Template.bind({});
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
  noPadding: {
    noPadding: false,
    control: { type: 'boolean' },
    description: 'Define o padding do componente.',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  contain: {
    contain: false,
    control: { type: 'boolean' },
    description: 'Define a area de clique do componente.',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  disabled: {
    disabled: false,
    control: { type: 'boolean' },
    description: 'Define o estado disabled do componente.',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  icon: {
    options: MedIcons,
    control: { type: 'select'},
    defaultValue: 'med-baixo',
    description: '**Atributo utilizado apenas no storybook. Não é um atributo do componente!.**',
    table: {
      type:  { summary: ['string'] },
      defaultValue: { summary: 'undefined' },
    },
  },
};
