import React, { FC, ReactNode } from "react";
import { PortableTextBlock } from "@portabletext/types";
import type { Colors, Route } from "../../types";
import Footer from "./Footer";
import Header from "./Header";
import { SanityImageAsset } from "@sanity/asset-utils";

const Layout: FC<Props> = ({
  children,
  siteTitle,
  mainNav,
  colors,
  footerNav,
  footerText,
  copyrightText,
  copyrightLink,
  brand,
}) => {
  return (
    <div style={{ backgroundColor: colors.background }}>
      <Header
        brand={brand}
        siteTitle={siteTitle}
        mainNav={mainNav}
        colors={colors}
      />
      <main>
        <div style={{ minHeight: "100vh" }}>{children}</div>
      </main>
      <Footer
        siteTitle={siteTitle}
        footerNav={footerNav}
        footerText={footerText}
        copyrightText={copyrightText}
        copyrightLink={copyrightLink}
      />
    </div>
  );
};

interface Props {
  children?: ReactNode;
  showNav: boolean;
  siteTitle: string;
  brand: { asset: SanityImageAsset };
  onHideNav: () => void;
  onShowNav: () => void;
  colors: Colors;
  mainNav: Route[];
  footerNav: Route[];
  footerText: PortableTextBlock[];
  copyrightText: string;
  copyrightLink: { href: string };
}

export default Layout;
