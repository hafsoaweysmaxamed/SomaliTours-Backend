const  mongoose=require("mongoose")

const AdminSchema = mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
})

module.exports  = mongoose.model("Admin", AdminSchema)