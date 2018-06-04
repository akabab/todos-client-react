import React, { Component } from 'react'
import Todo from './components/Todo'
import { store } from './store'

class App extends Component {
  constructor() {
    super()
    this.state = store.getState()

    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  render () {
    return (
      <div className="App">
        {this.state.todos.map(Todo)}
      </div>
    )
  }
}

export default App
