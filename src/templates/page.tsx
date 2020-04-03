/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'src/components/layout';
import SEO from 'src/components/seo';
import { Wordpress__Page } from 'src/generated/graphql';

type Props = {
  data: { wordpressPage: Wordpress__Page };
};
const Page = ({ data }: Props) => {
  const pageData = data.wordpressPage;
  return (
    <Layout>
      {pageData.title && <SEO title={pageData.title} description={pageData.excerpt || undefined} />}
      {pageData.title && <h1 dangerouslySetInnerHTML={{ __html: pageData.title }} />}
      {pageData.content && <div dangerouslySetInnerHTML={{ __html: pageData.content }} />}
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
