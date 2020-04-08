import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import { Maybe, SiteSiteMetadataMenuLinks } from 'src/generated/graphql';
import { rhythm, scale, MIN_DEFAULT_MEDIA_QUERY } from 'src/utils/typography';
import { notEmpty } from 'src/utils/typeUtils';
import { FlatList } from 'src/components/base';

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

const SiteTitle = styled.p`
  margin: 0;
  font-family: Arvo, sans-serif;
  font-size: ${scale(1).fontSize};
  line-height: ${scale(1).lineHeight};

  a {
    color: var(--primaryTextColor);
    background-image: none;
  }

  span:nth-child(2) {
    color: var(--linkColor);
  }
`;

const NavLinks = styled.nav`
  ${MIN_DEFAULT_MEDIA_QUERY} {
    margin-left: ${rhythm(8 / 16)};
  }
`;

type Props = {
  menuLinks?: Maybe<Array<Maybe<SiteSiteMetadataMenuLinks>>>;
};
const Header = ({ menuLinks }: Props) => (
  <Container>
    <SiteTitle>
      <Link to="/">
        <span>Cascading</span> <span>News</span>
      </Link>
    </SiteTitle>

    {menuLinks && (
      <NavLinks>
        <FlatList>
          {menuLinks.filter(notEmpty).map((link, index) => {
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
