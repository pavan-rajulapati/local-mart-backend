const mongoose = require('mongoose')

const userAddress = mongoose.Schema({
    userId : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    address:{
        houseNumber:{type:String,required:true,trim:true},
        street:{type:String,required:true,trim:true},
        village:{type:String,required:true,trim:true},
        pincode:{type:Number,required:true,trim:true},
        city:{type:String,required:true,trim:true},
        state:{type:String,required:true,trim:true},
        country:{type:String,required:true,trim:true},
        postelCode:{type:String,required:true,trim:true},
    },
    bankAccountDetails:{
        bankName:{type:String,trim:true},
        accountNumber:{type:Number,trim:true},
        ifscCode:{type:String,trim:true},
    }
},{timestamps:true})

module.exports = mongoose.model('userAddress',userAddress)