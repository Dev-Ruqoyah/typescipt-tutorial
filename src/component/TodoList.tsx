import React from 'react'
import { Todos } from './model'
import SingleTodo from './SingleTodo';
interface Props{
    todos:Todos[];
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>
}
const TodoList = ({todos,setTodos}:Props) => {
  return (
    <>
        {todos.map((todo)=>(
            <SingleTodo todo={todo} key={todo.id} setTodos={setTodos} todos={todos}/>
        ))}
    </>
  )
}

export default TodoList