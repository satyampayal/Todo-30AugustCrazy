import express from 'express';
import userModel from '../usermodel/userModel.js';
const router = express.Router();
// save post start
const TodoSave = async (req, res) => {
    const { text } = req.body;
    if (!text) {
        res.status(400).json({
            success: false,
            message: "Not send data"
        })
    }
    const userInfo = userModel({ text });// Much time take this page till first routes 
    const result = await userInfo.save();
    console.log(result)

    res.status(200).json({
        success: true,
        message: result
    })
}
router.post('/save', TodoSave);
// save post end


// delete post  start
const TodoDelet = (req, res) => {
    const { _id } = req.body;
    if (!_id) {
        res.ststus(400).json({
            success: false,
            message: "ID not give or not exists"
        })
    }
    userModel.
        findByIdAndDelete(_id)
        .then(() => {
            res.send("Delted Entry")
        })
        .catch((error) => consol.log("Not delted with error>>", error))

}
router.post('/delet', TodoDelet);
// delet post end

// update post start

const updateTodo = async (req, res) => {
    const { _id, text } = req.body;


    userModel.findByIdAndUpdate(_id, { text })
        .then(() => console.log("successfully update"))
        .catch(error => consol.log(error));

}
router.post('/update', updateTodo);

// update post end


// show all post 
const allPost = async (req, res) => {
    const data = await userModel.find();
    res.send(data);
}
router.get('/allpost', allPost);

export default router;