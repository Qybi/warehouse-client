//CHIAMATA HTTP DA ANGULAR GLI ENDPOINT DEL PROGETTO BACKEND: localhost/api/TodoService 
//mi connetto a quello e mi restituisce un json con l'elenco dei todos

import { Injectable } from '@angular/core';
import { Todo } from '../wrapper/sidebar/sidebar.component';
import {
  HttpClient,
  HttpHeaders,
  HttpParamsOptions,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class TodoService {
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  
  private _baseURL:string = 'https://localhost:80/api/todos';  //l'URL del backend Blazor
  
  constructor(private http: HttpClient) {}
  
  getTodos(): Observable<Todo[]> {
    const todos = this.http.get<Todo[]>(
      `${this._baseURL}`  //col this accedo ad altri metodi o proprietà
    );
    return todos;
  }
  
  getTodoDetails(id: number): Observable<Todo> {
    const url = `${this._baseURL}/details?id=${id}`;
    return this.http.get<Todo>(url);
  }
  
  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this._baseURL}/create`, todo, { headers: this.httpHeaders });
  }
  
  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this._baseURL}/update?id=${todo.id}`, todo, { headers: this.httpHeaders });
  }
  
  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this._baseURL}/delete?id=${id}`);
  }
}
