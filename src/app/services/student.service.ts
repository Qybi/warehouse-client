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

  _baseUrl = 'https://localhost:7085/api/v1';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this._baseUrl}/students`);
  }

  getStudent(id: number): Observable<StudentView> {
    return this.http.get<StudentView>(`${this._baseUrl}/students/${id}`);
  }

  getStudentDetails(id: number): Observable<StudentView> {
    return this.http.get<StudentView>(`${this._baseUrl}/students/details/${id}`);
  }

  postStudentJson(studentJson: string): Observable<boolean> {
    return this.http.post<boolean>(`${this._baseUrl}/jsonImport`, studentJson, { headers: this.httpHeaders });
  }

}
