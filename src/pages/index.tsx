import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import { LoadMoreButton, PageTitle, PostList } from 'src/components/base';
import Layout from 'src/components/layout';
import Post from 'src/components/post';
import SEO from 'src/components/seo';
import { IndexPageQuery } from 'src/generated/graphql';
import { useLoadMore } from 'src/hooks/useLoadMore';
import { notEmpty } from 'src/utils/typeUtils';

type Props = {
  data: IndexPageQuery;
  path: string;
};
const IndexPage = ({ data, path }: Props) => {
  const { loadNextPage, postsData, pageInfo } = useLoadMore({
    initialPageInfo: data.allWordpressPost.pageInfo,
    initialPostsData: data.allWordpressPost.nodes.filter(notEmpty),
    paths: ['index'],
  });

  return (
    <Layout>
      <SEO
        title={data.wordpressPage?.yoast_title}
        meta={data.wordpressPage?.yoast_meta}
        path={path}
      />
      <PageTitle>
        <span role="img" aria-label="rocket emoji">
          🚀
        </span>{' '}
        {data.wordpressSiteMetadata?.description}
      </PageTitle>
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
  query IndexPage {
    allWordpressPost(limit: 20) {
      nodes {
        ...Post
      }
      pageInfo {
        hasNextPage
      }
    }
    wordpressPage(slug: { eq: "home" }) {
      yoast_title
      yoast_meta {
        content
        name
        property
      }
    }
    wordpressSiteMetadata {
      description
    }
  }
`;
