import { useState } from 'react'
import { useTodoContext } from './App'
import {FaPencilAlt ,FaTrashAlt} from 'react-icons/fa';
import './App.css'

export const TodoList = () => {
  const { todos, deleteTodo, updateTodo, completeTodo } = useTodoContext()


  return (
    <>
      <div className='todos'>
        {todos.map(todo => (
          <div className={todo.isCompleted} key={todo.id}>
            <input type='radio'  onChange={() => {completeTodo(todo.id)}} />
            <div>
              <p>Title: {todo.title} </p>
              <p>Description: {todo.description}</p>
              <p>Completion Date: {todo.completion_date}</p>
              <h5>Completed: {todo.isCompleted}</h5>
            </div>
            <div className='buttons'>

              <button className=''
                onClick={() => {
                  updateTodo(
                    todo.id,
                    todo.title,
                    todo.description,
                    todo.completion_date
                  )
                }}
              >
               <FaPencilAlt/><span> Update</span>
              </button>
              <button onClick={() => deleteTodo(todo.id)} className='del'>
                <FaTrashAlt/><span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}