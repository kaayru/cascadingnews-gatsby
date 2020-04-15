/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';

import { PageContent, PageTitle } from 'src/components/base';
import Layout from 'src/components/layout';
import SEO from 'src/components/seo';
import { PageQuery } from 'src/generated/graphql';
import NotFoundPage from 'src/pages/404';

type Props = {
  data: PageQuery;
  location: Location;
};
const Page = ({ data, location }: Props) => {
  if (!data.wordpressPage?.title || !data.wordpressPage?.content) {
    return <NotFoundPage />;
  }

  return (
    <Layout>
      <SEO
        title={data.wordpressPage?.yoast_title}
        meta={data.wordpressPage?.yoast_meta}
        pathname={location.pathname}
      />
      <PageContent>
        <PageTitle>{data.wordpressPage?.title}</PageTitle>
        <div dangerouslySetInnerHTML={{ __html: data.wordpressPage?.content }} />
      </PageContent>
    </Layout>
  );
};

export const query = graphql`
  query Page($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      title
      content
      yoast_title
      yoast_meta {
        content
        name
        property
      }
    }
  }
`;

export default Page;
