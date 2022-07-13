import React, { FC } from "react";
import urlBuilder from "@sanity/image-url";

import {
  getImageDimensions,
  type SanityImageSource,
} from "@sanity/asset-utils";

const Figure: FC<Props> = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);

  return (
    <img
      src={
        urlBuilder({
          clientConfig: {
            dataset: process.env.SANITY_DATASET || "",
            projectId: process.env.SANITY_PROJECT_ID || "",
          },
        })
          .image(value)
          .width(isInline ? 100 : 800)
          .fit("max")
          .auto("format")
          .url() || ""
      }
      alt={(value as { alt?: string })?.alt || " "}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: `${width}/${height}`,
      }}
    />
  );
};

interface Props {
  value: SanityImageSource;
  isInline: boolean;
}

export default Figure;
