export interface Route {
  title: string;
  slug: Slug;
}

export interface Slug {
  current: string;
}

export interface Colors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}
