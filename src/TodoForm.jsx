import { useState } from "react";
import { useTodoContext } from "./App";
import "./App.css";

export const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState('')
  const [completion_date, seCompletionDate]= useState('')

  const { addTodo } = useTodoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title,  description, completion_date);
    setTitle("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <input type="text" onChange={(e)=> setDescription(e.target.value)} placeholder="Description" />
        <input type="date" onChange={(e)=>{seCompletionDate(e.target.value)}} />

        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
