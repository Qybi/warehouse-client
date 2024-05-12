import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentView } from '../../models/views/student-view';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss',
})
export class StudentComponent implements OnInit {
  student: StudentView = {
    course: {}
  } as StudentView;

  constructor(
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = +(this.activatedRoute.snapshot.paramMap.get('id')||0);
    this.studentService.getStudentDetails(id).subscribe((student) => {
      this.student = student;
    });
  }
}
