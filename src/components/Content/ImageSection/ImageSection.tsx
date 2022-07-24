import React, { type FC } from "react";
import { type ImageSectionContent } from "../../../types";
import { BlockContent, Image } from "../../Common";

const ImageSection: FC<
  Pick<ImageSectionContent, "text" | "image" | "link">
> = ({ text, image, link }) => (
  <div className="m-1">
    {image?.asset ? <Image value={image.asset} alt={image?.alt || ""} /> : null}
    <div className="text-base text-gray-900 prose">
      <BlockContent text={text} />
    </div>
  </div>
);

export default ImageSection;
