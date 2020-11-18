import { createFeatureSelector, createSelector } from "@ngrx/store";


const todoFeature = createFeatureSelector<string[]>('todoList');
export const selectTodoList = createSelector(todoFeature, (todoList) => {
  return todoList;
});

export const selectLastTodo = createSelector(selectTodoList, todoItems => {
  return todoItems[todoItems.length - 1]
})
