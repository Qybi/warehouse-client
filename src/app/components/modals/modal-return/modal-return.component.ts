import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ReasonsService } from '../../../services/reasons.service';
import { ReasonsReturn } from '../../../models/reasons-return';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-return',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-return.component.html',
  styleUrl: './modal-return.component.scss'
})
export class ModalReturnComponent {
  message: string = '';
  returnDate: string = '';
  returnReasonId: number = 0;
  
  reasons: ReasonsReturn[] = [];
  selectedReason: ReasonsReturn = {} as ReasonsReturn;

  constructor(public activeModal: NgbActiveModal) {
    inject(ReasonsService).getReturnReasons().subscribe((reasons) => { 
      this.reasons = reasons
      this.selectedReason = reasons[0];
    });
    this.returnDate = new Date().toISOString().split('T')[0];
  }

  initModal(message: string) {
    this.message = message;
  }

  close() {
    const pepegone: any = { returnDate: this.returnDate, returnReasonId: this.selectedReason.id };
    console.log(pepegone)
    this.activeModal.close(pepegone);
  }
}
