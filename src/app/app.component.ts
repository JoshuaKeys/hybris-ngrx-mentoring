import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTodoItem, removeTodoItem } from './ngrx/todo-list.actions';
import { selectTodoList } from './ngrx/todo-list.selector'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hybris-ngrx';
  todoItems: string[];
  todoListForm: FormGroup;
  constructor(private store: Store) { }
  ngOnInit() {
    this.todoListForm = new FormGroup({
      todoItem: new FormControl('')
    })
    this.store.select(selectTodoList).subscribe(value => {
      this.todoItems = value;
    })
  }
  removeItem(todoItem: string) {
    this.store.dispatch(removeTodoItem({ todoItem }));
  }
  onAddItem() {
    const todoItem = this.todoListForm.get('todoItem').value;
    this.store.dispatch(addTodoItem({ todoItem }))
  }
}
