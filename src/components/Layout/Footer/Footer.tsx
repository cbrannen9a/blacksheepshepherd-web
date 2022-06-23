import React, { FC } from "react";
import { Colors } from "../../../types";

const Footer: FC<Props> = ({ colors }) => {
  return (
    <div className="" style={{ backgroundColor: colors.primary }}>
      below
    </div>
  );
};

interface Props {
  colors: Colors;
}

export default Footer;
