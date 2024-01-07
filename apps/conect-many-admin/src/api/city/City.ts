import { Customer } from "../customer/Customer";

export type City = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  updatedAt: Date;
};
