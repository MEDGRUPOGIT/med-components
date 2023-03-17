# Android Studio

- **[Site Android Studio](https://developer.android.com/studio)**

## Instalação

Entrar no site do **[Android Studio](https://developer.android.com/studio)**:

```
https://developer.android.com/studio
```

Clicar em download. Baixar e instalar o Android Studio.

## Configurações

### Gradle

Entrar no site do **[Gradle](https://gradle.org/releases/)**:

```
https://gradle.org/releases/
```

Baixar e instalar a versão 7.1.1 (complete).

![](../../static/img/docs/android-studio/gradle.png)

Extrair todos os arquivos do gradle-7.1.1-all.zip.

### Variáveis de ambiente

Configurar as variáveis de ambiente ANDROID_HOME e JAVA_HOME, tanto nas variáveis do usuário quanto nas variáveis do sistema.


:::note

Ajustar o path das pastas e arquivos conforme consta no seu computador.

:::

![](../../static/img/docs/android-studio/variaveis-ambiente-1.png)

Configurar as variáveis de ambiente do Path, até a pasta bin do gradle 7.1.1, tanto nas variáveis do usuário quanto nas variáveis do sistema.

![](../../static/img/docs/android-studio/variaveis-ambiente-2.png)

![](../../static/img/docs/android-studio/variaveis-ambiente-3.png)

![](../../static/img/docs/android-studio/variaveis-ambiente-4.png)

![](../../static/img/docs/android-studio/variaveis-ambiente-5.png)

### SDK

No Android Studio, clicar em SDK Manager

![](../../static/img/docs/android-studio/sdk.png)

Appearance & Behavior > System Settings > Android SDK

Em SDK Tools, clicar no checkbox Show Package Deails (canto inferior direito), em Android SDK Build-Tools, selecionar a versão 32.0.0 e instalar.

![](../../static/img/docs/android-studio/sdk-32.png)

## Adicionar device

Device Manager > Virtual > Create device

![](../../static/img/docs/android-studio/create-device.png)

Selecionar a categoria, o modelo do device, e clicar em Next.

![](../../static/img/docs/android-studio/create-device-select.png)

Selecionar o sistema operacional desejado e clicar em Next.

![](../../static/img/docs/android-studio/create-device-os.png)

Selecionar a orientação da tela quando o device é inicializado e clicar em Finish.

![](../../static/img/docs/android-studio/create-device-finish.png)

O novo device vai aparecer na lista dos devices virtuais no Device Manager.

![](../../static/img/docs/android-studio/create-device-ok.png)