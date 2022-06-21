exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPage(filter: { route: { slug: { current: { ne: null } } } }) {
        edges {
          node {
            route {
              slug {
                current
              }
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    throw result.errors;
  }

  const pages = result.data.allSanityPage.edges || [];
  pages.forEach((edge, index) => {
    const path = `/${edge.node.route.slug.current}`;
    createPage({
      path,
      component: require.resolve("./src/templates/page.tsx"),
      context: { slug: edge.node.route.slug.current },
    });
  });
};
