import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { deleteTodoItemRequest, deleteTodoItemSuccess, fetchTodoItemsFailure, fetchTodoItemsRequest, fetchTodoItemsSuccess, removeTodoItem } from './todo-list.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators'
import { TodoItemsService } from '../services/todo-items.service';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class TodoListEffects {
  fetchTodoItemsRequest$ = createEffect(() => this.actions$.pipe(
    ofType(fetchTodoItemsRequest),
    mergeMap(action => this.todoItemsService.getTodoItems().pipe(
      map(todoItems => {
        return fetchTodoItemsSuccess({ todoItems })
      }),
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        return of(fetchTodoItemsFailure({ errorMessage: err.message }))
      })
    ))
  ));
  deleteTodoItemRequest$ = createEffect(() => this.actions$.pipe(
    ofType(deleteTodoItemRequest),

    mergeMap(action => this.todoItemsService.deleteTodoItem({ todoItem: action.todoItem }).pipe(
      map(_ => deleteTodoItemSuccess({ todoItem: action.todoItem }))
    ))
  ))
  constructor(private actions$: Actions, private todoItemsService: TodoItemsService) { }
}
