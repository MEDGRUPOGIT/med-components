/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: 'category',
      label: 'Templarios',
      items: [
        'templarios/templarios',
      ],
    },
    {
      type: 'category',
      label: 'Medsoft',
      items: [
        'medsoft/medsoft',
      ],
    },
    {
      type: 'category',
      label: 'Medeletro',
      items: [
        'medeletro/medeletro',
      ],
    },
    {
      type: 'category',
      label: 'Hotsites',
      items: [
        'hotsites/institucional-combos',
        'hotsites/simulados',
        'hotsites/medeletro',
        'hotsites/medimagem',
        'hotsites/ventilamed',
      ],
    },
    {
      type: 'category',
      label: 'Outros',
      items: [
        'outros/acessos',
        'outros/android-studio',
        'outros/anydesk',
        'outros/diawi',
        'outros/nvm',
        'outros/obs',
      ],
    },
  ],

};

module.exports = sidebars;