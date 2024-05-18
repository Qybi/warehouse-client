import { Component } from '@angular/core';
import { Student } from '../../../../models/student';
import { Pc } from '../../../../models/pc';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PCService } from '../../../../services/pc.service';
import { StudentView } from '../../../../models/views/student-view';
import { WorkInProgressComponent } from '../../../dev/work-in-progress/work-in-progress.component';

@Component({
  selector: 'app-modal-assign-bundle',
  standalone: true,
  imports: [WorkInProgressComponent],
  templateUrl: './modal-assign-bundle.component.html',
  styleUrl: './modal-assign-bundle.component.scss'
})
export class ModalAssignBundleComponent {
  student: StudentView = {} as StudentView
  pc: Pc = {} as Pc

  constructor(
    public activeModal: NgbActiveModal,
    private pcservice: PCService
  ) { }

  initModal(student: StudentView) {
    this.student = student;
  }
}
