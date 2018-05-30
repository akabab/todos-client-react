import React, { Component } from 'react'
import Todo from './components/Todo'


class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    fetch('https://wcs-livecodings-api.herokuapp.com/todos')
      .then(res => res.json())
      .then(todos => this.setState({ todos: todos }))
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
