import Logo from "./Components/Logo"
//import Input from "./Components/Input";
import TodoList from "./Components/TodoList";
import { useState, useEffect } from "react";
import { getAllTodo, addTodo, updateTodo, deletTodo } from "./Components/HandleApi";
import axios from "axios";
function App() {

   const [todo, setTodo] = useState([]);
   const [text, setText] = useState("");
   const [isUpdating, setIsUpdating] = useState(false);
   const [toDoId, setTodoId] = useState("");
   useEffect(() => {
      getAllTodo(setTodo);
   }, [])

   const updateMode = (_id, text) => {
      setTodoId(_id)
      setText(text);
      setIsUpdating(true)

   }



   return (
      <>
         <Logo />

         <div className="w-[100%] mt-[20px] text-center">
            <input
               type="text"
               placeholder="Add your next task"
               value={text}
               onChange={(e) => setText(e.target.value)}
               className="border-b-[1px] border-blue-900  w-[30%] mr-[10px] " />
            <button
               type="button"

               onClick={isUpdating ? () =>
                  updateTodo(toDoId, text, setTodo, setText, setIsUpdating)
                  : () => addTodo(text, setText, setTodo)}
               className="bg-black  px-[16px] py-[6px] text-white"
            >
               {isUpdating ? 'Updating' : 'ADD'}
            </button>
         </div>
         {todo.map((item) => <TodoList
            key={item._id}
            text={item.text}
            update={() => updateMode(item._id, item.text)}
            delet={() => deletTodo(item._id, setTodo)} />)}
      </>
   )
}
//   { todo.map((item)=> <TodoList key={item._id} text={item.text} />) }
// {isUpdating?"update":"Add"} 
export default App;