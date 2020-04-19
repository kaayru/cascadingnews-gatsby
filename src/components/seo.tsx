/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { Wordpress__PageYoast_Meta, Maybe, SeoComponentQuery } from 'src/generated/graphql';

type Props = {
  lang?: string;
  meta?: Maybe<Array<Maybe<Wordpress__PageYoast_Meta>>> | null;
  title?: string | null;
  path: string;
};

const fixMetaOgUrl = (meta: Maybe<Wordpress__PageYoast_Meta>, url?: string) =>
  meta?.property === 'og:url'
    ? {
        ...meta,
        content: url,
      }
    : meta;

const fixMetaTypes = (meta: Maybe<Wordpress__PageYoast_Meta>) => ({
  ...(meta?.name ? { name: meta.name } : null),
  ...(meta?.content ? { content: meta.content } : null),
  ...(meta?.property ? { property: meta.property } : null),
});

const SEO = ({ lang = 'en', meta, title, path }: Props) => {
  if (!title) {
    throw new Error('Missing title in SEO component');
  }

  // if (!pathname) {
  //   throw new Error('Missing pathname in SEO component');
  // }

  const { site } = useStaticQuery<SeoComponentQuery>(
    graphql`
      query SeoComponent {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `,
  );

  const url = `${site?.siteMetadata?.siteUrl}${path}`;

  return (
    <Helmet
      htmlAttributes={{
        lang: lang,
      }}
      link={[
        {
          rel: 'canonical',
          href: url,
        },
        // RSS feed
        {
          href: 'https://admin.cascading-news.com/feed',
          rel: 'alternate',
          title: 'Cascading News &raquo; Feed',
          type: 'application/rss+xml',
        },
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
      meta={meta?.map(metaItem => fixMetaOgUrl(metaItem, url)).map(fixMetaTypes) || []}
    />
  );
};

export default SEO;
