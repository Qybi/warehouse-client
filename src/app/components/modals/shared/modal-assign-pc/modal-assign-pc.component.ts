import { Component, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Student } from '../../../../models/student';
import { PCAssignmentService } from '../../../../services/pcassignment.service';
import { PCService } from '../../../../services/pc.service';
import { Pc } from '../../../../models/pc';
import { FormsModule } from '@angular/forms';
import { TicketService } from '../../../../services/ticket.service';
import { PCModelStockService } from '../../../../services/pcmodel-stock.service';
import { PCModelStock } from '../../../../models/pcmodel-stock';
import { PCAssignment } from '../../../../models/pcassignment';
import { Timestamp, map } from 'rxjs';

@Component({
  selector: 'app-modal-assign-pc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-assign-pc.component.html',
  styleUrl: './modal-assign-pc.component.scss'
})
export class ModalAssignPcComponent {
  // private idValue: number = 2;
  serial: string = "";
  cespite: string = "";
  serialOk: boolean = false;
  notes: string = "";

  selectedOption: string = "";

  pcModelStocks: PCModelStock[] = [];
  displayStock: PCModelStock[] = [];

  assignmentDate: string = "";
  returnDate: string = ""



  //se il valore è 0 il check non è stato effettuate, se è 1 il valore è presente, se è -1 non è presente
  modalValue: number = 0;
  // cespiteOk: boolean = false;

  student: Student = {} as Student
  pc: Pc = {} as Pc
  pcAssignment: PCAssignment = {} as PCAssignment

  private modalService = inject(NgbModal);

  constructor(
    public activeModal: NgbActiveModal,
    private pcService: PCService,
    private pcModelStockService: PCModelStockService,
    private pcAssignmentService: PCAssignmentService,

  ) { }

  initModal(student: Student) {
    this.student = student;
    this.setFocus();
    this.pcModelStockService.getPCModelStocks().subscribe((pcModelStocks) => {
      this.pcModelStocks = pcModelStocks;
      this.displayStock = this.pcModelStocks.map((x) => x);
    });
  }

  setFocus() {
    var seriale = document.getElementById('seriale');
    seriale?.focus();
  }

  checkSerialPC() {
    this.pcService.checkSerial(this.serial).subscribe({
      next: (res: any) => {
        if (!res) {
          this.modalValue = -1;
          return
        };
        this.serialOk = true;
        this.modalValue = 1;
      }
    });
  }

  saveSerial() {
    // Extract the stock ID from the selected option
    const selectValue = this.selectedOption.split(' ');
    const stockId = +selectValue[0];

    // Create a new PC object with the updated properties
    this.pc = {
      stockId,
      serial: this.serial,
      isMuletto: false,
      useCycle: 0
    } as Pc;

    // Send the new PC object to the backend

    this.modalValue = 0;
  }

  async assignPc() {



    // this.pc.propertySticker = this.cespite;
    this.pc.notes = this.notes;
    this.pc.propertySticker = this.cespite;
    this.pcAssignment.assignmentDate = this.assignmentDate;
    this.pcAssignment.isReturned = false;
    this.pcAssignment.forecastedReturnDate = this.returnDate;
    this.pcAssignment.studentId = this.student.id;

    // this.pcService.getPcIdFromSerial(this.serial).subscribe({
    //   next: (res: Pc) => {
    //     this.idValue = res.id;
    //   }
    // })

    // this.pc.id = this.idValue;

    if (!this.serialOk) {
      this.pcService.insertSerial(this.pc).subscribe(res => {
        console.log("Serial inserted successfully");
      });
    }
    this.pcService.updatePc(this.pc).subscribe(res => {
      console.log("Pc update successfully");
    });
    // this.pcAssignmentService.createPCAssignment(this.pcAssignment).subscribe(res => {
    //   console.log("Assignment Completed");
    // });
  }




}