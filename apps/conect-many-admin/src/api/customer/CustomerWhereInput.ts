import { ColorListRelationFilter } from "../color/ColorListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CustomerWhereInput = {
  favoriteColors?: ColorListRelationFilter;
  id?: StringFilter;
  likedColors?: ColorListRelationFilter;
  user?: UserWhereUniqueInput;
};
