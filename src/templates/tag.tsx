import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import { LoadMoreButton, PostList } from '../components/base';
import Layout from '../components/layout';
import Post from '../components/post';
import SEO from '../components/seo';
import { Wordpress__Tag, Wordpress__PostConnection } from '../generated/graphql';
import NotFoundPage from '../pages/404';
import { notEmpty } from '../utils/typeUtils';
import { useLoadMore } from '../hooks/useLoadMore';

type Props = {
  data: { allWordpressPost: Wordpress__PostConnection; wordpressTag: Wordpress__Tag };
};
const Tag = ({ data }: Props) => {
  const tagData = data.wordpressTag;

  const { loadNextPage, postsData, pageInfo } = useLoadMore({
    paths: ['tag', tagData.slug || ''],
    initialPostsData: data.allWordpressPost.nodes.filter(notEmpty),
    initialPageInfo: data.allWordpressPost.pageInfo,
  });

  if (!tagData.name) {
    return <NotFoundPage />;
  }

  return (
    <Layout>
      <SEO title={tagData.name} />
      {postsData.length > 0 && (
        <Fragment>
          <PostList>
            {postsData.map((post, index) => (
              <Post key={post.wordpress_id || index} post={post} />
            ))}
          </PostList>
          {pageInfo.hasNextPage && (
            <LoadMoreButton type="button" onClick={loadNextPage}>
              Load more
            </LoadMoreButton>
          )}
        </Fragment>
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

    allWordpressPost(limit: 20, filter: { tags: { elemMatch: { wordpress_id: { eq: $id } } } }) {
      nodes {
        ...Post
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

export default Tag;
