/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment, ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';
import { SiteTitleQueryQuery } from '../generated/graphql';
import Header from './header';

const Main = styled.main`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(36)};
  padding: 0 ${rhythm(3 / 4)};
`;

const Footer = styled.footer`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(36)};
  padding: ${rhythm(1)} ${rhythm(3 / 4)};
`;

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
      <Main>{children}</Main>
      <Footer>
        © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
    </Fragment>
  );
};

export default Layout;
