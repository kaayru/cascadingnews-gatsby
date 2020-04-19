import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import { Count, Button, PageTitle, PostList } from 'src/components/base';
import Layout from 'src/components/layout';
import Post from 'src/components/post';
import SEO from 'src/components/seo';
import { TagPageQuery } from 'src/generated/graphql';
import NotFoundPage from 'src/pages/404';
import { notEmpty } from 'src/utils/typeUtils';
import { useLoadMore } from 'src/hooks/useLoadMore';

type Props = {
  data: TagPageQuery;
  path: string;
};
const Tag = ({ data, path }: Props) => {
  const tagData = data.wordpressTag;

  const { loadNextPage, postsData, pageInfo } = useLoadMore({
    initialPageInfo: data.allWordpressPost.pageInfo,
    initialPostsData: data.allWordpressPost.nodes.filter(notEmpty),
    paths: ['tag', tagData?.slug || ''],
  });

  if (!tagData || !tagData.name) {
    return <NotFoundPage path={path} />;
  }

  return (
    <Layout>
      <SEO title={tagData?.yoast_title} meta={tagData?.yoast_meta} path={path} />
      <PageTitle>
        {tagData.name} <Count>({tagData.count} articles)</Count>
      </PageTitle>
      {postsData.length > 0 && (
        <Fragment>
          <PostList>
            {postsData.map((post, index) => (
              <Post key={post.wordpress_id || index} post={post} />
            ))}
          </PostList>
          {pageInfo.hasNextPage && (
            <Button type="button" onClick={loadNextPage}>
              Load more
            </Button>
          )}
        </Fragment>
      )}
      {postsData.length === 0 && (
        <Fragment>
          <p>No article in this tag, yet.</p>
        </Fragment>
      )}
    </Layout>
  );
};

export const query = graphql`
  query TagPage($id: Int!) {
    wordpressTag(wordpress_id: { eq: $id }) {
      count
      name
      slug
      yoast_title
      yoast_meta {
        content
        name
        property
      }
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
