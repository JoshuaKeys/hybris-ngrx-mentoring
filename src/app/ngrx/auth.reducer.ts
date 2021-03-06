import { Action, createReducer } from "@ngrx/store"

interface AuthState {
  authenticated: boolean;
}

const initialState: AuthState = {
  authenticated: false
}

const _authReducer = createReducer(initialState);


export function authReducer(state: AuthState, action: Action) {
  return _authReducer(state, action);
}
