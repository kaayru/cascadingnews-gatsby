/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment, ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { rhythm } from '../utils/typography';
import { SiteTitleQueryQuery } from '../generated/graphql';
import Header from './header';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const data = useStaticQuery<SiteTitleQueryQuery>(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);

  return (
    <Fragment>
      <Header siteMetadata={data?.site?.siteMetadata} />

      <div>
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(36),
            padding: `0 ${rhythm(3 / 4)}`,
          }}
        >
          <main>{children}</main>
        </div>
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(36),
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
          }}
        >
          <footer>
            © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
