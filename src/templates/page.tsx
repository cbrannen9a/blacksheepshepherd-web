import React from "react";
import { graphql } from "gatsby";
import { LayoutContainer } from "../containers";
import { Content } from "../components";

export const query = graphql`
  query PageTemplateQuery($routeId: String!) {
    page: sanityPage(route: { id: { eq: $routeId } }) {
      route {
        title
      }
      _rawContent
    }
  }
`;

const PagesTemplate = ({ data, errors }) => {
  if (errors) {
    return <div>Error</div>;
  }

  const { page } = data;

  if (!page) {
    throw new Error(
      "Missing page data. Open the studio at http://localhost:3333 and add page data and restart the development server."
    );
  }

  return (
    <LayoutContainer>
      <Content content={page._rawContent} />
    </LayoutContainer>
  );
};

export default PagesTemplate;
