import React from 'react';

import Layout from 'src/components/layout';
import SEO from 'src/components/seo';

type Props = {
  path: string;
};

const NotFoundPage = ({ path }: Props) => {
  return (
    <Layout>
      <SEO title="404: Not Found" path={path} />
      <h1>Not Found</h1>
      <p>You just hit a page that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;
