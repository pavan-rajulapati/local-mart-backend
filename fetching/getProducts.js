const Product = require('../models/product')

const getProducts = async(req,res)=>{
    try {
        let product = await Product.find()
        if(product.length < 1){
            return res.status(200).json({message:'No Products Are Available'})
        }

        return res.status(200).json([product])
    } catch (error) {
        return res.status(500).json({message:'Internal Error'})
    }
}

module.exports = getProducts