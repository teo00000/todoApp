import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [],
  templateUrl: './todo-input.html',
  styleUrl: './todo-input.css',
})
export class TodoInput {
  
  @Output()
  search = new EventEmitter<string>();

  @Output()
  addTodo = new EventEmitter<string>();

  onSearch(term: string) {
    this.search.emit(term);
  }

  onAddTodo(todo: string) {
    this.addTodo.emit(todo);
  }
}
