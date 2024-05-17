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

  pcModelStocks: PCModelStock[] = [];
  displayStock: PCModelStock[] = [];

  //se il valore è 0 il check non è stato effettuate, se è 1 il valore è presente, se è -1 non è presente
  modalValue: number = 0;
  // cespiteOk: boolean = false;

  student:Student = {} as Student
  pc:Pc = {} as Pc

  private modalService = inject(NgbModal);

  constructor(
    public activeModal: NgbActiveModal,
    private pcService: PCService,
    private pcModelStockService: PCModelStockService
  ){}

  initModal(student: Student) {
    this.student = student;
    this.setFocus();
    this.pcModelStockService.getPCModelStocks().subscribe((pcModelStocks) => {
      this.pcModelStocks = pcModelStocks;
      this.displayStock = this.pcModelStocks.map((x) => x);
    });
  }

  setFocus(){
    var seriale = document.getElementById('seriale');
    seriale?.focus();
  }

  checkSerialPC(){
    this.pcService.checkSerial(this.serial).subscribe({
      next: (res: any) => {
        if(!res){
          this.modalValue = -1;
          return
        };
        this.serialOk = true;
        this.modalValue = 1;
      }
    });
  }

  checkCespitePc(){
    // this.pcservice.checkCespite(this.cespite)
  }

  sendSerial(){
    // this.pcService.

  }

  
}


