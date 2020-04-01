import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import { PostList } from '../components/base';
import Layout from '../components/layout';
import Post from '../components/post';
import SEO from '../components/seo';
import { Wordpress__Tag, Wordpress__PostConnection } from '../generated/graphql';
import NotFoundPage from '../pages/404';
import { notEmpty } from '../utils/typeUtils';

type Props = {
  data: { allWordpressPost: Wordpress__PostConnection; wordpressTag: Wordpress__Tag };
};
const Tag = ({ data }: Props) => {
  const tagData = data.wordpressTag;
  const postsData = data.allWordpressPost.edges.filter(notEmpty);

  if (!tagData.name) {
    return <NotFoundPage />;
  }

  return (
    <Layout>
      <SEO title={tagData.name} />
      {postsData.length > 0 && (
        <PostList>
          {postsData.map(({ node }, index) => (
            <Post key={node.wordpress_id || index} node={node} />
          ))}
        </PostList>
      )}
      {postsData.length === 0 && (
        <Fragment>
          <h1>No article in this tag, yet.</h1>
        </Fragment>
      )}
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
