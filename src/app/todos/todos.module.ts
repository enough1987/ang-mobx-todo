import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodosComponent } from './todos.component';
import { TodosResolverService } from './services/todos-resolver.service';
import { MobxAngularModule } from 'mobx-angular';
import { TodoStore } from './todos.store';


const COMPONENTS = [
  TodosComponent,
  TodoComponent,
  CreateTodoComponent,
];

const SERVICES = [
  TodosResolverService,
  TodoStore
];

@NgModule({
  imports: [
    CommonModule,
    MobxAngularModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    ...SERVICES,
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class TodosModule { }
