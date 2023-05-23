import { useState } from 'react'
import { useTodoContext } from './App'
import './App.css'

export const TodoList = () => {
  const { todos, deleteTodo, updateTodo, completeTodo } = useTodoContext()
  const [isChecked, setIsChecked] = useState(false)

  return (
    <>
      <div className='todos'>
        {todos.map(todo => (
          <div className={todo.isCompleted} key={todo.id}>
            <input type='checkbox' defaultChecked={isChecked} onChange={() => completeTodo(todo.id)} />
            <div>
              <p>Completed: {todo.isCompleted}</p>
              <p>Title: {todo.title} </p>
              <p>Description: {todo.description}</p>
              <p>Completion Date: {todo.completion_date}</p>
            </div>
            <div className='buttons'>

              <button
                onClick={() => {
                  updateTodo(
                    todo.id,
                    todo.title,
                    todo.description,
                    todo.completion_date
                  )
                }}
              >
                Update
              </button>
              <button onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}