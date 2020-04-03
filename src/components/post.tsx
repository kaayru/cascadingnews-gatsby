import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import { Wordpress__Post } from 'src/generated/graphql';
import { notEmpty } from 'src/utils/typeUtils';
import {
  PRIMARY_TEXT_COLOR,
  SECONDARY_TEXT_COLOR,
  MIN_DEFAULT_MEDIA_QUERY,
  rhythm,
  scale,
  LINK_COLOR,
} from 'src/utils/typography';
import { FlatList } from 'src/components/base';

const Li = styled.li`
  padding: ${rhythm(1)};
  background: #ffffff;
  position: relative;
`;

const PostMeta = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: ${scale(-4 / 16).fontSize};
  color: ${SECONDARY_TEXT_COLOR};
  margin-bottom: ${rhythm(4 / 16)};

  ${MIN_DEFAULT_MEDIA_QUERY} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const PostLink = styled.a`
  color: ${PRIMARY_TEXT_COLOR};
  background-image: none;

  &:visited {
    color: ${SECONDARY_TEXT_COLOR};
  }
`;

const Date = styled.li`
  color: ${SECONDARY_TEXT_COLOR};
  margin: 0;
  margin-top: 0;
  margin-bottom: 0;
`;

const Source = styled.p`
  color: ${SECONDARY_TEXT_COLOR};
  font-weight: bold;
`;

const TagLink = styled(Link)`
  color: inherit;
`;

const Hint = styled.a`
  width: 2px;
  height: 100%;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  background: ${LINK_COLOR};

  &:visited {
    background: #ffffff;
  }
`;

type Props = {
  post: Wordpress__Post;
};
const Post = ({ post: { date, link, source, tags = [], title, wordpress_id } }: Props) => {
  if (!link || !wordpress_id) return null;

  return (
    <Li key={wordpress_id}>
      <Hint
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-hidden="true"
        tabIndex={-1}
      />
      {source && <Source>{source}</Source>}

      <h2 style={{ marginTop: 0 }}>
        <PostLink href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </PostLink>
      </h2>
      <PostMeta>
        <FlatList>
          {date && <Date>{date}</Date>}
          {tags &&
            tags.length > 0 &&
            tags.filter(notEmpty).map(tag => (
              <li key={tag.id}>
                <TagLink to={`/tag/${tag.slug}`}>#{tag.name}</TagLink>
              </li>
            ))}
        </FlatList>
      </PostMeta>
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
    date(formatString: "MMM DD, YYYY")
    tags {
      id
      name
      slug
    }
  }
`;
