import { html } from 'lit-html';

export default {
  title: 'Components/Dropdown',
};

const Template = ({ dsName }) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="ion-padding">

          <!-- component markdown -->
          <med-dropdown-container ds-name=${dsName}>
            <med-dropdown ds-name=${dsName}>
              <med-item>
                <med-type token="p14">Lorem ipsum Dolor</med-type>
              </med-item>
              <med-item>
                <med-type token="p14">Lorem ipsum Dolor</med-type>
              </med-item>
              <med-item>
                <med-type token="p14">Lorem ipsum Dolor</med-type>
              </med-item>
            </med-dropdown>
            <ion-select mode="md" ds-name=${dsName} placeholder="Placeholder"></ion-select>
          </med-dropdown-container>
          <!-- component markdown -->

        </div>
      </ion-content>
    </ion-app>
  `
}

export const Default = Template.bind({});
Default.argTypes = {
  dsName: {
    options: [undefined, 'secondary'],
    control: { type: 'radio'},
    description: "Define a variação do componente.",
    table: {
      type:  { summary: 'secondary' },
      defaultValue: { summary: 'undefined' },
    },
  },
};
