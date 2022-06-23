exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPage(filter: { route: { title: { ne: null } } }) {
        edges {
          node {
            route {
              id
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
    const { route } = edge.node;
    const { slug } = route;
    const path = `/${slug?.current ? slug.current : ""}`;
    createPage({
      path,
      component: require.resolve("./src/templates/page.tsx"),
      context: { routeId: route.id },
    });
  });
};
