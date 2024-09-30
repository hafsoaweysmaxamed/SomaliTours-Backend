const express =require("express")
const router = express.Router()

const AdminModel =require("../Model/AdminModel")

router.post("/Admin/create", async(req, res)=>{
    const newAdmin = AdminModel(req.body)
    const saveAdmin = await newAdmin.save()
    if(saveAdmin){
        res.send(saveAdmin)
    }
})
module.exports=router