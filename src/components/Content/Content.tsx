import React, { FC } from "react";
import { type Content } from "../../types";
import ImageSection from "./ImageSection";
import TextSection from "./TextSection";

const ContentComponent: FC<Props> = ({ content }) => {
  if (!content || content.length === 0) {
    return null;
  }

  return (
    <>
      {content.map((item) => {
        switch (item._type) {
          // case "hero":
          //   return <Hero key={item._key} {...item} />;
          // case "cards":
          //   return <Cards key={item._key} {...item} />;
          // case "banner":
          //   return <Banner key={item._key} {...item} />;
          // case "tags":
          //   return <Tags key={item._key} {...item} />;
          case "textSection":
            return <TextSection key={item._key} {...item} />;
          case "imageSection":
            return <ImageSection key={item._key} {...item} />;
          // case "contentPreview":
          //   return (
          //     <ContentPreview key={item._key} {...item} data={previewContent} />
          //   );
          default:
            return null;
        }
      })}
    </>
  );
};

interface Props {
  content: Content[];
}

export default ContentComponent;
