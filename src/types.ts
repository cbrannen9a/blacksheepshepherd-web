import { PortableTextBlock } from "@portabletext/types";
import { SanityImageAsset } from "@sanity/asset-utils";

export interface Route {
  title: string;
  slug: Slug;
}

export interface Slug {
  current: string;
}

export interface Link {
  href: string;
}

export interface Colors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}

export type ContentTypes =
  | "hero"
  | "cards"
  | "banner"
  | "textSection"
  | "imageSection"
  | "contentPreview"
  | "route"
  | "tags";

export interface BaseEntity {
  _id: string;
}

export interface BaseContent extends BaseEntity {
  _key: string;
  _type: ContentTypes;
}

export interface HeroContent extends BaseContent {
  _type: "hero";
  heading: string;
  subHeading: string;
  label: string;
  tagline: PortableTextBlock[];
  image: {
    alt: string;
    asset: {
      url: string;
      creditLine: string;
      description: string;
    };
  };
}

export interface TagsContent extends BaseContent {
  _type: "tags";
  tags: Tag[];
  as?: "tags" | "chips";
  ariaLabel: string;
  title?: string;
}

export interface Tag {
  _key: string;
  title: string;
  description?: PortableTextBlock[];
  link?: Link;
  route?: { slug: Slug };
  media?: SanityImageAsset;
}

export interface ImageSectionContent extends BaseContent {
  _type: "imageSection";
  label: string;
  link?: Link;
  text: PortableTextBlock[];
  image: { alt?: string; asset: SanityImageAsset; caption?: string };
}

export interface TextSectionContent extends BaseContent {
  _type: "textSection";
  heading: string;
  text: PortableTextBlock[];
}

export interface RouteReference extends BaseContent {
  _type: "route";
  slug: Slug;
}

export type Content =
  | HeroContent
  | TagsContent
  | TextSectionContent
  | ImageSectionContent
  | RouteReference;
