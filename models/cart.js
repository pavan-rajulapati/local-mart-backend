const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    userId : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    products : [{
        productId : {
            type:mongoose.Schema.Types.ObjectId,
            ref:'products'
        },
        quantity:{
            type:Number,
            required:true,
            trim:true,
            default:1
        }
    }]
},{timestamps:true})

module.exports = mongoose.model('Cart',cartSchema)