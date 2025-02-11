import React from 'react'

interface Props {
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>
    addTodos:(e: React.FormEvent)=>void

}
const InputField: React.FC<Props> = ({todo,setTodo,addTodos}) => {
  return (
    <>
        <form action="" onSubmit={addTodos}>
            <input type="text" placeholder='Enter a task' value={todo} onChange={(e)=>setTodo(e.target.value)} />
            <button type="submit">Go</button>
        </form>
    </>
  )
}

export default InputField