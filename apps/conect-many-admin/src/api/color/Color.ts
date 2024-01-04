import { Customer } from "../customer/Customer";

export type Color = {
  createdAt: Date;
  customers?: Customer | null;
  id: string;
  likedColors?: Customer | null;
  updatedAt: Date;
};
