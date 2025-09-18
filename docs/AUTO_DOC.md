# Med Components (Templários Design System) — Documentação Técnica

Este repositório contém o Design System “Templários” do MedGrupo, distribuído como um fork do `@ionic/core` (Ionic Framework) com componentes, temas, tokens e utilitários próprios do MedGrupo. O objetivo é prover uma base unificada de UI, acessível via Web Components, para ser consumida por múltiplas aplicações (web/mobile) de forma consistente e sustentável.


**Sumário**
- Visão Geral e Propósito
- Regras de Negócio e Decisões (ADR)
- Arquitetura e Padrões
- Tecnologias e Ferramentas
- Estrutura de Pastas
- Scripts de Desenvolvimento e Build
- Como Consumir os Componentes
- Theming, Tokens e CSS/SCSS
- Testes e Qualidade
- Versionamento e Release
- Ambientes e Requisitos
- Limitações Conhecidas e Riscos
- Próximos Passos / Roadmap
- Referências


## Visão Geral e Propósito
- Fornecer uma biblioteca de componentes baseada em Web Components (Stencil + Ionic) com identidade visual do MedGrupo (Templários), para uso em diferentes produtos.
- Padronizar comportamento, aparência e usabilidade, reduzindo retrabalho e riscos de divergência visual entre times e projetos.
- Entregar artefatos prontos para consumo: componentes (tags `ion-*` e `med-*`), temas (CSS), tokens, utilitários (`loader`/`hydrate`) e documentação de processos/website de showcase.


## Regras de Negócio e Decisões (ADR)
- Suporte a versões legadas (Ionic 1): decisão de não investir esforço para compatibilização ampla de Web Components com Ionic 1 no legado (ver `@templarios/docs/ADR-01.md`).
  - Motivo: conflitos de estilos renderizados pelo Ionic 1 no host element que sobrepõem Ionic 5.
  - Regra: ajustes no legado devem ser feitos nas próprias folhas de estilo de página.
- Janela de atualização do Ionic: atualizações sazonais (novembro a março), priorizando estabilidade e evitando regressões frequentes (ver `@templarios/docs/ADR-02.md`).
  - Exceções: atualizações emergenciais se um update for crítico/obsoleto.
- Atributos de confiabilidade priorizados: Manutenibilidade > Confiabilidade > Qualidade > Segurança (ver `@templarios/docs/haiku.md`).


## Arquitetura e Padrões
- Base em Stencil + Ionic Core:
  - Componentes Web reutilizáveis, “lazy-loaded” por padrão, interoperáveis com frameworks (Angular, React, Vue) ou vanilla.
  - `dist/` contém o build dos componentes (ESM, ES5, CJS) e documentos gerados (`dist/docs.json`).
- Componentização por tags:
  - Tags `ion-*` (do Ionic) e `med-*` (Templários/MedGrupo). Exemplos `med-chip`, `med-banner`, `med-input`, `med-list`, `med-tooltip`, `med-themes`, `med-video-thumbnail`, etc. (veja `dist/esm-es5/med-*.entry.js`).
- Theming e tokens via CSS Variables:
  - Paleta, feedback e níveis de contraste definidos por tokens `--med-color-*` (ver `templarios/css/themes/*.css`).
  - Esquemas e temas prontos (ex.: `default`, `extensivo`, `inscricoes`, `medsoft`, `recursos`, `cpmed` e `schemes/light.css`).
- Documentação e site:
  - `@templarios/processos`: documentação de processos (Docusaurus).
  - `@templarios/website`: site de showcase (Vite) para explorar componentes/estilos.
- Utilitários de runtime:
  - `loader/`: define polyfills e registrar custom elements (para apps navegadores).
  - `hydrate/`: suporte a SSR/hydration quando necessário.


