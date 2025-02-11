import { useState } from "react";
import InputField from "./component/InputField/InputField";
import { Todos } from "./component/model";

const App:React.FC = () => {
  const[todo,setTodo] = useState<string>("")
  console.log(todo);
  const[todos,setTodos] = useState<Todos[]>([])
  const handleTodo = (e: React.FormEvent) =>{
    e.preventDefault()
    const newTodo:Todos = {
      id: Math.floor(Math.random()*1000000),
      todo:todo,
      isDone: false

    }
    setTodos((prev)=>[...prev,newTodo])
    setTodo("")
    console.log(todos);
  }
  // const handleKeyDown = (e) =>{
  //   if(e.key === "Enter"){
  //     handleTodo(e :React.FormEvent)
  //   }

  // }
  
  return ( 
    <>
    <h4>Taskify</h4>
    <InputField todo={todo} setTodo={setTodo} addTodos={handleTodo}/>
    </>
   );
}
 
export default App;