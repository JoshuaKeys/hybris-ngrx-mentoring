import { createAction, props } from '@ngrx/store';

export const addTodoItem = createAction(
  '[App Component] AddTodoItem',
  props<{ todoItem: string }>()
)

export const removeTodoItem = createAction(
  '[App Component] RemoveTodoItem',
  props<{ todoItem: string }>()
)

export const fetchTodoItemsRequest = createAction(
  '[TodoAsycnComponent] fetchTodoItemsRequest'
);
export const fetchTodoItemsSuccess = createAction(
  '[TodoListEffect] fetchTodoItemsSuccess',
  props<{ todoItems: string[] }>()
)
export const fetchTodoItemsFailure = createAction(
  '[TodoListEffect] fetchTodoItemsFailure',
  props<{ errorMessage: string }>()
)
export const deleteTodoItemRequest = createAction(
  '[TodoAsyncComponent] deleteTodoItemRequest',
  props<{ todoItem: string }>()
)
export const deleteTodoItemSuccess = createAction(
  '[TodoAsyncComponent] deleteTodoItemSuccess',
  props<{ todoItem: string }>()
)
