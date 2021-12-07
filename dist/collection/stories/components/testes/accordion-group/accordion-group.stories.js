import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Testes/Accordion Group',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <style>
      h3, p {
        color: #fff;
        margin: 0;
        padding: 0;
      }
      div {
        padding: 16px;
      }
    </style>
    <ion-app>
      <ion-content>

        <accordion-group>
          <accordion-item>
            <h3 slot="header">Overview</h3>
            <div slot="content">
              <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum iste libero non aliquid, vero laudantium labore cumque commodi voluptates minus excepturi saepe at recusandae quos dolores ipsa eius mollitia temporibus. Quibusdam ad nemo cumque eius impedit quos, facere dolorum fugit, numquam unde omnis rem! Cupiditate quia necessitatibus repudiandae rerum omnis! Quae ullam nesciunt perferendis nam, quod quidem beatae mollitia vel tempore ab exercitationem laboriosam unde quo eaque debitis ducimus eligendi quibusdam consequuntur sunt quas esse commodi. Hic quo, iure totam error dolor asperiores molestias assumenda ut commodi voluptatem dicta enim debitis modi, vero eligendi! Placeat non provident at mollitia aliquam.
              </p>
            </div>
          </accordion-item>

          <accordion-item>
            <h3 slot="header">Overview</h3>
            <div slot="content">
              <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum iste libero non aliquid, vero laudantium labore cumque commodi voluptates minus excepturi saepe at recusandae quos dolores ipsa eius mollitia temporibus. Quibusdam ad nemo cumque eius impedit quos, facere dolorum fugit, numquam unde omnis rem! Cupiditate quia necessitatibus repudiandae rerum omnis! Quae ullam nesciunt perferendis nam, quod quidem beatae mollitia vel tempore ab exercitationem laboriosam unde quo eaque debitis ducimus eligendi quibusdam consequuntur sunt quas esse commodi. Hic quo, iure totam error dolor asperiores molestias assumenda ut commodi voluptatem dicta enim debitis modi, vero eligendi! Placeat non provident at mollitia aliquam.
              </p>
            </div>
          </accordion-item>

          <accordion-item>
            <h3 slot="header">Overview</h3>
            <div slot="content">
              <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum iste libero non aliquid, vero laudantium labore cumque commodi voluptates minus excepturi saepe at recusandae quos dolores ipsa eius mollitia temporibus. Quibusdam ad nemo cumque eius impedit quos, facere dolorum fugit, numquam unde omnis rem! Cupiditate quia necessitatibus repudiandae rerum omnis! Quae ullam nesciunt perferendis nam, quod quidem beatae mollitia vel tempore ab exercitationem laboriosam unde quo eaque debitis ducimus eligendi quibusdam consequuntur sunt quas esse commodi. Hic quo, iure totam error dolor asperiores molestias assumenda ut commodi voluptatem dicta enim debitis modi, vero eligendi! Placeat non provident at mollitia aliquam.
              </p>
            </div>
          </accordion-item>
        </accordion-group>

      </ion-content>
    </ion-app>
  `
}

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}
Default.argTypes = {
};
