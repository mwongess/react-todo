import { useState, useEffect } from "react";
import { useTodoContext } from "./App";
import "./App.css";

export const TodoForm = () => {
  // usestates
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completion_date, seCompletionDate] = useState("");
  const [isUpdate, setisUpdate] = useState(false);

  const { addTodo, todoToUpdate, updateTodo} = useTodoContext();

  //taking in the inputs
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isUpdate) {
      addTodo(title, description, completion_date);
      setTitle("");
      setDescription("");
      seCompletionDate("");
    } else {
      updateTodo(todoToUpdate.id, title, description, completion_date);
     
    }
  };

  useEffect(() => {
    if (todoToUpdate.title) {
      setTitle(todoToUpdate.title);
      setDescription(todoToUpdate.description);
      seCompletionDate(todoToUpdate.completion_date);
      setisUpdate(true);
    }
  }, [todoToUpdate]);

  return (
    <div className="form">
      {
        <form onSubmit={handleSubmit}>
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
            value={completion_date}
            onChange={(e) => {
              seCompletionDate(e.target.value);
            }}
          />

          <button type="submit" className="new-update">{isUpdate ? "Update" : " Add"}</button>
        </form>
      }
    </div>
  );
};
