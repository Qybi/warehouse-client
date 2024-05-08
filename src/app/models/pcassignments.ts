export interface PCAssignments {
  id: number;
  pcId: number;
  studentId: number;
  assignmentDate: string;
  assignmentReasonId: number;
  isReturned: boolean;
  forecastedReturnDate: string;
  actualReturnDate: string;
  returnReasonId: number;
}
