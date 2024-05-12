import { PCModelStock } from "./pcmodel-stock";

export interface Pc {
  id: number;
  stockId: number;
  serial: string;
  propertySticker: string;
  isMuletto: boolean;
  status: string;
  useCycle: number;
  notes: string;

  model: PCModelStock;
}
