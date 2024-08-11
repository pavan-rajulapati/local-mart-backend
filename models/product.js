const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'sellers',
        required: true,
        trim:true
    },
    name: {
        type: String,
        required: true,
        trim:true
    },
    description: {
        type: String,
        required: true,
        trim:true
    },
    price: {
        type: Number,
        required: true,
        trim:true
    },
    originalPrice: {
        type: Number,
        required: true,
        trim:true
    },
    category: {
        type: String,
        required: true,
        trim:true
    },
    quantity: {
        type: Number,
        required: true,
        trim:true
    },
    image: {
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
