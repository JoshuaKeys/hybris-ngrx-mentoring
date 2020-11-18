import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAsyncComponent } from './todo-async.component';

describe('TodoAsyncComponent', () => {
  let component: TodoAsyncComponent;
  let fixture: ComponentFixture<TodoAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoAsyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
