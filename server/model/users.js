const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true

    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    username:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true

    },
    address:{
        street:{
            type:String,
          
            trim:true
        },
        suite:{
            type:String
        },
        city:{
            type:String,
            trim:true
        },
        zipcode:{
            type:Number,
            trim:true
        },
        geo:{
            lat:{
                type:Number,
                trim:true
            },
            lng:{
                type:Number,
                trim:true
            }
        }
    },
    phone:{
        type:Number,
        trim:true
    },
    website:{
        type:String,
        trim:true
    },
    company:{
        name:{
            type:String,
            trim:true
        },
        catchPhrase:{
            type:String,
            trim:true
        },
        bs:{
            type:String,

        }
    }
},

)
module.exports = mongoose.model("user", userSchema)