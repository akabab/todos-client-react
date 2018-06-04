import { createStore } from 'redux'

const initialState = {
  todos: []
}

const reducer = (state, action) => {
  return state
}

export const store = createStore(reducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
