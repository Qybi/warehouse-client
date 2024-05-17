import { Component } from '@angular/core';
import { Course } from '../../../../models/course';
import { CourseService } from '../../../../services/course.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsefulUtilities } from '../../../../useful-utilities';

@Component({
  selector: 'app-modal-course',
  standalone: true,
  imports: [FormsModule, CommonModule],
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
      this.course.dateStart = UsefulUtilities.cutDate(course.dateStart);
      this.course.dateEnd = UsefulUtilities.cutDate(course.dateEnd);
    });
  }

  save(): void {
    console.log("SAVING< iseidt", this.isEdit)
    if (this.isEdit) {
      console.log("SAVIN UPDATE")
      this.courseService.updateCourse(this.course).subscribe(() => {
        this.activeModal.close(this.course);
      });
    } else {
      this.courseService.createCourse(this.course).subscribe(() => {
        this.activeModal.close(this.course);
      });
    }
  }
}
