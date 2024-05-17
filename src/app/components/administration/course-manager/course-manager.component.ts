import { Component, OnInit } from '@angular/core';
import { Course } from '../../../models/course';
import { CourseService } from '../../../services/course.service';
import { CommonModule } from '@angular/common';
import { SharedModalService } from '../../../services/shared-modal.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCourseComponent } from './modal-course/modal-course.component';

@Component({
  selector: 'app-course-manager',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-manager.component.html',
  styleUrl: './course-manager.component.scss',
})
export class CourseManagerComponent implements OnInit {
  courses: Course[] = [];

  constructor(
    private courseService: CourseService,
    private sharedModalService: SharedModalService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses: Course[]) => {
      // console.log(courses);
      this.courses = courses;
      for (let course of courses) {
        const sd = new Date(course.dateStart);
        const ed = new Date(course.dateEnd);
        if (sd > ed) course.dateEnd = '';
      }
    });
  }

  createCourse(): void {
    const m = this.modalService.open(ModalCourseComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
      animation: true,
    });
    m.result.then((course: Course) => {
      if (!course) return;
      this.courses.push(course);
    });
  }

  openEditModal(course: Course): void {
    const m = this.modalService.open(ModalCourseComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
      animation: true,
    });
    (m.componentInstance as ModalCourseComponent).initEdit(course.id, true);
    m.result.then((course: Course) => {
      if (!course) return;
      this.courses = this.courses.map((c: Course) =>
        c.id === course.id ? course : c
      );
    });
  }

  async deleteCourse(course: Course) {
    const res = await this.sharedModalService.openConfirm(
      'Cancella corso',
      'Sei sicuro di voler cancellare il corso?'
    );

    if (res) {
      console.log('DELETING', course);
      this.courseService.deleteCourse(course.id).subscribe(() => {
        this.courses = this.courses.filter((c: Course) => c.id !== course.id);
      });
    }
  }
}
