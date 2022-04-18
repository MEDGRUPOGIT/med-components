import { action } from "@storybook/addon-actions";
import { html } from "lit-html";
import { withDesign } from "storybook-addon-designs";
import { popoverController } from "../../../../../dist/ionic/index.esm.js";
import { MedFontSize } from "../../../../global/templarios/font-size.enum";

export default {
  title: "Components/Compositions/@OK Font Zoom (Font Size Range)",
  decorators: [withDesign],
};

let call = false;
let currentPopover = null;

const createPopover = async (ev, value) => {
  popoverController
    .create({
      component: "med-font-zoom",
      cssClass: "med-popover med-popover--font-zoom",
      componentProps: {
        value,
        emitter: {
          emit: (values) => {
            action("emitter")(values);
          },
        },
      },
      mode: "ios",
      showBackdrop: true,
      event: ev,
    })
    .then((popover) => {
      currentPopover = popover;
      call = true;
      popover.present();
    });
};

const Template = ({ value }) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="full-height-flex">

          <!-- component markdown -->
          <ion-button ds-name="tertiary" ds-size="xs" @click="${(e) => createPopover(e, value)}">
            <ion-icon class="med-icon" slot="icon-only" name="med-fontemaior"></ion-icon>
          </ion-button>
          <!-- component markdown -->

        </div>
      </ion-content>
    </ion-app>
  `;
};

export const MedFontZoom = Template.bind({});
MedFontZoom.parameters = {
  design: {
    type: "figma",
    url: "",
  },
  actions: {
    handles: ['values'],
  },
};

MedFontZoom.argTypes = {
  value: {
    options: Object.values(MedFontSize),
    control: { type: "select" },
    description: "Define o tamanho da fonte.",
    defaultValue: "16px",
    table: {
      type: { summary: Object.values(MedFontSize).join(' |') },
      defaultValue: { summary: "MedFontSize.XS" },
    },
  },
};
