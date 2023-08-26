import  express  from "express";
import connectedToDb from "./databaseConfig/dbConfig.js";
import app from "./App.js";

connectedToDb();
const port=5007;

app.listen(port,()=>console.log(`Server is live at ${port}`));