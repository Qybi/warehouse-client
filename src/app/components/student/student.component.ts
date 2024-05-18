import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentView } from '../../models/views/student-view';
import { ActivatedRoute } from '@angular/router';
import { ModalAssignBundleComponent } from '../modals/shared/modal-assign-bundle/modal-assign-bundle.component';
import { ModalAssignPcComponent } from '../modals/shared/modal-assign-pc/modal-assign-pc.component';
import { ModalAssignAccessoriesComponent } from '../modals/shared/modal-assign-accessories/modal-assign-accessories.component';
import { Student } from '../../models/student';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule, CommonModule, NgbModalModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss',
})
export class StudentComponent implements OnInit {
  student: StudentView = {
    course: {}
  } as StudentView;
  selectedStudent: Student = {} as Student;

  constructor(
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    const id = +(this.activatedRoute.snapshot.paramMap.get('id')||0);
    this.studentService.getStudentDetails(id).subscribe((student) => {
      this.student = student;
    });
  }

  openBundleAssign() {
    const m = this.modalService.open(ModalAssignBundleComponent, {
      size: 'lg',
      backdrop: 'static',
      animation: true,
      keyboard: true,
    });

    (m.componentInstance as ModalAssignBundleComponent).initModal(
      this.selectedStudent
    );
  }

  openPcAssign() {
    const m = this.modalService.open(ModalAssignPcComponent, {
      size: 'lg',
      backdrop: 'static',
      animation: true,
      keyboard: true,
    });

    (m.componentInstance as ModalAssignPcComponent).initModal(
      this.selectedStudent
    );
  }

  openAccessoryAssign() {
    const m = this.modalService.open(ModalAssignAccessoriesComponent, {
      size: 'lg',
      backdrop: 'static',
      animation: true,
      keyboard: true,
    });

    (m.componentInstance as ModalAssignPcComponent).initModal(
      this.selectedStudent
    );
  }

}
