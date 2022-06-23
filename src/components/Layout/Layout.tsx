import React, { FC, ReactNode } from "react";
import Header from "./Header";

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
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
  colours: { primary: string; accent: string; background: string };
  mainNav: [];
  footerNav: [];
}

export default Layout;
