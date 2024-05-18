import { Component } from '@angular/core';
import { WorkInProgressComponent } from '../../dev/work-in-progress/work-in-progress.component';

@Component({
  selector: 'app-modal-new-student-ticket',
  standalone: true,
  imports: [WorkInProgressComponent],
  templateUrl: './modal-new-student-ticket.component.html',
  styleUrl: './modal-new-student-ticket.component.scss'
})
export class ModalNewStudentTicketComponent {

}
