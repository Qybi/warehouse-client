import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Student } from '../../../../models/student';
import { PCAssignmentService } from '../../../../services/pcassignment.service';
import { PCService } from '../../../../services/pc.service';
import { Pc } from '../../../../models/pc';

@Component({
  selector: 'app-modal-assign-pc',
  standalone: true,
  imports: [],
  templateUrl: './modal-assign-pc.component.html',
  styleUrl: './modal-assign-pc.component.scss'
})
export class ModalAssignPcComponent {


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


