import { html } from 'lit-html';
import { MedColors } from '../../../../@templarios/templarios';

export default {
  title: 'Components/Compositions/List',
};

const Template = ({ dsColor, titulo, label, selected }) => {
  return html`
    <ion-app>
      <ion-content>

        <!-- component -->
        <med-list margin="sm">
          <med-list-item .dsColor=${dsColor} .titulo=${titulo} .label=${label} .selected=${selected}>
            <ion-checkbox slot="start"></ion-checkbox>
          </med-list-item>

          <med-list-item .dsColor=${dsColor} .titulo=${titulo} .label=${label} .selected=${selected}>
            <ion-checkbox slot="start"></ion-checkbox>
          </med-list-item>

          <med-list-item-accordion .dsColor=${dsColor} .titulo=${titulo} .label=${label} .selected=${selected}>

            <ion-checkbox slot="start"></ion-checkbox>

            <med-list-item .dsColor=${dsColor} slot="end" titulo="Titulo" label="label">
              <ion-checkbox slot="start"></ion-checkbox>
            </med-list-item>
            <med-list-item .dsColor=${dsColor} slot="end" titulo="Titulo" label="label">
              <ion-checkbox slot="start"></ion-checkbox>
            </med-list-item>
            <med-list-item .dsColor=${dsColor} slot="end" titulo="Titulo" label="label">
              <ion-checkbox slot="start"></ion-checkbox>
            </med-list-item>

          </med-list-item-accordion>

          <med-list-item .dsColor=${dsColor} .titulo=${titulo} .label=${label} .selected=${selected}>
            <ion-checkbox slot="start"></ion-checkbox>
          </med-list-item>

          <med-list-item .dsColor=${dsColor} .titulo=${titulo} .label=${label} .selected=${selected}>
            <ion-checkbox slot="start"></ion-checkbox>
          </med-list-item>
        </med-list>
        <!-- component -->

      </ion-content>
    </ion-app>
  `
}

export const Default = Template.bind({});
Default.argTypes = {
  dsColor: {
    options: Object.values(MedColors),
    control: { type: 'select'},
    description: "Define a cor.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  titulo: {
    control: { type: 'text' },
    defaultValue: 'Teste',
  },
  label: {
    control: { type: 'text' },
    defaultValue: 'Teste',
  },
  selected: {
    control: { type: 'boolean' },
    description: 'Define o estado do componente.',
    defaultValue: false,
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
};
