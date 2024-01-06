import { ColorUpdateManyWithoutCustomersInput } from "./ColorUpdateManyWithoutCustomersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CustomerUpdateInput = {
  favoriteColors?: ColorUpdateManyWithoutCustomersInput;
  likedColors?: ColorUpdateManyWithoutCustomersInput;
  user?: UserWhereUniqueInput | null;
};
