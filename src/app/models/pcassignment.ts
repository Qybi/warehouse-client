import { Pc } from "./pc";

export interface PCAssignment {
  id: number;
  pcId: number;
  studentId: number;
  assignmentDate: string;
  assignmentReasonId: number;
  isReturned: boolean;
  forecastedReturnDate: string;
  actualReturnDate: string;
  returnReasonId: number;

  pc: Pc;
}
