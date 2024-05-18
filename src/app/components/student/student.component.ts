import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentView } from '../../models/views/student-view';
import { ActivatedRoute } from '@angular/router';
import { ModalAssignBundleComponent } from '../modals/shared/modal-assign-bundle/modal-assign-bundle.component';
import { ModalAssignPcComponent } from '../modals/shared/modal-assign-pc/modal-assign-pc.component';
import { ModalAssignAccessoriesComponent } from '../modals/shared/modal-assign-accessories/modal-assign-accessories.component';

import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services/auth.service';
import { PCAssignmentService } from '../../services/pcassignment.service';
import { AccessoryAssignmentService } from '../../services/accessory-assignment.service';
import { PCAssignment } from '../../models/pcassignment';
import { AccessoryAssignment } from '../../models/accessories-assignment';
import { Course } from '../../models/course';
import { ModalNewStudentTicketComponent } from '../modals/modal-new-student-ticket/modal-new-student-ticket.component';
import { WorkInProgressComponent } from '../dev/work-in-progress/work-in-progress.component';
import { ModalReturnComponent } from '../modals/modal-return/modal-return.component';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule, CommonModule, NgbModalModule, WorkInProgressComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss',
})
export class StudentComponent implements OnInit {
  student: StudentView = {
    course: {} as Course,
  } as StudentView;

  isAdmin: boolean = false;

  constructor(
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private authService: AuthService,
    private pcAssignmentService: PCAssignmentService,
    private accessoriesAssignmentService: AccessoryAssignmentService
  ) {}

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
    const id = +(this.activatedRoute.snapshot.paramMap.get('id') || 0);
    this.studentService.getStudentDetails(id).subscribe((student) => {
      this.student = student;
      this.student.id = id;
      console.log(this.student);
    });
  }

  openBundleAssign() {
    const m = this.modalService.open(ModalAssignBundleComponent, {
      size: 'lg',
      backdrop: 'static',
      animation: true,
      keyboard: true,
    });

    (m.componentInstance as ModalAssignBundleComponent).initModal(this.student);
  }

  refreshPcList() {
    this.pcAssignmentService
      .getStudentPCAssignments(this.student.id)
      .subscribe((ass: PCAssignment[]) => {
        this.student.pcAssignments = ass;
      });
  }

  refreshAccessoriesList() {
    this.accessoriesAssignmentService
      .getStudentAccessoryAssignmentDetails(this.student.id)
      .subscribe((ass: AccessoryAssignment[]) => {
        this.student.accessoryAssignments = ass;
      });
  }

  async openPcAssign() {
    console.log(this.student);
    const m = this.modalService.open(ModalAssignPcComponent, {
      size: 'lg',
      backdrop: 'static',
      animation: true,
      keyboard: true,
    });

    (m.componentInstance as ModalAssignPcComponent).initModal(this.student);
    await m.result;
    this.refreshPcList();
  }

  async openAccessoryAssign() {
    const m = this.modalService.open(ModalAssignAccessoriesComponent, {
      size: 'lg',
      backdrop: 'static',
      animation: true,
      keyboard: true,
    });

    (m.componentInstance as ModalAssignPcComponent).initModal(this.student);
    await m.result;
    this.refreshAccessoriesList();
  }

  openNewTicket() {
    const m = this.modalService.open(ModalNewStudentTicketComponent, {
      size: 'lg',
      backdrop: 'static',
      animation: true,
      keyboard: true,
    });
  }

  async returnPc(pcAssignment: PCAssignment) {
    const m = this.modalService.open(ModalReturnComponent, {
      size: 'lg',
      backdrop: 'static',
      animation: true,
      keyboard: true,
    });
    (m.componentInstance as ModalReturnComponent).initModal(`PC ${pcAssignment.pc.stock?.brand} ${pcAssignment.pc.stock?.model} - Seriale: ${pcAssignment.pc.serial} - Cespite: ${pcAssignment.pc.propertySticker}`);
    const res: { returnDate: string; returnReasonId: number } = await m.result;

    this.pcAssignmentService
      .returnPc(pcAssignment, res.returnDate, res.returnReasonId)
      .subscribe(() => {
        this.refreshPcList();
      });
  }

  async returnAccessory(accessoryAssignment: AccessoryAssignment) {
    const m = this.modalService.open(ModalReturnComponent, {
      size: 'lg',
      backdrop: 'static',
      animation: true,
      keyboard: true,
    });
    (m.componentInstance as ModalReturnComponent).initModal(`Accessorio ${accessoryAssignment.accessory.name}`);
    const res: { dateReturn: string; reasonReturnId: number } = await m.result;

    this.accessoriesAssignmentService
      .returnAccessory(accessoryAssignment.id, res.dateReturn, res.reasonReturnId)
      .subscribe(() => {
        this.refreshAccessoriesList();
      });
  }
}
