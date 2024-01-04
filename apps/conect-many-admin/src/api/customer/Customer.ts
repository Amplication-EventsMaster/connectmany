import { Color } from "../color/Color";

export type Customer = {
  createdAt: Date;
  favoriteColors?: Array<Color>;
  id: string;
  likedColors?: Array<Color>;
  updatedAt: Date;
};