## Tecnologias e Ferramentas
- Linguagens/SDKs: TypeScript, JavaScript, SCSS.
- Frameworks: Stencil, Ionic Core (forkado), Storybook (web-components), Docusaurus (docs), Vite (site), Lit (para páginas do website), Loki (teste visual), Jest/Stencil Testing.
- Build/Empacotamento: Stencil, Rollup, Sass, CleanCSS.
- Linting: TSLint, Stylelint.
- Node/NPM + NVM: scripts utilizam Node 14.17.3 (core e website) e 18.14.1 (docs/processos) conforme SO.


## Estrutura de Pastas
- `css/`: CSS global do Ionic (bundle) e utilitários.
- `dist/`: saída do build Stencil/Ionic (ESM/ES5/CJS), `docs.json` e entradas dos componentes (`*.entry.js`).
- `loader/`: pacotes para carregar polyfills e registrar os componentes (`defineCustomElements`).
- `hydrate/`: suporte a SSR/hydration (Stencil).
- `templarios/`:
  - `css/`: temas prontos (`themes/*.css`), schemes (`schemes/*.css`) e bundles do Templários.
  - `scss/`: funções (`functions`), variáveis (`variables`) e mixins (`mixins`) Sass do Design System.
- `@templarios/`:
  - `docs/`: ADRs e visão estratégica do DS.
  - `processos/`: site de documentação (Docusaurus) de processos internos.
  - `website/`: site de showcase (Vite) para navegação dos componentes e guias visuais.
- `.github/assets/`: assets gráficos do projeto.


## Scripts de Desenvolvimento e Build
Definidos em `package.json` na raiz:
- Core (Stencil/Ionic):
  - `npm run start`: build CSS e `stencil build --dev --watch --serve`.
  - `npm run build`: limpa, compila CSS/JS, gera docs (`dist/docs.json`) e copia loader CDN.
  - `npm run lint`, `npm run test`, `npm run validate`: lint + testes (spec/e2e) + build + treeshake.
- Templários (atalhos multi-plataforma):
  - `npm run tp:start`: orquestra watcher do Stencil, watcher de Sass e Storybook (porta 6006). Ajusta Node via NVM em Unix/Windows.
  - `npm run tp:build`: compila Sass do Templários, minifica CSS e realiza `build` do pacote.
  - `npm run tp:doc:start` / `tp:doc:build`: inicia/compila docs Docusaurus em `@templarios/processos` (Node 18.14.1 em Unix/Win).
  - `npm run tp:website:start` / `tp:website:build`: inicia/gera build do site em `@templarios/website` (Node 14.17.3).
- Testes visuais: `npm run tp:test:loki`.

Observação: alguns scripts referenciam `src/@templarios/styles` (pipeline completa). Nesta cópia, a pasta `src/` não está presente; utilize os artefatos prontos em `templarios/` ou a base `dist/`. Para desenvolvimento do DS em si, use o repositório/fonte completo.


## Como Consumir os Componentes
Há duas formas típicas (seguindo o Ionic Core):

1) Via CDN (HTML puro):
```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
<link href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" rel="stylesheet" />
<!-- Temas Templários opcionais: -->
<link href="/templarios/css/themes/default.css" rel="stylesheet" />
```

2) Via NPM (aplicações buildadas):
- Instale o pacote deste repositório (ou a referência Git utilizada nos produtos internos).
- Registre os elementos quando necessário com o loader:
```ts
// exemplo genérico
import { defineCustomElements } from '@ionic/core/loader';
defineCustomElements(window);
```
- Importe estilos do Ionic e dos temas Templários conforme sua necessidade:
  - Ionic: `@ionic/core/css/ionic.bundle.css`
  - Templários: `templarios/css/themes/default.css`, `templarios/css/templarios.css` ou bundles específicos.

Notas:
- Tags disponíveis incluem as do Ionic (ex.: `ion-button`, `ion-input`) e as do Templários (ex.: `med-chip`, `med-banner`, `med-input`, `med-list`, `med-themes`, `med-tooltip`, `med-video-thumbnail`). Consulte `dist/docs.json` para a lista e props.
- Em contextos Angular/React/Vue, utilize as integrações padrões do Ionic para melhor DX; sob o capô elas usam estes Web Components.


