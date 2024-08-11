const Product = require('../models/product')
const Seller = require('../models/seller')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});


const upload = multer({storage:storage}).single('file')

const handleProduct = async(req,res)=>{
try {
    upload(req,res,async (error)=>{
        if(error instanceof multer.MulterError){
            return res.status(401).json({message:'Multer Error'})
        }else if(error){
            return res.status(401).json({message:'Unknown Error',error:error})
        }else{
            const {name,description,price,originalPrice,quantity,category} = req.body
            const image = req.file ? req.file.path.replace(/\\/g, '/') : null;

            let userId = req.userId
            let seller = await Seller.findOne({userId})
            if(!seller){
                return res.status(401).json({message:'Seller Not Found'})
            }

            let product = new Product({
                sellerId : seller._id,
                name,
                description,    
                price,
                originalPrice,
                quantity,
                image,
                category
            })

            await product.save()

            return res.status(200).json({message:'Success'})
        }
    })
} catch (error) {
    return res.status(500).json({message:'Internal Error',error:error.message})
}
}

module.exports = handleProduct
