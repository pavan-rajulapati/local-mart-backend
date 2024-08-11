const Product = require('../models/product')

const deleteProduct = async(req,res)=>{
    try {
        const productId = req.params.productId;
        const product = await Product.findByIdAndDelete(productId)
        if(!product){
            return res.status(204).json({message:'No Product Is There'})
        }

        return res.status(200).json({message:'Success'})
    } catch (error) {
        return res.status(500).json({message:'Internal Error'})
    }
}

module.exports = deleteProduct