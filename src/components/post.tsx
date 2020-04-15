import React from 'react';
import { graphql, Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import styled from 'styled-components';

import { PostFragment } from 'src/generated/graphql';
import { notEmpty } from 'src/utils/typeUtils';
import { MIN_DEFAULT_MEDIA_QUERY, rhythm, scale } from 'src/utils/typography';
import { FlatList } from 'src/components/base';

const Li = styled.li`
  padding: ${rhythm(1)};
  background: var(--blockBackgroundColor);
  position: relative;
`;

const PostMeta = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: ${scale(-4 / 16).fontSize};
  color: var(--secondaryTextColor);
  margin-bottom: ${rhythm(4 / 16)};

  ${MIN_DEFAULT_MEDIA_QUERY} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const PostLink = styled(OutboundLink)`
  color: var(--primaryTextColor);
  background-image: none;

  &:visited {
    color: var(--secondaryTextColor);
  }
`;

const Date = styled.li`
  color: var(--secondaryTextColor);
  margin: 0;
  margin-top: 0;
  margin-bottom: 0;
`;

const Source = styled.p`
  color: var(--secondaryTextColor);
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
  background: var(--linkColor);

  &:visited {
    background: var(--blockBackgroundColor);
  }
`;

type Props = {
  post: PostFragment;
};
const Post = ({ post: { date, link, source, tags = [], title, wordpress_id } }: Props) => {
  if (!link || !title || !wordpress_id) return null;

  return (
    <Li key={wordpress_id}>
      <Hint
        href={link}
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-hidden="true"
        tabIndex={-1}
      />
      {source && <Source>{source}</Source>}

      <h2 style={{ marginTop: 0 }}>
        <PostLink href={link} target="_blank" rel="noopener noreferrer nofollow" title={title}>
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
