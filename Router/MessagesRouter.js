const express =require("express")
const router = express.Router()

const MessageModel = require("../Model/MessagesModel")

router.post("/Create", async(req, res)=>{
    const Message = MessageModel(req.body)
    const saveMessage = await Message.save()
    if(saveMessage){
        res.send("Message has been seved")
    }
})

router.get("/Message", async(req,res)=>{
    const NewMassage = await MessageModel.find()
    if(NewMassage){
        res.send(NewMassage)
    }
})


router.delete("/delete/:id", async (req,res)=>{
    const deleted = await MessageModel.deleteOne({_id: req.params.id})
    if(deleted){
        res.send("data has been deleted succesfully")
    }})

module.exports=router