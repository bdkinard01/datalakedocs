module.exports = {
  title: 'Data Lake Documentation',
  tagline: 'The place for Data Lake Knowledge',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Data Lake Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/Koch-Logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},

        {href: 'https://kochprod.service-now.com/compass',
         label: 'Compass', 
         position: 'left'},
        {
          to: 'drivers/',
          activeBasePath: 'drivers',
          label: 'Drivers',
          position: 'left',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Quick Links',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/doc1',
            },
            {
              label: 'Troubleshooting',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Common Links',
          items: [
            {
              label: 'Compass Request Form',
              href: 'https://kochprod.service-now.com/compass/?id=sc_cat_item&sys_id=113defe6db93b3047eee785e0f961978',
            },
            {
              label: 'Snowflake Driver Download',
              href: 'https://kochprod.service-now.com/compass?id=sc_cat_item&sys_id=5e31dacadb061010428baa82ca9619b9',
            },
            {
              label: 'GitLab Repo',
              href: 'https://kochsource.io/BRANDON.KINARD/datalakedocs/-/tree/develop',
            },
          ],
        },
        {
          title: 'FAQs',
          items: [
            {
              label: 'Help',
              to: 'blog',
            },
            {
              label: 'Data Lake Dev',
              href: 'https://datalake-dev.kcs.kochcloud.com/',
            },
            {
              label: 'Data Lake Prod',
              href: 'https://datalake-prod.kcs.kochcloud.com/',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          baseUrl: 'docs/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
