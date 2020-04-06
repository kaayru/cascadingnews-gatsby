[![Netlify Status](https://api.netlify.com/api/v1/badges/f8f9ba21-6128-4385-ad1a-67d88fcc6f3e/deploy-status)](https://app.netlify.com/sites/condescending-perlman-298bba/deploys)

# Cascading News

**Cascading News** is a website whose purpose is to provide the latest news and tutorials on frontend development.

> ⚠️ The website is on the process of being remade.
>
> - Old site for reference: https://www.cascading-news.com
> - New site on Netlify: https://app.netlify.com/sites/condescending-perlman-298bba/deploys

## 🚀 How it's built

This site is built using **WordPress** for the backend, **Gatsby + React** for the statically generated frontend, and **Netlify** for awesome hosting and CI.

My challenge when building this site was to make it as automatic as possible.

## 🧩 Contributing

> **Useful links**
>
> - [Github issues board](https://github.com/kaayru/cascadingnews-gatsby/projects/2)
> - [Netlify page](https://app.netlify.com/sites/condescending-perlman-298bba/overview)

### 🔀 **Git flow**

1. **Fork** the repo on GitHub
2. Create a **Feature branch** from `develop`
3. **Commit** changes to this branch
4. **Push** your work back up to your fork
5. Submit a **Pull request** so that we can review your changes and merge it

### ⚛️ **Set up**

If you want to contribute to the frontend code, here's how to set up the project locally.

1. **Checkout this project**
2. **Create `.env.development` containing:**
   ```shell
   GATSBY_WP_URL=cascading-news.com
   GATSBY_WP_PROTOCOL=https
   GATSBY_REPLACEMENT_URL=http://localhost:8000
   ```
3. **Install the Gatsby CLI**
   ```
   npm install -g gatsby-cli
   ```
4. **Start the site in `develop` mode.**
   ```shell
   $ yarn develop
   ```
5. Site is now running on `http://localhost:8000`, and GraphQL client on `http://localhost:8000/__graphql`.

## 🔗Links

Unordered list of projects and libraries used for this:

- **[Wordpress REST API](https://developer.wordpress.org/rest-api/)**
- [RSS Post Importer](https://wordpress.org/plugins/rss-post-importer/) to automatically fetch \* new articles from RSS given feeds.
- [Auto Post Scheduler](https://fr.wordpress.org/plugins/auto-post-scheduler/)Auto Post Scheduler to publish posts regularly.
- [Automatic Post Tagger](https://wordpress.org/plugins/automatic-post-tagger/) to add tags to fetched articles based on their titles and contents
- [Gatsby](https://www.gatsbyjs.org/), [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [GraphQL](https://graphql.org/), [Typography](https://kyleamathews.github.io/typography.js/) for the frontend code
- [Gatsby Wordpress Source plugin](https://www.gatsbyjs.org/packages/gatsby-source-wordpress/) to use Wordpress REST API as a source for Gatsby static data
- [Netlify](https://www.netlify.com/) for continuous delivery and hosting
