import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';
import { StudentView } from '../models/views/student-view';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`/students`);
  }

  getStudent(id: number): Observable<StudentView> {
    return this.http.get<StudentView>(`/students/${id}`);
  }

  getStudentDetails(id: number): Observable<StudentView> {
    return this.http.get<StudentView>(`/students/details/${id}`);
  }

  postStudentJson(studentJson: string): Observable<boolean> {
    return this.http.post<boolean>(`/jsonImport`, studentJson, { headers: this.httpHeaders });
  }

}
