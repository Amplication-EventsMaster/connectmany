import { ColorCreateNestedManyWithoutCustomersInput } from "./ColorCreateNestedManyWithoutCustomersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CustomerCreateInput = {
  favoriteColors?: ColorCreateNestedManyWithoutCustomersInput;
  likedColors?: ColorCreateNestedManyWithoutCustomersInput;
  user?: UserWhereUniqueInput | null;
};
