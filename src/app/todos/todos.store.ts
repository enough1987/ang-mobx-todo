import { Injectable } from '@angular/core';
import {action, computed, observable} from 'mobx-angular';
import { State, Todo } from './todos.dictionary';

@Injectable()
export class TodoStore {
  @observable
  state: State = {
    todos: []
  };

  @computed
  get countTotalPrice(): any {
    return this.state.todos.reduce((sum: number, todo: Todo): number => {
      return +sum + +todo.price;
    }, 0);
  }

  @action
  addTodo(name: string, price: number) {
    console.log( this.state.todos);
    this.state.todos.push({name, price: +price});
  }

  @action
  deleteTodo(index: number) {
    this.state.todos.splice(index, 1);
  }

  @action
  saveTodos(todos: Todo[]) {
    this.state.todos = todos;
  }

}
