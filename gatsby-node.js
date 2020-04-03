import path from 'path';
import { writeJsonData } from './utils/writeJsonData';

export const createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const PageTemplate = path.resolve('./src/templates/page.tsx');
  const TagTemplate = path.resolve('./src/templates/tag.tsx');
  const result = await graphql(`
    {
      allWordpressPost {
        nodes {
          link
          source
          title
          wordpress_id
          date(formatString: "MMM DD, YYYY")
          tags {
            id
            name
            slug
          }
        }
        totalCount
      }
      allWordpressPage {
        nodes {
          slug
          wordpress_id
        }
      }
      allWordpressTag(filter: { count: { gt: 0 } }) {
        nodes {
          count
          wordpress_id
          slug
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  // Create static pages for pages
  const Pages = result.data.allWordpressPage.nodes;
  Pages.forEach(post => {
    createPage({
      path: `/${post.slug}`,
      component: PageTemplate,
      context: {
        id: post.wordpress_id,
      },
    });
  });

  // Create static pages for tags
  const Tags = result.data.allWordpressTag.nodes;
  Tags.forEach(async tag => {
    createPage({
      path: `/tag/${tag.slug}`,
      component: TagTemplate,
      context: {
        id: tag.wordpress_id,
      },
    });

    const postsByTag = await graphql(`
      {
        allWordpressPost(filter: { tags: { elemMatch: { wordpress_id: { eq: ${tag.wordpress_id} } } } }) {
          nodes {
            link
            source
            title
            wordpress_id
            date(formatString: "MMM DD, YYYY")
            tags {
              id
              name
              slug
            }
          }
          totalCount
        }
      }
    `);

    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query for tag ${tag.name}.`);
      return;
    }

    writeJsonData({
      data: postsByTag.data.allWordpressPost,
      rootDir: __dirname,
      paths: ['tag', tag.slug],
    });
  });

  writeJsonData({ data: result.data.allWordpressPost, rootDir: __dirname, paths: ['index'] });
};
