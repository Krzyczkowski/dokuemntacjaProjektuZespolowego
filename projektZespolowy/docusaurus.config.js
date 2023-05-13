// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dokumentacja',
  tagline: 'Dokumentacja',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DWR', // Usually your GitHub org/user name.
  projectName: 'MTIP DOCS', // Usually your repo name.


  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/rrnax/Miniaturowa_tablica_informacji_pasazerskiej',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/rrnax/Miniaturowa_tablica_informacji_pasazerskiej',
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
        title: 'Strona główna',
        logo: {
          alt: '',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: '/category/pkp',
            position: 'left',
            label: 'PKP',
          },
          {
            type: 'doc',
            docId: '/category/ztm',
            position: 'left',
            label: 'ZTM',
          },
          {
            type: 'doc',
            docId: 'Użytkownicy/doc',
            position: 'left',
            label: 'Użytkownicy',
          },
          
          
          {
            type: 'doc',
            docId: '/category/architektura',
            position: 'left',
            label: 'Architektura',
          },
          {
            href: 'https://github.com/rrnax/Miniaturowa_tablica_informacji_pasazerskiej',
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
                label: 'Documentation',
                to: '/docs/category/dokumentacja-api',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/rrnax/Miniaturowa_tablica_informacji_pasazerskiej',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/nbBaNWt7',
              },
              {
                label: 'Website',
                href: '#',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/rrnax/Miniaturowa_tablica_informacji_pasazerskiej',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Projekt Miniaturowej Tablicy Informacji Pasażerskiej, Inc. .`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
