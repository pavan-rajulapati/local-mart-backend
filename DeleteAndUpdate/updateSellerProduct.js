const product = require('../models/product')

const updateProduct = async(req,res)=>{
    try {
        const { id } = req.params;
        const { name, price, originalPrice, quantity, category} = req.body;

        const updateItem = await product.findByIdAndUpdate(
            id,
            { name, price, originalPrice, quantity, category},
            {new : true}
        );

        if(!updateItem){
            return res.status(404).json({message : 'Item not updated'})
        }

        return res.status(200).json({message : 'Item updated'})
    } catch (error) {
        return res.status(500).json({message : 'Internal Error'})
    }
}

module.exports = updateProduct