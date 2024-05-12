import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';
import { StudentView } from '../models/views/student-view';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  _baseUrl = 'https://localhost:7085/api/v1';

  constructor(private http: HttpClient) { }

  getStudents(): any {
    return this.http.get<Student[]>(`${this._baseUrl}/students`);
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

  getStudent(id: number): Observable<StudentView> {
    return this.http.get<StudentView>(`${this._baseUrl}/students?id=${id}`);
  }
}
