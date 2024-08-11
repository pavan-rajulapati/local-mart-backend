const mongoose = require('mongoose')

const wishlist = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users',
        required:true
    },
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product',
        required:true
    }
},{ timestamps: true })

module.exports = mongoose.model('wishlist',wishlist)