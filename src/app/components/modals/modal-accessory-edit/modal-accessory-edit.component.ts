import { Component } from '@angular/core';
import { Accessory } from '../../../models/accessory';
import { PCModelStock } from '../../../models/pcmodel-stock';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccessoryAssignmentService } from '../../../services/accessory-assignment.service';
import { AccessoryAssignment } from '../../../models/accessory-assignment';

@Component({
  selector: 'app-modal-accessory-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modal-accessory-edit.component.html',
  styleUrl: './modal-accessory-edit.component.scss'
})
export class ModalAccessoryEditComponent {
  accessory: Accessory = {
    stock: {
    } as PCModelStock
  } as Accessory;

  constructor(public activeModal: NgbActiveModal, private accAssService: AccessoryAssignmentService) {}

  initModal(accessory: Accessory) {
    this.accessory = accessory;
    this.accAssService.getPcAssignmentsByAccessoryId(accessory.id).subscribe({
      next: (res: AccessoryAssignment[]) => {
        this.accessory.assignments = res;
      }
    })
  }
}
