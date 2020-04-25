const path = require('path');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const { normalizer } = require('./utils/normalizer.js');

module.exports = {
  siteMetadata: {
    title: 'Cascading News',
    author: 'Vincent Ballut',
    siteUrl: 'https://www.cascading-news.com',
    social: {
      twitter: 'https://twitter.com/cascadingnews',
      github: 'https://github.com/kaayru/cascadingnews-gatsby',
      rss: 'https://admin.cascading-news.com/feed',
    },
    menuLinks: [
      {
        name: 'home',
        link: '/',
      },
      {
        name: 'about',
        link: '/about',
      },
      {
        name: 'weekly newsletter',
        link: '/mailing-list',
      },
    ],
  },
  plugins: [
    /*
     * Gatsby's data processing layer begins with “source”
     * plugins. Here the site sources its data from Wordpress.
     */
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        /*
         * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
         * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
         */
        baseUrl: process.env.GATSBY_WP_URL,
        // The protocol. This can be http or https.
        protocol: process.env.GATSBY_WP_PROTOCOL,
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the assumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
        // This feature is untested for sites hosted on wordpress.com.
        // Defaults to true.
        useACF: false,
        verboseOutput: false,
        // Set how many pages are retrieved per API request.
        perPage: 20,
        // Search and Replace Urls across WordPress content.
        // searchAndReplaceContentUrls: {
        //   sourceUrl: `${process.env.GATSBY_WP_PROTOCOL}://${process.env.GATSBY_WP_URL}`,
        //   replacementUrl: process.env.GATSBY_REPLACEMENT_URL,
        // },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        includedRoutes: [
          // '**/categories',
          '**/posts',
          '**/pages',
          // "**/media",
          '**/tags',
          '**/taxonomies',
          // '**/users',
        ],
        normalizer,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-43520247-1',
        respectDNT: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        fixtures: path.join(__dirname, '__fixtures__'),
        mocks: path.join(__dirname, '__mocks__'),
        utils: path.join(__dirname, 'utils'),
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/sample-page', '/tag-page', '/home', '/weekly-newsletter'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Cascading News',
        short_name: 'CN',
        start_url: '/',
        background_color: '#f7f7f7',
        theme_color: '#ff483b',
        display: 'standalone',
        icons: [
          {
            src: '/favicon-app-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicon-app-256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: '/favicon-app-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        crossOrigin: 'use-credentials',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://cascading-news.us19.list-manage.com/subscribe/post?u=c1ab33a63729c222c2676ad0b&amp;id=647c8d2bcb',
      },
    },
  ],
};
