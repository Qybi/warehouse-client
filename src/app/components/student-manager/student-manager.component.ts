import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import _ from 'lodash';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalImportFileComponent } from '../modals/shared/modal-import-file/modal-import-file.component';
import { ModalAssignAccessoriesComponent } from '../modals/shared/modal-assign-accessories/modal-assign-accessories.component';
import { ModalAssignPcComponent } from '../modals/shared/modal-assign-pc/modal-assign-pc.component';
import { ModalAssignBundleComponent } from '../modals/shared/modal-assign-bundle/modal-assign-bundle.component';
import { RouterModule } from '@angular/router';
import { WorkInProgressComponent } from '../dev/work-in-progress/work-in-progress.component';

@Component({
  selector: 'app-student-manager',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModalModule, RouterModule],
  templateUrl: './student-manager.component.html',
  styleUrl: './student-manager.component.scss',
})
export class StudentManagerComponent {
  displayStudents: Student[] = [];
  students: Student[] = [];
  selectedStudent: Student = {} as Student;
  search: string = '';

  constructor(
    private studentService: StudentService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
      this.displayStudents = this.students.map((x) => x);
    });
  }

  searchStudent() {
    this.displayStudents = this.students.filter((student) => {
      return (
        student.surname.toLowerCase().includes(this.search.toLowerCase()) ||
        student.name.toLowerCase().includes(this.search.toLowerCase()) ||
        student.course.shortName
          .toLowerCase()
          .includes(this.search.toLowerCase()) ||
        (
          student.name.toLowerCase() +
          ' ' +
          student.surname.toLowerCase()
        ).includes(this.search.toLowerCase()) ||
        (
          student.surname.toLowerCase() +
          ' ' +
          student.name.toLowerCase()
        ).includes(this.search.toLowerCase()) ||
        student.schoolIdentifierId
          .toLowerCase()
          .includes(this.search.toLowerCase())
      );
    });
  }

  openImport() {
    const m = this.modalService.open(WorkInProgressComponent, {
      size: 'lg',
      backdrop: 'static',
      animation: true,
      keyboard: true,
    });
    // const m = this.modalService.open(ModalImportFileComponent, {
    //   size: 'lg',
    //   backdrop: 'static',
    //   animation: true,
    //   keyboard: true,
    // });

    // m.result.then((result) => {
    //   console.log(result);
    // });
  }
}
