import { Component } from '@angular/core';
import { Student } from '../../../../models/student';
import { Pc } from '../../../../models/pc';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PCService } from '../../../../services/pc.service';

@Component({
  selector: 'app-modal-assign-bundle',
  standalone: true,
  imports: [],
  templateUrl: './modal-assign-bundle.component.html',
  styleUrl: './modal-assign-bundle.component.scss'
})
export class ModalAssignBundleComponent {
  student: Student = {} as Student
  pc: Pc = {} as Pc

  constructor(
    public activeModal: NgbActiveModal,
    private pcservice: PCService
  ) { }

  initModal(student: Student) {
    this.student = student;

  }
}
