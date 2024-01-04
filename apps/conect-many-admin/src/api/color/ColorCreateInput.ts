import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type ColorCreateInput = {
  customers?: CustomerWhereUniqueInput | null;
  likedColors?: CustomerWhereUniqueInput | null;
};
