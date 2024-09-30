
const mongoose  = require("mongoose")


const PlaceSchema = mongoose.Schema({


    image: {
        type: String,
        required: true
    },
    name:{
        type:String,
        required: true

    },

    price:{
        type:Number,
        required: true
    },

    Description: {
        type: String,
        required: true
    }

})

module.exports  = mongoose.model("Place", PlaceSchema)