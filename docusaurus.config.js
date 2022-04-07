// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CB Docs',
  tagline: 'Aqui você vai encontrar um pouco daquilo que já estudei ou criei em minha jornada como programador. Espero que curta a viagem!',
  url: 'https://github.com',
  baseUrl: '/cb-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'carlosBSMedeiros', // Usually your GitHub org/user name.
  projectName: 'cb-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'CB Docs',
        logo: {
          alt: 'Home',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'Introdução',
            position: 'left',
            label: 'Introdução',
          },
          {
            href: 'https://github.com/carlosBSMedeiros',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/Introdução',
              },
            ],
          },
          
          {
            title: 'Mais',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/carlos-bs-medeiros/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} carlosBSMedeiros. Construido com Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
