import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';
import styled from 'styled-components';

import { Maybe, SiteSiteMetadataMenuLinks, SiteSiteMetadataSocial } from 'src/generated/graphql';
import { rhythm, scale, MIN_DEFAULT_MEDIA_QUERY } from 'src/utils/typography';
import { notEmpty } from 'src/utils/typeUtils';
import { FlatList } from 'src/components/base';
import Twitter from 'src/assets/twitter.svg';
import Github from 'src/assets/github.svg';
import RSS from 'src/assets/rss.svg';

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

const MenuLi = styled.li`
  display: flex;
`;

const SocialIconLink = styled(OutboundLink)`
  background-image: none;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: var(--primaryTextColor);
    width: 1.2rem;
    height: 1.2rem;
  }
`;

type Props = {
  menuLinks?: Maybe<Array<Maybe<SiteSiteMetadataMenuLinks>>>;
  socialLinks?: Maybe<SiteSiteMetadataSocial>;
};
const Header = ({ menuLinks, socialLinks }: Props) => (
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
          {socialLinks?.twitter && (
            <MenuLi>
              <SocialIconLink
                href={socialLinks.twitter}
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </SocialIconLink>
            </MenuLi>
          )}
          {socialLinks?.github && (
            <MenuLi>
              <SocialIconLink
                href={socialLinks.github}
                title="Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </SocialIconLink>
            </MenuLi>
          )}
          {socialLinks?.rss && (
            <MenuLi>
              <SocialIconLink
                href={socialLinks.rss}
                title="RSS Feed"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RSS />
              </SocialIconLink>
            </MenuLi>
          )}
        </FlatList>
      </NavLinks>
    )}
  </Container>
);

export default Header;
