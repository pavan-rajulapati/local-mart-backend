const userAddress = require('../models/userAddress')

const getUserAddress = async(req,res)=>{
    try {
        const userId = req.userId
        if(!userId){
            return res.status(404).json({message:'user not found'})
        }else{
            const address = await userAddress.findOne({userId})
            if(!address){
                return res.status(204).json({message:'There is no data'})
            }

            return res.status(200).json([address])
        }
    } catch (error) {
        return res.status(500).json({message:'Internal Error'})
    }
}

module.exports = getUserAddress