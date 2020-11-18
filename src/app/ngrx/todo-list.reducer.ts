import { createReducer, on } from "@ngrx/store";
import { addTodoItem, deleteTodoItemSuccess, fetchTodoItemsSuccess, removeTodoItem } from './todo-list.actions';


const initialState = [
  // 'Eat Pineapples',
  // 'Do Sports',
  // 'Start Work'
];
const _todoListReducer = createReducer(initialState, on(addTodoItem, (state, action) => {
  const copiedState = [...state];
  copiedState.push(action.todoItem);
  return copiedState;
}), on(removeTodoItem, deleteTodoItemSuccess, (state, { todoItem }) => {
  const copiedState = [...state];
  const indexToRemove = copiedState.findIndex(item => item === todoItem);
  copiedState.splice(indexToRemove, 1);
  return copiedState;
}), on(fetchTodoItemsSuccess, (state, { todoItems }) => {
  return todoItems;
}));

export function todoListReducer(state, action) {
  return _todoListReducer(state, action);
}
