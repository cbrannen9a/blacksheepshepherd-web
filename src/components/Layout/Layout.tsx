import React, { FC, ReactNode } from "react";

const Layout: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

interface Props {
  children?: ReactNode;
  showNav: boolean;
  siteTitle: string;
  brand: any;
  onHideNav: () => void;
  onShowNav: () => void;
  colours: { primary: string; accent: string; background: string };
}

export default Layout;
