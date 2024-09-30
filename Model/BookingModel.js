const  mongoose=require("mongoose")

const BookingSchema = mongoose.Schema({
    Name:{
       type:String,
       required:true
    },
    Email:{
        type:String,
        required:true
    },
    Phone:{
        type:Number,
        required:true
    },
    Date:{
        type: String,
        required:true
    },
    BookingType:{
        type:String,
        required:true
    },
    place:{
       type:String,
       required: true
   }
})

module.exports  = mongoose.model("Boking", BookingSchema)