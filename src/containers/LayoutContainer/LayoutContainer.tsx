import { graphql, StaticQuery } from "gatsby";
import React, { useState } from "react";
import { Layout } from "../../components";
import { Colors } from "../../types";

export const query = graphql`
  {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      siteUrl
      primaryColor {
        hex
      }
      secondaryColor {
        hex
      }
      accentColor {
        hex
      }
      backgroundColor {
        hex
      }
      description
      keywords
      mainNav {
        title
        slug {
          current
        }
      }
      footerNav {
        id
      }
    }
  }
`;

const LayoutContainer = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  function handleShowNav() {
    setShowNav(true);
  }
  function handleHideNav() {
    setShowNav(false);
  }

  return (
    <StaticQuery
      query={query}
      render={(data) => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the Studio at http://localhost:3333 and some content in "Site settings"'
          );
        }

        const {
          site: {
            primaryColor,
            secondaryColor,
            accentColor,
            backgroundColor,
            title,
            brand,
            mainNav,
            footerNav,
          },
        } = data;

        const colors: Colors = {
          primary: primaryColor.hex,
          secondary: secondaryColor.hex,
          accent: accentColor.hex,
          background: backgroundColor.hex,
        };

        return (
          <Layout
            showNav={showNav}
            siteTitle={title}
            brand={brand}
            onHideNav={handleHideNav}
            onShowNav={handleShowNav}
            colors={colors}
            mainNav={mainNav}
            footerNav={footerNav}
          >
            {children}
          </Layout>
        );
      }}
    />
  );
};

export default LayoutContainer;
