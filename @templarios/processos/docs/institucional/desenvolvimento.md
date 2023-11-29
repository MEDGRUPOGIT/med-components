---
id: desenvolvimento
sidebar_label: Desenvolvimento
toc_max_heading_level: 4
hide_title: true
---

# Desenvolvimento

## tp-widgets

> **Criação de um componente básico.**

### PHP

```php title="index.php"
public function init_widgets() {
  if (file_exists(TP_PLUGIN_PATH . '/widgets/basic.php')) {
    require_once TP_PLUGIN_PATH . '/widgets/basic.php';
  }
}
```

```php title="widgets/basic.php"
<?php
namespace Elementor;

class Tp_Basic_Widget extends Widget_Base {
  // O nome deve ser único: 'tp-basic-widget-id'
  public function get_name() {
    return  'tp-basic-widget-id';
  }

  // O nome que aparece para o usuario no elementor: 'Basic'
  public function get_title() {
    return esc_html__( 'Basic', 'tp-widgets' );
  }

  public function get_style_depends() {
    return [
      'index-css'
    ];
  }

  public function get_script_depends() {
    return [
      'index-js'
    ];
  }

  // O icone que aparece para o usuario ao utilizar o widget no elementor
  public function get_icon() {
    return 'eicon-post-title'; // nome do icone
  }

  // Categoria onde o widget aparece na listagem de widgets do elementor
  public function get_categories() {
    return [ 'templarios' ];
  }

  // Controles do widget
  public function _register_controls() {
    // Inicialização dos controles
    $this->start_controls_section(
      'content_section',
      [
        'label' => __('Editar Basic', 'tp-widgets'),
        'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
      ]
    );

    // Basic content
    $this->add_control(
      'text', // nome para o controle
      [
        'label' => esc_html__( 'Inserir texto', 'tp-widgets' ), // Nome para o controle
        'type' => \Elementor\Controls_Manager::TEXT, // Tipo do controle 'TEXT'
      ]
    );

    // Finalização dos controles
    $this->end_controls_section();
  }

  protected function render() {
    $settings = $this->get_settings_for_display();

    // nome do nosso controle
    $text = $settings['text'];

    echo
      <<<HTML
        <h1 class="heading" data-selector="basic">{$text}</h1>
      HTML;
  }
}

Plugin::instance()->widgets_manager->register_widget_type( new Tp_Basic_Widget() );
```

### SCSS

```scss title="assets/src/components/basic/_basic.scss"
.heading {
  color: hsl(var(--med-color-neutral-5));
}
```

```scss title="assets/src/styles/main.scss"
@import '../components/basic/basic';
```

### TypeScript

```bash
npm run dev:watch
```

```ts title="assets/src/components/basic/basic.ts"
import { dataSelector } from '../../utilities/functions';
import { DOM } from './../../utilities/constants';
import { BasicAnimations } from './animations';

export class Basic {
  basicAnimation: BasicAnimations;
  element: HTMLElement;

  constructor() {
    this.basicAnimation = new BasicAnimations();

    this.element = document.querySelector(
      dataSelector(`${DOM.basic}`)
    ) as HTMLElement;

    this.setup();
    this.events();
  }

  private setup() {
    // Inicialização do widget
    if (!this.element) return;

    this.element.style.color = 'cadetblue';
  }

  private events() {
    // Definição dos eventos
    if (!this.element) return;

    this.element.addEventListener('click', () => {
      this.basicAnimation.shakeAnimation(this.element);
    });
  }
}
```

```ts title="assets/src/components/basic/constants.ts"
export const timelineDefaults = {
  ease: 'power1.inOut',
  duration: 0.3,
};
```

```ts title="assets/src/components/basic/animations.ts"
import { gsap } from 'gsap';
import { timelineDefaults } from './constants';

export class BasicAnimations {
  private mainTimeline: gsap.core.Timeline;

  constructor() {
    this.mainTimeline = gsap.timeline({ defaults: timelineDefaults });
  }

  shakeAnimation(element: HTMLElement) {
    this.mainTimeline
      .to(element, {
        y: 10,
      })
      .to(element, {
        y: -10,
      })
      .to(element, {
        y: 0,
      });
  }
}
```

```ts title="assets/src/configs/widgets.ts"
import { Basic } from '../components/basic/basic';

export const widgetsConfig = [
  {
    name: 'Basic',
    selector: null,
    widgetClass: Basic,
  }
]
```

