import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';
import { MemoizedSelector } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { removeTodoItem } from './ngrx/todo-list.actions';

describe('AppComponent', () => {
  const initialState = {}
  let store: MockStore;
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  interface State {
    todoList: string[]
  }
  let mockUsernameSelector: MemoizedSelector<State, string>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        provideMockStore({
          initialState
        })
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    spyOn(store, 'dispatch')
  });
  it('should create the app', () => {
    expect(app).toBeTruthy();
  });
  it('should remove item from the store', waitForAsync(() => {
    app.ngOnInit();
    app.removeItem('Eat Pineapplesss');
    fixture.whenStable().then(() => {
      expect(store.dispatch).toHaveBeenCalledWith(removeTodoItem({ todoItem: 'Eat Pineapplesss' }))
    })
  }))
});
