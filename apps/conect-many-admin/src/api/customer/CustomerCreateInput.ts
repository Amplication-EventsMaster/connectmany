import { CityCreateNestedManyWithoutCustomersInput } from "./CityCreateNestedManyWithoutCustomersInput";
import { ColorCreateNestedManyWithoutCustomersInput } from "./ColorCreateNestedManyWithoutCustomersInput";
import { UserCreateNestedManyWithoutCustomersInput } from "./UserCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  cities?: CityCreateNestedManyWithoutCustomersInput;
  favoriteColors?: ColorCreateNestedManyWithoutCustomersInput;
  likedColors?: ColorCreateNestedManyWithoutCustomersInput;
  user?: UserCreateNestedManyWithoutCustomersInput;
};
