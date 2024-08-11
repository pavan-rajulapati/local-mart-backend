const wishlist = require('../models/wishlist')

const removeWishlist = async(req,res)=>{
    try {
        const { productId } = req.body;
        let userId = req.userId ;

        if(!productId || !userId){
            return res.status(404).json({message : 'Missing fields'})
        }

        const item = await wishlist.findOneAndDelete({userId , productId})
        if(!item){
            return res.status(402).json({message : 'Item not found'})
        }

        return res.status(200).json({message : 'Item removed'})
    } catch (error) {
        return res.status(500).json({message : "internal Error",error : error.message})
    }
}

module.exports = removeWishlist