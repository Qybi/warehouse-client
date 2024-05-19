import { Pc } from "./pc";
import { ReasonsAssignment } from "./reasons-assignment";
import { ReasonsReturn } from "./reasons-return";
import { Student } from "./student";

export interface PCAssignment {
  id: number;
  pcId: number;
  studentId: number;
  assignmentDate: string;
  assignmentReasonId: number;
  isReturned: boolean;
  forecastedReturnDate: string;
  actualReturnDate?: string;
  returnReasonId: number;
  propertySticker: string;

  pc: Pc;
  student: Student;
  assignmentReason?: ReasonsAssignment;
  returnReason?: ReasonsReturn;
}
