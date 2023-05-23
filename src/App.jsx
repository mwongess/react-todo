import { useState, useEffect, useContext, createContext } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import './App.css'

// Create a context for the todos
export const TodoContext = createContext()

// Custom hook to access the todo context
export const useTodoContext = () => useContext(TodoContext)

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([])
  const [todoToUpdate, settodoToUpdate] = useState({})

  // Load todos from local storage on component mount
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos')
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos))
    }
  }, [])

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (title, description, completion_date) => {
    const newTodo = {
      id: Date.now(),
      title,
      description,
      completion_date,
      isCompleted: false
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos)
    settodoToUpdate({})
  }

  const updateTodo =  (id, title, description, completion_date)=> {
    // console.log(title,description,id,completion_date)
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title, description, completion_date } : todo
    );
    settodoToUpdate({id,title,description,completion_date})

    setTodos(updatedTodos);
  };

  const completeTodo = id => {
    const updatedTodos = todos.map(todo => {
      todo.id === id ? { ...todo, isCompleted: true } : todo
    })
    setTodos(updatedTodos)
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        updateTodo,
        completeTodo,
        todoToUpdate
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

const App = () => {
  return (
    <TodoProvider>
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
      </div>
    
    </TodoProvider>
  )
}

export default App
