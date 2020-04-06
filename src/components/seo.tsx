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
  const metaAuthor = site.siteMetadata.author || '';

  return (
    <Helmet
      htmlAttributes={{
        lang: lang,
      }}
      link={[
        {
          rel: 'shortcut icon',
          href: '/favicon.png',
        },
        {
          rel: 'apple-touch-icon-precomposed',
          href: '/favicon57.png',
        },
        {
          rel: 'apple-touch-icon-precomposed',
          href: '/favicon72.png',
          sizes: '72x72',
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
          content: metaAuthor,
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
