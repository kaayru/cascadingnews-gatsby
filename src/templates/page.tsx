/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';

import { PageContent, PageTitle } from 'src/components/base';
import Layout from 'src/components/layout';
import SEO from 'src/components/seo';
import { Wordpress__Page } from 'src/generated/graphql';
import NotFoundPage from 'src/pages/404';

type Props = {
  data: { wordpressPage: Wordpress__Page };
};
const Page = ({ data }: Props) => {
  const { content, excerpt, title } = data.wordpressPage;

  if (!title || !content) {
    return <NotFoundPage />;
  }

  return (
    <Layout>
      <SEO title={title} description={excerpt || undefined} />
      <PageContent>
        <PageTitle>{title}</PageTitle>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </PageContent>
    </Layout>
  );
};

export const query = graphql`
  query($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      title
      excerpt
      content
    }
  }
`;

export default Page;
