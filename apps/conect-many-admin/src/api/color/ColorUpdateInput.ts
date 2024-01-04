import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type ColorUpdateInput = {
  customers?: CustomerWhereUniqueInput | null;
  likedColors?: CustomerWhereUniqueInput | null;
};
