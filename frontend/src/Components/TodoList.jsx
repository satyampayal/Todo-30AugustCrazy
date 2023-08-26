import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'

const TodoList = ({text,update,delet}) => {
  return (
  text &&  <div className='mt-[20px] rounded-[5px] max-w-[600px] mx-auto bg-[rgba(0,0,0,0.7)] text-white flex justify-between items-center px-[16px] py-[10px] ' >
        <h1>{text}</h1>
        <div className='flex gap-[10px] text-black'>
            <BiEdit onClick={update} />
            <AiFillDelete onClick={delet}/>
        </div>
        

    </div>
  )
}

export default TodoList