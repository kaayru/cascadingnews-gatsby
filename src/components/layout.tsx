/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment, ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { rhythm } from 'src/utils/typography';
import { SiteLayoutQuery } from 'src/generated/graphql';
import Header from 'src/components/header';

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
  const data = useStaticQuery<SiteLayoutQuery>(graphql`
    query SiteLayout {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
          social {
            twitter
            github
          }
        }
      }
      wordpressSiteMetadata {
        name
      }
    }
  `);

  return (
    <Fragment>
      <Header
        menuLinks={data.site?.siteMetadata?.menuLinks}
        socialLinks={data.site?.siteMetadata?.social}
      />
      <Main>{children}</Main>
      <Footer>
        © {new Date('2013').getFullYear()} - {new Date().getFullYear()}. Built with{' '}
        <a
          href="https://www.wordpress.org"
          title="Wordpress"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wordpress
        </a>{' '}
        +{' '}
        <a href="https://www.gatsbyjs.org" title="Gatsby" target="_blank" rel="noopener noreferrer">
          Gatsby
        </a>{' '}
        +{' '}
        <a href="https://www.netlify.com" title="Netlify" target="_blank" rel="noopener noreferrer">
          Netlify
        </a>
      </Footer>
    </Fragment>
  );
};

export default Layout;
