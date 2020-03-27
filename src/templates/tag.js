import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Post from '../components/post';
import SEO from '../components/seo';

const Tag = ({ data }) => {
  const tagData = data.wordpressTag;
  const postsData = data.allWordpressPost.edges;

  return (
    <Layout>
      <SEO title={tagData.name} />
      <ul style={{ listStyle: 'none' }}>
        {postsData.map(({ node }) => (
          <Post key={node.wordpressId} node={node} />
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query($id: Int!) {
    wordpressTag(wordpress_id: { eq: $id }) {
      name
      slug
    }

    allWordpressPost(filter: { tags: { elemMatch: { wordpress_id: { eq: $id } } } }) {
      edges {
        node {
          ...Post
        }
      }
    }
  }
`;

export default Tag;
