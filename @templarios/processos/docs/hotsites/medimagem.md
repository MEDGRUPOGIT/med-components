# MEDImagem

- **[Homologação](http://desenv.ordomederi.com/templarios-medimagemr/#/)**
- **[Repositório](https://github.com/MEDGRUPOGIT/institucional-medimagem)**

## Buckets

### CloudBerry (JSON)

```
MEDGRUPO/med-cdn/templarios-medimagem/homol_medimagem.json
```

### FileZila

```
templarios-medimagemr
```

## Instalação

```bash
npm install
```

## Desenvolvimento

Utilizar versão do node: **10.9.0**

```
npm run serve
```

## Publicação homologação

1. No arquivo `vue.config`, alterar `publicPath`:

```javascript
publicPath: "/templarios-medimagemr/",
```

![](../../static/img/docs/hotsite-medimagem-vue-config.png)

2. Caso tenham sido feitas alterações no arquivo `medimagemr.json` (public/data), alterar arquivo `home.ts`:

```javascript
this.content = await HttpService.getData(`${API_HOST}homol_medimagemr.json`);
```

![](../../static/img/docs/hotsite-medimagem-home-ts.png)

3. Gerar build:

```bash
npm run build
```

4. Publicação ordomederi: Enviar pasta dist e o arquivo `medimagemr.json` (caso tenha sido alterado) para Bleggi.

## Publicação produção

1. Desfazer alterações nos arquivos `vue.config` e `home.ts`.

2. Time responsável Fenix.
