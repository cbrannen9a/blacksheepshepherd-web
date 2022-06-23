import React, { FC, ReactNode } from "react";
import type { Colors, Route } from "../../types";
import Footer from "./Footer";
import Header from "./Header";

const Layout: FC<Props> = ({ children, mainNav, colors }) => {
  return (
    <div style={{ backgroundColor: colors.background }}>
      <Header mainNav={mainNav} colors={colors} />
      <main>
        <div style={{ height: "100vh" }}>{children}</div>
      </main>
      <Footer colors={colors} />
    </div>
  );
};

interface Props {
  children?: ReactNode;
  showNav: boolean;
  siteTitle: string;
  brand: any;
  onHideNav: () => void;
  onShowNav: () => void;
  colors: Colors;
  mainNav: Route[];
  footerNav: Route[];
}

export default Layout;
