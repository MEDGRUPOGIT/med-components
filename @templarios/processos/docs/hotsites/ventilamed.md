---
toc_max_heading_level: 4
---

# VentilaMED

- **[Homologação](http://desenv.ordomederi.com/templarios-ventilamed/#/)**
- **[Repositório](https://github.com/MEDGRUPOGIT/institucional-ventilamed)**

## Buckets

### CloudBerry (JSON - homologação)

```
MEDGRUPO/med-cdn/templarios-ventilamed/homol_ventilamed.json
```

### FileZila (homologação)

```
templarios-ventilamed
```

## Instalação

```bash
npm install
```

## Desenvolvimento

Utilizar versão do node: **14.17.3**

```
npm run serve
```

## Publicação homologação

1. No arquivo `vue.config`, alterar `publicPath`:

```javascript
publicPath: "/templarios-ventilamed/",
```

![](../../static/img/docs/ventilamed/ventilamed-vue-config.png)

2. Caso tenham sido feitas alterações no arquivo `ventilamed.json` (public/data), alterar arquivo `home.ts`:

```javascript
this.content = await HttpService.getData(`${API_HOST}homol_ventilamed.json`);
```

![](../../static/img/docs/ventilamed/ventilamed-home-ts.png)

3. Gerar build:

```bash
npm run build
```

4. Publicação ordomederi: enviar pasta dist e o arquivo `ventilamed.json` (caso tenha sido alterado) para Bleggi.

## Publicação produção

1. Desfazer alterações no arquivo `vue.config`:

```javascript
publicPath: process.env.NODE_ENV === "production" ? "ventilamed/" : "/",
```

![](../../static/img/docs/ventilamed/ventilamed-vue-config-undo.png)

2. Caso tenha sido alterado, desfazer alterações no arquivo `home.ts`:

```javascript
this.content = await HttpService.getData(`${API_HOST}ventilamed.json`);
```

![](../../static/img/docs/ventilamed/ventilamed-home-ts-undo.png)

3. Time responsável Fenix.
