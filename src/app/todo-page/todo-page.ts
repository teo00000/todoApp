import { Component, OnInit } from '@angular/core';
import { TodoInput } from './todo-input/todo-input';
import { TodoList } from './todo-list/todo-list';
import { TodoService } from './todo-service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [TodoInput, TodoList, AsyncPipe],
  templateUrl: './todo-page.html',
  styleUrl: './todo-page.css',
})
export class TodoPage {
  todos$!: Observable<string[]>;

  constructor(public todoService: TodoService) {
    this.todos$ = this.todoService.filteredTodos$;
  }

  currentSearch = '';

  onSearch(term: string) {
    this.todoService.updateSearch(term);
  }

  onAddTodo(todo: string) {
    this.todoService.addTodo(todo);
    this.todos$ = this.todoService.todos$;
  }

  onRemoveTodo(todo: string) {
    
  }
}
