import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type CityWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
};
