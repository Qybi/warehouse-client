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
      this.courses = courses;
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
  }

  deleteCourse(course: Course): void {
    if (
      this.sharedModalService.openConfirm(
        'Cancella corso',
        'Sei sicuro di voler cancellare il corso?'
      )
    ) {
      this.courseService.deleteCourse(course.id).subscribe(() => {
        this.courses = this.courses.filter((c: Course) => c.id !== course.id);
      });
    }
  }
}
