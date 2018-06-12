import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosModule} from './todos/todos.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.router';
import { MobxAngularModule } from 'mobx-angular';

const COMPONENTS = [
  AppComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    BrowserModule,
    MobxAngularModule,
    HttpClientModule,
    TodosModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
