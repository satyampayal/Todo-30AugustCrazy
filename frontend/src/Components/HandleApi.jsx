import axios from 'axios';
import userModel from '../../../backend/usermodel/userModel';
//import express from 'express'
//import React from 'react'

const baseUrl='http://localhost:5007'
console.log(`${baseUrl}/allpost`)

 const getAllTodo=(setTodo)=>{
    axios
    .get(`${baseUrl}/allpost`)
    .then(({data})=>{
     // const data2=data.express.json();
     // console.log(data2)
    //  console.log(typeof(data))
       console.log("data  1 time->>",data) ;
       setTodo(data);
    }).catch(error=>console.log(error))
 }

const addTodo=(text,setText,setTodo)=>{
     axios
     .post(`${baseUrl}/save`,{text})
     .then(({data})=>{
        console.log(data);
        setText("");
        getAllTodo(setTodo)
     }).catch(error=>console.log(error))


}
// till path created in backend // complted path created 
const updateTodo=(toDoId,text,setTodo,setText,setIsUpdating)=>{
   axios
   .post(`${baseUrl}/update`,{_id:toDoId,text})
   .then((data)=>{
      //console.log(data);
      setText("")
      setIsUpdating(false)
      getAllTodo(setTodo)

   }).catch(error=>console.log(error))


}

const deletTodo=(_id,setTodo)=>{
  
   axios.post(`${baseUrl}/delet`,{_id})
   .then(({data})=>{
      console.log(data)
      getAllTodo(setTodo)
   }).catch(error=>console.log(error))
}

export {getAllTodo,addTodo,updateTodo,deletTodo};