import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ColorWhereInput = {
  customers?: CustomerWhereUniqueInput;
  id?: StringFilter;
  likedColors?: CustomerWhereUniqueInput;
};
