//import { connect } from "http2";
import mongoose from "mongoose";

 const connectedToDb=async ()=>{
    try{
    const connection =await mongoose.connect(process.env.DATBASE_URL)
    if(connection){
        console.log("Connection to mongodb success ");
    }

}   catch(e){
    console.log(`connnectio to  faile ${e}`);
    process.exit(1); // if you not able to connect with DB  then nothing to do 

}

 }
//mongoose.connect(process.env.MONGODB_URL)
//.then(()=>console.log("Connestion with mongoDb success"))
//.catch((error)=>console.log("Not connected with mongo",error))

export default  connectedToDb;