import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Li = styled.li`
  border-bottom: 1px solid black;
  padding-bottom: 10px;
  margin-bottom: 45px;
`;

const Post = ({ node: { date, link, tags, title, wordpressId } }) => (
  <Li key={wordpressId}>
    <div>
      {tags && tags.length > 0 && (
        <div>
          {tags.map(({ name, slug }) => (
            <Link key={slug} to={`/tag/${slug}`} style={{ marginRight: 4 }}>
              #{name}
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
      >
        {date}
      </p>
    </div>
  </Li>
);

export default Post;
