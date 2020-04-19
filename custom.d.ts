declare module '*.svg' {
  const content: string;
  export default content;
}

declare module 'gatsby-plugin-mailchimp' {
  export type MailchimpResponse = {
    result: 'error' | 'success';
    msg: string;
  };

  const addToMailchimp: (email: string) => Promise<MailchimpResponse>;
  export default addToMailchimp;
}
