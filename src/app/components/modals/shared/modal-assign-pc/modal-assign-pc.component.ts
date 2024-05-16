import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Student } from '../../../../models/student';
import { PCAssignmentService } from '../../../../services/pcassignment.service';
import { PCService } from '../../../../services/pc.service';
import { Pc } from '../../../../models/pc';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-assign-pc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-assign-pc.component.html',
  styleUrl: './modal-assign-pc.component.scss'
})
export class ModalAssignPcComponent {

  serial: string = "";
  cespite: string = "";
  serialOk:boolean = false;
  // cespiteOk: boolean = false;

  student:Student = {} as Student
  pc:Pc = {} as Pc

  constructor(
    public activeModal: NgbActiveModal,
    private pcservice: PCService
  ){}

  initModal(student: Student) {
    this.student = student;
    this.setFocus();
  }

  setFocus(){
    var seriale = document.getElementById('seriale');
    seriale?.focus();
  }

  checkSerialPC(){
    this.pcservice.checkSerial(this.serial).subscribe({
      next: (res) => {
        if(!res) return;
        this.serialOk = true;
      }
    });
  }

  checkCespitePc(){
    // this.pcservice.checkCespite(this.cespite)
  }
}


