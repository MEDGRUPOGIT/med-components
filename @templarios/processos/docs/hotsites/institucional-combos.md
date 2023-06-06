---
toc_max_heading_level: 4
---

# Institucional (Combos)

- **[Homologação](http://desenv.ordomederi.com/templarios-combo/#/combos)**
- **[Repositório](https://github.com/MEDGRUPOGIT/institucional)**

## Buckets

### FileZila (homologação)

```
templarios-combo
```

## Instalação

```bash
npm install
```

## Desenvolvimento

Utilizar versão do node: **10.9.0**

```
npm start
```

## Publicação homologação

1. No arquivo `vue.config`, alterar `publicPath`:

```javascript
publicPath: "/templarios-combo/",
```

![](../../static/img/docs/institucional-combos/institucional-combos-vue-config.png)

2. Gerar build:

```bash
npm run build:prod
```

3. Publicação ordomederi: enviar pasta dist para Bleggi.

## Publicação produção

1. No arquivo `vue.config`, desfazer a alteração do `publicPath`:

```javascript
publicPath: process.env.VUE_APP_PUBLIC_PATH,
```

![](../../static/img/docs/institucional-combos/institucional-combos-vue-config-undo.png)

2. Time responsável Fenix.

## Publicação TAG

:::note
Para realização desse processo tenha em vista que seu PR ja deve ter sido criado e mergeado na main.
:::

1. Acessar o link do **[Repositório](https://github.com/MEDGRUPOGIT/institucional)**.

2. Clicar em **Tags**.

![](../../static/img/docs/institucional-combos/tags.png)

3. Selecionar a opção **Releases**.

![](../../static/img/docs/institucional-combos/releases.png)

4. Clicar em **Draft a new release**.

![](../../static/img/docs/institucional-combos/draft.png)

5. Inserir numero da nova tag seguindo o padrão das anteriores.

![](../../static/img/docs/institucional-combos/versao-tag.png)

6. Vincular branch que foi mergeada.

![](../../static/img/docs/institucional-combos/target.png)

7. Inserir o Title e a descrição da tag.

![](../../static/img/docs/institucional-combos/descricao.png)

8. Clicar em **Publish release**.

![](../../static/img/docs/institucional-combos/publish.png)


:::note
Informar os envolvidos de que o processo foi realizado ! Normalmente time Fenix (Lucas Coratini)
:::
