import { CityListRelationFilter } from "../city/CityListRelationFilter";
import { ColorListRelationFilter } from "../color/ColorListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CustomerWhereInput = {
  cities?: CityListRelationFilter;
  favoriteColors?: ColorListRelationFilter;
  id?: StringFilter;
  likedColors?: ColorListRelationFilter;
  user?: UserListRelationFilter;
};
