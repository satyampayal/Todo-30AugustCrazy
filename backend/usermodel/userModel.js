import mongoose from 'mongoose';
const TodoSchema=new mongoose.Schema({
    text:{
        require:true,
        type:[String,"Must be staring"]
    }
})

const userModel =mongoose.model("TodoUSers",TodoSchema);

export default userModel;