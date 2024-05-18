import { Component, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PCAssignmentService } from '../../../../services/pcassignment.service';
import { PCService } from '../../../../services/pc.service';
import { Pc } from '../../../../models/pc';
import { FormsModule } from '@angular/forms';
import { PCAssignment } from '../../../../models/pcassignment';
import { StudentView } from '../../../../models/views/student-view';
import { NewPcFromSerialCheckComponent } from '../../new-pc-from-serial-check/new-pc-from-serial-check.component';
import { ReasonsAssignment } from '../../../../models/reasons-assignment';
import { ReasonsService } from '../../../../services/reasons.service';
import { UsefulUtilities } from '../../../../useful-utilities';

@Component({
  selector: 'app-modal-assign-pc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-assign-pc.component.html',
  styleUrl: './modal-assign-pc.component.scss'
})
export class ModalAssignPcComponent {
  student: StudentView = {} as StudentView;

  serialOk: boolean = false;
  isNewPC: boolean = false;
  pcAssignment: PCAssignment = {} as PCAssignment;
  pc: Pc = {} as Pc

  reasonsAssignment: ReasonsAssignment[] = [];
  selectedReason: ReasonsAssignment = {} as ReasonsAssignment;

  private modalService = inject(NgbModal);

  constructor(
    public activeModal: NgbActiveModal,
    private pcService: PCService,
    private pcAssignmentService: PCAssignmentService,
  ) { 
    inject(ReasonsService).getAssignmentReasons().subscribe((reasons: ReasonsAssignment[]) => {
      this.reasonsAssignment = reasons;
      this.selectedReason = reasons[0];
    });
  }

  initModal(student: StudentView) {
    console.log(student);
    this.student = student;
    this.pcAssignment.studentId = student.id;
    this.pcAssignment.assignmentDate = UsefulUtilities.cutDate((new Date()).toISOString());
    this.setFocus();
  }

  setFocus() {
    var seriale = document.getElementById('seriale');
    seriale?.focus();
  }

  checkSerialPC() {
    this.pcService.getPcFromSerial(this.pc.serial).subscribe({
      next: (res: Pc) => {
        this.serialOk = !!res;
        if (this.serialOk) {
          this.isNewPC = false;
          this.pc = res;
          this.pc.propertySticker = '';
        } else {
          this.isNewPC = true;
          const m = this.modalService.open(NewPcFromSerialCheckComponent, { size: 'lg', backdrop: 'static', animation: true, keyboard: true });
          m.result.then((stockId: number) => {
            this.pc.stockId = stockId;
            console.log('current state of pc', this.pc);
          });
        }
      }
    });
  }

  async assignPc() {
    if (!this.pc || !this.pcAssignment) return;
    if (!this.isNewPC)
      this.pcAssignment.pcId = this.pc.id;
    else {
      this.pc.isMuletto = false;
      this.pc.status = "ASSEGNATO";
      this.pc.useCycle = 1;
      this.pcAssignment.pc = this.pc;
    }
    this.pcAssignment.isReturned = false;
    this.pcAssignment.assignmentReasonId = this.selectedReason.id;

    console.log(this.pcAssignment)
    
    this.pcAssignmentService.createPCAssignment(this.pcAssignment, this.isNewPC).subscribe({
      next: () => {
        this.activeModal.close();
      }
    });
  }
}