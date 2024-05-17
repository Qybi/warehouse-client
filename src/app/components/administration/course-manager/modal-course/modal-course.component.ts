import { Component } from '@angular/core';
import { Course } from '../../../../models/course';
import { CourseService } from '../../../../services/course.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-course',
  standalone: true,
  imports: [],
  templateUrl: './modal-course.component.html',
  styleUrl: './modal-course.component.scss'
})
export class ModalCourseComponent {
  isEdit: boolean = false;
  course: Course = {} as Course;

  constructor(private courseService: CourseService, public activeModal: NgbActiveModal) {}

  initEdit(courseId: number, isEdit: boolean): void {
    this.isEdit = isEdit;
    this.courseService.getCourseDetails(courseId).subscribe((course: Course) => {
      this.course = course;
    });
  }
}
