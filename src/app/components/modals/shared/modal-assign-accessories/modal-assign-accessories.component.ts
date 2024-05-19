import { Component } from '@angular/core';
import { Student } from '../../../../models/student';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PCService } from '../../../../services/pc.service';
import { Pc } from '../../../../models/pc';
import { StudentView } from '../../../../models/views/student-view';
import { Accessory } from '../../../../models/accessory';
import { AccessoryService } from '../../../../services/accessories.service';
import { AccessoryAssignment } from '../../../../models/accessories-assignment';
import { FormsModule } from '@angular/forms';
import { AccessoryAssignmentService } from '../../../../services/accessory-assignment.service';
import { UsefulUtilities } from '../../../../useful-utilities';

@Component({
  selector: 'app-modal-assign-accessories',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-assign-accessories.component.html',
  styleUrl: './modal-assign-accessories.component.scss'
})
export class ModalAssignAccessoriesComponent {
  student: StudentView = {} as StudentView
  pc:Pc = {} as Pc
  accessoryItems: Accessory[] = []
  accessories: Accessory[] = []
  accessoryAssignment: AccessoryAssignment = {} as AccessoryAssignment
  accessoryId: number | null = null
  selectedAccessory:Accessory = {} as Accessory;
  

  constructor(
    public activeModal: NgbActiveModal,
    private pcservice: PCService,
    private accessoryService: AccessoryService,
    private accessotyAssignmentService: AccessoryAssignmentService
  ){}


  ngOnInit() {
    this.accessoryService.getAccessories().subscribe((accessory) => {
      this.accessories = accessory;
      this.accessoryItems = this.accessories.map((x) => x);
      this.selectedAccessory = accessory[0];
    });
  }

  initModal(student: StudentView) {
    this.student = student;
    this.accessoryAssignment.assignmentDate = UsefulUtilities.cutDate((new Date()).toISOString());
  }

  async assignAccessory(){
    this.accessoryAssignment.accessory = this.selectedAccessory;
    this.accessoryAssignment.accessoryId = this.selectedAccessory.id;
    this.accessoryAssignment.studentId = this.student.id;
    this.accessoryAssignment.isReturned = false;
    console.log(this.accessoryAssignment);
    this.accessotyAssignmentService.createAccessoryAssignment(this.accessoryAssignment).subscribe({
      next: () => {
        this.activeModal.close();
      }
    })
  }
}
