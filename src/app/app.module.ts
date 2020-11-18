import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReactiveFormsModule } from '@angular/forms';
import { todoListReducer } from './ngrx/todo-list.reducer';
import { authReducer } from './ngrx/auth.reducer';
import { TodoListEffects } from './ngrx/todo-list.effects';
import { TodoAsyncComponent } from './todo-async/todo-async.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TodoAsyncComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      'todoList': todoListReducer,
      'auth': authReducer
    }),
    EffectsModule.forRoot([
      TodoListEffects
    ]),
    StoreDevtoolsModule.instrument(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
