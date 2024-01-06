import { Color } from "../color/Color";
import { User } from "../user/User";

export type Customer = {
  createdAt: Date;
  favoriteColors?: Array<Color>;
  id: string;
  likedColors?: Array<Color>;
  updatedAt: Date;
  user?: User | null;
};
