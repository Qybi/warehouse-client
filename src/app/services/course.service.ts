import { Injectable } from '@angular/core';
import { 
  HttpClient,
  HttpHeaders,
  HttpParamsOptions,
}from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course'; // Assicurati di importare il modello corretto per i corsi

@Injectable({
  providedIn: 'root',
})
export class CourseService {  //servizio usato per comunicare con l'API del backend Blazor per gestire i corsi
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  
  private _baseURL:string = '/course';
  
  constructor(private http: HttpClient) {}
  
  //      --- OPERAZIONI CRUD ---
  //funzione che ottiene l'elenco dei corsi
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this._baseURL}`);
  }
  
  //funzione che ritorna i dettagli di un singolo corso in base al suo ID
  getCourseDetails(id: number): Observable<Course> {
    const url = `${this._baseURL}/${id}`;
    return this.http.get<Course>(url);
  }
  
  //funzione per creare un nuovo corso
  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this._baseURL}/create`, course, { headers: this.httpHeaders });
  }
  
  //funzione per aggiornare un corso esistente
  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this._baseURL}/update`, course, { headers: this.httpHeaders });
  }
  
  //funzione per eliminare un corso in base al suo ID
  deleteCourse(id: number): Observable<any> {
    return this.http.delete(`${this._baseURL}/delete?id=${id}`);
  }
}
