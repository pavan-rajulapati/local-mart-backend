const mongoose = require('mongoose')

const userData = mongoose.Schema({
    userId : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    firstName:{
        type:String,
        trim:true,
        required:true,
    },
    lastName:{
        type:String,
        trim:true,
        required:true,
    },
    mobileNumber:{
        type:Number,
        trim:true,
        required:true,
    },
    dateOfBirth:{
        type:Date,
        trim:true,
        required:true,
    },
    gender:{
        type:String,
        enum:["male","female","other"],
        trim:true,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    }

},{timestamps:true})

module.exports = mongoose.model('userPersonalDetails',userData)
