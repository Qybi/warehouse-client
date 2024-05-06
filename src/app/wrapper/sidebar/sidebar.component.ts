import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  todos: Todo[] = [];

  constructor(private tdServ: TodoService) { 
    tdServ.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
