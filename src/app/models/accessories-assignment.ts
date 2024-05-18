import { Accessory } from "./accessory";

export interface AccessoryAssignment {
  id: number;
  accessoryId: number;
  studentId: number;
  assignmentDate: string;
  assignmentReasonId: number;
  isReturned: boolean;
  forecastedReturnDate: string;
  actualReturnDate: string;
  returnReasonId: number;

  accessory: Accessory;
}
