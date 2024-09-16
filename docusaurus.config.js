// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sikkerhet - Bouvet',
  tagline: 'Sikker utvikling i Bouvet',
  url: 'https://sikkerhet.bouvet.no',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/fav-192.png',

  // GitHub pages deployment config.
  organizationName: 'bouvet', // Usually your GitHub org/user name.
  projectName: 'sikkerhet.bouvet.no', // Usually your repo name.

  i18n: {
    defaultLocale: 'no',
    locales: ['en', 'no']
  },

  themes: [
    [
      // @ts-ignore
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      // @ts-ignore
      ({
        hashed: true,
        docsRouteBasePath: '/',
      }),
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/bouvet/sikkerhet.bouvet.no/tree/main/',
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
        title: 'Sikker utvikling i Bouvet',
        logo: {
          href: '/',
          alt: 'Sikker utvikling i Bouvet',
          src: 'img/lock.svg',
        },
        items: [
          {
            href: 'https://github.com/bouvet/sikkerhet.bouvet.no',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'left',
          },
        ],
        style: 'dark',
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Forslag og forbedringer',
                href: 'https://github.com/bouvet/sikkerhet.bouvet.no/issues',
              },
              {
                label: 'Slack',
                href: 'https://bouvet.slack.com/archives/C0447R83U6M',
              },
            ],
          },
          {
            title: 'Bouvet',
            items: [
              {
                label: 'bouvet.no',
                href: 'https://www.bouvet.no',
              },
              {
                label: 'Jobbe i Bouvet',
                href: 'https://www.bouvet.no/bli-en-av-oss',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} sikkerhet.bouvet.no er bygd med Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
