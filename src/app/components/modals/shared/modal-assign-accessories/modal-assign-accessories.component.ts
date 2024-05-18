import { Component } from '@angular/core';
import { Student } from '../../../../models/student';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PCService } from '../../../../services/pc.service';
import { Pc } from '../../../../models/pc';
import { StudentView } from '../../../../models/views/student-view';

@Component({
  selector: 'app-modal-assign-accessories',
  standalone: true,
  imports: [],
  templateUrl: './modal-assign-accessories.component.html',
  styleUrl: './modal-assign-accessories.component.scss'
})
export class ModalAssignAccessoriesComponent {
  student: StudentView = {} as StudentView
  pc:Pc = {} as Pc

  constructor(
    public activeModal: NgbActiveModal,
    private pcservice: PCService
  ){}

  initModal(student: StudentView) {
    this.student = student;
    
  }
}
