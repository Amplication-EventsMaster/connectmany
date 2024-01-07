import { CityUpdateManyWithoutCustomersInput } from "./CityUpdateManyWithoutCustomersInput";
import { ColorUpdateManyWithoutCustomersInput } from "./ColorUpdateManyWithoutCustomersInput";
import { UserUpdateManyWithoutCustomersInput } from "./UserUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  cities?: CityUpdateManyWithoutCustomersInput;
  favoriteColors?: ColorUpdateManyWithoutCustomersInput;
  likedColors?: ColorUpdateManyWithoutCustomersInput;
  user?: UserUpdateManyWithoutCustomersInput;
};
