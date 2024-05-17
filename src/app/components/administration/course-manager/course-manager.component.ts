import { Component, OnInit } from '@angular/core';
import { Course } from '../../../models/course';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-course-manager',
  standalone: true,
  imports: [],
  templateUrl: './course-manager.component.html',
  styleUrl: './course-manager.component.scss'
})
export class CourseManagerComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses: Course[]) => {
      this.courses = courses;
    });
  }
}
