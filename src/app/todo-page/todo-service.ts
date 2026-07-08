import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly todosSubject = new BehaviorSubject<string[]>(['Cook dinner', 'Fix roof', 'Clean house']);

  readonly todos$ = this.todosSubject.asObservable();

  private readonly searchTermSubject = new BehaviorSubject<string>('');

  readonly searchTerm$ = this.searchTermSubject.asObservable();

  readonly filteredTodos$ = combineLatest([
    this.todos$,
    this.searchTerm$
  ]).pipe(
    map(([todos, term]) =>  
      todos.filter(todo => 
        todo.toLowerCase().includes(term.toLowerCase())
      )
    )
  );

  updateSearch(term:string) {
    this.searchTermSubject.next(term);
  }

  addTodo(todo: string) {
    this.todosSubject.next([
      ...this.todosSubject.value,
      todo
    ]);
  }

  removeTodo(todo: string) {
    this.todosSubject.next(
      this.todosSubject.value.filter(t => t !== todo)
    );
  }
}
