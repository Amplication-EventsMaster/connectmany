import { Customer } from "../customer/Customer";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  customers?: Customer | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
