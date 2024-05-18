export interface Ticket {
  id: number;
  studentId: number;
  ticketType: string;
  ticketBody: string;
  status: string;
  dateOpen: string;
  dateClose: string;
  userClaimOpen: string;
  userClaimClose: string;
}
