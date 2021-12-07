import { html } from "lit-html";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Components/Team/Monta Provas/Filtros",
  decorators: [withDesign],
};

const TemplateDefault = ({ valores }) => {
  setTimeout(() => {
    document.querySelector("med-chart-radial").valores = valores.valores;
    document.querySelector("med-chart-radial-label").valores = valores.valores;
  }, 1000);

  return html`
    <ion-app>
      <ion-content>
        <div class="monta-provas-filtro__fechar">
          <ion-button ds-name="tertiary">
            <ion-icon
              slot="icon-only"
              class="med-icon"
              name="med-fechar"
            ></ion-icon>
          </ion-button>
        </div>

        <div class="monta-provas-filtro__wrap-title">
          <med-caption ds-size="base" ds-color="">
            <h3>Utilize os filtros para configurar a sua prova.</h3>
          </med-caption>
          <ion-button ds-name="tertiary" class="monta-provas-filtro__limpar">
            <ion-icon
              slot="icon-only"
              class="med-icon"
              name="med-limparfiltro"
            ></ion-icon>
          </ion-button>
        </div>

        <med-accordion-list
          class="monta-provas-filtro__accordion"
          single-open="true"
        >
          <med-accordion-item
            class="monta-provas-filtro__accordion-item med-accordion-item--keep-border"
          >
            <med-caption
              ds-size="base"
              ds-color="neutral-2"
              slot="start"
              class="monta-provas-filtro__accordion-title"
            >
              <h3>Nome da Prova</h3>
            </med-caption>

            <div
              class="monta-provas__header-end monta-provas-filtro__accordion-icon"
              slot="end"
            >
              <ion-button ds-name="tertiary" ds-size="xs">
                <ion-icon
                  slot="icon-only"
                  class="med-icon med-rotate monta-prova-filtro__icon"
                  name="med-baixo"
                ></ion-icon>
              </ion-button>
            </div>

            <div
              slot="content"
              class="monta-provas-filtro__content monta-provas-filtro__content-flex"
            >
              <ion-input
                placeholder="Digite o nome da prova"
                class="monta-prova-filtro__input"
              >
              </ion-input>
              <ion-button
                ds-name="tertiary"
                class="monta-provas-filtro__input-limpar"
              >
                <ion-icon
                  slot="icon-only"
                  class="med-icon"
                  name="med-fechar"
                ></ion-icon>
              </ion-button>
            </div>
          </med-accordion-item>

          <med-accordion-item
            class="monta-provas-filtro__accordion-item med-accordion-item--keep-border"
          >
            <med-caption
              ds-size="base"
              ds-color="neutral-2"
              slot="start"
              class="monta-provas-filtro__accordion-title"
            >
              <h3>Especialidade</h3>
            </med-caption>

            <ion-chip class="monta-provas-filtro__accordion-chip" slot="middle">
              <ion-label>5</ion-label>
            </ion-chip>

            <div
              class="monta-provas__header-end monta-provas-filtro__accordion-icon"
              slot="end"
            >
              <ion-button ds-name="tertiary" ds-size="xs">
                <ion-icon
                  slot="icon-only"
                  class="med-icon med-rotate monta-prova-filtro__icon"
                  name="med-baixo"
                ></ion-icon>
              </ion-button>
            </div>

            <div
              slot="content"
              class="monta-provas-filtro__content monta-provas-filtro__content--desktop"
            >
              <ion-searchbar
                class="monta-prova-filtro__search"
                show-clear-button="always"
                show-cancel-button="never"
                cancel-button-text="Cancelar"
                mode="ios"
                search-icon="med-busca"
              >
              </ion-searchbar>

              <med-base
                radius="s08"
                ds-color="neutral-3"
                class="monta-prova-filtro__todas"
              >
                <ion-checkbox slot="start"></ion-checkbox>
                <med-caption
                  ds-size="sm"
                  ds-color="neutral-10"
                  slot="middle"
                  class="monta-prova-filtro__todas-caption"
                >
                  <h3>Selecionar todas as especialidades</h3>
                </med-caption>
              </med-base>

              <med-list-item-accordion titulo="Titulo" class="monta-provas-filtro-concurso__items">
                <ion-checkbox slot="start"></ion-checkbox>
                <med-list-item slot="end" titulo="Titulo">
                  <ion-checkbox slot="start"></ion-checkbox>
                </med-list-item>
                <med-list-item slot="end" titulo="Titulo">
                  <ion-checkbox slot="start"></ion-checkbox>
                </med-list-item>
                <med-list-item slot="end" titulo="Titulo">
                  <ion-checkbox slot="start"></ion-checkbox>
                </med-list-item>
              </med-list-item-accordion>

              <div class="monta-prova-filtro__items">
                <ion-checkbox></ion-checkbox>
                <med-caption
                  ds-size="sm"
                  ds-color="neutral-10"
                  slot="middle"
                  class="monta-prova-filtro__todas-caption"
                >
                  <h3>Cirurgia Geral</h3>
                </med-caption>
              </div>

              <div class="monta-prova-filtro__items">
                <ion-checkbox></ion-checkbox>
                <med-caption
                  ds-size="sm"
                  ds-color="neutral-10"
                  slot="middle"
                  class="monta-prova-filtro__todas-caption"
                >
                  <h3>Clínica Médica</h3>
                </med-caption>
              </div>

              <div class="monta-prova-filtro__items">
                <ion-checkbox></ion-checkbox>
                <med-caption
                  ds-size="sm"
                  ds-color="neutral-10"
                  slot="middle"
                  class="monta-prova-filtro__todas-caption"
                >
                  <h3>Pediatria</h3>
                </med-caption>
              </div>
            </div>
          </med-accordion-item>

          <med-accordion-item
            class="monta-provas-filtro__accordion-item med-accordion-item--keep-border"
          >
            <med-caption
              ds-size="base"
              ds-color="neutral-2"
              slot="start"
              class="monta-provas-filtro__accordion-title"
            >
              <h3>Concursos</h3>
            </med-caption>

            <ion-chip class="monta-provas-filtro__accordion-chip" slot="middle">
              <ion-label>23</ion-label>
            </ion-chip>

            <div
              class="monta-provas__header-end monta-provas-filtro__accordion-icon"
              slot="end"
            >
              <ion-button ds-name="tertiary" ds-size="xs">
                <ion-icon
                  slot="icon-only"
                  class="med-icon med-rotate monta-prova-filtro__icon"
                  name="med-baixo"
                ></ion-icon>
              </ion-button>
            </div>

            <div
              slot="content"
              class="monta-provas-filtro__content monta-provas-filtro__content--desktop"
            >
              <ion-searchbar
                class="monta-prova-filtro__search"
                show-clear-button="always"
                show-cancel-button="never"
                cancel-button-text="Cancelar"
                mode="ios"
                search-icon="med-busca"
              >
              </ion-searchbar>

              <med-base
                radius="s08"
                ds-color="neutral-3"
                class="monta-prova-filtro__todas"
              >
                <ion-checkbox slot="start"></ion-checkbox>
                <med-caption
                  ds-size="sm"
                  ds-color="neutral-10"
                  slot="middle"
                  class="monta-prova-filtro__todas-caption"
                >
                  <h3>Selecionar todas as especialidades</h3>
                </med-caption>
              </med-base>

              <med-list class="monta-prova-filtro__lista" margin="sm">
                <med-list-item
                  class="monta-prova-filtro__item-label"
                  titulo="ABC"
                  label="Faculdade de Medicina do ABC"
                >
                  <ion-checkbox slot="start"></ion-checkbox>
                </med-list-item>

                <med-list-item
                  class="monta-prova-filtro__item-label"
                  titulo="AFAMCI"
                  label="Associação Fluminense de Assistência a Mulher, a Criança e ao Idoso"
                >
                  <ion-checkbox slot="start"></ion-checkbox>
                </med-list-item>

                <med-list-item
                  class="monta-prova-filtro__item-label"
                  titulo="AMP"
                  label="Associação Médica do Paraná"
                >
                  <ion-checkbox slot="start"></ion-checkbox>
                </med-list-item>

                <med-list-item
                  class="monta-prova-filtro__item-label"
                  titulo="AMRIGS"
                  label="Associação Médica do Rio Grande do Sul"
                >
                  <ion-checkbox slot="start"></ion-checkbox>
                </med-list-item>
              </med-list>
            </div>
          </med-accordion-item>

          <med-accordion-item
            class="monta-provas-filtro__accordion-item med-accordion-item--keep-border"
          >
            <med-caption
              ds-size="base"
              ds-color="neutral-2"
              slot="start"
              class="monta-provas-filtro__accordion-title"
            >
              <h3>Período</h3>
            </med-caption>

            <ion-chip class="monta-provas-filtro__accordion-chip" slot="middle">
              <ion-label>2018-2021</ion-label>
            </ion-chip>

            <div
              class="monta-provas__header-end monta-provas-filtro__accordion-icon"
              slot="end"
            >
              <ion-button ds-name="tertiary" ds-size="xs">
                <ion-icon
                  slot="icon-only"
                  class="med-icon med-rotate monta-prova-filtro__icon"
                  name="med-baixo"
                ></ion-icon>
              </ion-button>
            </div>
            <div slot="content" class="monta-provas-filtro__content">
              <div class="monta-provas-filtro__content-years">
                <ion-select placeholder="2016" interface="action-sheet">
                  <ion-select-option value="2016">2016</ion-select-option>
                  <ion-select-option value="2017">2017</ion-select-option>
                  <ion-select-option value="2018">2018</ion-select-option>
                  <ion-select-option value="2019">2019</ion-select-option>
                  <ion-select-option value="2020">2020</ion-select-option>
                  <ion-select-option value="2021">2021</ion-select-option>
                </ion-select>

                <med-caption ds-size="sm" ds-color="neutral-7">
                  <h3>Até</h3>
                </med-caption>

                <ion-select placeholder="2021" interface="action-sheet">
                  <ion-select-option value="2016">2016</ion-select-option>
                  <ion-select-option value="2017">2017</ion-select-option>
                  <ion-select-option value="2018">2018</ion-select-option>
                  <ion-select-option value="2019">2019</ion-select-option>
                  <ion-select-option value="2020">2020</ion-select-option>
                  <ion-select-option value="2021">2021</ion-select-option>
                </ion-select>
              </div>
            </div>
          </med-accordion-item>

          <med-accordion-item
            class="monta-provas-filtro__accordion-item med-accordion-item--keep-border"
          >
            <med-caption
              ds-size="base"
              ds-color="neutral-2"
              slot="start"
              class="monta-provas-filtro__accordion-title"
            >
              <h3>Termos</h3>
            </med-caption>

            <ion-chip class="monta-provas-filtro__accordion-chip" slot="middle">
              <ion-label>2</ion-label>
            </ion-chip>

            <div
              class="monta-provas__header-end monta-provas-filtro__accordion-icon"
              slot="end"
            >
              <ion-button ds-name="tertiary" ds-size="xs">
                <ion-icon
                  slot="icon-only"
                  class="med-icon med-rotate monta-prova-filtro__icon"
                  name="med-baixo"
                ></ion-icon>
              </ion-button>
            </div>
            <div slot="content" class="monta-provas-filtro__content">
              <med-caption
                ds-size="sm"
                ds-color="neutral-10"
                class="monta-provas-filtro__accordion-header"
              >
                <h3>Adicione questões que contenham os termos:</h3>
              </med-caption>

              <div class="monta-provas-filtro__search-terms">
                <ion-searchbar
                  class="monta-prova-filtro__search"
                  show-clear-button="always"
                  show-cancel-button="never"
                  cancel-button-text="Cancelar"
                  mode="ios"
                  search-icon="med-busca"
                >
                </ion-searchbar>

                <ion-button
                  ds-name="tertiary"
                  class="monta-provas-filtro__search-limpar"
                >
                  <ion-icon
                    slot="icon-only"
                    class="med-icon"
                    name="med-mais-circulo"
                  ></ion-icon>
                </ion-button>
              </div>

              <div class="monta-provas-filtro__search-items">
                <span class="monta-provas-filtro__item-button">
                  <med-caption
                    ds-size="sm"
                    class="monta-provas-filtro__item-label"
                  >
                    <h3>Pediatria</h3>
                  </med-caption>
                  <ion-button
                    ds-color="neutral-6"
                    ds-name="primary"
                    ds-size="xxs"
                    class=""
                  >
                    <ion-icon
                      slot="icon-only"
                      class="med-icon"
                      name="med-fechar"
                    ></ion-icon>
                  </ion-button>
                </span>

                <span class="monta-provas-filtro__item-button">
                  <med-caption
                    ds-size="sm"
                    class="monta-provas-filtro__item-label"
                  >
                    <h3>Cirurgia</h3>
                  </med-caption>
                  <ion-button
                    ds-color="neutral-6"
                    ds-name="primary"
                    ds-size="xxs"
                    class=""
                  >
                    <ion-icon
                      slot="icon-only"
                      class="med-icon"
                      name="med-fechar"
                    ></ion-icon>
                  </ion-button>
                </span>

                <span class="monta-provas-filtro__item-button">
                  <med-caption
                    ds-size="sm"
                    class="monta-provas-filtro__item-label"
                  >
                    <h3>Obstetrícia</h3>
                  </med-caption>
                  <ion-button
                    ds-color="neutral-6"
                    ds-name="primary"
                    ds-size="xxs"
                    class=""
                  >
                    <ion-icon
                      slot="icon-only"
                      class="med-icon"
                      name="med-fechar"
                    ></ion-icon>
                  </ion-button>
                </span>
              </div>
            </div>
          </med-accordion-item>

          <med-accordion-item
            class="monta-provas-filtro__accordion-item med-accordion-item--keep-border"
          >
            <med-caption
              ds-size="base"
              ds-color="neutral-2"
              slot="start"
              class="monta-provas-filtro__accordion-title"
            >
              <h3>Especiais</h3>
            </med-caption>

            <ion-chip class="monta-provas-filtro__accordion-chip" slot="middle">
              <ion-label>1</ion-label>
            </ion-chip>

            <div
              class="monta-provas__header-end monta-provas-filtro__accordion-icon"
              slot="end"
            >
              <ion-button ds-name="tertiary" ds-size="xs">
                <ion-icon
                  slot="icon-only"
                  class="med-icon med-rotate monta-prova-filtro__icon"
                  name="med-baixo"
                ></ion-icon>
              </ion-button>
            </div>
            <div slot="content" class="monta-provas-filtro__content">
              <med-base
                radius="s08"
                ds-color="neutral-3"
                class="monta-prova-filtro__todas"
              >
                <ion-checkbox slot="start"></ion-checkbox>
                <med-caption
                  ds-size="sm"
                  ds-color="neutral-10"
                  slot="middle"
                  class="monta-prova-filtro__todas-caption"
                >
                  <h3>Questões que eu errei</h3>
                </med-caption>
              </med-base>
              <med-base
                radius="s08"
                ds-color="neutral-3"
                class="monta-prova-filtro__todas"
              >
                <ion-checkbox slot="start"></ion-checkbox>
                <med-caption
                  ds-size="sm"
                  ds-color="neutral-10"
                  slot="middle"
                  class="monta-prova-filtro__todas-caption"
                >
                  <h3>Questões de simulado</h3>
                </med-caption>
              </med-base>
              <med-base
                radius="s08"
                ds-color="neutral-3"
                class="monta-prova-filtro__todas"
              >
                <ion-checkbox slot="start"></ion-checkbox>
                <med-caption
                  ds-size="sm"
                  ds-color="neutral-10"
                  slot="middle"
                  class="monta-prova-filtro__todas-caption"
                >
                  <h3>Questões impressas</h3>
                </med-caption>
              </med-base>
              <med-base
                radius="s08"
                ds-color="neutral-3"
                class="monta-prova-filtro__todas"
              >
                <ion-checkbox slot="start"></ion-checkbox>
                <med-caption
                  ds-size="sm"
                  ds-color="neutral-10"
                  slot="middle"
                  class="monta-prova-filtro__todas-caption"
                >
                  <h3>Questões R1 (acesso direto)</h3>
                </med-caption>
              </med-base>
              <med-base
                radius="s08"
                ds-color="neutral-3"
                class="monta-prova-filtro__todas"
              >
                <ion-checkbox slot="start"></ion-checkbox>
                <med-caption
                  ds-size="sm"
                  ds-color="neutral-10"
                  slot="middle"
                  class="monta-prova-filtro__todas-caption"
                >
                  <h3>Questões R+</h3>
                </med-caption>
              </med-base>
            </div>
          </med-accordion-item>
        </med-accordion-list>
      </ion-content>
    </ion-app>
  `;
};

export const Filtros = TemplateDefault.bind({});
Filtros.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/zdbyAa3XpX3loOjJEaXc6E/Quest%C3%B5es?node-id=826%3A1008",
  },
};
Filtros.argTypes = {
  valores: {
    defaultValue: {
      valores: [
        {
          cor: "ion-color-success",
          label: "Acertos",
          quantia: 32,
          ignoreBarra: false,
        },
        {
          cor: "ion-color-caution",
          label: "Erros",
          quantia: 16,
          ignoreBarra: false,
        },
        {
          cor: "",
          label: "Restantes",
          quantia: 52,
          ignoreBarra: true,
        },
      ],
    },
    control: { type: "array" },
    description: "Define a lista...",
    table: {
      type: { summary: "MedRadialItem[]" },
      defaultValue: { summary: "undefined" },
    },
  },
};
