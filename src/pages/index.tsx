import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Post from '../components/post';
import SEO from '../components/seo';
import { Wordpress__PostConnection } from '../generated/graphql';
import { notEmpty } from '../utils/typeUtils';

type Props = {
  data: { allWordpressPost: Wordpress__PostConnection };
};
const IndexPage = ({ data }: Props) => {
  const postsData = data.allWordpressPost.edges.filter(notEmpty);
  return (
    <Layout>
      <SEO title="Home" />
      {postsData.length > 0 && (
        <ul style={{ listStyle: 'none' }}>
          {postsData.map(({ node }, index) => (
            <Post key={node.wordpress_id || index} node={node} />
          ))}
        </ul>
      )}
      {postsData.length === 0 && (
        <Fragment>
          <h1>Oupsie. Nothing bad must have happened, there is no article in here!.</h1>
        </Fragment>
      )}
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
