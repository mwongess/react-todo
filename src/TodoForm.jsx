import { useState, useEffect } from "react";
import { useTodoContext } from "./App";
import "./App.css";

export const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState('')
  const [completion_date, seCompletionDate]= useState('')

  const { addTodo, todoToUpdate,updateTodo } = useTodoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    addTodo(title, description, completion_date);
    setTitle("");
    setisUpdate();
=======
    if (!isUpdate) {
      addTodo(title, description, completion_date);
      setTitle("");
      setDescription("");
      seCompletionDate("");
    }else{
      updateTodo(todoToUpdate.id,title, description, completion_date)
    }
>>>>>>> 7df0b2571ff499ff40dfe49431154a48bfc268c7
  };

  useEffect(() => {
    if (todoToUpdate.title) {
      setTitle(todoToUpdate.title);
      setDescription(todoToUpdate.description);
      seCompletionDate(todoToUpdate.completion_date);
      setisUpdate(true);
    }
    console.log(todoToUpdate);
  }, [todoToUpdate]);

  return (
    <div className="form">
<<<<<<< HEAD
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
=======
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
            onChange={(e) => {
              seCompletionDate(e.target.value);
            }}
          />
>>>>>>> 7df0b2571ff499ff40dfe49431154a48bfc268c7

          <button type="submit">{isUpdate ? "Update" : "Add"}</button>
        </form>
      
    </div>
  );
};
