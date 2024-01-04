import { ColorListRelationFilter } from "../color/ColorListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  favoriteColors?: ColorListRelationFilter;
  id?: StringFilter;
  likedColors?: ColorListRelationFilter;
};
