import { Link } from 'gatsby';
import React from 'react';

import { Maybe, SiteSiteMetadata } from '../generated/graphql';
import { rhythm } from '../utils/typography';
import { notEmpty } from '../utils/typeUtils';

type Props = {
  siteMetadata?: Maybe<SiteSiteMetadata>;
};
const Header = ({ siteMetadata }: Props) => (
  <header
    style={{
      fontFamily: 'Montserrat, sans-serif',
      marginTop: 0,
    }}
  >
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(36),
        padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
      }}
    >
      {siteMetadata && (
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: 'black',
              boxShadow: 'none',
            }}
          >
            {siteMetadata.title}
          </Link>
        </h1>
      )}

      {siteMetadata?.menuLinks && (
        <div>
          <nav>
            <ul style={{ display: 'flex', flex: 1 }}>
              {siteMetadata.menuLinks.filter(notEmpty).map((link, index) => {
                if (!link.link) return null;

                return (
                  <li
                    key={link.name || index}
                    style={{
                      listStyleType: 'none',
                      padding: '1rem',
                    }}
                  >
                    <Link to={link.link}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </div>
  </header>
);

export default Header;
