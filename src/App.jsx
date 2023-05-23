import { useState, useEffect, useContext, createContext } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import "./App.css";

// Create a context for the todos
export const TodoContext = createContext()

// Custom hook to access the todo context
export const useTodoContext = () => useContext(TodoContext)

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
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

  //adding new todo
  const addTodo = (title, description, completion_date) => {
    const newTodo = { id: Date.now(), title, description, completion_date, isCompleted: ' false' };
    setTodos([...todos, newTodo]);
  };

  // deleting a todo event
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    settodoToUpdate({})
  };

  // updating todo
  const updateTodo = (id, title, description, completion_date) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title, description, completion_date } : todo
    );
    // setting old todo to newly updated todo
    setTodos(updatedTodos);
    settodoToUpdate({ id, title, description, completion_date })
  };

  // 
  const completeTodo = (id) => {
    const updatedTodos = todos.map(todo => {
      return todo.id === id ? { ...todo, isCompleted: (todo.isCompleted == "true" ? "false" : 'true') } : todo
    })
    setTodos(updatedTodos)
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo, completeTodo, todoToUpdate }}>
      {children}
    </TodoContext.Provider>
  )
}

const App = () => {
  return (
    <TodoProvider>
      <div className="main">
        <h1>Binary Bandits Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  )
}

export default App
