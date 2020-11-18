import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { deleteTodoItemRequest, fetchTodoItemsRequest, removeTodoItem } from '../ngrx/todo-list.actions';
import { selectLastTodo, selectTodoList } from '../ngrx/todo-list.selector';
import { TodoItemsService } from '../services/todo-items.service';

@Component({
  selector: 'app-todo-async',
  templateUrl: './todo-async.component.html',
  styleUrls: ['./todo-async.component.scss']
})
export class TodoAsyncComponent implements OnInit {

  todoItems: Observable<string[]>
  todoListForm: FormGroup;
  constructor(private store: Store, private todoItemsService: TodoItemsService) { }
  ngOnInit() {
    this.store.dispatch(fetchTodoItemsRequest())
    this.todoListForm = new FormGroup({
      todoItem: new FormControl('')
    })
    this.todoItems = this.store.select(selectLastTodo).pipe(
      map(item => [item])
    )
  }
  removeItem(todoItem: string) {
    this.store.dispatch(deleteTodoItemRequest({ todoItem }));
  }
  onAddItem() {
  }
}
