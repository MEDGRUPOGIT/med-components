# NVM

## Instalação

### Windows

### Mac

Crie um .zshrc (caso nao exista)

```
touch .zshrc
```

Executar o comando abaixo no terminal para instalar o NVM:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```
>OBS: O comando acima pode estar desatualizado, portanto é importante copiar o comando diretamente do repositorio do Node através do link **[repositório do node.](https://github.com/nvm-sh/nvm)**
### Linux

## Utilização

Para instalar a versão current (mais recente) do node:

```
nvm install node
```

Para instalação da versão LTS:

```
nvm install --lts
```

Para instalação de demais versões:

```
nvm install v(e a versão que deseja)
```

Para visualizar as versões disponiveis em seu computador e também a versão em uso:

```
nvm list
```

Para trocar de uma versão para outra:

```
nvm use (e a versão que deseja)
```

>OBS: Somente será possivel realizar a troca para versões ja instaladas anteriormente com NVM.

## Úteis

Padronizar uma versão:

```
nvm alias default v(e a versão que deseja)
```

>OBS: Isso poderá ser feito de forma global no seu computador ou para um projeto especifico.

Desinstalar uma versão:

```
nvm uninstall (e a versão desejada)
```

>OBS: No momento em que estiver desinstalando uma versão, a mesma não poderá estar em uso.


