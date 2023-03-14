# VentilaMED

- **[Homologação](http://desenv.ordomederi.com/templarios-ventilamed/#/)**
- **[Repositório](https://github.com/MEDGRUPOGIT/institucional-ventilamed)**

## Buckets

### CloudBerry (JSON)

```
MEDGRUPO/med-cdn/templarios-ventilamed/homol_ventilamed.json
```

### FileZila

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

![](../../static/img/docs/hotsite-ventilamed-vue-config.png)

2. Caso tenham sido feitas alterações no arquivo `ventilamed.json` (public/data), alterar arquivo `home.ts`:

```javascript
this.content = await HttpService.getData(`${API_HOST}homol_ventilamed.json`);
```

![](../../static/img/docs/hotsite-ventilamed-home-ts.png)

3. Gerar build:

```bash
npm run build
```

4. Publicação ordomederi: Enviar pasta dist e o arquivo `ventilamed.json` (caso tenha sido alterado) para Bleggi.

## Publicação produção

1. Desfazer alterações nos arquivos `vue.config` e `home.ts`.

2. Time responsável Fenix.
