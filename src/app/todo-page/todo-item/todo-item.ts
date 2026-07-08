import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  @Input({ required: true })
  todo!: string;

  @Output()
  removeTodo = new EventEmitter<string>();

  onRemoveTodo() {
    this.removeTodo.emit(this.todo);
  }
}
