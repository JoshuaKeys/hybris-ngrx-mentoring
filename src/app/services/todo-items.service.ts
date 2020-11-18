import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TodoItemsService {
  getTodoItems(): Observable<string[]> {
    return this.httpClient.get<string[]>('/api/todoItems');
  }
  deleteTodoItem(todoItem): Observable<any> {
    console.log(todoItem.todoItem)
    return this.httpClient.delete<any>('/api/todoItems', {
      params: new HttpParams().set('todoItem', todoItem.todoItem)
    })
  }

  constructor(private httpClient: HttpClient) { }
}
