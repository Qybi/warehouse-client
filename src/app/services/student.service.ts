import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents(): any {
    // return this.http.get<Student[]>('http://localhost:3000/students');
    return [
      {
        id: 1,
        userId: 1,
        schoolIdentifierId: "1",
        iALManId: "1",
        emailUser: "",
        emailPersonal: "",
        surname: "Rossi",
        name: "Mario",
        courseId: 1,
        course: {
          shortName: "Informatica",
        }
      }
    ]
  }
}
