import { Component } from '@angular/core';
import { Student } from '../../../../models/student';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PCService } from '../../../../services/pc.service';
import { Pc } from '../../../../models/pc';

@Component({
  selector: 'app-modal-assign-accessories',
  standalone: true,
  imports: [],
  templateUrl: './modal-assign-accessories.component.html',
  styleUrl: './modal-assign-accessories.component.scss'
})
export class ModalAssignAccessoriesComponent {
  student:Student = {} as Student
  pc:Pc = {} as Pc

  constructor(
    public activeModal: NgbActiveModal,
    private pcservice: PCService
  ){}

  initModal(student: Student) {
    this.student = student;
    
  }
}
