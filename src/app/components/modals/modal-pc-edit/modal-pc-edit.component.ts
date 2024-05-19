import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Pc } from '../../../models/pc';
import { FormsModule } from '@angular/forms';
import { PCModelStock } from '../../../models/pcmodel-stock';
import { CommonModule } from '@angular/common';
import { PCService } from '../../../services/pc.service';
import { PCAssignmentService } from '../../../services/pcassignment.service';
import { PCAssignment } from '../../../models/pcassignment';

@Component({
  selector: 'app-modal-pc-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modal-pc-edit.component.html',
  styleUrl: './modal-pc-edit.component.scss'
})
export class ModalPcEditComponent {
  pc: Pc = {
    stock: {
    } as PCModelStock
  } as Pc;

  constructor(public activeModal: NgbActiveModal, private pcAssService: PCAssignmentService) {}

  initModal(pc: Pc) {
    this.pc = pc;
    this.pcAssService.getPcAssignmentsByPcId(pc.id).subscribe({
      next: (res: PCAssignment[]) => {
        this.pc.assignments = res;
      }
    })
  }
}
