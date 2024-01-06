import { Customer } from "../customer/Customer";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  customers?: Array<Customer>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
