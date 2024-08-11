const mongoose = require('mongoose')

const user = mongoose.Schema({
    userName:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        trim:true,
        required:true,
    },
    isSeller:{
        type:Boolean,
        default : false
    },
    userPersonalDetails:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'userpersonaldetails'
    }],
    userAddressId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'useraddresses'
    }],
    sellerId : [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'sellers'
    }]
},{ timestamps : true })

module.exports = mongoose.model('user',user)