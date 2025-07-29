export interface PhotosI {
  alt: string;
  avg_color: string;
  height: number;
  id: number;
  liked: boolean;
  photographer: string;
  photographer_id: number;
  photographer_url: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    landscape: string;
    medium: string;
    portrait: string;
    small: string;
    tiny: string;
  };
  url: string;
  width: number;
}
