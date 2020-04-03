import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import { LoadMoreButton, PostList } from 'src/components/base';
import Layout from 'src/components/layout';
import Post from 'src/components/post';
import SEO from 'src/components/seo';
import { Wordpress__Tag, Wordpress__PostConnection } from 'src/generated/graphql';
import NotFoundPage from 'src/pages/404';
import { notEmpty } from 'src/utils/typeUtils';
import { useLoadMore } from 'src/hooks/useLoadMore';

type Props = {
  data: { allWordpressPost: Wordpress__PostConnection; wordpressTag: Wordpress__Tag };
};
const Tag = ({ data }: Props) => {
  const tagData = data.wordpressTag;

  const { loadNextPage, postsData, pageInfo } = useLoadMore({
    initialPageInfo: data.allWordpressPost.pageInfo,
    initialPostsData: data.allWordpressPost.nodes.filter(notEmpty),
    paths: ['tag', tagData.slug || ''],
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
