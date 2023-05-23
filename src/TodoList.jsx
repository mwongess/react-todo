import {useTodoContext} from './App'
import './TodoList.css'

export const TodoList = () => {
    const {todos, deleteTodo, updateTodo, completeTodo} = useTodoContext()

    const handleUpdateTodo = (id, title, description, completion_date) => { // Call the updateTodo function with the updated values
        updateTodo(id, title, description, completion_date)
    }

    return (
        <div className='todos'>
            {
            todos.map(todo => (
                <div className='todo'
                    key={
                        todo.id
                }>
                    <input type='checkbox'/>
                    <div>
                        <p>Title: {
                            todo.title
                        } </p>
                        <p>Description: {
                            todo.description
                        }</p>
                        <p>Completion Date: {
                            todo.completion_date
                        }</p>
                    </div>
                    <div className='buttons'>
                        <button onClick={
                            () => deleteTodo(todo.id)
                        }>Delete</button>
                        <button onClick={
                            () => handleUpdateTodo(todo.id, todo.title, todo.description, todo.completion_date)
                        }>
                            Update
                        </button>
                    </div>
                </div>
            ))
        } </div>
    )
}
