import express from 'express';
import userModel from '../usermodel/userModel.js';

//import  TodoSave from '../RouteController/RouteController'
const router=express.Router();


/*
router.get('/',(req,res)=>{
      console.log("HELLO")
})
*/


// save post start
const TodoSave=async (req,res)=>{
    const {text}=req.body;
    if(!text){
        res.status(400).json({
            success:false,
            message:"Not send data"
        })
    }
    const userInfo=userModel({text});// Much time take this page till first routes 
    const result=await userInfo.save();
    console.log(result)

    res.status(200).json({
        success:true,
        message:result
    })
}
router.post('/save',TodoSave);
// save post end


// delete post  start
const TodoDelet=(req,res)=>{
    const {_id}=req.body;
    if(!_id){
        res.ststus(400).json({
            success:false,
            message:"ID not give or not exists"
        })
    }
     userModel.
     findByIdAndDelete(_id)
     .then(()=>{
        res.send("Delted Entry")
     })
     .catch((error)=> consol.log("Not delted with error>>",error))

}
router.post('/delet',TodoDelet);
 // delet post end

 // show all post 
 const  allPost=async  (req,res)=>{
    const data=await  userModel.find();
    
   res.send(data);

            //  userModel.find()
            //  .then(({data})=>{console.log(data)
            //      res.status(200).json({
            //         success:true,
            //         message:data
            //      })
            // })
            //  .catch((error)=>console.log(error))


 }
 router.get('/allpost',allPost);

export default router;