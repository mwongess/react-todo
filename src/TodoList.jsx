import { useState } from 'react'
import { useTodoContext } from './App'
// import './TodoList.css'
import './App.css'

export const TodoList = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [completionDate, seCompletionDate] = useState('')

  const { todos, deleteTodo, updateTodo, completeTodo } = useTodoContext()

  return (
    <>
      <div className='todos'>
        {todos.map(todo => (
          <div className='todo' key={todo.id}>
            <input type='checkbox' />
            <div className='todo-dets'>
              <p>Title: {todo.title} </p>
              <p>Description: {todo.description}</p>
              <p>Completion Date: {todo.completion_date}</p>
            </div>
            <div className='todo-btns'>
              <button className='todo-btn' onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
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
            </div>
          </div>
        ))}
      </div>
    </>
  )
}