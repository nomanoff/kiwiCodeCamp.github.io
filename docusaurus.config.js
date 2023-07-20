// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const organizationName = "kiwiCodeCamp";
const projectName = "kiwiCodeCamp";

const YouTubeSvg =
  '<svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="red" d="M14.712 4.633a1.754 1.754 0 00-1.234-1.234C12.382 3.11 8 3.11 8 3.11s-4.382 0-5.478.289c-.6.161-1.072.634-1.234 1.234C1 5.728 1 8 1 8s0 2.283.288 3.367c.162.6.635 1.073 1.234 1.234C3.618 12.89 8 12.89 8 12.89s4.382 0 5.478-.289a1.754 1.754 0 001.234-1.234C15 10.272 15 8 15 8s0-2.272-.288-3.367z"/><path fill="#ffffff" d="M6.593 10.11l3.644-2.098-3.644-2.11v4.208z"/></svg>';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "kiwiCodeCamp.",
  tagline: "Web dasturlashni bepul o'rganing!",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: `https://${organizationName}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },

        gtag: {
          trackingID: "G-8Q098LZMEH",
          anonymizeIP: true,
        },
      }),
    ],

    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-8Q098LZMEH",
        anonymizeIP: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/kiwicodecamp-social-card.jpg",
      navbar: {
        title: "kiwiCodeCamp",
        logo: {
          alt: "kiwiCodeCamp Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Darslar",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/kiwiCodeCamp/kiwiCodeCamp.github.io/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Telegram",
                href: "https://t.me/kiwicodecamp",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/kiwiCodeCamp",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} kiwiCodeCamp.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      announcementBar: {
        id: "announcement_0", // A unique ID for this banner
        content: `🥝 kiwiCodeCampning rasmiy <a target="_blank" rel="noopener noreferrer" href="https://t.me/kiwicodecamp">Telegram kanali</a>ga a'zo bo'lish esdan chiqmasin ✅`,
        backgroundColor: "#65617D", // The background color of the banner
        textColor: "#fff", // The text color of the banner
        isCloseable: true, // Whether the banner can be closed by the user
      },
    }),
};

module.exports = config;
