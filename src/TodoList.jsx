import { useState } from "react";
import { useTodoContext } from "./App";
import "./TodoList.css";

export const TodoList = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completionDate, seCompletionDate] = useState("");
  const [isUpdate, setisUpdate] = useState(false);

  const { todos, deleteTodo, updateTodo, completeTodo } = useTodoContext();

  return (
    <>
      <div className="update-form">
        {
          <form>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
            <input
              type="date"
              value={completionDate}
              onChange={(e) => {
                seCompletionDate(e.target.value);
              }}
            />

            <button type="submit">Add Todo</button>
          </form>
        }
      </div>
      <div className="todos">
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            <input type="checkbox" />
            <div>
              <p>Title: {todo.title} </p>
              <p>Description: {todo.description}</p>
              <p>Completion Date: {todo.completion_date}</p>
            </div>
            <div className="buttons">
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              <button
                onClick={() =>{
                  updateTodo(
                    todo.id,
                    todo.title,
                    todo.description,
                    todo.completion_date
                  )}
                }
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
