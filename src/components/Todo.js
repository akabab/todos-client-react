import React from 'react'
import Button from './Button'
import './Todo.css'
import { actions } from '../store'


const Todo = todo =>
  <div className="Todo" key={todo.id}>
    <div className="img" style={{ backgroundImage: `url(${todo.image})`}} />
    <div>
      <h3>{todo.title}</h3>
      <p className="description">{todo.description}</p>
      <p>by {todo.author} - {todo.createdAt}</p>
    </div>
    <div>
      <Button onClick={() => actions.addTodo({
        ...todo,
        id: todo.id + 42
      })}>
        ☆ {todo.stars.length}
      </Button>
    </div>
  </div>

export default Todo
