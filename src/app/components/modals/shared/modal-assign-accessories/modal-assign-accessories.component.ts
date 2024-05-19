import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Pc } from '../../../../models/pc';
import { StudentView } from '../../../../models/views/student-view';
import { Accessory } from '../../../../models/accessory';
import { AccessoryService } from '../../../../services/accessories.service';
import { FormsModule } from '@angular/forms';
import { AccessoryAssignmentService } from '../../../../services/accessory-assignment.service';
import { UsefulUtilities } from '../../../../useful-utilities';
import { ReasonsAssignment } from '../../../../models/reasons-assignment';
import { ReasonsService } from '../../../../services/reasons.service';
import { AccessoryAssignment } from '../../../../models/accessory-assignment';

@Component({
  selector: 'app-modal-assign-accessories',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-assign-accessories.component.html',
  styleUrl: './modal-assign-accessories.component.scss',
})
export class ModalAssignAccessoriesComponent {
  accessoryAssignment: AccessoryAssignment = {} as AccessoryAssignment;

  student: StudentView = {} as StudentView;
  
  accessories: Accessory[] = [];
  accessoryId: number | null = null;
  selectedAccessory: Accessory = {} as Accessory;

  reasonsAssignment: ReasonsAssignment[] = [];
  selectedReason: ReasonsAssignment = {} as ReasonsAssignment;

  constructor(
    public activeModal: NgbActiveModal,
    private accessoryService: AccessoryService,
    private accessoryAssignmentService: AccessoryAssignmentService
  ) {
    inject(ReasonsService)
      .getAssignmentReasons()
      .subscribe((reasons: ReasonsAssignment[]) => {
        this.reasonsAssignment = reasons;
        this.selectedReason = reasons[0];
      });
  }

  ngOnInit() {
    this.accessoryService.getAccessories().subscribe((accessory) => {
      this.accessories = accessory;
      this.selectedAccessory = accessory[0];
      this.accessoryAssignment.assignmentDate = UsefulUtilities.cutDate(
        new Date().toISOString()
      );
    });
  }

  initModal(student: StudentView) {
    this.student = student;
  }

  async assignAccessory() {
    this.accessoryAssignment.accessoryId = this.selectedAccessory.id;
    this.accessoryAssignment.studentId = this.student.id;
    this.accessoryAssignment.isReturned = false;
    this.accessoryAssignment.assignmentReasonId = this.selectedReason.id;
    console.log(this.accessoryAssignment);
    this.accessoryAssignmentService
      .createAccessoryAssignment(this.accessoryAssignment)
      .subscribe({
        next: () => {
          this.activeModal.close();
        },
      });
  }
}
