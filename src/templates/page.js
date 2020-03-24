/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Page = ({ data }) => {
  const postData = data.wordpressPage;
  return (
    <Layout>
      <SEO title={postData.title} description={postData.excerpt} />
      <h1 dangerouslySetInnerHTML={{ __html: postData.title }} />
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
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