## Theming, Tokens e CSS/SCSS
- Tokens principais (exemplos em `templarios/css/themes/default.css`):
  - Neutros: `--med-color-neutral-[1..10|15|25|35|45|55|65|75|85|95]`.
  - Marca: `--med-color-brand-[1..5]` e `--med-color-brand-gradient`.
  - Feedback: `--med-color-fb-attention|caution|warning|success`.
  - Classes auxiliares como `.med-color-neutral-1`, etc., já configuram `--med-color-neutral` e contrastes.
- SCSS do Design System (`templarios/scss`):
  - `functions/`: utilitários de cor, breakpoints, tipografia.
  - `mixins/`: mixins para colorização, breakpoints, devices, tipografia.
  - `variables/`: variáveis de cor, fontes, componentes e breakpoints.
- Temas prontos em `templarios/css/themes/*.css` e esquemas em `templarios/css/schemes/*.css` (ex.: `light.css`).


## Testes e Qualidade
- Unit/E2E: `stencil test` (Jest + Stencil Testing).
- Visuais: `loki test` (comparação de screenshots; requer setup local/CI).
- Lint:
  - TypeScript: `npm run lint.ts` / `lint.ts.fix` (TSLint).
  - Sass: `npm run lint.sass` / `lint.sass.fix` (Stylelint).
- Treeshaking: `npm run test.treeshake` para garantir eliminação de código não usado.


## Versionamento e Release
- Base do pacote segue `@ionic/core` (neste snapshot: `5.6.3`), com build Stencil (`2.22.3` no `dist/docs.json`).
- Processo sugerido (quando aplicável): `npm run validate` e `npm run prerelease` (usa `np`), alinhado às janelas de atualização (ADR-02).
- Em produtos internos, o site de showcase consome este repo via referência Git (ver `@templarios/website/package.json`).


## Ambientes e Requisitos
- Node e NVM:
  - Core/Website: Node `14.17.3`.
  - Docs (processos): Node `18.14.1`.
  - Scripts `tp:*` ajustam automaticamente via NVM em Unix/Windows.
- Dependências principais (dev): Stencil, Rollup, Sass, Storybook, Jest, Loki, Stylelint/TSLint.
- Navegadores: os polyfills em `loader/` cobrem ambientes sem suporte nativo a algumas APIs de Custom Elements/Reflect.


## Limitações Conhecidas e Riscos
- Compatibilidade com Ionic 1 (legado): estilos do Ionic 1 podem sobrepor componentes novos; não há compat suportada para Web Components nesse contexto (ADR-01).
- Atualizações do Ionic podem alterar estruturas internas de componentes e gerar regressões visuais; política de updates sazonais (ADR-02).
- Regressões visuais: dependem de verificação manual/visual quando o Ionic modifica implementações; adotar Loki e revisões visuais em PRs.


## Próximos Passos / Roadmap
- Consolidar catálogo Storybook e automatizar publicação de docs dos componentes a partir de `dist/docs.json`.
- Expandir testes visuais por componente crítico (`med-*`).
- Evoluir guias de migração do legado (Ionic 1 → Web Components) e checklists de estilos.
- Avaliar migração de TSLint (deprecado) para ESLint + typescript-eslint, quando conveniente.


## Referências
- Docs gerais do Ionic: ver `README.md` na raiz.
- ADRs e visão do DS: `@templarios/docs/ADR-01.md`, `@templarios/docs/ADR-02.md`, `@templarios/docs/haiku.md`.
- Documentação de processos: `@templarios/processos/`.
- Website de showcase: `@templarios/website/`.
- Documentação gerada por Stencil: `dist/docs.json`.


---
Última atualização automática deste documento: gerado a partir da estrutura do repositório presente neste workspace. Ajuste conforme o fluxo de release do time, se necessário.

