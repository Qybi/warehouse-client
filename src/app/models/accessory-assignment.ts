import { Accessory } from "./accessory";
import { ReasonsAssignment } from "./reasons-assignment";
import { ReasonsReturn } from "./reasons-return";
import { Student } from "./student";

export interface AccessoryAssignment {
  id: number;
  accessoryId: number;
  studentId: number;
  assignmentDate: string;
  assignmentReasonId: number;
  isReturned: boolean;
  forecastedReturnDate: string;
  actualReturnDate?: string;
  returnReasonId: number;

  accessory: Accessory;
  student: Student;
  assignmentReason?: ReasonsAssignment;
  returnReason?: ReasonsReturn;
}
