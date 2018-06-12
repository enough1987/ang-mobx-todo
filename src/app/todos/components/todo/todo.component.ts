import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoStore } from '../../todos.store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {

  constructor(public store: TodoStore) {
  }

  deleteTodo(index: number) {
    this.store.deleteTodo(index);
  }

}
