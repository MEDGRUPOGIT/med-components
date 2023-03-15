# Medeletro

Clonar repositório a partir do link abaixo:

- **[Repositório](https://github.com/MEDGRUPOGIT/Medeletro)**
## Instalação

```bash
npm install
```

## Configuração

### IOS

Instalação do capacitor

```
npm install @capacitor/ios
```

```
npx cap add ios
```

>OBS: Em alguns casos a platform IOS ja pode estar adicionada, nesses casos o terminal informará.

Documentação abaixo do Capacitor para consultas:

- **[Documentação Capacitor](https://capacitorjs.com/docs/ios)**

#### Issues

**Problemas relacionados ao processador M1: (**[Link Stackoverflow](https://stackoverflow.com/questions/64698820/ignoring-ffi-1-13-1-because-its-extensions-are-not-built-try-gem-pristine-ffi)**)**

Instalar gem  ffi com o comando abaixo:

```
arch -x86_64 sudo gem install ffi --version 1.15.5 --user-install
```

Instalar cocoapods:

```
brew install cocoapods
```

### Android
## Desenvolvimento

### Build Serve

Utilizar versão do node: **14.17.3**

```
npm start
```

Após rodar este comando o terminal disponibilizará o localhost para abertura no browser.

### Build IOS

Executar o seguinte comando no terminal do projeto.

```
npm run build:ios:prod   
```

Para alteração de Devices IOS clicar no campo destacado abaixo:

![](../../static/img/docs/medeletro/alteracao-device.png)

Para executar o XCode e abrir o simulador clicar no campo destacado abaixo:

![](../../static/img/docs/medeletro/play-xcode.png)

### Build Android


