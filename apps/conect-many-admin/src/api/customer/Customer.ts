import { City } from "../city/City";
import { Color } from "../color/Color";
import { User } from "../user/User";

export type Customer = {
  cities?: Array<City>;
  createdAt: Date;
  favoriteColors?: Array<Color>;
  id: string;
  likedColors?: Array<Color>;
  updatedAt: Date;
  user?: Array<User>;
};
