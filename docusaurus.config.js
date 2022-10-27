// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Sikkerhet - Bouvet",
  tagline: "Sikker utvikling i Bouvet",
  url: "https://sikkerhet.bouvet.no",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/fav-192.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "bouvet", // Usually your GitHub org/user name.
  projectName: "sikkerhet.bouvet.no", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  themes: [
    [
      // @ts-ignore
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      // @ts-ignore
      ({
        hashed: true,
        docsRouteBasePath: "/",
      }),
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/bouvet/sikkerhet.bouvet.no/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Sikker utvikling i Bouvet",
        logo: {
          href: "/",
          alt: "Sikker utvikling i Bouvet",
          src: "img/fav-192.png",
        },
        items: [
          // {to: '/checklist', label: 'Checklist', position: 'left'},
          {
            href: "https://github.com/bouvet/sikkerhet.bouvet.no",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Forslag og forbedringer",
                href: "https://github.com/bouvet/sikkerhet.bouvet.no/issues",
              },
              {
                label: "Slack",
                href: "https://bouvet.slack.com/archives/C0447R83U6M",
              },
            ],
          },
          {
            title: "Bouvet",
            items: [
              {
                label: "bouvet.no",
                href: "https://www.bouvet.no",
              },
              {
                label: "Jobbe i Bouvet",
                href: "https://www.bouvet.no/bli-en-av-oss",
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
