const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const PostTemplate = path.resolve('./src/templates/post.js');
  const PageTemplate = path.resolve('./src/templates/page.tsx');
  const TagTemplate = path.resolve('./src/templates/tag.tsx');
  const result = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressPage {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressTag {
        edges {
          node {
            wordpress_id
            slug
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }
  const BlogPosts = result.data.allWordpressPost.edges;

  BlogPosts.forEach(post => {
    createPage({
      path: `/${post.node.slug}`,
      component: PostTemplate,
      context: {
        id: post.node.wordpress_id,
      },
    });
  });

  const Pages = result.data.allWordpressPage.edges;
  Pages.forEach(post => {
    createPage({
      path: `/${post.node.slug}`,
      component: PageTemplate,
      context: {
        id: post.node.wordpress_id,
      },
    });
  });

  const Tags = result.data.allWordpressTag.edges;
  Tags.forEach(tag => {
    createPage({
      path: `/tag/${tag.node.slug}`,
      component: TagTemplate,
      context: {
        id: tag.node.wordpress_id,
      },
    });
  });
};
