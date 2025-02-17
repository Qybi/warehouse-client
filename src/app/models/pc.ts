import { PCAssignment } from "./pcassignment";
import { PCModelStock } from "./pcmodel-stock";
import { Student } from "./student";

export interface Pc {
  id: number;
  stockId: number;
  serial: string;
  propertySticker: string;
  isMuletto: boolean;
  status: string;
  useCycle: number;
  notes: string;

  stock?: PCModelStock;
  assignments?: PCAssignment[];
}
