import React, { FC } from "react";
import { PortableText } from "@portabletext/react";

import CodeBlock from "./CodeBlock";
import Figure from "./Figure";
import { PortableTextBlock } from "@portabletext/types";

const components = {
  types: {
    figure: Figure,
    code: CodeBlock,
  },
};

const BlockContent: FC<{ text: PortableTextBlock[] }> = ({ text }) => (
  <PortableText value={text} components={components} />
);

export default BlockContent;
