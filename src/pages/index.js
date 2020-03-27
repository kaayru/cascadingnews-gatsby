import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Post from '../components/post';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <ul style={{ listStyle: 'none' }}>
        {data.allWordpressPost.edges.map(({ node }) => (
          <Post key={node.wordpressId} node={node} />
        ))}
      </ul>
    </Layout>
  );
};
export default IndexPage;
export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          ...Post
        }
      }
    }
  }
`;
