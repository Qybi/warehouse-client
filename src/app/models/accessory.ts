import { AccessoryAssignment } from "./accessory-assignment";
import { PCModelStock } from "./pcmodel-stock";

export interface Accessory {
  id: number;
  stockId: number;
  name: string;
  description: string;
  qty: number;

  stock?: PCModelStock;
  assignments: AccessoryAssignment[];
}
