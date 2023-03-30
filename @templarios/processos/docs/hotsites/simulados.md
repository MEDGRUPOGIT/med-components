---
toc_max_heading_level: 4
---

# Simulados

- **[Homologação](http://desenv.ordomederi.com/templarios-simulados/#/)**
- **[Repositório](https://github.com/MEDGRUPOGIT/institucional-simulado)**

## Buckets

### FileZila (homologação)

```
templarios-simulados
```

## Instalação

```bash
npm install
```

## Desenvolvimento

Utilizar versão do node: **14.17.3**

```bash
npm run serve
```

## Publicação homologação

1. No arquivo `vue.config`, alterar `pathHomol`:

```javascript
const pathHomol = "templarios-simulados/";
```

![](../../static/img/docs/simulados/vue-config.png)

2. No arquivo `Home.vue`, alterar `this.content`:

```javascript
this.content = await HttpService.getData(`${path}homol_simulado.json`);
```

![](../../static/img/docs/simulados/home-vue.png)

3. Gerar build homol:

```bash
npm run deploy:homol
```

4. Publicação ordomederi: enviar pasta `templarios-simulados` para Bleggi.

![](../../static/img/docs/simulados/templarios-simulados.png)

## Publicação produção

1. No arquivo `vue.config`, desfazer a alteração do `pathHomol`:

```javascript
const pathHomol = "Institucional_Simulado/";
```

![](../../static/img/docs/simulados/vue-config-desfazer.png)

2. No arquivo `Home.vue`, desfazer a alteração do `this.content`:

```javascript
this.content = await HttpService.getData(`${path}simulado.json`);
```

![](../../static/img/docs/simulados/home-vue-desfazer.png)

3. Time responsável Fenix.