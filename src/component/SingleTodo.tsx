import React, { useEffect, useRef, useState } from "react";
import { Todos } from "./model";
interface Props {
  todo: Todos;
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}

const SingleTodo = ({ todo, setTodos, todos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editnewTodo , setEditTodo] = useState<string>(todo.todo)
  const editTodo = (id: number) => {
    const singleTo = todos.find((todo) => todo.id === id);

    console.log(singleTo);

    setEdit(!edit);
  };
  const deleteTodo = (id: number) => {
    const det = todos.filter((todo) => todo.id !== id);
    console.log(det);

    setTodos(det);
  };
  const handleDone = (id: number) => {
    // const singleTo = todos.find((todo) => todo.id === id);
    // const newTo = singleTo ? { ...singleTo, isDone: !todo.isDone } : todo;
    // console.log(newTo);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const saveTodo = (id:number) =>{
    console.log(editnewTodo);
    const saveTo = todos.map((todo)=>todo.id === id ?{...todo,todo:editnewTodo}:todo)
    setTodos(saveTo)
    setEdit(!edit)
  }

  const inputRef =  useRef<HTMLInputElement>(null)
  useEffect(()=>{
    inputRef.current?.focus()
  },[edit])
  return (
    <>
      <form action="">
        {edit  && !todo.isDone? (
          <div> 
            <input onChange={(e)=> setEditTodo(e.target.value)} value={editnewTodo} ref={inputRef} />
            <i onClick={()=>saveTodo(todo.id)}>save</i>
          </div>
        ) : todo.isDone ? (
          <s>{todo.todo}</s>
        ) : (
          <span>{todo.todo}</span>
        )}
        <div className="buttons">
          <i onClick={() => editTodo(todo.id)}>Edit</i>
          <i onClick={() => deleteTodo(todo.id)}>Delete</i>
          <i onClick={() => handleDone(todo.id)}>Done</i>
        </div>
      </form>
    </>
  );
};

export default SingleTodo;
