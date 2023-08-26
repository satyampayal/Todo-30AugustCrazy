import { addTodo } from "./HandleApi";
function Input(){
    return(
        <div className="w-[100%] mt-[20px] text-center">
            <input type="text" placeholder="Add your next task" className="border-b-[1px] border-blue-900  w-[30%] mr-[10px] " />
            <button 
            type="submit" 
            onClick={addTodo}
            className="bg-black px-[16px] py-[6px] text-white"
            >
            ADD
            </button>
        </div>
    )
}

export default Input;