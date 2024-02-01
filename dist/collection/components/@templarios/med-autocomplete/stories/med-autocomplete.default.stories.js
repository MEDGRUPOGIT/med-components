import { html } from "lit-html";

export default {
  title: "Components/Autocomplete",
};

const Template = ({ dsName }) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="ion-padding">
          <!-- component markdown -->
          <med-autocomplete ds-name=${dsName}>
            <med-dropdown class="tp-scroll" ds-name=${dsName}>
              <med-item>
                <med-type token="p14">Lorem ipsum Dolor</med-type>
              </med-item>
              <med-item>
                <med-type token="p14">Lorem ipsum Dolor</med-type>
              </med-item>
              <med-item>
                <med-type token="p14">Lorem ipsum Dolor</med-type>
              </med-item>
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
            <ion-searchbar
              ds-color="neutral-15"
              ds-name=${dsName}
              mode="md"
              search-icon="med-busca"
              clear-icon="med-fechar"
              placeholder="Placeholder"
            ></ion-searchbar>
          </med-autocomplete>
          <!-- component markdown -->
        </div>
      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.argTypes = {
  dsName: {
    options: [undefined, "secondary"],
    control: { type: "radio" },
    description: "Define a variação do componente.",
    table: {
      type: { summary: "secondary" },
      defaultValue: { summary: "undefined" },
    },
  },
};
