import { ColorCreateNestedManyWithoutCustomersInput } from "./ColorCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  favoriteColors?: ColorCreateNestedManyWithoutCustomersInput;
  likedColors?: ColorCreateNestedManyWithoutCustomersInput;
};
