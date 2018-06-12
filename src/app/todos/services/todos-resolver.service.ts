import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GET_TODOS_URL, Todo } from '../todos.dictionary';
import { TodoStore } from '../todos.store';

@Injectable()
export class TodosResolverService implements Resolve<void> {
  constructor(private http: HttpClient,
              public store: TodoStore) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
    this.http.get<Todo[]>(GET_TODOS_URL).subscribe(todos => {
      console.log(todos);
      this.store.saveTodos(todos);
    });
  }
}
