/* eslint-disable react/no-danger */

import React, { useState } from 'react';
import { graphql } from 'gatsby';
import addToMailchimp, { MailchimpResponse } from 'gatsby-plugin-mailchimp';

import { Button, PageContent, PageTitle, TextInput } from 'src/components/base';
import Layout from 'src/components/layout';
import SEO from 'src/components/seo';
import { MailingListPageQuery } from 'src/generated/graphql';
import styled from 'styled-components';

type Props = {
  data: MailingListPageQuery;
  path: string;
};

const FeedbackMessage = styled.p``;

const MailingListPage = ({ data, path }: Props) => {
  const [email, setEmail] = useState<string>('');
  const [mailchimpResponse, setMailchimpResponse] = useState<MailchimpResponse>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (!email) {
        throw new Error();
      }
      const response = await addToMailchimp(email);
      setMailchimpResponse(response);
    } catch (e) {
      setMailchimpResponse({ result: 'error', msg: 'Something bad happened!' });
    }
  };

  return (
    <Layout>
      <SEO
        title={data.wordpressPage?.yoast_title}
        meta={data.wordpressPage?.yoast_meta}
        path={path}
      />
      <PageContent>
        {data.wordpressPage?.title && <PageTitle>{data.wordpressPage.title}</PageTitle>}
        {data.wordpressPage?.content && (
          <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />
        )}
        <form onSubmit={handleSubmit}>
          <TextInput
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Your email"
            required
          />
          <Button type="submit">Subscribe to mailing list</Button>
        </form>
        {mailchimpResponse && (
          <FeedbackMessage>
            <strong>
              {mailchimpResponse?.result === 'error' && (
                <span>
                  <span role="img" aria-label="oops emoji">
                    ⁉️
                  </span>{' '}
                  Oops!
                </span>
              )}
              {mailchimpResponse?.result === 'success' && (
                <span>
                  <span role="img" aria-label="thumb up emoji">
                    👍
                  </span>{' '}
                  Done!
                </span>
              )}
            </strong>
            <br />
            <span dangerouslySetInnerHTML={{ __html: mailchimpResponse.msg }}></span>
          </FeedbackMessage>
        )}
      </PageContent>
    </Layout>
  );
};

export const query = graphql`
  query MailingListPage {
    wordpressPage(slug: { eq: "weekly-newsletter" }) {
      title
      content
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

export default MailingListPage;
