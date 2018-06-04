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

  if (action.type === 'ADD_TODO') {
    return {
      todos: [ action.todo, ...state.todos ]
    }
  }

  return state
}

export const store = createStore(reducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const actions = {
  addTodo: todo => store.dispatch({ type: 'ADD_TODO', todo }),
  loadTodos: todos => store.dispatch({ type: 'LOAD_TODOS', todos })
}

fetch('https://wcs-livecodings-api.herokuapp.com/todos')
  .then(res => res.json())
  .then(todos => actions.loadTodos(todos))

