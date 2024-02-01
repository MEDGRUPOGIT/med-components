import { html } from 'lit-html';

export default {
  title: 'Components/Context Menu',
};

const Template = ({ collapsed }) => {
  return html`
    <style>
      .med-context-menu__list {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .med-context-menu__item {
        padding-right: 16px;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        transition: color 300ms ease-out;
        cursor: pointer;
      }

      .med-context-menu__item:hover {
        color: hsl(var(--med-color-neutral-1));
      }

      .med-context-menu__icon {
        width: 24px;
        margin-right: 8px;
        stroke: hsl(var(--med-color-neutral-10));
      }

      .med-context-menu__info {
        text-align: center;
        margin-top: 8px;
      }
    </style>

    <ion-app>
      <ion-content>
        <div class="flex-center">

          <!-- component -->
          <med-context-menu class="med-context-menu" .collapsed=${collapsed}>
            <ul class="med-context-menu__list">
              <li class="med-context-menu__item">
                <ion-icon class="med-icon med-context-menu__icon" name="med-filtro"></ion-icon>
                <med-type token="p16">Ver filtro selecionado</med-type>
              </li>
              <li class="med-context-menu__item">
                <ion-icon class="med-icon med-context-menu__icon" name="med-editar"></ion-icon>
                <med-type token="p16">Renomear Prova</med-type>
              </li>
              <li class="med-context-menu__item">
                <ion-icon class="med-icon med-context-menu__icon" name="med-lixeira"></ion-icon>
                <med-type token="p16">Excluir Prova</med-type>
              </li>
            </ul>
            <med-type token="p16b" ds-color="neutral-8" class="med-context-menu__info">Criada em 30/12/2020</med-type>
          </med-context-menu>
          <!-- component -->

        </div>
      </ion-content>
    </ion-app>
  </ion-app>
  `
}

export const Default = Template.bind({});
Default.argTypes = {
  collapsed: {
    control: { type: 'boolean' },
    description: 'Define o estado do componente.',
    defaultValue: true,
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'true' },
    },
  },
};
