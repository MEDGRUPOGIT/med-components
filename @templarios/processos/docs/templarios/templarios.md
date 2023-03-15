# Templarios

## Instalação

### ionic-framework

Clonar repositório:

- **[Repositório ionic-framework](https://github.com/MEDGRUPOGIT/ionic-framework)**

Utilizar versão do node: **14.17.3**

```bash
npm install
```

Entrar na pasta /core: 

```bash
cd core
```

```bash
npm install
```

### med-components

Clonar repositório:

- **[Repositório med-components](https://github.com/MEDGRUPOGIT/med-components)**

```bash
npm install
```

## Desenvolvimento

Entrar na pasta /core: 

```bash
cd core
```

Rodar projeto:

```bash
npm run tp:start
```

## Fluxo git
diagrama das branchs

## Publicação 

### Homologação (Hashes)

1. No projeto **ionic-framework**, atualizar a branch de trabalho (ex: week11):

```bash
git pull
```

2. Entrar na pasta /core:

```bash
cd core
```

3. Gerar build:

```bash
npm run tp:build
```

4. Abrir projeto **med-components** em nova janela do VSCode. Atualizar a branch de trabalho (ex: week11):

```bash
git pull
```

5. Após o término da geração do build no projeto **ionic-framework**, copiar as seguintes pastas (que estão dentro da pasta core) para o projeto **med-components**:
- @templarios
- css
- dist
- hydrate
- loader
- templarios

Selecionar Copy folders, e depois Replace para todas as pastas:

![](../../static/img/docs/templarios/hash-copy-folders.png)

![](../../static/img/docs/templarios/hash-copy-folders-replace.png)

6. No projeto **med-components**, comitar os arquivos copiados (e dar push).

7. No repositório do projeto **[med-component](https://github.com/MEDGRUPOGIT/med-components)**, selecionar a branch de trabalho e clicar no commit que foi feito. Copiar a hash criada da URL do navegador

![](../../static/img/docs/templarios/hash-github.png)

8. Abrir projeto que se deseja testar. Abrir arquivo `package.json`, colar a hash gerada na url do @ionic/core nas dependencies. Abaixo um exemplo do MEDSoft:

![](../../static/img/docs/templarios/hash-ex.png)

9. Instalar dependências do projeto:

```bash
npm install
```

10. Rodar projeto e verificar as atualizações feitas no DS.

### Produção (Tag)

1. No projeto **ionic-framework**, atualizar a branch de trabalho (ex: week11):

```bash
git pull
```

2. Mudar para branch release e atualizar ela:

```bash
git checkout release
```

```bash
git pull
```

3. Mergear a branch de trabalho com squash, na release:

```bash
git merge [nome-da-branch] --squash
```

Comitar e dar push.

4. Mudar para branch master e atualizar ela:

```bash
git checkout master
```

```bash
git pull
```

5. Mergear a release sem squash, na master:

```bash
git merge release
```

Comitar e dar push.

6. Gerar build (branch master):

```bash
npm run tp:build
```

7. Abrir projeto **med-components** em nova janela do VSCode. Atualizar a branch de trabalho (ex: week11):

```bash
git pull
```

8. Mudar para branch main e atualizar ela:

```bash
git checkout main
```

```bash
git pull
```

9. Após o término da geração do build no projeto **ionic-framework**, copiar as seguintes pastas e arquivos (que estão dentro da pasta core) para o projeto **med-components**:
- Pastas:
  - @templarios
  - css
  - dist
  - hydrate
  - loader
  - templarios
- Arquivos:
  - LICENSE
  - package.json
  - README.md

Selecionar Copy folders, e depois Replace para todas as pastas/arquivos:

![](../../static/img/docs/templarios/tag-copy-folders.png)

![](../../static/img/docs/templarios/tag-copy-folders-replace.png)

10. No projeto **med-components**, comitar os arquivos copiados (e dar push).

11. Verificar a numeração da última tag (**[repositório med-components/tags](https://github.com/MEDGRUPOGIT/med-components/tags)**), e gerar a próxima tag:

```bash
git tag -a [numero-da-nova-tag] -m "[numero-da-nova-tag]"
```

Após gerada, dar push na tag:

```bash
git push origin --tags
```

12. Acessar o repositório do Github **[med-component](https://github.com/MEDGRUPOGIT/med-components)**, clicar em tags e verificar se a nova tag foi publicada.

![](../../static/img/docs/templarios/tag-number.png)

13. Abrir projeto que se deseja atualizar. Abrir arquivo `package.json`, colar a nova tag gerada na url do @ionic/core nas dependencies. Abaixo um exemplo do MEDSoft:

![](../../static/img/docs/templarios/tag-ex.png)

14. Instalar dependências do projeto:

```bash
npm install
```

15. Rodar projeto e verificar as atualizações feitas no DS.

### Limpeza de branchs após publicação de tag

16. No projetos **ionic-framework**, excluir a branch de trabalho (ex: week11) e criar nova branch a partir da release:

```bash
git checkout release
```

```bash
git checkout -b [nome-da-nova-branch]
```

17. No projetos **med-components**, excluir a branch de trabalho (ex: week11) e criar nova branch a partir da main:

```bash
git checkout -b [nome-da-nova-branch]
```

18. Informar os outros membros do time da criação das novas branchs de trabalho.
