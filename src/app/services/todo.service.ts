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

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    const todos = this.http.get<Todo[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
    return todos;
  }

  createTodo(todo: Todo) {
    this.http.post('https://jsonplaceholder.typicode.com/todos', todo, { headers: this.httpHeaders });
  }
}
