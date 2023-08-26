import userModel from "../usermodel/userModel"

const TodoSave=async (req,res)=>{
    const {text}=req.body;
    if(!text){
        return(
            console.log("Text not entered")
        )
    }

    const userInfo=userModel(text);
    const result=await userInfo.save();

}

export  default {TodoSave}