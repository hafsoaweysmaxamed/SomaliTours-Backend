const express =require("express")
const mongoose =require("mongoose")
const multer = require("multer")
const cors = require("cors")
const App = express()

App.use(express.json())
App.use(cors())

const AdminRouter =require("./Router/AdminRouter")
App.use(AdminRouter)

const MessageRouter = require("./Router/MessagesRouter")
App.use(MessageRouter)

mongoose.connect("mongodb://localhost:27017/Tourism").then(()=>{
    console.log("database has been connected")
}).catch((error)=>{
    console.log(error)
})

const BookinModel = require("./Model/BookingModel")

App.post("/Booking/create",async(req,res)=>{
    const Boking = BookinModel(req.body)
    const saveBoking = await Boking.save()
    if(saveBoking){
        res.send("personal has been saved")
    }
})

App.get("/Booking/Read",async(req ,res)=>{
    const Booking = await BookinModel.find()
    if(Booking){
        res.send(Booking)
    }
})

// //? multer file name and location

// const imageLocation = multer.diskStorage({
//     destination: (req, file, cb)=>{
//         cb(null,"image")
//     },

//     filename:(req, file, cb)=>{
//        cb(null ,file.originalname)
//     }
// })

// const uploadImage = multer({
//     storage:imageLocation
// })



// const PlaceModel = require("./Model/PlaceModel")

// App.post("/create", uploadImage.single("image") , async (req,res)=>{
//     const NewProduct =PlaceModel({
//         name:req.body.name,
//         price:req.body.price,
//         Description:req.body.Description,
//         image:req.file.filename
//     })
//     const saveProduct = await NewProduct.save()

//     if(saveProduct){
//         res.send(saveProduct)
//     }
// })

// App.get("/place", async(req, res)=>{
//     const allProduct = await PlaceModel.find()
//     if(allProduct){
//         res.send(allProduct)
//     }
// })


App.listen(1000, ()=>{
    console.log("Database hass been  successfully")
})