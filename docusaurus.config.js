// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sikkerhet - Bouvet',
  tagline: 'Sikkerutvikkling i Bouvet',
  url: 'https://sikkerhet.bouvet.no',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/fav-192.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          editUrl:
            'https://github.com/bouvet/sikkerhet.bouvet.no',
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
        title: 'Sikkerutvikling i Bouvet',
        logo: {
          alt: 'Sikkerutvikling i Bouvet',
          src: 'img/fav-192.png',
        },
        items: [
          // {to: '/checklist', label: 'Checklist', position: 'left'},
          {
            href: 'https://github.com/bouvet/sikkerhet.bouvet.no',
            label: 'GitHub',
            position: 'right',
          },
        ],
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
                href: 'https://bouvet.slack.com/archives/C02GZQEEMBL',
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
