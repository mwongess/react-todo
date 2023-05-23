import { useTodoContext } from "./App";
export const TodoList = () => {
  const { todos, deleteTodo, updateTodo ,completeTodo} = useTodoContext();

  return (
    <div className="todos">
      {todos.map((todo) => (
        <div key={todo.id}>
          <input type="checkbox" />
          <div>
            <p>Title: {todo.title} </p>
            <p>Description: {todo.description}</p>
            <p>Completion Date: {todo.completion_date}</p>
          </div>
          <div>
            {/* <button onClick={()=>updateTodo(t)}>Update</button> */}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
      {/* <div >
        <p>Title</p>
        <p>Desc</p>
        <p>Date</p>
      </div><div>
        <p>Title</p>
        <p>Desc</p>
        <p>Date</p>
      </div> */}
    </div>
  );
};
