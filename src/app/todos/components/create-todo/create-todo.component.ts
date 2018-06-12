import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoStore } from '../../todos.store';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTodoComponent {

  constructor(public store: TodoStore) {
  }

  public addTodo(name: string, price: number) {
    this.store.addTodo(name, price);
  }

}
