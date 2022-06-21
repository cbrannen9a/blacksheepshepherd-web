import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    page: sanityPage(route: { slug: { current: { eq: $slug } } }) {
      route {
        title
      }
      _rawContent
    }
  }
`;

const PagesTemplate = (props) => {
  const { data, errors } = props;

  if (errors) {
    return <div>Error</div>;
  }

  const { page } = data;

  if (!page) {
    throw new Error(
      "Missing page data. Open the studio at http://localhost:3333 and add page data and restart the development server."
    );
  }

  return <div>{page.route.title}</div>;
};

export default PagesTemplate;
