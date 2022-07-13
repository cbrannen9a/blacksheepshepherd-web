import React, { type FC } from "react";
import { type ImageSectionContent } from "../../../types";
import { BlockContent, Image } from "../../Common";

const ImageSection: FC<
  Pick<ImageSectionContent, "text" | "image" | "link">
> = ({ text, image, link }) => (
  <>
    <Image value={image.asset} alt={image?.alt || ""} />
    <div className="text-base text-gray-900 prose">
      <BlockContent text={text} />
    </div>
  </>
);

export default ImageSection;
