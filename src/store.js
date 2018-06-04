import { createStore } from 'redux'

const initialState = {
  todos: []
}

const reducer = (state, action) => {

  if (action.type === 'LOAD_TODOS') {
    return {
      todos: action.todos
    }
  }

  return state
}

export const store = createStore(reducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const actions = {
  loadTodos: todos => store.dispatch({ type: 'LOAD_TODOS', todos })
}

