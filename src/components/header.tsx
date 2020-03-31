import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import { Maybe, SiteSiteMetadata } from '../generated/graphql';
import { rhythm, MIN_DEFAULT_MEDIA_QUERY, PRIMARY_TEXT_COLOR } from '../utils/typography';
import { notEmpty } from '../utils/typeUtils';
import { FlatList } from './base';

const Container = styled.header`
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(36)};
  padding: ${rhythm(1)} ${rhythm(3 / 4)};

  ${MIN_DEFAULT_MEDIA_QUERY} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const SiteTitle = styled.h1`
  margin: 0;

  a {
    color: ${PRIMARY_TEXT_COLOR};
    background-image: none;
  }
`;

const NavLinks = styled.nav`
  ${MIN_DEFAULT_MEDIA_QUERY} {
    margin-left: ${rhythm(8 / 16)};
  }
`;

type Props = {
  siteMetadata?: Maybe<SiteSiteMetadata>;
};
const Header = ({ siteMetadata }: Props) => (
  <Container>
    {siteMetadata && (
      <SiteTitle>
        <Link to="/">{siteMetadata.title}</Link>
      </SiteTitle>
    )}

    {siteMetadata?.menuLinks && (
      <NavLinks>
        <FlatList>
          {siteMetadata.menuLinks.filter(notEmpty).map((link, index) => {
            if (!link.link) return null;

            return (
              <li key={link.name || index}>
                <Link to={link.link}>{link.name}</Link>
              </li>
            );
          })}
        </FlatList>
      </NavLinks>
    )}
  </Container>
);

export default Header;
