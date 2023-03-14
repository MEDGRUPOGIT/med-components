# Institucional (Combos)

- **[Homologação](http://desenv.ordomederi.com/templarios-combo/#/combos)**
- **[Repositório](https://github.com/MEDGRUPOGIT/institucional)**

## Buckets

### FileZila

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

![](../../static/img/docs/hotsite-institucional-combos-vue-config.png)

2. Gerar build:

```bash
npm run build:prod
```

3. Publicação ordomederi: Enviar pasta dist para Bleggi.

## Publicação produção

1. No arquivo `vue.config`, desfazer a alteração do `publicPath`.

2. Time responsável Fenix.
