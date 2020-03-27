import React, { Fragment } from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import { Wordpress__Post } from '../generated/graphql';
import { notEmpty } from '../utils/typeUtils';

const Li = styled.li`
  border-bottom: 1px solid black;
  padding-bottom: 10px;
  margin-bottom: 45px;
`;

type Props = {
  node: Wordpress__Post;
};
const Post = ({ node: { date, link, source, tags, title, wordpress_id } }: Props) => {
  if (!link || !wordpress_id) return null;

  return (
    <Li key={wordpress_id}>
      <div>
        {tags && tags.length > 0 && (
          <div>
            {tags.filter(notEmpty).map(tag => (
              <Link key={tag.id} to={`/tag/${tag.slug}`} style={{ marginRight: 4 }}>
                #{tag.name}
              </Link>
            ))}
          </div>
        )}
        <h3 style={{ fontSize: 33, marginTop: 0 }}>
          <a
            href={link}
            style={{
              color: 'black',
              textDecoration: 'none',
              boxShadow: 'none',
            }}
          >
            {title}
          </a>
        </h3>
        <p
          style={{
            margin: 0,
            color: 'grey',
            fontSize: 16,
            marginTop: 8,
            marginBottom: 10,
          }}
          data-testid="post__byon"
        >
          {source && (
            <Fragment>
              By{' '}
              <a
                href={source}
                target="_blank"
                rel="noopener noreferrer"
                title={`To ${source} homepage`}
              >
                {source}
              </a>{' '}
            </Fragment>
          )}
          {date && `on ${date}`}
        </p>
      </div>
    </Li>
  );
};

export default Post;

export const postFragment = graphql`
  fragment Post on wordpress__POST {
    link
    source
    title
    wordpress_id
    date(formatString: "MMMM DD, YYYY")
    tags {
      id
      name
      slug
    }
  }
`;
