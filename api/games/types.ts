export interface LobbyItem {
  id: string;
  image?: Image;
  activeImage?: Image;
  name: string;
  path: string;
  isLiveCasino: boolean;
  links?: Links;
  animatedSvg?: AnimatedSvg;
}

interface AnimatedSvg {
  mobile: Image;
  desktop: Image;
}

interface Links {
  getPageMetadata: string;
  getPage: string;
}

interface Image {
  alt: string;
  original: Original;
}

interface Original {
  src: string;
  metadata: Metadata;
}

interface Metadata {
  size: number;
  width: number;
  height: number;
}

export interface GetGameCategoryResponse {
  menu: {
    lobby: {
      items: LobbyItem[];
    };
  };
}

interface BetSize {
  min: number;
}

interface Image {
  alt: string;
  original: Original;
  small: Small;
  thumbnail: Original;
}

interface Small {
  id: string;
  src: string;
  alt: string;
  metadata: Metadata;
}

interface Original {
  src: string;
  metadata: Metadata;
}

interface ProviderLogo {
  alt: string;
}

interface Game {
  type: string;
  id: string;
  platformId: string;
  gameText: string;
  provider: string;
  provider_slug: string;
  providerLogo: ProviderLogo;
  image: Image;
  slug: string;
  betSize: BetSize;
}

export interface GetGamesByCategoryResponse {
  items: Game[];
  count: number;
}

export interface GetGamesByCategoryParams {
  search: string;
  gameCategories: string;
  pageNumber: number;
  pageSize: number;
}
