/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { Site } from 'src/generated/graphql';

type Props = {
  description?: string;
  lang?: string;
  meta?: [JSX.IntrinsicElements['meta']];
  title: string;
};
const SEO = ({ description, lang = 'en', meta, title }: Props) => {
  const { site } = useStaticQuery<{ site: Site }>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  if (!site?.siteMetadata) return null;

  const metaDescription = description || site.siteMetadata.description || '';
  const twitterUsername = site.siteMetadata.social?.twitter || '';

  return (
    <Helmet
      htmlAttributes={{
        lang: lang,
      }}
      link={[
        // basic favicon
        {
          rel: 'shortcut icon',
          href: '/favicon.png',
        },
        // non-Retina iPhone, iPod Touch, and Android 2.1+ devices
        {
          rel: 'apple-touch-icon-precomposed',
          href: '/favicon57.png',
        },
        // first- and second-generation iPad
        {
          rel: 'apple-touch-icon-precomposed',
          href: '/favicon72.png',
          sizes: '72x72',
        },
        // iPhone with high-resolution Retina display
        {
          rel: 'apple-touch-icon-precomposed',
          href: '/favicon114.png',
          sizes: '114x114',
        },
        // third-generation iPad with high-resolution Retina display
        {
          rel: 'apple-touch-icon-precomposed',
          href: '/favicon144.png',
          sizes: '144x144',
        },
      ]}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: twitterUsername,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        ...(meta || []),
      ]}
    />
  );
};

export default SEO;
