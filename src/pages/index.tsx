import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import { LoadMoreButton, PostList } from '../components/base';
import Layout from '../components/layout';
import Post from '../components/post';
import SEO from '../components/seo';
import { Wordpress__PostConnection } from '../generated/graphql';
import { useLoadMore } from '../hooks/useLoadMore';
import { notEmpty } from '../utils/typeUtils';

type Props = {
  data: { allWordpressPost: Wordpress__PostConnection };
};
const IndexPage = ({ data }: Props) => {
  const { loadNextPage, postsData, pageInfo } = useLoadMore({
    paths: ['index'],
    initialPostsData: data.allWordpressPost.nodes.filter(notEmpty),
    initialPageInfo: data.allWordpressPost.pageInfo,
  });

  return (
    <Layout>
      <SEO title="Home" />
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
          <h1>Oupsie. Nothing bad must have happened, there is no article in here!.</h1>
        </Fragment>
      )}
    </Layout>
  );
};
export default IndexPage;
export const query = graphql`
  query {
    allWordpressPost(limit: 20) {
      nodes {
        ...Post
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;
