import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../todo-item/todo-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItem, CommonModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  @Input({ required: true })
  todos!: string[];

  @Output()
  removeTodo = new EventEmitter<string>();

  onRemoveTodo(todo: string) {
    this.removeTodo.emit(todo);
  }
}
