export interface AccessoriesAssignments {
  id: number;
  accessoryId: number;
  studentId: number;
  assignmentDate: string;
  assignmentReasonId: number;
  isReturned: boolean;
  forecastedReturnDate: string;
  actualReturnDate: string;
  returnReasonId: number;
}
